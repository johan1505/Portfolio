import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ToolBar from '@material-ui/core/Toolbar';
import AboutMeIcon from '@material-ui/icons/Person';
import PortfolioIcon from '@material-ui/icons/Work';
import ResumeIcon from '@material-ui/icons/Description';
import ContactIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme: Theme) => ({
	padding: {
		paddingLeft: 25,
		paddingRight: 25,
	},
}));

export default function NavBar() {
	const classes = useStyles();
	return (
		<AppBar position='sticky'>
			<ToolBar>
				<Button
					href='#AboutMe'
					className={classes.padding}
					color='inherit'
					startIcon={<AboutMeIcon />}
				>
					About
				</Button>
				<Button
					href='#Portfolio'
					className={classes.padding}
					color='inherit'
					startIcon={<PortfolioIcon />}
				>
					Portfolio
				</Button>
				<Button
					target='_blank'
					href='Documents/Resume.pdf'
					className={classes.padding}
					color='inherit'
					startIcon={<ResumeIcon />}
				>
					Resume
				</Button>
				<Button
					href='#Contact'
					className={classes.padding}
					color='inherit'
					startIcon={<ContactIcon />}
				>
					Contact
				</Button>
			</ToolBar>
		</AppBar>
	);
}
