import React, { Component } from "react";

import { Card, CardContent } from "@material-ui/core";
import { TextField, IconButton } from "@material-ui/core";
import { Grow, ListItem, ListItemText } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

import { lightFetch } from "./../js/common";

type State = {
    word: Array<any>;
    searchValue: string;
};

export default class Connect extends Component {
    state: State;

    constructor(props: any) {
        super(props);

        this.state = {
            word: [],
            searchValue: ""
        }

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch() {
        lightFetch({
            word: {
                select: ["ID", "Word", "Wiki_Frq"],
                where: { Word: this.state.searchValue, like: true },
            },
        }).then((res) => this.setState({ word: res.word }));
    }

    renderList() {
        if (typeof this.state.word != "object") return null;

        let wordDOM = [];

        for (let i = 0; i < this.state.word.length; ++i) {
            wordDOM.push(
                <Grow in={true} timeout={500 + 50 * i}>
                    <ListItem
                        button
                        dense
                        onClick={() => {}}
                        key={this.state.word[i].ID}
                    >
                        <ListItemText primary={this.state.word[i].Word} />
                        {this.state.word[i].Wiki_Frq}
                    </ListItem>
                </Grow>
            );
        }

        return wordDOM;
    }

    render() {
        return (
            <div className="card-container search-card">
                <Card>
                    <CardContent>
                        <div className="search-card-padding card-flex">
                            <div id="search-bar-container">
                                <TextField
                                    id="search-bar"
                                    label="Пребарај"
                                    size="small"
                                    inputProps={{
                                        maxLength: 150,
                                    }}
                                    onChange={this.onSearch}
                                />
                            </div>
                            <div id="search-icon-container">
                                <IconButton
                                    aria-label="search"
                                    onClick={this.onSearch}
                                >
                                    <SearchIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div>{this.renderList()}</div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
