import React, { Component } from 'react';

import { TextField, Button } from '@material-ui/core';

import './../styles/contribute.css';

class Contribute extends Component {
    render() {
        return(
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
                        onChange={() => {
                            let helperText = document.getElementById("question-input-helper-text");
                            let inputField = document.getElementById("question-input");
                            
                            let count = inputField.value.length;

                            if (count > 150) {
                                count = 150;
                            }
                            
                            helperText.innerHTML = count + "/300";
                        }}
                    />
                    
                    <div class="separator"></div>

                    {
                        (() => {
                            let answersDOM = [];

                            for (let i = 0; i < 4; i++) {
                                answersDOM.push(
                                    <TextField 
                                        id="question-input" 
                                        label={"Одговор бр. " + (i + 1)}
                                        inputProps={{
                                            maxLength: 150
                                        }}
                                    />
                                );
                            }

                            return answersDOM;
                        })()
                    }
                </form>

                <div id="submit-button-container">
                    <div id="submit-button" class="center-vh">
                        <Button variant="contained" color="primary" disableElevation>
                            ПРИДОНЕСИ
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contribute;