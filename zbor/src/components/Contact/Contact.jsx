import React, { Component } from "react";

import { TextField, Button, Chip } from "@material-ui/core";

import "./../../styles/contribute.css";
import "./Contact.css";
import { queryFetch } from "../../js/common";

import GradeIcon from "@material-ui/icons/Grade";
import GitHubIcon from "@material-ui/icons/GitHub";
import StorageIcon from "@material-ui/icons/Storage";
import NewReleasesIcon from "@material-ui/icons/NewReleases";

import WideCard from "../WideCard/WideCard";
import Terms from "./Terms";
import { LimitOnRequests, ThankYouForContact } from "../../js/messages";

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
                <WideCard
                    content="ЗБОР е мала апликација со множество на зборови извлечени од македонската Википедија. Таа се стреми да го направи првиот македонски речник со отворен извор."
                    icon={<GradeIcon fontSize="large" />}
                    callback={() => {
                        window.location.href = "https://schoolnet.mk";
                    }}
                />

                <div class="separator" />

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
                                        message: this.state.contact,
                                    },
                                }).then((data) => {
                                    if (data.status === "success") {
                                        ThankYouForContact();
                                    } else if (data.status === "error") {
                                        if (data.message === "limit") {
                                            LimitOnRequests();

                                            localStorage.setItem(
                                                "contactMessage",
                                                this.state.contact
                                            );
                                        }
                                    }
                                });
                            }}
                        >
                            ТОЛКУ ЗА СЕГА.
                        </Button>
                    </div>
                </div>

                <div class="separator" />

                {/* GitHub Card */}
                <WideCard
                    content={
                        "Нашите платформи се со отворен извор (Open Source). Секој придонес прави голема разлика."
                    }
                    icon={<GitHubIcon fontSize="large" />}
                    callback={() => {
                        window.location.href =
                            "https://github.com/mitkonikov/SchoolNet";
                    }}
                />

                <div class="separator" />

                <div className="download-card-container">
                    {/* Download Card */}
                    <WideCard
                        content={
                            "Симнете го речникот на зборови со соодветната фреквенција на појавување на Википедија."
                        }
                        icon={<StorageIcon fontSize="large" />}
                        callback={() => {
                            window.location =
                                // "https://github.com/mitkonikov/SchoolNet/raw/master/dumps/zbor_database_words.json";
                                "https://zbor.schoolnet.mk/dict/json";
                        }}
                    />

                    <div className="download-card-chip-cont">
                        <Chip
                            color="secondary"
                            icon={<NewReleasesIcon />}
                            label="НОВО"
                            onClick={() => {}}
                        />
                    </div>
                </div>

                <div class="separator" />

                <Terms />
            </div>
        );
    }
}

export default Contact;
