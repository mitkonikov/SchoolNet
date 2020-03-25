import { createMuiTheme } from "@material-ui/core/styles";

const palette = { // #ef6834
    type: "dark",
    primary: {
        light: "#dd531d",
        main: "#dd531d",
        dark: "#dd531d",
        contrastText: "#fff"
    },
    secondary: {
        light: "#01354b",
        main: "#01354b", // #34e5eb
        dark: "#01354b",
        contrastText: "#fff"
    },
    text: {
        secondary: "#fff"
    },
    action: {
        selected: "rgba(255, 255, 255, 0.9)"
    }
};

const theme = createMuiTheme({
    palette: palette,
    overrides: {
        MuiTypography: {
            root: {
                color: "#fff"
            }
        },
        MuiButton: {
			root: {
				marginLeft: "1em",
				marginRight: "1em",
                borderRadius: 0,
                padding: "6px 30px"
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
                backgroundColor: "#b84518"
            }
        },
        MuiCardContent: {
            root: {
                width: "100%",
                height: "100%",
                padding: "0",
                backgroundColor: "#b84518",
                color: "white",
                fontSize: "2em",
                cursor: "pointer",
                position: "absolute",
                "&&:hover": {
                    backgroundColor: "#9d3d18"
                    // backgroundColor: "#b84518"
                    // backgroundColor: "#002c3f"
                }
            }
        },
        MuiPaper: {
            root: {
                backgroundColor: "#fff",
                color: "#1a1a1a"
            }
        },
        MuiAlert: {
            standardWarning: {
                backgroundColor: "#fff",
                color: "#1a1a1a"
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
        MuiBottomNavigation: {
            root: {
                backgroundColor: "#01354b"
            }
        },
        MuiBottomNavigationAction: {
            root: {
                height: "initial"
            }
        },
        MuiCheckbox: {
            root: {
                width: "initial"
            }
        }
    }
});

export default theme;