import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Card, CardContent, ButtonBase } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";
import {
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText
} from "@material-ui/core";

import "./../styles/profile.css";
import { queryFetch } from "./../js/common";
import { subjectName, subjectIcons } from "../js/subjects";

let hoverFX = new Audio("/audio/hover-2.mp3");

class Profile extends Component {
    state = {
        profileName: undefined,
        statistics: {
            allTimeQuestions: 0,
            qCount: 22,
            activities: [
                {
                    Subject: 8,
                    Statistics: {
                        Correct: 8,
                        Questions: 10
                    },
                    Score: 300
                },
                {
                    Subject: 8,
                    Statistics: {
                        Correct: 8,
                        Questions: 10
                    },
                    Score: 300
                },
                {
                    Subject: 8,
                    Statistics: {
                        Correct: 8,
                        Questions: 10
                    },
                    Score: 300
                }
            ]
        }
    };

    componentDidMount() {
        if (typeof this.props.onMount == "function") this.props.onMount();

        queryFetch({ command: "profile-info" }).then(data =>
            this.setState(data)
        );
    }

    renderActivities() {
        let activitiesDOM = [];

        for (let i = 0; i < this.state.statistics.activities.length; i++) {
            activitiesDOM.push(
                <ListItem button dense>
                    <ListItemAvatar>
                        <Avatar>
                            <img
                                src={
                                    subjectIcons[
                                        this.state.statistics.activities[i]
                                            .Subject
                                    ]
                                }
                                alt={
                                    subjectName[
                                        this.state.statistics.activities[i]
                                            .Subject
                                    ]
                                }
                                style={{ width: "1em" }}
                            />
                        </Avatar>
                        <div class="connect-activities"></div>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            subjectName[
                                this.state.statistics.activities[i].Subject
                            ]
                        }
                        secondary={
                            this.state.statistics.activities[i].Statistics
                                .Correct +
                            "/" +
                            this.state.statistics.activities[i].Statistics
                                .Questions +
                            " Точни одговори"
                        }
                    />
                    <span class="activity-score">
                        +{this.state.statistics.activities[i].Score}
                    </span>
                </ListItem>
            );
        }

        return activitiesDOM;
    }

    render() {
        return (
            <div>
                <div id="profile-header">
                    <Card variant="outlined" elevation="0">
                        <ButtonBase>
                            <CardContent>
                                <div id="profile-img-container">
                                    <div id="profile-img" />
                                </div>
                                <div id="profile-content">
                                    <div id="profile-greeting">
                                        {(() => {
                                            if (
                                                this.state.profileName ===
                                                undefined
                                            )
                                                return "Здраво!";
                                            return (
                                                "Здраво, " +
                                                this.state.profileName +
                                                "!"
                                            );
                                        })()}
                                    </div>
                                    <div id="profile-statistics">
                                        <div id="all-questions">
                                            <div
                                                style={{
                                                    marginBottom: "0.2em"
                                                }}
                                            >
                                                Прашања играни: 0/22
                                            </div>
                                            <LinearProgress
                                                variant="determinate"
                                                value={0}
                                                id="all-questions-bar"
                                            />
                                        </div>
                                        <div id="contributions">
                                            <div
                                                style={{
                                                    marginBottom: "0.2em"
                                                }}
                                            >
                                                Придонеси: 0
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </ButtonBase>
                    </Card>
                </div>
                <div id="about-info">
                    <div id="activities-container">
                        <List class="activities-list">
                            {this.renderActivities()}
                        </List>
                    </div>
                </div>

                <div id="logout-container">
                    <div id="feedback-container">
                        <div id="feedback">
                            <Button
                                variant="contained"
                                color="primary"
                                disableElevation
                                onMouseEnter={() => hoverFX.play()}
                            >
                                REQUEST A FEATURE
                            </Button>
                        </div>
                        <div id="request-feature">
                            <Button
                                variant="contained"
                                color="primary"
                                disableElevation
                                onMouseEnter={() => hoverFX.play()}
                            >
                                SETTINGS
                            </Button>
                        </div>
                    </div>
                    <div
                        id="logout"
                        onClick={() => {
                            let loc = window.location.href;
                            let atMK = loc.indexOf(".mk");
                            let domain = loc.substring(0, atMK + 4);
                            window.location.href = domain + "client/logout";
                        }}
                    >
                        Одјави се
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
