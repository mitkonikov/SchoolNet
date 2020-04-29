import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";

import { Card, CardContent, ButtonBase } from "@material-ui/core";
import { Button, IconButton } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";
import {
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText
} from "@material-ui/core";

import EditIcon from '@material-ui/icons/Edit';

import "./../styles/profile.css";
import { queryFetch, updateFetch } from "./../js/common";
import { subjectName, subjectIcons } from "../js/subjects";
import Block from "./block";

import swal from "sweetalert";

const EmptyState = React.lazy(() => import("./emptyState"));

let hoverFX = new Audio("/audio/hover-2.mp3");

class Profile extends Component {
    state = {
        profileName: undefined,
        statistics: {
            questionsPlayed: 0,
            questionsCount: 19,
            contributions: 0
        },
        activities: [],
        fetched: false
    };

    componentDidMount() {
        if (typeof this.props.onMount == "function") this.props.onMount();

        queryFetch({ command: "profile-info" }).then(data => {
            this.setState(data);
            this.setState({ fetched: true });
        });
    }

    emptyState() {
        if (!this.state.fetched) return null;

        if (this.state.activities.length === 0)
            return (
                <Suspense fallback={null}>
                    <div id="empty-state">
                        <EmptyState />
                    </div>
                </Suspense>
            );
        else {
            return null;
        }
    }

    renderActivities() {
        let activitiesDOM = [];

        if (typeof this.state.activities === "undefined")
            return;

        for (let i = 0; i < this.state.activities.length; i++) {
            activitiesDOM.push(
                <ListItem button dense>
                    <ListItemAvatar>
                        <Avatar>
                            <img
                                src={
                                    subjectIcons[
                                        this.state.activities[i]
                                            .Subject
                                    ]
                                }
                                alt={
                                    subjectName[
                                        this.state.activities[i]
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
                                this.state.activities[i].Subject
                            ]
                        }
                        secondary={(() => {
                            let correct = this.state.activities[i].Statistics.Correct;
                            let questions = this.state.activities[i].Statistics.Questions;

                            if (correct === null || questions === null) return "";

                            return correct + "/" + questions + " Точни одговори";
                        })()}
                    />
                    <span class="activity-score">
                        +{this.state.activities[i].Score}
                    </span>
                </ListItem>
            );
        }

        return activitiesDOM;
    }

    render() {
        return (
            <div class="full">
                <div id="profile-header">
                    <Card variant="outlined" elevation={0}>
                        <ButtonBase disableRipple component="div" style={{ fontSize: "0.9em" }}>
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
                                                <div>
                                                    {"Здраво, " +
                                                    this.state.profileName +
                                                    "!"}
                                                    <div class="edit-button">
                                                        <IconButton onClick={() => {
                                                            swal({
                                                                title: 'Промена на име',
                                                                text: 'Сакате да си го промените името кое се прикажува? Повелете, слободно...',
                                                                content: "input",
                                                                button: {
                                                                    text: "ПРОМЕНИ",
                                                                    closeModal: false,
                                                                },
                                                                inputValidator: (value) => {
                                                                    if (!value) return "";
                                                                    if (value.length < 5) return "";
                                                                }
                                                            }).then((result) => {
                                                                if (!result) {
                                                                    swal({
                                                                        title: 'Проблем',
                                                                        text: 'Хмм... Мислам дека не работи така :)',
                                                                        icon: 'error'
                                                                    });
                                                                    return true;
                                                                }

                                                                if (result.length < 7) {
                                                                    swal({
                                                                        title: 'Проблем',
                                                                        text: 'Не штеди... Помалку од седум букви не е дозволено!',
                                                                        icon: 'error'
                                                                    });
                                                                    return true;
                                                                }

                                                                updateFetch({
                                                                    command: 'display-name-change',
                                                                    data: {
                                                                        displayname: result
                                                                    }
                                                                }).then((response) => {
                                                                    let problem = false;
                                                                    if (response.status === "success") {
                                                                        this.setState({ profileName: result });
                                                                        swal.stopLoading();
                                                                        swal.close();
                                                                    } else if (response.status === "failed") {
                                                                        if (response.message === "limit") {
                                                                            swal({
                                                                                title: 'Проблем',
                                                                                text: 'Не поминале 10 дена од последната промена на името!',
                                                                                icon: 'error'
                                                                            });
                                                                        } else { problem = true; }
                                                                    } else { problem = true; }

                                                                    if (problem) {
                                                                        swal({
                                                                            title: 'Проблем',
                                                                            text: 'Се појави проблем со промената, пробајте пак...',
                                                                            icon: 'error'
                                                                        });
                                                                    }
                                                                }).catch(() => {
                                                                    swal({
                                                                        title: 'Проблем',
                                                                        text: 'Се појави проблем со промената, пробајте пак...',
                                                                        icon: 'error'
                                                                    });
                                                                });
                                                            })
                                                        }}> <EditIcon fontSize="small"/> </IconButton>
                                                    </div>
                                                </div>
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
                                                Прашања играни: {this.state.statistics.questionsPlayed}/{this.state.statistics.questionsCount}
                                            </div>
                                            <LinearProgress
                                                variant="determinate"
                                                value={(() => {
                                                    let played = parseInt(this.state.statistics.questionsPlayed);
                                                    let count = parseInt(this.state.statistics.questionsCount);
                                                    return played / count * 100;
                                                })()}
                                                id="all-questions-bar"
                                            />
                                        </div>
                                        <Block title="Придонеси" number={this.state.statistics.contributions}/>
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
                        {this.emptyState()}
                    </div>
                </div>

                <div id="logout-container">
                    <div id="feedback-container">
                        <div id="request-feature">
                            <Button
                                variant="contained"
                                color="primary"
                                disableElevation
                                onMouseEnter={() => hoverFX.play()}
                                component={Link}
                                to="/contact"
                            >
                                КОНТАКТ
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
