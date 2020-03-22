import React, { Component, Suspense } from "react";
import "./App.css";

import { ThemeProvider } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import Authentication from "./components/authentication";
import Question from "./components/question";
import SubjectSelector from "./components/subjectSelector";

import SchoolIcon from "@material-ui/icons/School";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import BarChartIcon from "@material-ui/icons/BarChart";
import AddIcon from "@material-ui/icons/Add";

import { Switch, Route, MemoryRouter, Link } from "react-router-dom";

import theme from "./theme";

const Scoreboard = React.lazy(() => import("./components/scoreboard"));
const Contribute = React.lazy(() => import("./components/contribute"));

class Loading extends Component {
    render() { 
        return (
            <div id="loading-container">
                <div id="logo"></div>
            </div>
        ); 
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0
        };
    }

    render() {
        return (
            <MemoryRouter>
                <ThemeProvider theme={theme}>
                    <div class="form-center">
                        <Switch>
                            <Suspense fallback={<Loading/>}>
                                <Route exact path="/">
                                    <SubjectSelector />
                                </Route>
                                <Route path="/score">
                                    <Scoreboard />
                                </Route>
                                <Route path="/contribute">
                                    <Contribute />
                                </Route>
                            </Suspense>
                        </Switch>
                    </div>

                    <div class="navbar-container">
                        <BottomNavigation
                            value={this.state.currentPage}
                            onChange={(event, newValue) => {
                                this.setState({ currentPage: newValue });
                            }}
                            showLabels
                        >
                            <BottomNavigationAction
                                component={Link}
                                label="Choose"
                                icon={<SchoolIcon />}
                                to="/"
                            />
                            <BottomNavigationAction
                                component={Link}
                                label="Play"
                                icon={<PlayArrowIcon />}
                                to="/play"
                            />
                            <BottomNavigationAction
                                component={Link}
                                label="Statistics"
                                icon={<BarChartIcon />}
                                to="/score"
                            />
                            <BottomNavigationAction
                                component={Link}
                                label="Contribute"
                                icon={<AddIcon />}
                                to="/contribute"
                            />
                        </BottomNavigation>
                    </div>
                </ThemeProvider>
            </MemoryRouter>
        );
    }
}

export default App;
