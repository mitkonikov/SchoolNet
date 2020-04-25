import React, { Component } from "react";

import { TextField, Button, Card } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import swal from "sweetalert";

import "./../styles/contribute.css";
import "./../styles/contact.css";
import { updateFetch, domain } from "./../js/common";

import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleIcon from "./../img/google-icon.svg";

let hoverFX = new Audio("/audio/hover-2.mp3");

class Contact extends Component {
    state = {
        contact: "",
    };

    componentDidMount() {
        if (typeof this.props.onMount == "function") this.props.onMount();

        let memoryMessage = localStorage.getItem("contactMessage");
        if (memoryMessage) {
            if (memoryMessage.length > 10) {
                this.setState({ contact: memoryMessage });
            }
        }
    }

    renderSwitchIcon(connectTo) {
        switch (connectTo) {
            case "Facebook":
                return (
                    <FacebookIcon fontSize="large"/>
                )
            case "Google":
                return (
                    <img src={GoogleIcon} alt="Google" style={{ width: "2em" }}/>
                )
            default:
                return null;
        }
    }

    renderConnectButton() {
        if (this.props.provider.length > 1) return null;

        let connectTo = "";
        for (let i = 0; i < this.props.provider.length; ++i) {
            if (this.props.provider[i] === "facebook") connectTo = "Google";
            if (this.props.provider[i] === "google") connectTo = "Facebook";
        }

        if (connectTo === "") return null;

        return (
            <Card elevation={0}>
                <div class="card-padding card-flex" style={{ height: "5em" }}>
                    <div class="connect-text">
                        Конектирај ја твојата сметка со {connectTo}
                    </div>
                    <div class="icon-container" style={{ display: "flex" }}>
                        <div class="github-icon">
                            <IconButton onClick={() => {
                                    window.location.href = domain() + "auth/connect/" + connectTo;
                                }} >
                                {this.renderSwitchIcon(connectTo)}
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }

    render() {
        return (
            <div class="contribute-container center-vh">
                <form noValidate autoComplete="off">
                    <TextField
                        id="contact-input"
                        label="Имам нешто на ум..."
                        variant="filled"
                        multiline
                        rowsMax="4"
                        helperText={"0/300"}
                        inputProps={{
                            maxLength: 300,
                        }}
                        onChange={(e) => {
                            let helperText = document.getElementById(
                                "contact-input-helper-text"
                            );
                            let inputField = document.getElementById(
                                "contact-input"
                            );

                            let count = inputField.value.length;

                            if (count > 300) {
                                count = 300;
                            }

                            this.setState({ contact: e.target.value });

                            helperText.innerHTML = count + "/300";
                        }}
                    />
                </form>

                <div id="submit-button-container">
                    <div id="submit-button" class="center-vh">
                        <Button
                            variant="contained"
                            color="primary"
                            disableElevation
                            onClick={() => {
                                updateFetch({
                                    command: "contact",
                                    data: {
                                        message: this.state.contact
                                    },
                                }).then((data) => {
                                    if (data.status === "success") {
                                        swal(
                                            "Благодариме што нè контактиравте! 🎉",
                                            "Вашата порака ќе биде разгледана од страна на администраторот во најбрзо време. Ќе ве контактираме.",
                                            "success"
                                        );
                                    } else if (data.status === "error") {
                                        if (data.message === "limit") {
                                            swal(
                                                "Жалам 😟",
                                                "Не дозволуваме толку често да не контактирате поради безбедносни причини. Обидете се за саат време повторно. А ние ќе ви ја чуваме пораката на ова исто место. 📝",
                                                "success"
                                            );
                                            
                                            localStorage.setItem('contactMessage', this.state.contact);
                                        }
                                    }
                                });
                            }}
                            onMouseEnter={() => hoverFX.play()}
                        >
                            ТОЛКУ ЗА СЕГА.
                        </Button>
                    </div>
                </div>
                
                <div class="separator"/>

                <Card elevation={0}>
                    <div class="card-padding">
                        <div class="github-text">
                            Нашите платформи се со отворен извор (Open Source). Секој придонес прави голема разлика.
                        </div>
                        <div class="icon-container">
                            <div class="github-icon">
                                <IconButton onClick={() => {
                                        window.location = "https://github.com/mitkonikov/SchoolNet";
                                    }} >
                                    <GitHubIcon fontSize="large"/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </Card>

                <div class="separator"/>
                
                {this.renderConnectButton()}
            </div>
        );
    }
}

export default Contact;
