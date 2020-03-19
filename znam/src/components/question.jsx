import React, { Component } from 'react';

import './../styles/question.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

class Question extends Component {
    state = {
        questionNumber: 1,
        question: "What is the name of the capital city of Macedonia?",
        answers: ["1", "2", "3", "4"]
    }

    renderAnswers() {
        let result = [];
                            
                            
        for (let i = 0; i < 4; i++) {
            result.push(
            <div class="answer" key={i+1}>
                <Card 
                    disableElevation
                    variant="outlined">
                    <ButtonBase
                        onClick={event => { console.log(i+1); }}
                    >
                        <CardContent>
                            <div class="answer-content">
                                <div class="center-vh">
                                    {this.state.answers[i]}
                                </div>
                            </div>
                        </CardContent>
                    </ButtonBase>
                </Card>
            </div>);
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
                    <div>
                    <Typography>
                        Прашање број {this.state.questionNumber}
                    </Typography>
                    </div>
                    <div id="question-content">
                        <Typography variant="h5">
                            {this.state.question}
                        </Typography>
                    </div>
                </div>
                <div id="answers-container">
                    {
                        this.renderAnswers()
                    }
                </div>
            </div>
            { this.renderFooter() }
            </React.Fragment>
        )
    }
}

export default Question;