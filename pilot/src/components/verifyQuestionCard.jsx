import React, { Component } from "react";

import { Card, CardContent } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";

import "./../styles/verify-question-card.css";
import { queryFetch } from "../js/common";

class VerifyQuestionCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                ID: 0,
                Question: "Test Question",
                Answer_1: "Test Answer 1",
                Answer_2: "Test Answer 2",
                Answer_3: "Test Answer 3",
                Answer_4: "Test Answer 4",
                Truth: 3,
            },
            empty: false,
        };

        this.getQuestion = this.getQuestion.bind(this);
    }

    getQuestion() {
        queryFetch({
            command: "get-verify-question",
        }).then((response) => {
            if (response.status === "empty") {
                this.setState({ empty: true });
            } else {
                this.setState({ data: response });
            }
        });
    }

    componentDidMount() {
        this.getQuestion();
    }

    submit(verify) {
        queryFetch({
            command: "set-verify-question",
            data: {
                ID: this.state.data.ID,
                Valid: verify
            }
        }).then(() => {
            this.getQuestion();
        });
    }

    renderAnswers() {
        let answersDOM = [];

        for (let i = 0; i < 4; ++i) {
            answersDOM.push(
                <div
                    class="answer-container"
                    key={i}
                    style={(() => {
                        if (this.state.data.Truth === i + 1)
                            return {
                                backgroundColor: "green",
                            };
                    })()}
                >
                    {this.state.data["Answer_" + (i + 1)]}
                </div>
            );
        }

        return answersDOM;
    }

    renderContent() {
        if (this.state.empty) {
            return <div class="empty-state">Нема не прегледани прашања...</div>;
        }

        return (
            <div style={{ marginBottom: "2em" }}>
                <div class="question-container">{this.state.data.Question}</div>
                {this.renderAnswers()}
                <div class="submit-buttons">
                    <div class="submit-button">
                        <IconButton onClick={() => {
                            this.submit(true);
                        }}>
                            <DoneIcon />
                        </IconButton>
                    </div>
                    <div class="submit-button">
                        <IconButton onClick={() => {
                            this.submit(false);
                        }}>
                            <ClearIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div class="simple-card">
                <Card elevation={0}>
                    <div
                        style={{
                            width: "100%",
                            height: "fit-content",
                        }}
                    >
                        <CardContent
                            style={{
                                cursor: "default",
                                height: "fit-content",
                                position: "relative",
                            }}
                        >
                            <div class="card-padding">
                                {this.renderContent()}
                            </div>
                        </CardContent>
                    </div>
                </Card>
            </div>
        );
    }
}

export default VerifyQuestionCard;
