import React, { Component } from 'react';

import './../styles/question.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';

class Question extends Component {
    state = {
        question: "What is the name of the capital city of Macedonia?",
        answers: ["1", "2", "3", "4"]
    }

    render() {
        return (
            <div id="question-container">
                <div id="question">
                    <div class="center-vh">
                        {this.state.question}
                    </div>
                </div>
                <div id="answers-container">
                    {
                        (() => {
                            let result = [];
                            
                            
                            for (let i = 0; i < 4; i++) {
                                result.push(
                                <div class="answer" key={i+1}>
                                    <Card class="card-base">
                                        <ButtonBase
                                            class="button-base"
                                            onClick={event => { console.log(i+1); }}
                                        >
                                            <CardContent class="card-content">
                                                <div class="center-vh">
                                                    {this.state.answers[i]}
                                                </div>
                                            </CardContent>
                                        </ButtonBase>
                                    </Card>
                                </div>);
                            }

                            return result;
                        })()
                    }
                </div>
            </div>
        )
    }
}

export default Question;