import React, { Component } from "react";

import { Card, CardContent, ButtonBase } from '@material-ui/core';

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
                                <div class="center-vh">Player Winner</div>
                            </div>
                        </CardContent>
                    </ButtonBase>
                </Card>
            </div>
        );
    }
}

export default LeaderboardPlayer;
