import React, { Component } from "react";

import "./../styles/question.css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

import { LinearProgress } from '@material-ui/core';

class Question extends Component {
    constructor(props) {
        super(props);
        this.answersRef = React.createRef();
    }

    state = {
        answered: false,
        active: null,
        data: {}
    };

    setQuestion(data) {
        // TODO: to be discussed
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                ...data
            },
        }));
    }

    updateStates(newStates) {
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                ...newStates
            },
        }));
    }

    markCorrect(correctID) {
        let correctDiv = this.answersRef.current.children.namedItem(correctID);
        correctDiv.getElementsByClassName("ZNAMAnswer-correct")[0].style.width =
            "100%";
    }

    applySkeleton() {
        this.setState({
            answered: false,
            active: null
        });

        let correctDivs = this.answersRef.current.children;

        for (let c of correctDivs) {
            c.getElementsByClassName("ZNAMAnswer-correct")[0].style.width = "0%";
            c.getElementsByClassName("ZNAMAnswer-active")[0].style.width = "0%";
        }
    }

    renderAnswers() {
        let result = [];

        for (let i = 0; i < 4; i++) {
            result.push(
                <div class="answer" id={this.state.data.answers.ID[i]} key={this.state.data.answers.ID[i]}>
                    <Card variant="outlined" elevation={0}>
                        <ButtonBase
                            disableRipple
                            onClick={(event) => {
                                if (!this.state.answered) {
                                    event.target.children[0].style.width =
                                        "100%";
                                    this.setState({
                                        answered: true,
                                        active: this.state.data.answers.ID[i]
                                    });
                                }

                                this.props.submitAnswer(
                                    this.state.data.answers.ID[i]
                                );
                            }}
                        >
                            <CardContent>
                                <div class="ZNAMAnswer-active"></div>
                                <div class="ZNAMAnswer-correct"></div>
                                <div class="answer-content">
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
                    <Typography variant="caption">
                        Поддржано од SchoolNet
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
                        <div id="question-content">
                            <Typography variant="h5">
                                {this.state.data.question}
                            </Typography>
                        </div>
                        <div id="time-bar-container">
                            <LinearProgress
                                variant="determinate"
                                value={(this.state.data.timeLeft) / 30.00 * 100}
                                id="time-bar"
                            />
                        </div>
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
