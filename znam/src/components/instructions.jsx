import React, { Component } from "react";

import { Button } from "@material-ui/core";

import "./../styles/subject_selector.css";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

let hoverFX = new Audio("/audio/hover-2.mp3");
let clickFX = new Audio("/audio/click-3h.mp3");
clickFX.volume = 0.4;

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
}));

function getSteps() {
    return [
        "10 прашања",
        "30 секунди секое",
        "првите 10 секунди: 100 поени за секое прашање",
        "секоја секунда после: -4 поени",
    ];
}

function VerticalLinearStepper() {
    const classes = useStyles();
    const [activeStep] = React.useState(4);
    const steps = getSteps();

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}

const playButtonStyle = makeStyles(() => ({
    root: {
        backgroundColor: "#057d05",
        borderColor: "#068c06",
        borderWidth: "0.2em",
        borderStyle: "solid",
        width: "8em",
        fontWeight: "700",
        fontSize: "1.1em",
        "&&:hover": {
            backgroundColor: "#077107",
        },
    },
}));

function PlayButton(props) {
    const classes = playButtonStyle();

    return (
        <Button
            className={classes.root}
            onClick={() => {
                clickFX.play();
                props.onPlay();
            }}
            onMouseEnter={() => hoverFX.play()}
        >
            ЗАПОЧНИ
        </Button>
    );
}

class Instructions extends Component {
    state = {
        profileName: undefined,
    };

    componentDidMount() {
        if (typeof this.props.onMount == "function") this.props.onMount();
    }

    render() {
        return (
            <div class="center-v" style={{width: "100%"}}>
                <div id="platform-title">ЗНАМ</div>
                <div id="platform-subtitle">од SchoolNet</div>
                <div id="platform-icon-container">
                    <div id="platform-icon">
                        <div id="platform-icon-img" />
                    </div>
                </div>
                <VerticalLinearStepper />
                <div id="play-button-container">
                    <div class="center-h">
                        <PlayButton onPlay={this.props.onPlay}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Instructions;
