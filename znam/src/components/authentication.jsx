import React, { Component } from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import { IconButton } from "@material-ui/core";

import { Alert } from "@material-ui/lab";

class Authentication extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="center-v noselect">
                <div id="platform-title">ЗНАМ</div>
                <div id="platform-icon">
                    <div
                        id="platform-icon-img"
                    />
                </div>
                <div id="introduction">
                    Овде бесплатно може да се натпреварувате на прашања од
                    различни предмети. <br /> ЗНАМ е платформа на SchoolNet.
                    SchoolNet официјално е се уште во изработка, но ЗНАМ е
                    екслузивно отворена за сите.
                </div>
                <div id="auth-container">
                    <div id="login-alert">
                        <Alert severity="warning">
                            <span class="noselect">
                                Поради спам, мора да се најавите преку Facebook
                            </span>
                        </Alert>
                    </div>
                    <div id="login-buttons">
                        <div class="center-vh">
                            <IconButton onClick={() => {
                                window.location.href += "auth/facebook";
                            }}>
                                <FacebookIcon id="facebook-signin" />
                            </IconButton>
                        </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Authentication;
