import React, { Component } from "react";

import { Card, CardContent } from "@material-ui/core";

import "./../styles/Statistics.css";
import { queryFetch } from "../js/common";

type State = {
    clientIp: string;
};

export default class Statistics extends Component {
    state: State;

    constructor(props: any) {
        super(props);

        this.state = {
            clientIp: "",
        };
    }

    componentDidMount() {
        queryFetch({
            command: "get-ip-stats"
        }).then(data => {
            console.log(data);
            this.setState(data);
        });
    }

    render() {
        return (
            <div className="card-container statistics-card">
                <Card>
                    <CardContent>
                        <div className="flex-center-v">
                            <div>
                                <span style={{
                                    fontWeight: 300
                                }}>Корисник</span> Гостин ☕
                                {this.state.clientIp && (
                                    <div className="ip-container">
                                        {this.state.clientIp}
                                    </div>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
