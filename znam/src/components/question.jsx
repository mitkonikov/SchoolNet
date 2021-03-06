import React, { Component } from "react";

import "./../styles/question.css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

import { LinearProgress, Chip } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import swal from "sweetalert";

import { queryFetch } from './../js/common';

class Question extends Component {
    constructor(props) {
        super(props);
        this.onAnswerClick = this.onAnswerClick.bind(this);
        this.answersRef = React.createRef();
    }

    state = {
        answered: false,
        active: null,
        data: {
            questionNumber: "",
            question: "",
            answers: {
                ID: [-1, -1, -1, -1],
                content: ["", "", "", ""],
            },
            score: 0,
            timeLeft: 30,
        },
    };

    componentDidMount() {
        setTimeout(() => {
            // bug with react, refs are not assigned before children calls componentDidMount
            if (typeof this.props.onMount == "function") this.props.onMount();
        }, 100);
    }

    setQuestion(data) {
        this.setState({ data: data });
    }

    updateStates(newStates) {
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                ...newStates,
            },
        }));
    }

    markCorrect(correctID) {
        for (let i = 0; i < 4; ++i) {
            if (this.state.data.answers.ID[i] === correctID) {
                let correctDiv = this.answersRef.current.children.namedItem(i);
                correctDiv.getElementsByClassName(
                    "ZNAMAnswer-correct"
                )[0].style.width = "100%";
            }
        }
    }

    applySkeleton() {
        this.setState({
            answered: false,
            active: null,
        });

        let correctDivs = this.answersRef.current.children;

        for (let c of correctDivs) {
            c.getElementsByClassName("ZNAMAnswer-correct")[0].style.width =
                "0%";
            c.getElementsByClassName("ZNAMAnswer-active")[0].style.width = "0%";
        }
    }

    onAnswerClick(event, i) {
        if (!this.state.answered) {
            let targetElement = this.answersRef.current.children.namedItem(i);
            targetElement.getElementsByClassName(
                "ZNAMAnswer-active"
            )[0].style.width = "100%";

            this.setState({
                answered: true,
                active: this.state.data.answers.ID[i],
            });
        }

        this.props.submitAnswer(this.state.data.answers.ID[i]);
    }

    renderChip() {
        if (typeof this.state.data.origin === "undefined") return null;

        return (
            <Chip
                color="secondary"
                onDelete={() => {}}
                deleteIcon={<DoneIcon />}
                label={this.state.data.origin}
                onClick={() => {}}
            />
        );
    }

    renderAnswers() {
        let result = [];

        for (let i = 0; i < 4; i++) {
            result.push(
                <div class="answer" id={i} key={i}>
                    <Card variant="outlined" elevation={0}>
                        <ButtonBase
                            disableRipple
                            onClick={(e) => {
                                this.onAnswerClick(e, i);
                            }}
                        >
                            <CardContent style={{ fontSize: "2em" }}>
                                <div class="ZNAMAnswer-active"></div>
                                <div class="ZNAMAnswer-correct"></div>
                                <div
                                    class="answer-content"
                                    style={(() => {
                                        if (
                                            this.state.data.answers.content[i]
                                                .length > 15
                                        ) {
                                            if (
                                                this.state.data.answers.content[
                                                    i
                                                ].length > 50
                                            ) {
                                                return { fontSize: "0.5em" };
                                            } else {
                                                return { fontSize: "0.7em" };
                                            }
                                        }
                                    })()}
                                >
                                    <div class="center-vh">
                                        {this.state.data.answers.content[i]}
                                    </div>
                                </div>
                            </CardContent>
                        </ButtonBase>
                    </Card>
                </div>
            );
        }

        return result;
    }

    renderFooter() {
        return (
            <div id="small-footer">
                <div id="center-v" class="noselect">
                    <div style={{
                        display: "inline-block",
                        float: "left",
                        cursor: "pointer",
                        fontWeight: "700"
                    }}
                    onClick={() => {
                        swal({
                            title: "Излези од играта",
                            text: "Прашањата кои веќе ги одговори ќе останат валидни. Дали си сигурен дека сакаш да излезеш од оваа игра?",
                            icon: "warning",
                            buttons: ["Врати се", "Потврди!"],
                            dangerMode: true
                        }).then((willExit) => {
                            if (willExit) {
                                queryFetch({
                                    command: "end-game"
                                }).then((response) => {
                                    console.log(response);
                                    swal.close();
                                    this.props.onGameOver(response);
                                })
                            } else {
                                swal.close();
                            }
                        });
                    }}>Излези од играта</div>
                    <Typography variant="caption">
                        Овозможено од SchoolNet
                    </Typography>
                </div>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <div id="question-container" class="noselect">
                    <div id="question">
                        <div id="score-container">{this.state.data.score}</div>
                        <div id="time-container">
                            {Math.round(this.state.data.timeLeft) + "s"}
                        </div>
                        <div>Прашање број {this.state.data.questionNumber}</div>
                        <div
                            id="question-content"
                            style={(() => {
                                if (
                                    typeof this.state.data.question !=
                                    "undefined"
                                ) {
                                    if (this.state.data.question.length < 100) {
                                        return { fontSize: "1.2em" };
                                    }
                                }
                            })()}
                        >
                            {this.state.data.question}
                        </div>
                        <div id="time-bar-container">
                            <LinearProgress
                                variant="determinate"
                                value={(this.state.data.timeLeft / 30.0) * 100}
                                id="time-bar"
                            />
                        </div>
                        <div id="question-chip">{this.renderChip()}</div>
                    </div>
                    <div id="answers-container" ref={this.answersRef}>
                        {this.renderAnswers()}
                    </div>
                </div>
                {this.renderFooter()}
            </React.Fragment>
        );
    }
}

export default Question;
