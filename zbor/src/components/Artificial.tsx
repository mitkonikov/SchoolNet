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
            word: ""
        }

        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        this.onSearch();
    }

    onSearch() {
        lightFetch({
            generated_word: {
                select: ["Word"],
                where: { ID: getRandomInt(0, 1000) }
            }
        }).then((res) => {
            let wordRes = res.generated_word[0].Word.toUpperCase();
            if (wordRes.length > 13) {
                this.onSearch();
            } else {
                this.setState({ word: wordRes });
            }
        });
    }

    render() {
        if (this.state.word === "") return null;

        return (
            <div className="card-container ai-word">
                <Card>
                    <CardContent style={{
                        paddingBottom: "0.5em"
                    }}>
                        <div style={{ marginBottom: "0.2em"}}>Збор создаден од вештачка интелигенција</div>
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
