import React, { Component } from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import GoogleIcon from "./../img/google-icon.svg";
import { IconButton, Divider } from "@material-ui/core";

import { Alert } from "@material-ui/lab";

function AuthMessage() {
    let hide = localStorage.getItem("authNotFirstTime");

    if (hide === '1') return null;
    else {
        return (
            <div id="login-alert">
                <Alert severity="warning">
                    <span class="noselect">
                        Поради спам, мора да се најавите преку Facebook или Google
                    </span>
                </Alert>
            </div>
        );
    }
}

class Authentication extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="center-v noselect">
                    <div id="platform-title">ЗНАМ</div>
                    <div id="platform-icon-auth" class="noselect">
                        <div id="platform-icon-img" />
                    </div>
                    <div id="introduction">
                        Овде бесплатно може да се натпреварувате на прашања од
                        различни предмети. <Divider />
                        
                        <div style={{ fontSize: "0.8em", paddingTop: "1em" }}>
                            ЗНАМ е платформа на SchoolNet. <br></br>
                            SchoolNet официјално е сѐ уште во изработка, но ЗНАМ
                            е екслузивно отворена за сите.
                        </div>
                    </div>
                    <div id="auth-container">
                        <AuthMessage/>
                        <div id="login-buttons">
                            <div class="center-vh">
                                <div class="auth-icon">
                                    <IconButton
                                        onClick={() => {
                                            window.location.href += "auth/facebook";
                                        }}
                                    >
                                        <FacebookIcon id="facebook-signin" />
                                    </IconButton>
                                </div>
                                <div class="auth-icon">
                                    <IconButton
                                        onClick={() => {
                                            window.location.href += "auth/google";
                                        }}
                                    >
                                        <img src={GoogleIcon} id="google-signin" alt="Google"/>
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Authentication;
