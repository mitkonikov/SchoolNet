import React, { Component } from "react";

import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";

import Block from "../components/block";

import "./../styles/scoreboard.css";

let getEndMessage = [
    "Може и подобро...",
    "Одлично!",
    "Wow! Браво! Без грешка!",
];

class EndScreen extends Component {
    renderPlayers() {
        if (typeof this.props.endScore === "undefined") return null;
        if (typeof this.props.endScore.scoreboard === "undefined") return null;

        let playersDOM = [];

        for (let i = 0; i < 10; i++) {
            let currentPlayer = this.props.endScore.scoreboard[i];
            if (typeof currentPlayer === "undefined") continue;

            playersDOM.push(
                <ListItem button dense key={i} style={(() => {
                    if (typeof this.props.endScore.rank !== undefined) {
                        if (this.props.endScore.rank === currentPlayer.Rank) {
                            return {
                                backgroundColor: "#057d05"
                            };
                        }
                    }
                })()}>
                    <div class="list-number">
                        #{currentPlayer.Rank}
                    </div>
                    <ListItemText
                        primary={currentPlayer.Display_Name}
                    />
                    {currentPlayer.Score}
                </ListItem>
            );
        }

        return playersDOM;
    }

    render() {
        return (
            <div id="scoreboard-container">
                <div id="end-screen-message">
                    <Typography variant="h5" align="center">
                        {(() => {
                            if (this.props.endScore && this.props.endScore.score) {
                                if (this.props.endScore.score <= 200) {
                                    return getEndMessage[0];
                                } else if (
                                    this.props.endScore.score > 200 &&
                                    this.props.endScore.score < 1000
                                ) {
                                    return getEndMessage[1];
                                } else if (this.props.endScore.score === 1000) {
                                    return getEndMessage[2];
                                }
                            }
                        })()}
                    </Typography>
                    <div class="flex-container">
                        <div id="platform-icon-auth" class="noselect">
                            <div id="platform-icon-img" />
                        </div>
                        <div class="flex-fill">
                            <div class="center-vh" id="score-block-container">
                                <Block title="Поени" number={(() => {
                                    if (this.props.endScore && this.props.endScore.score) {
                                        return this.props.endScore.score;
                                    }
                                })()}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="scoreboard">
                    <List>{this.renderPlayers()}</List>
                </div>
                <div id="nav-footer">
                    <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        onClick={() => {
                            if (typeof this.props.onContinue === "function")
                                this.props.onContinue();
                        }}
                    >
                        ПОЧЕТНА
                    </Button>
                </div>
            </div>
        );
    }
}

export default EndScreen;
