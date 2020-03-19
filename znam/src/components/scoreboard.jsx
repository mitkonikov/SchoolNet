import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';

class Scoreboard extends Component {
    renderPlayers() {
        let playersDOM = [];

        for (let i = 0; i < 10; i++) {
            playersDOM.push(
                <div class="scoreboard-player">
                    <Card>
                        <CardContent>
                            {i}
                        </CardContent>
                    </Card>
                </div>
            );
        }

        return playersDOM;
    }
    
    render() {
        return (
            <div id="scoreboard-container">
                <div id="leaderboard">
                    <div class="leaderboard-player">

                    </div>
                </div>
                <div id="scoreboard">
                    { this.renderPlayers() }
                </div>
            </div>
        );
    }
}

export default Scoreboard;