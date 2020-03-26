import React, { Component } from "react";

import "./../styles/question.css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

class Question extends Component {
    state = {
        questionNumber: 1,
        question: "What is the name of the capital city of Macedonia?",
        answers: {
            ID: [1, 2, 3, 4],
            content: ["1", "2", "3", "4"]
        }
    };

    renderAnswers() {
        let result = [];

        for (let i = 0; i < 4; i++) {
            result.push(
                <div class="answer" key={this.state.answers.ID[i]}>
                    <Card variant="outlined">
                        <ButtonBase
                            onClick={event => {
                                this.props.submitAnswer(
                                    this.state.answers.ID[i]
                                );
                            }}
                        >
                            <CardContent>
                                <div class="answer-content">
                                    <div class="center-vh">
                                        {this.state.answers.content[i]}
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
                        <div>Прашање број {this.state.questionNumber}</div>
                        <div id="question-content">
                            <Typography variant="h5">
                                {this.state.question}
                            </Typography>
                        </div>
                    </div>
                    <div id="answers-container">{this.renderAnswers()}</div>
                </div>
                {this.renderFooter()}
            </React.Fragment>
        );
    }
}

export default Question;
