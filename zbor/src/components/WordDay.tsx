import React, { Component } from "react";

import { Card, CardContent } from "@material-ui/core";

import { lightFetch } from "../js/common";

type State = {
    wordDay: any;
};

class WordDay extends Component {
    state: State;

    constructor(props: any) {
        super(props);

        this.state = {
            wordDay: {
                Word: "",
                Description: "",
            },
        };
    }

    componentDidMount() {
        lightFetch({
            word_of_the_day: {
                select: ["Word", "Description"],
                where: { Day: new Date().toISOString().split("T")[0] },
            },
        }).then((res) => {
            if (res.word_of_the_day.length !== 0) {
                let wordOfTheDay = res.word_of_the_day[0];
                wordOfTheDay.Word = wordOfTheDay.Word.toUpperCase();
                this.setState({ wordDay: wordOfTheDay });
            }
        });
    }

    render() {
        if (this.state.wordDay.Word === "") return null;

        return (
            <div className="card-container word-day">
                <Card>
                    <CardContent>
                        <div style={{ marginBottom: "0.2em" }}>
                            Збор на денот
                        </div>
                        <div className="big-word">
                            {this.state.wordDay.Word}
                        </div>
                        <div>{this.state.wordDay.Description}</div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default WordDay;
