import React from 'react';
import './App.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton } from '@material-ui/core';

import { Alert } from '@material-ui/lab';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#dd531d',
			main: '#dd531d',
			dark: '#dd531d',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336', // #34e5eb
			dark: '#ba000d',
			contrastText: '#fff',
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div class="form-center">
				<div id="main-form">
					<Alert severity="warning">
						<span class="noselect">Поради спем, мора да се најавите преку Facebook</span>
					</Alert>
					<div id="login-buttons">
						<div class="center-vh">
							<IconButton> <FacebookIcon id="facebook-signin"/> </IconButton>
						</div>
					</div>
				</div>
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
