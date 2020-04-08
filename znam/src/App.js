import React, { Component, Suspense } from "react";
import "./App.css";

import { ThemeProvider } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

import SchoolIcon from "@material-ui/icons/School";
// import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import BarChartIcon from "@material-ui/icons/BarChart";
import AddIcon from "@material-ui/icons/Add";
import FaceIcon from "@material-ui/icons/Face";

import { Switch, Route, Link, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import swal from "sweetalert";

import theme from "./theme";
import { queryFetch, ReactLazyPreload } from "./js/common";
import EndScreen from "./components/endScreen";

const Authentication = React.lazy(() => import("./components/authentication"));
const SubjectSelector = React.lazy(() =>
    import("./components/subjectSelector")
);
const Instructions = React.lazy(() => import("./components/instructions"));
const Scoreboard = ReactLazyPreload(() => import("./components/scoreboard"));
const Contribute = ReactLazyPreload(() => import("./components/contribute"));
const Profile = ReactLazyPreload(() => import("./components/profile"));
const Question = ReactLazyPreload(() => import("./components/question"));

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
                scoreboard: [{
                    Rank: 2,
                    Score: 300,
                    Player_Name: "John Doe"
                }],
                score: 300,
                rank: undefined,
                playerName: undefined // TODO...
            },
        };

        this.history = createBrowserHistory();
        this.selectSubject = this.selectSubject.bind(this);
        this.onPlay = this.onPlay.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);

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
            } else {
                this.setState({ isAuth: 0 });
            }

            if (data.firstTime) {
                swal({
                    title: "Добредојде!",
                    icon: "success",
                });
            }

            console.log("auth data: ", data);

            if (data.intro) {
                this.setState({ intro: data.intro });
            }

            if (data.inGame) {
                this.setState({ inGame: true });
                // fetch the questions and whatnot
            }
        });

        /*
         ----- TESTING -----
        setTimeout(() => {
            console.log("[Timeout Test]");
            let c = 30;
            let a = setInterval(() => {
                c -= 0.1;
                this.questionUI.current.updateStates({
                    timeLeft: c
                });

                if (Math.round(c) == 0) clearInterval(a);
            }, 100);
        }, 2000);*/

        /*setTimeout(() => {
            this.questionUI.current.markCorrect("4");
        }, 2000);

        setTimeout(() => {
            this.questionUI.current.applySkeleton();
        }, 4000);*/
    }

    selectSubject(response) {
        console.log("subject select: ", response);

        this.setState({ intro: true });
        Question.preload();
    }

    fetchNextQuestion(firstTime) {
        queryFetch({
            command: "get-question",
        }).then((question) => {
            console.log("question: ", question);
            // set the question on the UI
            this.questionUI.current.setQuestion(question);
            // start the game
            if (firstTime) {
                this.setState({
                    intro: false,
                    inGame: true
                });
            }

            this.setState({
                timeInterval: setInterval(() => {
                    queryFetch({
                        command: "get-time",
                    }).then((timeData) => {
                        // update time
                        this.questionUI.current.updateStates({
                            timeLeft: timeData.timeLeft
                        });
                    });
                }, 1000),
            });
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

    submitAnswer(data) {
        console.log("submitting answer: ", data);

        clearInterval(this.state.timeInterval);

        queryFetch({
            command: "submit-answer",
            data: { token: data },
        }).then((data) => {
            console.log(data);

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

                this.setState({ endScore: data });
                setTimeout(() => {
                    this.setState({ endScreen: true });
                }, 4000);
            }

            this.questionUI.current.updateStates({
                score: data.score
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
                                    endScreen: false
                                });
                            }}
                        />
                    );
                } else {
                    return (
                        <Question
                            submitAnswer={this.submitAnswer}
                            ref={this.questionUI}
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
            return <Authentication />;
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
                                            </Suspense>
                                        </Switch>
                                    </div>
                                </div>
                            </div>

                            {(() => {
                                if (this.state.isAuth === 1) {
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
                                                    label="Play"
                                                    icon={<SchoolIcon />}
                                                    to="/"
                                                />
                                                <BottomNavigationAction
                                                    component={Link}
                                                    label="Statistics"
                                                    icon={<BarChartIcon />}
                                                    to="/score"
                                                    onMouseEnter={() =>
                                                        Scoreboard.preload()
                                                    }
                                                />
                                                <BottomNavigationAction
                                                    component={Link}
                                                    label="Contribute"
                                                    icon={<AddIcon />}
                                                    to="/contribute"
                                                    onMouseEnter={() =>
                                                        Contribute.preload()
                                                    }
                                                />
                                                <BottomNavigationAction
                                                    component={Link}
                                                    label="Profile"
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
