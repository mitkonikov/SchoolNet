import React, { Component, Suspense } from "react";
import "./App.css";

import { ThemeProvider } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import SchoolIcon from "@material-ui/icons/School";
import BarChartIcon from "@material-ui/icons/BarChart";
import AddIcon from "@material-ui/icons/Add";
import FaceIcon from "@material-ui/icons/Face";

import { Switch, Route, Link, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import swal from "sweetalert";

import ReactGA from 'react-ga';

import theme from "./theme";
import { queryFetch, ReactLazyPreload } from "./js/common";
import EndScreen from "./components/endScreen";

// Import all the lazy components
const Authentication = React.lazy(() => import("./components/authentication"));
const SubjectSelector = React.lazy(() =>
    import("./components/subjectSelector")
);
const Instructions = React.lazy(() => import("./components/instructions"));
const Scoreboard = ReactLazyPreload(() => import("./components/scoreboard"));
const Contribute = ReactLazyPreload(() => import("./components/contribute"));
const Profile = ReactLazyPreload(() => import("./components/profile"));
const Question = ReactLazyPreload(() => import("./components/question"));
const Contact = React.lazy(() => import("./components/contact"));

const trackingId = "UA-70623448-2";

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
            isAuth: 0,
            currentPage: 0,
            intro: false,
            inGame: false,
            endScreen: false,
            timeInterval: null,
            endScore: {
                scoreboard: [],
                score: 0,
                rank: undefined,
                playerName: undefined, // TODO...
            },
            question: undefined,
            provider: []
        };

        this.history = createBrowserHistory();
        this.selectSubject = this.selectSubject.bind(this);
        this.onPlay = this.onPlay.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
        this.questionMounted = this.questionMounted.bind(this);

        this.questionUI = React.createRef();
    }

    componentDidMount() {
        queryFetch({ command: "isAuth" }).then((data) => {
            /*if (data.status === "error") {
                    swal({
                        title: "Пробајте пак...",
                        text: "Се појави серверска грешка. Администраторот е известен.",
                        icon: "error"
                    });
                    return;
                }*/

            if (data.isAuth) {
                this.setState({ isAuth: 1 });
                localStorage.setItem('authNotFirstTime', 1);
            } else {
                this.setState({ isAuth: 0 });
            }

            if (data.firstTime) {
                swal({
                    title: "Добредојде!",
                    icon: "success",
                });
            }

            if (data.intro) {
                this.setState({ intro: data.intro });
            }

            if (data.inGame) {
                this.setState({ inGame: true });
                this.fetchNextQuestion(false);
            }

            if (data.provider) {
                this.setState({ provider: data.provider });
            }
        });

        ReactGA.initialize(trackingId);
        ReactGA.pageview("/znam");
/*
        setTimeout(() => {
            this.questionUI.current.setQuestion(this.state.question);
        }, 3000);*/
    }

    selectSubject(response) {
        this.setState({ intro: true });
        Question.preload();
    }

    questionMounted() {
        // set the question on the UI
        this.questionUI.current.setQuestion(this.state.question);

        this.setState({
            timeInterval: setInterval(() => {
                queryFetch({
                    command: "get-time",
                }).then((timeData) => {
                    // update time
                    this.questionUI.current.updateStates({
                        timeLeft: timeData.timeLeft,
                    });

                    if (timeData.timeLeft === 0) {
                        this.fetchNextQuestion(false);
                    }
                });
            }, 1000),
        });
    }

    fetchNextQuestion(firstTime) {
        clearInterval(this.state.timeInterval);

        queryFetch({
            command: "get-question",
        }).then((question) => {
            // start the game
            if (firstTime) {
                this.setState({
                    intro: false,
                    inGame: true,
                    question: question
                });
            } else {
                this.setState({ question: question });
                this.questionMounted();
            }
        });
    }

    onPlay() {
        queryFetch({
            command: "start-znam",
        }).then((data) => {
            console.log("start game data: ", data);
            this.fetchNextQuestion(true);
        });
    }

    onGameOver(data) {
        this.setState({ endScore: data });
        setTimeout(() => {
            this.setState({ endScreen: true });
        }, 4000);
    }

    submitAnswer(data) {
        /*
        this.setState({
            question: {
                questionNumber: "1",
                question: "dasda",
                answers: {
                    ID: [13, 14, 15, 16],
                    content: ["das", "s", "a", "s"]
                },
                score: "",
                timeLeft: 30,
            }
        })

        setTimeout(() => {
            this.questionUI.current.applySkeleton();
            this.questionUI.current.setQuestion(this.state.question);
        }, 1000);*/

        clearInterval(this.state.timeInterval);

        queryFetch({
            command: "submit-answer",
            data: { token: data },
        }).then((data) => {
            // data.correctToken
            // data.score
            // data.nextLevel

            if (data.correctToken) {
                this.questionUI.current.markCorrect(data.correctToken);
            }

            if (data.gameOver) {
                // we receive
                // data.correctToken: parseInt(lastQData.trueID),
                // data.score: currentGame[0].Score + scoreUpdate,
                // data.gameOver: true,
                // data.scoreboard: endScoreboard.scoreboard,
                // ? data.rank: endScoreboard.rank

                this.onGameOver(data);

                return;
            }

            this.questionUI.current.updateStates({
                score: data.score,
            });

            // do we wait or do we put a continue button?
            // or a continue button with a timeout
            setTimeout(() => {
                this.questionUI.current.applySkeleton();
                this.fetchNextQuestion(false);
            }, 2000);
        });
    }

    renderDefaultPath() {
        if (this.state.isAuth === 1) {
            if (this.state.inGame) {
                if (this.state.endScreen) {
                    return (
                        <EndScreen
                            endScore={this.state.endScore}
                            onContinue={() => {
                                this.setState({
                                    inGame: false,
                                    endScreen: false,
                                });
                            }}
                        />
                    );
                } else {
                    return (
                        <Question
                            submitAnswer={this.submitAnswer}
                            ref={this.questionUI}
                            onMount={this.questionMounted}
                            onGameOver={this.onGameOver}
                        />
                    );
                }
            } else {
                if (!this.state.intro) {
                    return (
                        <SubjectSelector
                            onMount={() =>
                                this.setState({
                                    currentPage: 0,
                                })
                            }
                            onSelectSubject={this.selectSubject}
                        />
                    );
                } else {
                    return <Instructions onPlay={this.onPlay} />;
                }
            }
        } else if (this.state.isAuth === 0) {
            return <Authentication GA={ReactGA}/>;
        }
    }

    render() {
        return (
            <Router history={this.history}>
                <ThemeProvider theme={theme}>
                    <Switch>
                        <Route path="/">
                            <div class="form-center-container">
                                <div class="form-center">
                                    <div class="form-center-v">
                                        <Switch>
                                            <Suspense fallback={<Loading />}>
                                                <Route exact path="/">
                                                    {this.renderDefaultPath()}
                                                </Route>
                                                <Route path="/score">
                                                    <Scoreboard
                                                        onMount={() =>
                                                            this.setState({
                                                                currentPage: 1,
                                                            })
                                                        }
                                                        onFail={() => {
                                                            window.location.href = window.location.origin;
                                                        }}
                                                    />
                                                </Route>
                                                <Route path="/contribute">
                                                    <Contribute
                                                        onMount={() =>
                                                            this.setState({
                                                                currentPage: 2,
                                                            })
                                                        }
                                                    />
                                                </Route>
                                                <Route path="/profile">
                                                    <Profile
                                                        onMount={() =>
                                                            this.setState({
                                                                currentPage: 3,
                                                            })
                                                        }
                                                    />
                                                </Route>
                                                <Route path="/contact">
                                                    <Contact provider={this.state.provider}/>
                                                </Route>
                                            </Suspense>
                                        </Switch>
                                    </div>
                                </div>
                            </div>

                            {(() => {
                                if (this.state.isAuth === 1 && !this.state.inGame) {
                                    return (
                                        <div class="navbar-container">
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
                                                    component={Link}
                                                    label="Играј"
                                                    icon={<SchoolIcon />}
                                                    to="/"
                                                />
                                                <BottomNavigationAction
                                                    component={Link}
                                                    label="Статистики"
                                                    icon={<BarChartIcon />}
                                                    to="/score"
                                                    onMouseEnter={() =>
                                                        Scoreboard.preload()
                                                    }
                                                />
                                                <BottomNavigationAction
                                                    component={Link}
                                                    label="Придонеси"
                                                    icon={<AddIcon />}
                                                    to="/contribute"
                                                    onMouseEnter={() =>
                                                        Contribute.preload()
                                                    }
                                                />
                                                <BottomNavigationAction
                                                    component={Link}
                                                    label="Профил"
                                                    icon={<FaceIcon />}
                                                    to="/profile"
                                                    onMouseEnter={() =>
                                                        Profile.preload()
                                                    }
                                                />
                                            </BottomNavigation>
                                        </div>
                                    );
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
