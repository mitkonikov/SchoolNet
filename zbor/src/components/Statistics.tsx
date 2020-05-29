import React, { Component } from "react";

import { Card, CardContent, ButtonBase } from "@material-ui/core";

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
            isStats: false
        };
    }

    componentDidMount() {
        queryFetch({
            command: "get-guest-stats"
        }).then(data => {
            console.log(data);
            this.setState({
                stats: data.stats,
                clientIp: data.clientIp,
                isStats: true
            });
        });
    }

    render() {
        return (
            <div className="card-container statistics-card">
                <Card>
                    <ButtonBase onClick={() => {
                        if (this.state.isStats) {
                            
                        }
                    }}>
                        <CardContent>
                            <div className="flex-center-v">
                                <div>
                                    {false && (<span style={{
                                        fontWeight: 300
                                    }}>Корисник</span>)} Гостин ☕
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
