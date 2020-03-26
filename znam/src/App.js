import React, { Component, Suspense } from "react";
import "./App.css";

import { ThemeProvider } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import Question from "./components/question";

import SchoolIcon from "@material-ui/icons/School";
// import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import BarChartIcon from "@material-ui/icons/BarChart";
import AddIcon from "@material-ui/icons/Add";
import FaceIcon from '@material-ui/icons/Face';

import { Switch, Route, Link, Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

import theme from "./theme";
import { queryFetch } from "./js/common";

const Authentication = React.lazy(() => import("./components/authentication"));
const SubjectSelector = React.lazy(() => import("./components/subjectSelector"));
const Scoreboard = React.lazy(() => import("./components/scoreboard"));
const Contribute = React.lazy(() => import("./components/contribute"));
const Profile = React.lazy(() => import("./components/profile"));

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
            currentPage: 0,
            inGame: false
        };

        this.history = createBrowserHistory();
        this.onPlay = this.onPlay.bind(this);
    }

    onPlay() {
        this.setState({inGame: true});
        queryFetch({
            command: 'get-question'
        }).then(data => {
            console.log(data);
        });
    }

    render() {
        return (
            <Router history={this.history}>
                <ThemeProvider theme={theme}>
                    <Switch>
                        <Route path="/auth">
                            <div class="form-center">
                                <Suspense fallback={<Loading/>}>
                                    <Authentication/>
                                </Suspense>
                            </div>
                        </Route>
                        <Route path="/">
                            <div class="form-center">
                                <Switch>
                                    <Suspense fallback={<Loading/>}>
                                        <Route exact path="/">
                                            <SubjectSelector onMount={() => this.setState({currentPage: 0})}
                                                onPlay={this.onPlay}/>
                                        </Route>
                                        <Route path="/score">
                                            <Scoreboard onMount={() => this.setState({currentPage: 1})}/>
                                        </Route>
                                        <Route path="/contribute">
                                            <Contribute onMount={() => this.setState({currentPage: 2})}/>
                                        </Route>
                                        <Route path="/profile">
                                            <Profile onMount={() => this.setState({currentPage: 3})}/>
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
                                        label="Play"
                                        icon={<SchoolIcon />}
                                        to="/"
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
                                    <BottomNavigationAction
                                        component={Link}
                                        label="Profile"
                                        icon={<FaceIcon />}
                                        to="/profile"
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

export default App;
