import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GithubIcon from '@material-ui/icons/GitHub';
import CalendarIcon from '@material-ui/icons/EventAvailable';
import Card from '@material-ui/core/Card';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import ImageSlider from '../components/ImagesSlider';

interface Project {
	title: string;
	description: JSX.Element;
	picturePaths: string[];
	date: string;
	githubLink?: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		card: {
			padding: 50,
			borderRadius: '30px',
			boxShadow: '0 4px 8px 0 rgba(0, 0, 0, .8), 0 2px 2px 0 rgba(0, 0, 0, .8)',
		},
		image: {
			height: 350,
			width: 480,
			borderWidth: 1,
			borderStyle: 'solid',
		},
	})
);
export default function Project({
	title,
	description,
	picturePaths,
	date,
	githubLink,
}: Project) {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<Grid container alignItems='center' spacing={5}>
				<Grid item xs={12}>
					<Typography variant='h4' align='center'>
						{title}
					</Typography>
				</Grid>
				<Grid
					container
					item
					lg={6}
					md={6}
					sm={12}
					xs={12}
					direction='column'
					alignItems='center'
				>
					<ImageSlider picturePaths={picturePaths} alt={title} />
				</Grid>
				<Grid item container lg={6} md={6} sm={12} xs={12} spacing={5}>
					<Grid item>
						<Typography variant='body1' align='justify'>
							{description}
						</Typography>
					</Grid>
					<Grid item container justify='space-between' alignItems='center'>
						<Grid item>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<CalendarIcon />
								<Typography align='center'>{date}</Typography>
							</div>
						</Grid>
						<Grid item>
							<Button
								color='primary'
								variant='contained'
								href={githubLink}
								startIcon={<GithubIcon />}
							>
								Github
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Card>
	);
}
