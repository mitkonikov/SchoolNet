import { createMuiTheme } from "@material-ui/core/styles";

const palette = { // #ef6834
    type: "dark",
    primary: {
        light: "#44aed8",
        main: "#44aed8", // "#dd531d",
        dark: "#35a7d4", // "#cc3914",
        hover: "#35a7d4",
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
                borderRadius: 0,
                padding: "6px 30px",
                fontFamily: "Roboto"
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
                color: "#fff",
                backgroundColor: palette.primary.dark
            }
        },
        MuiCardContent: {
            root: {
                width: "100%",
                height: "100%",
                padding: "0",
                backgroundColor: palette.primary.dark, // "#b84518",
                color: "white", 
                cursor: "pointer",
                position: "absolute",
                "&&:hover": {
                    backgroundColor: palette.primary.hover
                    // backgroundColor: "#b84518"
                    // backgroundColor: "#002c3f"
                }
            }
        },
        MuiPaper: {
            root: {
                // backgroundColor: "#fff",
                backgroundColor: "transparent",
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
                borderRadius: 0,
                fontFamily: "Roboto"
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
        },
        MuiListItemAvatar: {
            root: {
                position: "relative",
                minWidth: "0px",
                marginRight: "1em"
            }
        },
        MuiAvatar: {
            colorDefault: {
                color: "#fff",
                backgroundColor: palette.secondary.main
            }
        },
        MuiStepper: {
            root: {
                backgroundColor: "transparent"
            }
        },
        MuiStepIcon: {
            root: {
                "&&.MuiStepIcon-completed" : {
                    color: "#fff",
                    "&&:hover": {
                        color: "#d9d9d9"
                    }
                },
                color: "#fff",
                "&&:hover": {
                    color: "#d9d9d9"
                }
            }
        },
        MuiStepConnector: {
            root: {
                height: "0.1em"
            },
            line: {
                borderColor: "transparent",
                minHeight: "12px"
            },
            lineVertical: {
                minHeight: "12px"
            }
        }
    }
});

export default theme;