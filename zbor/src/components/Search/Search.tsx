import React, { Component } from "react";

import { Card, CardContent } from "@material-ui/core";
import { TextField, IconButton } from "@material-ui/core";
import { Grow, ListItem, ListItemText, Collapse } from "@material-ui/core";

import HelpIcon from "@material-ui/icons/Help";
import ClearIcon from '@material-ui/icons/Clear';

import swal from "sweetalert";

import { queryFetch } from "../../js/common";
import { cyrillic, isLatin } from "../../js/latin-to-cyrillic";
import { ThankYouForContribution } from "../../js/messages";
import { searchByText } from "./Search.logic";

type State = {
    word: Array<any>;
    searchValue: string;
    searching: boolean;
};

type Props = {
    reloadStats: Function;
}

export default class Search extends Component {
    state: State;
    props: Props;

    constructor(props: any) {
        super(props);

        this.state = {
            word: [],
            searchValue: "",
            searching: false,
        };

        this.onSearch = this.onSearch.bind(this);
        this.onMistake = this.onMistake.bind(this);
    }

    onSearch(text: string) {
        let converted = text;
        if (isLatin(text)) {
            converted = cyrillic(text);
        }
        
        searchByText(converted).then((res) => {
            this.setState({
                searching: true,
                word: res.word,
            });
        });
    }

    onMistake(id: number) {
        swal({
            title: "Означи како грешка?",
            icon: "warning",
            buttons: ["Врати се", "Потврди!"],
            dangerMode: true
        }).then((isMistake) => {
            if (isMistake) {
                queryFetch({
                    command: "flag-word",
                    data: {
                        ID: id,
                        Mistake: true
                    }
                }).then((response) => {
                    if (typeof response == "undefined") return swal.close();
                    console.log(response);
                    if (response.status === "success") {
                        ThankYouForContribution();
                        
                        this.props.reloadStats();
                    } else {
                        swal.close();
                    }
                })
            } else {
                swal.close();
            }
        });
    }

    renderList() {
        if (typeof this.state.word !== "object") return null;

        let wordDOM = [];

        for (let i = 0; i < this.state.word.length; ++i) {
            if (typeof this.state.word[i].Word_Text == "undefined") continue;

            wordDOM.push(
                <Grow in={true} timeout={500 + 50 * i}>
                    <ListItem
                        button
                        dense
                        onClick={() => {}}
                        key={this.state.word[i].ID}
                    >
                        <ListItemText primary={this.state.word[i].Word_Text} />
                        <div className="mistake-button-icon">
                            <IconButton 
                                onClick={() => this.onMistake(this.state.word[i].ID)}
                                style={{ padding: "6px" }}>
                                    <ClearIcon fontSize="small" color="error"/>
                            </IconButton>
                        </div>
                        {this.state.word[i].Wiki_Frq}
                    </ListItem>
                </Grow>
            );
        }

        return wordDOM;
    }

    render() {
        return (
            <Collapse in={this.state.searching} collapsedHeight={"6em"}>
                <div className="card-container search-card">
                    <Card>
                        <CardContent>
                            <div className="search-card-padding card-flex">
                                <div id="search-bar-container">
                                    <TextField
                                        id="search-bar"
                                        className="text-field"
                                        label="Пребарај"
                                        size="small"
                                        inputProps={{
                                            maxLength: 150,
                                        }}
                                        autoComplete="off"
                                        onChange={(event) => {
                                            this.setState({
                                                searchValue: event.target.value.toLowerCase(),
                                            });
                                            this.onSearch(
                                                event.target.value.toLowerCase()
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="search-list">
                                {this.renderList()}
                            </div>
                            <div className="search-help">
                                <IconButton
                                    aria-label="help"
                                    onClick={() => {
                                        swal(
                                            "Објаснување",
                                            "Пребарај колку пати одреден збор се појавил на Википедија."
                                        );
                                    }}
                                >
                                    <HelpIcon />
                                </IconButton>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Collapse>
        );
    }
}
