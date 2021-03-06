import { createMuiTheme } from "@material-ui/core/styles";

const palette = {
    type: "{{theme_type}}",
    primary: {
        // light: "#24676c",
        main: "{{color}}",
        // dark: "#194649",
        // hover: "#153d40",
        contrastText: "#fff",
        text: "{{text_color}}"
    },
    secondary: {
        // light: "#c13030",
        // main: "#c13030",
        // dark: "#c13030",
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
        MuiButton: {
			root: {
                borderRadius: 0,
                padding: "6px 30px"
			}
        },
        MuiCard: {
            root: {
                width: "100%",
                height: "100%",
                borderRadius: "0",
                borderWidth: "0",
                color: palette.primary.text,
                backgroundColor: palette.primary.dark
            }
        },
        MuiCardContent: {
            root: {
                width: "100%",
                height: "100%",
                padding: "0.7em 1em",
                backgroundColor: palette.primary.dark,
                color: palette.primary.text,
                cursor: "pointer",
                "&&:hover": {
                    backgroundColor: palette.primary.hover
                },
                "&:last-child": {
                    paddingBottom: "0.7em"
                }
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
					borderBottom: "2px solid {{text_color}}"
				}
			}
		},
		MuiFilledInput: {
			underline: {
				"&&::after": {
					borderBottom: "2px solid {{text_color}}"
				}
			}
		},
        MuiInputLabel: {
            root: {
                "&$shrink": {
                    "&$focused": {
                        color: palette.primary.text
                    }
                }
            }
        },
        MuiBottomNavigation: {
            root: {
                backgroundColor: palette.secondary.main
            }
        },
        MuiBottomNavigationAction: {
            root: {
                height: "initial",
                "&.Mui-selected": {
                    color: "rgb(0, 0, 0, 0.7)"
				}
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
                color: palette.primary.text,
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
                    color: palette.primary.text,
                    "&&:hover": {
                        color: "#d9d9d9"
                    }
                },
                color: palette.primary.text,
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