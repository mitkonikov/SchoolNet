import React, { Component, Suspense } from "react";
import "./common.css";
import "./ZBOR.css";

import { Loading, CenterMobile, PlatformTitle } from "./common";

import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import ReactGA from "react-ga";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

import WordDay from "./components/WordDay";
import Search from "./components/Search";
import Connect from "./components/Connect";
import Artificial from "./components/Artificial";
import Contact from "./components/Contact.jsx";
import NavBar from "./components/NavBar";
import Statistics from "./components/Statistics";

const trackingId = "UA-70623448-2";

type State = {
    currentPage: number;
    stats?: any;
};

class ZBOR extends Component {
    state: State;
    history: any;
    statsRef: React.RefObject<Statistics>;

    constructor(props: any) {
        super(props);

        this.state = {
            currentPage: 0
        };

        this.history = createBrowserHistory();
        this.setPage = this.setPage.bind(this);
        this.reloadStats = this.reloadStats.bind(this);
        this.getStats = this.getStats.bind(this);
        this.statsRef = React.createRef();
    }

    componentDidMount() {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/zbor");
    }

    setPage(newPage: number) {
        this.setState({
            currentPage: newPage
        });
    }

    reloadStats() {
        this.statsRef.current.getGuestStats();
    }

    getStats() {
        return this.statsRef.current.getStats();
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
                                            <PlatformTitle
                                                title="ЗБОР"
                                                isBeta={true}
                                            />

                                            <div className="row-flex">
                                                <div
                                                    className="card-flex"
                                                    id="small-word-day-container"
                                                >
                                                    <WordDay />
                                                </div>

                                                <div
                                                    className="card-flex"
                                                    id="small-stats-container"
                                                >
                                                    <Statistics ref={this.statsRef}/>
                                                </div>
                                            </div>

                                            <Search reloadStats={this.reloadStats}/>

                                            <Connect 
                                                reloadStats={this.reloadStats} 
                                                stats={this.getStats}
                                            />

                                            <Artificial />
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
