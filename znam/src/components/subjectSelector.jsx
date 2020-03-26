import React, { Component } from "react";

import { Card, CardContent, ButtonBase } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import LockIcon from "@material-ui/icons/Lock";

import "./../styles/subject_selector.css";
import { queryFetch } from "../js/common";

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

        for (let i = 0; i < 9; i++) {
            subjectDOM.push(
                <div class="subject" key={i}>
                    <Card>
                        <ButtonBase
                            onClick={event => {
                                // start game
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
                                            <LockIcon
                                                style={{
                                                    width: "1.5em",
                                                    height: "1.5em"
                                                }}
                                            />
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
