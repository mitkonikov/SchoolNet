import React from "react";
import "./App.css";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import Authentication from "./components/authentication";
import Question from "./components/question";
import Scoreboard from "./components/scoreboard";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#dd531d",
            main: "#dd531d",
			dark: "#dd531d",
            contrastText: "#fff",
        },
        secondary: {
            light: "#34e5eb",
            main: "#34e5eb", // #34e5eb
            dark: "#34e5eb",
            contrastText: "#fff",
        }
    },
    overrides: {
		MuiTypography: {
			root: {
				color: "white"
			}
		},
        MuiButton: {
            text: {
                color: "white"
            }
		},
		MuiCard: {
            root: {
				width: "100%",
				height: "100%",
				borderRadius: "0",
				borderWidth: "0",
				text: {
					color: "white"
				},
				backgroundColor: "#dd531d"
			}
		},
		MuiCardContent: {
			root: {
				width: "100%",
				height: "100%",
				padding: "0",
				backgroundColor: "#dd531d",
				color: "white",
				fontSize: "2em",
				cursor: "pointer",
				position: "absolute",
				"&&:hover": {
					backgroundColor: "#b84518"
				}
			}
		},
		MuiButtonBase: {
			root: {
				width: "100%",
				height: "100%",
				borderWidth: "0"
			}
		}
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div class="form-center">
                <Scoreboard/>
            </div>
        </ThemeProvider>
    );

    return (
        <Button variant="contained" color="primary" disableElevation>
            Disable elevation
        </Button>
    );
}

export default App;
