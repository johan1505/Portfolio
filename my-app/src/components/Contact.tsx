import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(() => ({
	iconSize: {
		fontSize: 50,
	},
}));
export default function Contact() {
	const classes = useStyles();
	return (
		<Grid container justify='center' alignItems='center' spacing={10}>
			<Grid item>
				<IconButton color='primary' href='mailto:jguz1505@gmail.com'>
					<EmailIcon className={classes.iconSize} />
				</IconButton>
			</Grid>
			<Grid item>
				<IconButton color='primary' href='tel:951-850-8094'>
					<PhoneIcon className={classes.iconSize} />
				</IconButton>
			</Grid>
			<Grid item>
				<IconButton
					color='primary'
					href='https://github.com/johan1505'
					target='_blank'
				>
					<GithubIcon className={classes.iconSize} />
				</IconButton>
			</Grid>
			<Grid item>
				<IconButton
					color='primary'
					href='https://www.linkedin.com/in/johan-guzman-b37101181/'
					target='_blank'
				>
					<LinkedInIcon className={classes.iconSize} />
				</IconButton>
			</Grid>
		</Grid>
	);
}
