import React, { Component } from "react";

import { Card, CardContent } from "@material-ui/core";
import { TextField, IconButton } from "@material-ui/core";

import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import CheckIcon from "@material-ui/icons/Check";
import HelpIcon from "@material-ui/icons/Help";

import swal from "sweetalert";

import { lightFetch, getRandomInt, queryFetch } from "../js/common";
import { cyrillic, isLatin } from "../js/latin-to-cyrillic";

import "./../styles/Connect.css";

type Word = {
    ID: number;
    Word: string;
};

type State = {
    wordFrom: Word;
    wordTo: Word;
    wordLike: string;
    wordLikeRAW: string;
    fire: number;
    connections: number;
};

type Props = {
    reloadStats: Function;
    stats: Function;
}

export default class Connect extends Component {
    state: State;
    props: Props;

    constructor(props: Props) {
        super(props);

        this.state = {
            wordFrom: {
                ID: 0,
                Word: "",
            },
            wordTo: {
                ID: 0,
                Word: "",
            },
            wordLike: "",
            wordLikeRAW: "",
            fire: 0,
            connections: 0
        };

        this.onSearch = this.onSearch.bind(this);
        this.onConnect = this.onConnect.bind(this);
    }

    componentDidMount() {
        this.onSearch();
        setTimeout(() => {
            let stats = this.props.stats();
            if (typeof stats !== "undefined") {
                this.setState({
                    connections: parseInt(stats.wordConnections)
                });
            }
        }, 1000);
    }

    /** Gets a random word from the words table */
    onSearch() {
        lightFetch({
            word: {
                select: ["ID", "Word", "Mistake"],
                where: { ID: getRandomInt(0, 30000), limit: 1 },
            },
        }).then((res) => {
            let wordFromAPI = res.word[0];
            if (parseInt(wordFromAPI.Mistake) === 1) {
                this.onSearch();
            } else {
                wordFromAPI.Word = wordFromAPI.Word.toUpperCase();
                this.setState({ wordFrom: wordFromAPI });
            }
        });
    }

    /** Gets a word similar to the users input */
    onSearchLike(wordLike: string) {
        let converted = "";
        if (isLatin(wordLike)) {
            converted = cyrillic(wordLike);
        } else {
            converted = wordLike;
        }

        lightFetch({
            word: {
                select: ["ID", "Word"],
                where: { Word: converted + "%", limit: 1 },
            },
        }).then((res) => {
            let wordToAPI = res.word[0];
            wordToAPI.Word = wordToAPI.Word.toUpperCase();
            this.setState({ wordTo: wordToAPI });
        });
    }

    /** Connects the two words */
    onConnect() {
        if (this.state.wordTo.ID === 0) {
            this.setState({
                wordTo: {
                    Word: "",
                    ID: 0,
                },
            });
            this.onSearch();
            return null;
        }

        queryFetch({
            command: "connect-words",
            data: {
                wordFrom: this.state.wordFrom.ID,
                wordTo: this.state.wordTo.ID,
            },
        }).then((res) => {
            if (res.status && res.status === "success") {
                this.setState({ 
                    fire: this.state.fire + 1, 
                    connections: this.state.connections + 1
                });
            }

            this.setState({
                wordTo: {
                    Word: "",
                    ID: 0,
                },
                wordLike: "",
                wordLikeRAW: ""
            });
            this.onSearch();
            this.props.reloadStats();
        });
    }

    render() {
        if (this.state.wordFrom.Word === "") return null;

        return (
            <div className="card-container connect-word">
                <Card>
                    <CardContent>
                        <div
                            className="medium-word"
                            style={{ display: "inline-block" }}
                        >
                            {this.state.wordFrom.Word}
                        </div>
                        <SwapHorizIcon id="connect-icon" />
                        <div
                            className="medium-word"
                            style={{ display: "inline-block" }}
                        >
                            {this.state.wordTo.Word}
                        </div>
                        <div>ме асоцира на...</div>
                        <div className="search-card-padding card-flex">
                            <div id="connect-search-bar-container">
                                <TextField
                                    id="connect-bar"
                                    className="text-field"
                                    label=""
                                    size="small"
                                    inputProps={{
                                        maxLength: 150,
                                    }}
                                    autoComplete="off"
                                    onChange={(e) => {
                                        this.setState({
                                            wordLikeRAW: e.target.value
                                        });
                                        this.setState({
                                            wordLike: e.target.value.toLowerCase(),
                                        });
                                        this.onSearchLike(
                                            e.target.value.toLowerCase()
                                        );
                                    }}
                                />
                            </div>
                            <div id="connect-search-icon-container">
                                <IconButton
                                    aria-label="search"
                                    onClick={this.onConnect}
                                >
                                    <CheckIcon />
                                </IconButton>
                            </div>
                            <div className="search-help">
                                {(() => {
                                    if (this.state.fire > 0) {
                                        return (
                                            <span className="small-info-spans">
                                                🔥{" "}
                                                <div className="fire-number">
                                                    {this.state.fire}
                                                </div>
                                            </span>
                                        );
                                    } 
                                    
                                    if (this.state.connections > 0) {
                                        return (
                                            <span className="small-info-spans">
                                                <div className="connect-number">
                                                    <CheckIcon/>
                                                    {" " + this.state.connections}
                                                </div>
                                            </span>
                                        )
                                    } else {
                                        return (
                                            <div
                                                style={{
                                                    display: "inline-block",
                                                }}
                                            >
                                                <IconButton
                                                    aria-label="help"
                                                    onClick={() => {
                                                        swal(
                                                            "Објаснување",
                                                            "Со ваша помош да креираме облак на македонски зборови. "
                                                        );
                                                    }}
                                                >
                                                    <HelpIcon />
                                                </IconButton>
                                            </div>
                                        );
                                    }
                                })()}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
