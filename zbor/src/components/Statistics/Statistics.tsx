import React, { Component } from "react";

import { Card, CardContent, ButtonBase } from "@material-ui/core";
import { ListItem, ListItemText, Typography } from "@material-ui/core";

import swal from "@sweetalert/with-react";

import "./Statistics.css";
import { User } from "../../types/home.types";

export default class Statistics extends Component {
    state: {
        isStats: boolean;
        stats?: any;
    };
    props: {
        stats: { [key: string]: any };
        updateStats: Function;
        auth: {
            user: User;
            isUserFetched: boolean;
        };
    };

    constructor(props: any) {
        super(props);

        this.state = {
            isStats: false,
        };

        this.renderStatsList = this.renderStatsList.bind(this);
    }

    componentDidMount() {
        if (
            typeof this.props.stats != "undefined" &&
            Object.keys(this.props.stats).length > 0
        ) {
            this.setState({ isStats: true });
        }
    }

    renderStatsList() {
        let list = [];

        if (!!this.state.stats) {
            for (let stat in this.state.stats) {
                let name = "";

                switch (stat) {
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
                        <ListItemText
                            primary={
                                <Typography style={{ color: "black" }}>
                                    {name}
                                </Typography>
                            }
                        />
                        {this.state.stats[stat]}
                    </ListItem>
                );
            }
        }

        if (this.props.auth.user.isAuth) {
            list.push(
                <div className="logout-link" onClick={() => {
                    window.location.href = "https://schoolnet.mk/client/logout";
                }}>
                    Oдјави се
                </div>
            );
        }

        return list;
    }

    displayName() {
        if (this.props.auth.user.isAuth) {
            if (typeof this.props.auth.user.basic.Display_Name != "undefined") {
                return (
                    <span
                        style={{
                            fontWeight: 300,
                        }}
                    >
                        {`Здраво ${this.props.auth.user.basic.Display_Name.split(' ')[0]}!`}
                    </span>
                );
            } else {
                return null;
            }
        } else {
            return (
                <React.Fragment>
                    Гостин ☕
                    {this.props.auth.user.clientIp && (
                        <div className="ip-container">
                            {
                                this.props.auth.user.clientIp
                            }
                        </div>
                    )}
                </React.Fragment>
            );
        }
    }

    render() {
        if (!this.props.auth.isUserFetched) return null;

        return (
            <div className="card-container statistics-card">
                <Card>
                    <ButtonBase
                        onClick={() => {
                            if (this.state.isStats || this.props.auth.user.isAuth) {
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
                                    {this.displayName()}
                                    {this.state.isStats && (
                                        <div className="my-stats-container">
                                            моите статистики
                                        </div>
                                    )}
                                    {this.props.auth.user.isAuth && (
                                        <div>одјави се</div>
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
