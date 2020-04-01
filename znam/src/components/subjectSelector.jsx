import React, { Component } from "react";

import { Card, CardContent, ButtonBase } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import LockIcon from "@material-ui/icons/Lock";

import "./../styles/subject_selector.css";
import { queryFetch } from "../js/common";
import swal from "sweetalert";

import HistoryIcon from '../subjects/znam-history.svg';

class SubjectSelector extends Component {
    state = {
        rated: false
    }

    componentDidMount() {
        if (typeof this.props.onMount == "function") this.props.onMount();
    }

    renderSubjects() {

        let subjectDOM = [];
        let subjectName = [
            "МАКЕДОНСКИ ЈАЗИК",
            "МАТЕМАТИКА",
            "АНГЛИСКИ",
            "ФИЗИКА",
            "ХЕМИЈА",
            "БИОЛОГИЈА",
            "ИНФОРМАТИКА",
            "ГЕОГРАФИЈА",
            "ИСТОРИЈА"
        ];

        let playable = [8];

        let subjectIcons = [LockIcon, LockIcon, LockIcon, LockIcon, LockIcon, LockIcon, LockIcon, LockIcon, HistoryIcon];

        for (let i = 0; i < 9; i++) {
            subjectDOM.push(
                <div class="subject" key={i}>
                    <Card>
                        <ButtonBase
                            onClick={event => {
                                for (let k = 0; k < playable.length; ++k) {
                                    if (i == playable[k]) {
                                        // start game
                                        console.log("creating game...");
                                        queryFetch({
                                            command: 'play-znam',
                                            data: {
                                                subject: i,
                                                rated: this.state.rated
                                            }
                                        })
                                        .then(data => {
                                            if (typeof this.props.onMount == "function")
                                                this.props.onPlay(data);
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
                                        <div class="center-vh">
                                            {() => {
                                                return subjectIcons[i];
                                            }}
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
                                //onChange={handleChange}
                                name="checkedA"
                            />
                        }
                        label="Сакам да ми се регистрираат поените во Статистика"
                    />
                </div>
            </div>
        );
    }
}

export default SubjectSelector;
