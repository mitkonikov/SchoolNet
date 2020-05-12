import React, { Component, Suspense } from "react";
import "./common.css";
import "./ZBOR.css";

import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import ReactGA from "react-ga";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import WordDay from "./components/wordDay";
import Search from "./components/search";
import Connect from "./components/connect";
import Artificial from "./components/artificial";
import Contact from "./components/contact.jsx";
import NavBar from "./components/navBar";

const trackingId = "UA-70623448-2";

type State = {
    currentPage: number;
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
            currentPage: 0
        };

        this.history = createBrowserHistory();
        this.setPage = this.setPage.bind(this);
    }

    componentDidMount() {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/zbor");
    }

    setPage(newPage) {
        this.setState({
            currentPage: newPage
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
                                                            className="beta"
                                                        >
                                                            BETA
                                                        </span>
                                                    </div>

                                                    <WordDay />

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

                            <NavBar setPage={this.setPage} page={this.state.currentPage}/>
                        </Route>
                    </Switch>
                </ThemeProvider>
            </Router>
        );
    }
}

export default ZBOR;
