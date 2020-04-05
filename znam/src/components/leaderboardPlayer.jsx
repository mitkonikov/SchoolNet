import React, { Component } from "react";

import { Card, CardContent, ButtonBase } from "@material-ui/core";

import "./../svg/znam-trophy-1.css";

let TrophyIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 289" class="trophy-icon">
            <g id="trophy">
                <path
                    class="cls-1"
                    d="M269.22,60.5s14,100-45,137c-16,46-5,63-5,63l41,20h-118l41-20s11-17-5-63c-59-37-47-137-47-137Z"
                    transform="translate(-105.45 -55)"
                />
                <polygon
                    class="cls-1"
                    points="184.5 283.5 5.5 283.5 36 243.5 154 243.5 184.5 283.5"
                />
            </g>
            <g id="trophy-place">
                <text class="cls-2" transform="translate(64.88 109)">
                    {props.place}
                </text>
            </g>
        </svg>
    );
};

class LeaderboardPlayer extends Component {
    render() {
        return (
            <div class="leaderboard-player">
                <Card variant="outlined" elevation={1}>
                    <ButtonBase
                        onClick={(event) => {
                            console.log("clicked");
                        }}
                    >
                        <CardContent>
                            <div class="leaderplace-content">
                                <div class="center-vh">
                                    {TrophyIcon({ place: this.props.place })}
                                </div>
                                <div class="leaderplace-name">John Doe</div>
                            </div>
                        </CardContent>
                    </ButtonBase>
                </Card>
            </div>
        );
    }
}

export default LeaderboardPlayer;
