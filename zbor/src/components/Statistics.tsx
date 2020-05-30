import React, { Component } from "react";

import { Card, CardContent, ButtonBase } from "@material-ui/core";
import { ListItem, ListItemText } from "@material-ui/core";

import swal from "@sweetalert/with-react";

import "./../styles/Statistics.css";
import { queryFetch } from "../js/common";

type State = {
    clientIp: string;
    isStats: boolean;
    stats?: any;
};

export default class Statistics extends Component {
    state: State;

    constructor(props: any) {
        super(props);

        this.state = {
            clientIp: "",
            isStats: false,
        };

        this.getGuestStats = this.getGuestStats.bind(this);
        this.getStats = this.getStats.bind(this);
        this.renderStatsList = this.renderStatsList.bind(this);
    }

    componentDidMount() {
        this.getGuestStats();
    }

    getGuestStats() {
        queryFetch({
            command: "get-guest-stats",
        }).then((data) => {
            console.log(data);
            this.setState({
                stats: data.stats,
                clientIp: data.clientIp
            });

            let count = 0;
            for (let i in data.stats) {
                count++;
            }

            if (count > 0) {
                this.setState({ isStats: true });
            }
        });
    }

    getStats() {
        return this.state.stats;
    }

    renderStatsList() {
        let list = [];

        for (let stat in this.state.stats) {
            let name = "";

            switch(stat) {
                case "wordContributions": {
                    name = "Придонеси";
                    break;
                }
                case "wordConnections": {
                    name = "Асоцијации";
                    break;
                }
                default: {
                    name = "";
                }
            }

            if (name === "") continue;

            list.push(
                <ListItem button dense>
                    <ListItemText primary={name} />
                    {this.state.stats[stat]}
                </ListItem>
            );
        }

        return list;
    }

    render() {
        return (
            <div className="card-container statistics-card">
                <Card>
                    <ButtonBase
                        onClick={() => {
                            if (this.state.isStats) {
                                swal(
                                    <div
                                        className="swal-container"
                                        style={{ color: "black" }}
                                    >
                                        {this.renderStatsList()}
                                    </div>
                                );
                            }
                        }}
                    >
                        <CardContent>
                            <div className="flex-center-v">
                                <div>
                                    {false && (
                                        <span
                                            style={{
                                                fontWeight: 300,
                                            }}
                                        >
                                            Корисник
                                        </span>
                                    )}{" "}
                                    Гостин ☕
                                    {this.state.clientIp && (
                                        <div className="ip-container">
                                            {this.state.clientIp}
                                        </div>
                                    )}
                                    {this.state.isStats && (
                                        <div className="my-stats-container">
                                            моите статистики
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </ButtonBase>
                </Card>
            </div>
        );
    }
}
