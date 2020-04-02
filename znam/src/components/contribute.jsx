import React, { Component } from "react";

import { TextField, Button } from "@material-ui/core";

import swal from 'sweetalert';

import "./../styles/contribute.css";
import { updateFetch } from './../js/common';

class Contribute extends Component {
    state = {
        question: "",
        answers: []
    };

    componentDidMount() {        
        if (typeof this.props.onMount == "function") this.props.onMount();
    }

    render() {
        return (
            
            <div class="contribute-container center-vh">
                <form noValidate autoComplete="off">
                    <TextField
                        id="question-input"
                        label="Прашање"
                        variant="filled"
                        multiline
                        rowsMax="4"
                        helperText={"0/150"}
                        inputProps={{
                            maxLength: 150
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
                                        maxLength: 150
                                    }}
                                    onChange={((e) => {
                                        let currentAns = this.state.answers;
                                        currentAns[i] = e.target.value;
                                        this.setState({ answers: currentAns });
                                    })}
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
                                console.log("clicked");
                                updateFetch({
                                    command: 'contribute',
                                    data: {
                                        question: this.state.question,
                                        answers: this.state.answers
                                    }
                                }).then(data => {
                                    if (data.status === "success") {
                                        swal("Благодариме на придонесот!", "Нè прави многу среќни!", "success");
                                    }
                                });
                            }}
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
