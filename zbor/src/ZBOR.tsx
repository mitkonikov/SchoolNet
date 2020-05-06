import React, { Component, Suspense } from "react";
import "./common.css";
import "./ZBOR.css";

import { Card, CardContent } from "@material-ui/core";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Switch, Route, Link, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import InfoIcon from "@material-ui/icons/Info";
import TranslateIcon from "@material-ui/icons/Translate";
import SchoolIcon from "@material-ui/icons/School";

import { lightFetch } from "./js/common";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import Search from "./components/search";
import Connect from "./components/connect";
import Artificial from "./components/artificial";
import Contact from "./components/contact.jsx";

type State = {
    currentPage: number;
    wordDay: any;
};

class Loading extends Component {
    render() {
        return (
            <div id="loading-container">
                <div id="logo"></div>
            </div>
        );
    }
}

class ZBOR extends Component {
    state: State;
    history: any;

    constructor(props: any) {
        super(props);

        this.state = {
            currentPage: 0,
            wordDay: {
                Word: "",
                Description: "",
            },
        };

        this.history = createBrowserHistory();
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
        return (
            <Router history={this.history}>
                <ThemeProvider theme={theme}>
                    <Switch>
                        <Route path="/">
                            <Switch>
                                <Suspense fallback={<Loading />}>
                                    <Route exact path="/">
                                        <div className="form-center-container">
                                            <div className="form-center">
                                                <div className="form-center-v">
                                                    <div id="platform-title">
                                                        ЗБОР
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "0.4em",
                                                                color:
                                                                    "rgb(255, 224, 0)",
                                                                top: 0,
                                                                position:
                                                                    "absolute",
                                                                marginLeft:
                                                                    "0.3em",
                                                                marginTop:
                                                                    "0.4em"
                                                            }}
                                                        >
                                                            BETA
                                                        </span>
                                                    </div>

                                                    <div className="card-container word-day">
                                                        <Card>
                                                            <CardContent style={{
                                                                position: "relative",
                                                                paddingBottom: "0.6em"
                                                            }}>
                                                                <div style={{ marginBottom: "0.2em"}}>
                                                                    Збор на
                                                                    денот
                                                                </div>
                                                                <div className="big-word">
                                                                    {
                                                                        this
                                                                            .state
                                                                            .wordDay
                                                                            .Word
                                                                    }
                                                                </div>
                                                                <div>
                                                                    {
                                                                        this
                                                                            .state
                                                                            .wordDay
                                                                            .Description
                                                                    }
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </div>

                                                    <Search />

                                                    <Connect />

                                                    <Artificial />
                                                </div>
                                            </div>
                                        </div>
                                    </Route>
                                    <Route path="/contact">
                                        <div className="form-center-container">
                                            <div className="form-center">
                                                <div className="form-center-v">
                                                    <Contact />
                                                </div>
                                            </div>
                                        </div>
                                    </Route>
                                </Suspense>
                            </Switch>

                            <div className="navbar-container">
                                <BottomNavigation
                                    value={this.state.currentPage}
                                    onChange={(event, newValue) => {
                                        this.setState({
                                            currentPage: newValue,
                                        });
                                    }}
                                    showLabels
                                >
                                    <BottomNavigationAction
                                        label="Почетна"
                                        icon={<TranslateIcon />}
                                        component={Link}
                                        to="/"
                                    />
                                    <BottomNavigationAction
                                        label="ЗНАМ"
                                        icon={<SchoolIcon />}
                                        href="https://znam.schoolnet.mk/"
                                    />
                                    <BottomNavigationAction
                                        label="За нас"
                                        icon={<InfoIcon />}
                                        component={Link}
                                        to="/contact"
                                    />
                                </BottomNavigation>
                            </div>
                        </Route>
                    </Switch>
                </ThemeProvider>
            </Router>
        );
    }
}

export default ZBOR;
