import React, { Component, Suspense } from "react";
import "./App.css";

import { ThemeProvider } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import SchoolIcon from "@material-ui/icons/School";
// import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import BarChartIcon from "@material-ui/icons/BarChart";
import AddIcon from "@material-ui/icons/Add";
import FaceIcon from '@material-ui/icons/Face';

import { Switch, Route, Link, Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

import swal from 'sweetalert';

import theme from "./theme";
import { queryFetch, ReactLazyPreload } from "./js/common";

const Authentication = React.lazy(() => import("./components/authentication"));
const SubjectSelector = React.lazy(() => import("./components/subjectSelector"));
const Scoreboard = ReactLazyPreload(() => import("./components/scoreboard"));
const Contribute = ReactLazyPreload(() => import("./components/contribute"));
const Profile = ReactLazyPreload(() => import("./components/profile"));
const Question = React.lazy(() => import("./components/question"));

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
            isAuth: -1,
            currentPage: 0,
            inGame: false,
            currentQuestion: {
                question: "",
                answers: []
            }
        };

        this.history = createBrowserHistory();
        this.onPlay = this.onPlay.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
    }

    componentDidMount() {
        queryFetch({ command: "isAuth" })
            .then(data => {
                /*if (data.status === "error") {
                    swal({
                        title: "Пробајте пак...",
                        text: "Се појави серверска грешка. Администраторот е известен.",
                        icon: "error"
                    });
                }*/

                if (data.isAuth) {
                    this.setState({ isAuth: 1 });
                } else {
                    this.setState({ isAuth: 0 });
                }

                if (data.firstTime) {
                    swal({
                        title: "Добредојде!",
                        icon: "success"
                    });
                }
            });
    }

    onPlay(response) {
        console.log(response);

        this.setState({inGame: true});
        queryFetch({
            command: 'get-question'
        }).then(data => {
            console.log(data);
        });
    }

    submitAnswer(data) {
        console.log("submitting answer: ", data);

        queryFetch({
            command: 'submit-answer',
            data: { token: data }
        }).then(data => {
            console.log(data);
        });
    }

    render() {
        return (
            <Router history={this.history}>
                <ThemeProvider theme={theme}>
                    <Switch>
                        <Route path="/">
                            <div class="form-center">
                                <Switch>
                                    <Suspense fallback={<Loading/>}>
                                        <Route exact path="/">
                                            {(() => {
                                                if (this.state.isAuth === 1) {
                                                    if (this.state.inGame) {
                                                        return <Question data={this.state.currentQuestion} submitAnswer={this.submitAnswer}/>
                                                    } else {
                                                        return <SubjectSelector onMount={() => this.setState({currentPage: 0})}
                                                        onPlay={this.onPlay}/>
                                                    }
                                                } else if (this.state.isAuth === 0) {
                                                    return <Authentication/>
                                                }
                                            })()}
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
                            
                            {(() => {
                                if (this.state.isAuth === 1) {
                            return (<div class="navbar-container">
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
                                        onMouseEnter={() => Scoreboard.preload()}
                                    />
                                    <BottomNavigationAction
                                        component={Link}
                                        label="Contribute"
                                        icon={<AddIcon />}
                                        to="/contribute"
                                        onMouseEnter={() => Contribute.preload()}
                                    />
                                    <BottomNavigationAction
                                        component={Link}
                                        label="Profile"
                                        icon={<FaceIcon />}
                                        to="/profile"
                                        onMouseEnter={() => Profile.preload()}
                                    />
                                </BottomNavigation>
                            </div>)
                                }
                            })()}
                        </Route>
                    </Switch>
                </ThemeProvider>
            </Router>
        );
    }
}

export default App;
