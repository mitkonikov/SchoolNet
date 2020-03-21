import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';

import LeaderboardPlayer from './leaderboardPlayer';

import './../styles/scoreboard.css';

class Scoreboard extends Component {
    renderPlayers() {
        let playersDOM = [];

        for (let i = 0; i < 10; i++) {
            playersDOM.push(
                <ListItem button>
                    <div class="list-number">
                        #{i}
                    </div>
                    <ListItemText primary={"Player" + i}/>
                </ListItem>
            );
        }

        return playersDOM;
    }
    
    render() {
        return (
            <div id="scoreboard-container">
                <div id="congrats-message">
                    <Typography variant="h5"> Честитки! </Typography>
                </div>
                <div id="leaderboard">
                    <LeaderboardPlayer></LeaderboardPlayer>
                    <LeaderboardPlayer></LeaderboardPlayer>
                    <LeaderboardPlayer></LeaderboardPlayer>
                </div>
                <div id="scoreboard">
                    <List>
                        { this.renderPlayers() }
                    </List>
                </div>
                <div id="nav-footer">

                </div>
            </div>
        );
    }
}

export default Scoreboard;