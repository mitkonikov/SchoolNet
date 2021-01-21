import React from "react";

import { Card, CardContent, IconButton } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import GoogleIcon from "./../img/google-icon.svg";

import ReactGA from "react-ga";

export default function LoginCard() {
    return (
        <div className="card-container">
            <Card>
                <CardContent>
                    <div className="login-card">
                        <div className="login-text">
                            Најавете се преку Facebook или Google.
                        </div>
                        <div className="login-icons">
                            <div className="auth-icon">
                                <IconButton
                                    onClick={() => {
                                        ReactGA.event({
                                            category: "Sign In",
                                            action: "Facebook Enter",
                                        });
                                        window.location.href = "https://schoolnet.mk/auth/facebook/zbor";
                                    }}
                                >
                                    <FacebookIcon id="facebook-signin" />
                                </IconButton>
                            </div>
                            <div className="auth-icon">
                                <IconButton
                                    onClick={() => {
                                        ReactGA.event({
                                            category: "Sign In",
                                            action: "Google Enter",
                                        });
                                        window.location.href = "https://schoolnet.mk/auth/google/zbor";
                                    }}
                                >
                                    <img
                                        src={GoogleIcon}
                                        id="google-signin"
                                        alt="Google"
                                    />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
