import React from 'react';
import './App.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import Authentication from './components/authentication';
import Question from './components/question';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#34e5eb',
			main: '#dd531d',
			dark: '#34e5eb',
			contrastText: '#fff',
		},
		secondary: {
			light: '#34e5eb',
			main: '#34e5eb', // #34e5eb
			dark: '#34e5eb',
			contrastText: '#fff',
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div class="form-center">
				<Question/>
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
