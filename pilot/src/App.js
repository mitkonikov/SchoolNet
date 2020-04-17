import React, { Component } from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import "./App.css";

import VerifyQuestionCard from "./components/verifyQuestionCard";

class App extends Component {
    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <div class="form-center-container">
                        <div class="form-center">
                            <div class="center-v">
                                <VerifyQuestionCard />
                            </div>
                        </div>
                    </div>
                </ThemeProvider>
            </div>
        );
    }
}

export default App;
