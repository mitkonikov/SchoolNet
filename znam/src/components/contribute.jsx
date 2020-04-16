import React, { Component } from "react";

import { TextField, Button } from "@material-ui/core";

import ArticleNotification from "./articleNotification";

import swal from "sweetalert";

import "./../styles/contribute.css";
import { updateFetch } from "./../js/common";

let hoverFX = new Audio("/audio/hover-2.mp3");

class Contribute extends Component {
    state = {
        question: "",
        answers: [],
    };

    componentDidMount() {
        if (typeof this.props.onMount == "function") this.props.onMount();
    }

    render() {
        return (
            <div class="contribute-container center-vh">
                <ArticleNotification
                    data={{
                        title: "Придонесување.",
                        content:
                            "Секој има право да придонесува интересни прашања на платформата. Притоа, секое прашање е прегледувано од страна на администраторите.",
                        color: "secondary",
                    }}
                />

                <div class="separator"></div>

                <form noValidate autoComplete="off">
                    <TextField
                        id="question-input"
                        label="Прашање"
                        variant="filled"
                        multiline
                        rowsMax="4"
                        helperText={"0/150"}
                        inputProps={{
                            maxLength: 150,
                        }}
                        onChange={(e) => {
                            let helperText = document.getElementById(
                                "question-input-helper-text"
                            );
                            let inputField = document.getElementById(
                                "question-input"
                            );

                            let count = inputField.value.length;

                            if (count > 150) {
                                count = 150;
                            }

                            this.setState({ question: e.target.value });

                            helperText.innerHTML = count + "/150";
                        }}
                    />

                    <div class="separator"></div>

                    {(() => {
                        let answersDOM = [];

                        for (let i = 0; i < 4; i++) {
                            answersDOM.push(
                                <TextField
                                    id="question-input"
                                    label={(() => {
                                        if (i === 0) {
                                            return "Точен одговор";
                                        }
                                        return "Одговор бр. " + (i + 1);
                                    })()}
                                    inputProps={{
                                        maxLength: 150,
                                    }}
                                    onChange={(e) => {
                                        let currentAns = this.state.answers;
                                        currentAns[i] = e.target.value;
                                        this.setState({ answers: currentAns });
                                    }}
                                />
                            );
                        }

                        return answersDOM;
                    })()}
                </form>

                <div id="submit-button-container">
                    <div id="submit-button" class="center-vh">
                        <Button
                            variant="contained"
                            color="primary"
                            disableElevation
                            onClick={() => {
                                updateFetch({
                                    command: "contribute",
                                    data: {
                                        question: this.state.question,
                                        answers: this.state.answers,
                                    },
                                }).then((data) => {
                                    if (data.status === "success") {
                                        swal(
                                            "Благодариме на придонесот!",
                                            "Нè прави многу среќни! Прашањето ќе биде разгледано и проверено пред да се стави во играта.",
                                            "success"
                                        );
                                    }
                                });
                            }}
                            onMouseEnter={() => hoverFX.play()}
                        >
                            ПРИДОНЕСИ
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contribute;
