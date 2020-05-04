import React, { Component } from "react";

import { Card, CardContent } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import { lightFetch, getRandomInt } from "../js/common";

type State = {
    word: string
}

export default class Artificial extends Component {
    state: State;

    constructor(props: any) {
        super(props);

        this.state = {
            word: "ШАПКА"
        }

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch() {
        lightFetch({
            generated_words: {
                select: ["Word"],
                where: { ID: getRandomInt(0, 1000) }
            }
        }).then((res) => {
            this.setState({ word: res.generated_words[0].toUpperCase() });
        });
    }

    render() {
        return (
            <div className="card-container ai-word">
                <Card>
                    <CardContent style={{
                        position: "relative",
                        height: "fit-content",
                        paddingBottom: "0.5em"
                    }}>
                        <div>Збор создаден од вештачка интелигенција</div>
                        <div
                            className="big-word"
                        >
                            {this.state.word}
                        </div>
                        <div id="ai-refresh-container">
                            <IconButton
                                aria-label="ai-refresh"
                                onClick={this.onSearch}
                            >
                                <RefreshIcon />
                            </IconButton>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
