import React, { Component } from "react";

import { Card, CardContent, ButtonBase } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import LockIcon from "@material-ui/icons/Lock";

import "./../styles/subject_selector.css";
import { queryFetch } from "../js/common";
import { subjectName, subjectIcons, playable } from "../js/subjects";
import swal from "sweetalert";

let clickFX = new Audio("/audio/click-3h.mp3");  
clickFX.volume = 0.5;

class SubjectSelector extends Component {
    state = {
        rated: true,
        initData: "undefined"
    }

    componentDidMount() {
        if (typeof this.props.onMount == "function") this.props.onMount();

        queryFetch({
            command: "get-init"
        }).then(data => {
            if (data.status) {
                if (data.status === "empty") {
                    return;
                }
            }
            
            this.setState({
                initData: data
            });
        });
    }

    renderSubjects() {
        let subjectDOM = [];

        for (let i = 0; i < 9; i++) {
            subjectDOM.push(
                <div class="subject" key={i}>
                    <Card elevation={0}>
                        <ButtonBase
                            onClick={event => {
                                clickFX.play();

                                for (let k = 0; k < playable.length; ++k) {
                                    if (i === playable[k]) {
                                        // create game
                                        queryFetch({
                                            command: 'play-znam',
                                            data: {
                                                subject: i,
                                                rated: this.state.rated
                                            }
                                        })
                                        .then(data => {
                                            if (data.status && data.status === "error") {
                                                if (data.message === "run out of questions") {
                                                    swal({
                                                        title: "Нема доволно прашања.",
                                                        text: "Немаме доволно прашања на овој предмет за да играте уште еднаш. Ви препорачуваме да придонесете неколку прашања!",
                                                        icon: "error"
                                                    });
                                                } else {
                                                    swal({
                                                        title: "Упс...",
                                                        text: "Имаме серверски проблем. Ве молиме пробајте подоцна.",
                                                        icon: "error"
                                                    });
                                                }

                                                return;
                                            }

                                            if (typeof this.props.onSelectSubject == "function")
                                                this.props.onSelectSubject(data);
                                        }).catch(() => {
                                            swal({
                                                title: "Упс...",
                                                text: "Не успеавме да го контактираме серверот. Пробајте пак.",
                                                icon: "error"
                                            });
                                        });
                                        return;
                                    }
                                }
                                    
                                swal({
                                    title: "Упс...",
                                    text: "Се уште не се обработени прашањата за овој предмет...",
                                    icon: "error"
                                });
                            }}
                        >
                            <CardContent>
                                <div class="subject-content">
                                    <div
                                        class="subject-icon"
                                        style={(() => {
                                            if (i === 0)
                                                return {
                                                    height: "70%"
                                                };
                                        })()}
                                    >
                                        <div class="subject-progress" style={(() => {
                                            if (this.state.initData !== "undefined") {
                                                if (this.state.initData.length > 0) {
                                                    for (let row of this.state.initData) {
                                                        if (row.Subject === i) {
                                                            let maxQuestions = parseInt(row.maxQuestions);
                                                            let progress = parseInt(row.progress);

                                                            if (maxQuestions === 0) return null;
                                                            if (maxQuestions - progress < 10) {
                                                                return {
                                                                    height: "100%"
                                                                };
                                                            }

                                                            return {
                                                                height: ((progress / row.maxQuestions) * 100) + "%"
                                                            };
                                                        }
                                                    }
                                                } else { return null; }
                                            } else { return null; }
                                        })()}></div>
                                        <div class="center-vh subject-icon-img">
                                            {(() => {
                                                for (let k = 0; k < playable.length; ++k) {
                                                    if (i === playable[k]) {
                                                        return <img src={subjectIcons[i]} alt="icon"/>;
                                                    }
                                                }

                                                return <LockIcon/>;
                                            })()}
                                        </div>
                                    </div>
                                    <div class="subject-name">
                                        {subjectName[i]}
                                    </div>
                                </div>
                            </CardContent>
                        </ButtonBase>
                    </Card>
                </div>
            );
        }

        return subjectDOM;
    }

    render() {
        return (
            <div id="selector-subject-container">
                <div id="selector-subject">{this.renderSubjects()}</div>
                <div id="game-options">
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.rated}
                                onChange={() => this.setState(prevState => ({ rated: !prevState.rated}))}
                                name="checkedA"
                            />
                        }
                        label="Регистрирај ме во статистиките"
                    />
                </div>
                <div id="notifications">
                    
                </div>
            </div>
        );
    }
}

export default SubjectSelector;
