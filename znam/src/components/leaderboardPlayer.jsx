import React, { Component } from "react";

import { Card, CardContent, ButtonBase } from '@material-ui/core';

import TrophyIcon from './../svg/znam-trophy-1.svg';

class LeaderboardPlayer extends Component {
    render() {
        return (
            <div class="leaderboard-player">
                <Card variant="outlined">
                    <ButtonBase
                        onClick={event => {
                            console.log("clicked");
                        }}
                    >
                        <CardContent>
                            <div class="leaderplace-content">
                                <div class="center-vh">
                                    <img src={TrophyIcon} alt="Trophy Icon" class="trophy-icon"/>
                                </div>
                                <div class="leaderplace-name">
                                    John Doe
                                </div>
                            </div>
                        </CardContent>
                    </ButtonBase>
                </Card>
            </div>
        );
    }
}

export default LeaderboardPlayer;
