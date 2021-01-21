import React, { Component, Suspense } from "react";
import "./common.css";
import "./ZBOR.css";

import { Loading, CenterMobile } from "./common";
import { queryFetch } from "./js/common";

import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import ReactGA from "react-ga";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import Contact from "./components/Contact/Contact.jsx";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

import { User } from "./types/home.types";

const trackingId = "UA-70623448-2";

interface State {
    currentPage: number;
    isUserFetched: boolean;
    user: User;
    stats?: { [key: string]: any };
}

class ZBOR extends Component {
    state: State;
    history: any;

    constructor(props: any) {
        super(props);

        this.state = {
            currentPage: 0,
            isUserFetched: false,
            user: {
                isAuth: false,
            },
        };

        this.history = createBrowserHistory();
        this.setPage = this.setPage.bind(this);
    }

    componentDidMount() {
        this.updateStats();
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/zbor");
    }

    updateStats() {
        queryFetch({
            command: "get-user",
        }).then((res) => {
            if (typeof res == "undefined") return;
            this.setState({
                isUserFetched: true,
                ...res
            });
        });
    }

    setPage(newPage: number) {
        this.setState({
            currentPage: newPage,
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
                                    <CenterMobile>
                                        <Route exact path="/">
                                            <Home
                                                auth={{
                                                    user: this.state.user,
                                                    isUserFetched: this.state.isUserFetched,
                                                }}
                                                stats={this.state.stats}
                                                updateStats={this.updateStats}
                                            />
                                        </Route>
                                        <Route path="/contact">
                                            <Contact />
                                        </Route>
                                    </CenterMobile>
                                </Suspense>
                            </Switch>

                            <NavBar
                                setPage={this.setPage}
                                page={this.state.currentPage}
                            />
                        </Route>
                    </Switch>
                </ThemeProvider>
            </Router>
        );
    }
}

export default ZBOR;
