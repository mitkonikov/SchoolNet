import React, { Component } from "react";

import { List, ListItem, ListItemText } from "@material-ui/core";
import { Grow } from "@material-ui/core";

import LeaderboardPlayer from "./leaderboardPlayer";

import "./../styles/scoreboard.css";
import { queryFetch } from "../js/common";
import swal from '@sweetalert/with-react'
import Block from "./block";

class Scoreboard extends Component {
    state = {
        scoreboard: [],
    };

    componentDidMount() {
        queryFetch({
            command: "get-leaderboard",
        }).then((data) => {
            if (data.status) {
                if (data.status === "error") {
                    if (typeof this.props.onFail == "function") {
                        this.props.onFail();
                    }
                    return;
                }
            }

            this.setState({ scoreboard: data });
        });

        if (typeof this.props.onMount == "function") this.props.onMount();
    }

    emptyState() {
        if (this.state.scoreboard.length > 0) return null;
        else {
            return (
                <div class="center-vh">
                    Сè уште нема статистики.
                </div>
            );
        }
    }

    moreInfo(i) {
        swal(
            <div class="swal-container" style={{ height: "0.2em" }}>
                <Block title="Поени" number={this.state.scoreboard[i].Score}/>
                <Block title="Ранг" number={this.state.scoreboard[i].Rank}/>
                <Block title="Точни" number={this.state.scoreboard[i].Q_Correct}/>
                <Block title="Неточни" number={this.state.scoreboard[i].Q_Wrong}/>
            </div>
        );
    }

    renderPlayers() {
        let playersDOM = [];

        if (this.state.scoreboard.length === 0) return null;

        for (let i = 0; i < this.state.scoreboard.length; i++) {
            playersDOM.push(
                <Grow in={true} timeout={500+(50*i)}>
                    <ListItem button dense onClick={() => this.moreInfo(i)}>
                        <div class="list-progress" style={(() => {
                            let max = parseInt(this.state.scoreboard[0].Score);
                            let cur = parseInt(this.state.scoreboard[i].Score);

                            return { width: ((cur / max) * 100) + "%" };
                        })()}></div>
                        <div class="list-number">
                            #{this.state.scoreboard[i].Rank}
                        </div>
                        <ListItemText
                            primary={this.state.scoreboard[i].Display_Name}
                        />
                        {this.state.scoreboard[i].Score}
                    </ListItem>
                </Grow>
            );
        }

        return playersDOM;
    }

    /*
    <div id="congrats-message">
                    Ова е листата на најдобрите учесници на ЗНАМ.
                </div>

    <div id="leaderboard">
        <LeaderboardPlayer place="1"></LeaderboardPlayer>
        <LeaderboardPlayer place="2"></LeaderboardPlayer>
        <LeaderboardPlayer place="3"></LeaderboardPlayer>
    </div>
    */
   
    render() {
        return (
            <div id="scoreboard-container">
                {this.emptyState()}

                <div id="scoreboard">
                    <List>{this.renderPlayers()}</List>
                </div>
                <div id="nav-footer"></div>
            </div>
        );
    }
}

export default Scoreboard;
