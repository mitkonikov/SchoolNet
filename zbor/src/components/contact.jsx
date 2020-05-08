import React, { Component } from "react";

import { TextField, Button, Card } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import swal from "sweetalert";

import "./../styles/contribute.css";
import "./../styles/contact.css";
import { queryFetch } from "../js/common";

import GitHubIcon from '@material-ui/icons/GitHub';
import GradeIcon from '@material-ui/icons/Grade';
import StorageIcon from '@material-ui/icons/Storage';

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

    render() {
        return (
            <div class="contribute-container center-vh">
                <Card elevation={0}>
                    <div class="card-padding">
                        <div class="github-text">
                            ЗБОР е мала апликација со множество на зборови извлечени од македонската Википедија. Таа се стреми да го направи првиот македонски речник со отворен извор.
                        </div>
                        <div class="icon-container">
                            <div class="github-icon">
                                <IconButton onClick={() => {
                                        window.location = "https://schoolnet.mk";
                                    }} >
                                    <GradeIcon fontSize="large"/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </Card>

                <div class="separator"/>

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
                                queryFetch({
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

                <Card elevation={0}>
                    <div class="card-padding">
                        <div class="github-text">
                            Во скоро време, ЗБОР ќе им дозволи на сите да го симнат целиот речник придонесувајќи за развитокот на јазикот.
                        </div>
                        <div class="icon-container">
                            <div class="github-icon">
                                <IconButton onClick={() => {
                                        window.location = "https://schoolnet.mk";
                                    }} >
                                    <StorageIcon fontSize="large"/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </Card>

                <div class="separator"/>

                <div class="caption-container">
                    <span class="small-link" onClick={() => window.location.href = "https://schoolnet.mk/client/common/privacypolicy.html"}>Приватност</span>
                    <span class="small-link" onClick={() => window.location.href = "https://schoolnet.mk/client/common/termsofuse.html"}>Услови</span>
                </div>
            </div>
        );
    }
}

export default Contact;
