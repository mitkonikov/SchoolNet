import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';

import LeaderboardPlayer from './leaderboardPlayer';

import './../styles/scoreboard.css';
import { queryFetch } from '../js/common';

class Scoreboard extends Component {
    state = {
        scoreboard: [{
            Display_Name: "John Doe",
            Score: "100",
            Rank: "1"
        }]
    }
    
    componentDidMount() {
        queryFetch({
            command: "get-scoreboard"
        }).then(data => this.setState({ scoreboard: data }));

        if (typeof this.props.onMount == "function")
            this.props.onMount();
    }
    
    renderPlayers() {
        let playersDOM = [];

        for (let i = 0; i < 10; i++) {
            playersDOM.push(
                <ListItem button dense>
                    <div class="list-number">
                        #{scoreboard[0].Rank}
                    </div>
                    <ListItemText primary={scoreboard[0].Player_Name}/>
                    {scoreboard[0].Score}
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