import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<NavBar />
				<Container>
					<Grid
						container
						spacing={10}
						style={{ padding: 50 }}
						justify='center'
						alignContent='center'
					>
						<Grid item id='AboutMe'>
							<AboutMe />
						</Grid>
						<Grid item id='Portfolio'>
							<Portfolio />
						</Grid>
						<Grid item id='Contact'>
							<Contact />
						</Grid>
					</Grid>
				</Container>
			</ThemeProvider>
		</div>
	);
}

export default App;
