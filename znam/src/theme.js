import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            light: "#dd531d",
            main: "#dd531d",
            dark: "#dd531d",
            contrastText: "#fff"
        },
        secondary: {
            light: "#34e5eb",
            main: "#34e5eb", // #34e5eb
            dark: "#34e5eb",
            contrastText: "#fff"
        },
        text: {
            secondary: "#fff"
        },
        action: {
            selected: "rgba(255, 255, 255, 0.9)"
        }
    },
    overrides: {
        MuiTypography: {
            root: {
                color: "#fff"
            }
        },
        MuiButton: {
			root: {
				marginLeft: "1em",
				marginRight: "1em"
			},
			text: {
                color: "#fff"
            }
        },
        MuiCard: {
            root: {
                width: "100%",
                height: "100%",
                borderRadius: "0",
                borderWidth: "0",
                text: {
                    color: "#fff"
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
                borderWidth: "0",
                borderRadius: 0
            }
        },
        MuiButton: {
            root: {
                borderRadius: 0,
                padding: "6px 30px"
            }
        },
		MuiTextField: {
			root: {
				width: "100%",
				marginBottom: "0.8em"
			}
		},
		MuiInput: {
			underline: {
				"&&::after": {
					borderBottom: "2px solid #ffffff"
				}
			}
		},
		MuiFilledInput: {
			underline: {
				"&&::after": {
					borderBottom: "2px solid #ffffff"
				}
			}
		},
        MuiInputLabel: {
            root: {
                "&$shrink": {
                    "&$focused": {
                        color: "#fff"
                    }
                }
            }
        },
        MuiBottomNavigationAction: {
            root: {
                height: "initial"
            }
        }
    }
});

export default theme;