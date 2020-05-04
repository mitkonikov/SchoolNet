import React, { Component } from "react";

import { Card, CardContent } from "@material-ui/core";
import { TextField, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { lightFetch, getRandomInt } from "../js/common";

import "./../styles/Connect.css";

type State = {
    word: string
}

export default class Connect extends Component {
    state: State;

    constructor(props: any) {
        super(props);

        this.state = {
            word: "КОНЕКЦИЈА"
        }

        this.onSearch = this.onSearch.bind(this);
        this.onConnect = this.onConnect.bind(this);
    }

    onSearch() {
        lightFetch({
            word: {
                select: ["ID", "Word"],
                where: { ID: getRandomInt(0, 30000), limit: 1 },
            },
        }).then((res) => this.setState({ word: res.word }));
    }

    onConnect() {}

    render() {
        return (
            <div className="card-container connect-word">
                <Card>
                    <CardContent>
                        <div className="big-word">ШАПКА</div>
                        <div>ме асоцира на...</div>
                        <div className="search-card-padding card-flex">
                            <div id="search-bar-container">
                                <TextField
                                    id="search-bar"
                                    label=""
                                    size="small"
                                    inputProps={{
                                        maxLength: 150,
                                    }}
                                    onChange={this.onSearch}
                                />
                            </div>
                            <div id="connect-search-icon-container">
                                <IconButton
                                    aria-label="search"
                                    onClick={this.onSearch}
                                >
                                    <SearchIcon />
                                </IconButton>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}