import React, { Component } from "react";

import { PlatformTitle } from "./../common";

import WordDay from "./../components/WordDay";
import Search from "./../components/Search/Search";
import Connect from "./../components/Connect/Connect";
import Artificial from "./../components/Artificial";
import Statistics from "../components/Statistics/Statistics";
import LoginCard from "./../components/LoginCard";
import { Collapse } from "@material-ui/core";
import { User } from "../types/home.types";

export default class Home extends Component {
    statsRef: React.RefObject<Statistics>;
    props: {
        auth: {
            user: User;
            isUserFetched: boolean;
        };
        stats: { [key: string]: any };
        updateStats: Function;
    };

    render() {
        return (
            <React.Fragment>
                <PlatformTitle title="ЗБОР" isBeta={true} />
                <div className="row-flex">
                    <div className="card-flex" id="small-word-day-container">
                        <WordDay />
                    </div>

                    <div className="card-flex" id="small-stats-container">
                        <Statistics
                            auth={this.props.auth}
                            stats={this.props.stats}
                            updateStats={this.props.updateStats}
                        />
                    </div>
                </div>
                <Search reloadStats={this.props.updateStats} />
                <Collapse
                    in={
                        this.props.auth.isUserFetched &&
                        !this.props.auth.user.isAuth
                    }
                >
                    <LoginCard />
                </Collapse>
                <Connect
                    reloadStats={this.props.updateStats}
                    stats={this.props.stats}
                />
                <Artificial />
            </React.Fragment>
        );
    }
}
