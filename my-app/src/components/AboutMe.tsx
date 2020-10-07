import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		large: {
			width: theme.spacing(35),
			height: theme.spacing(35),
		},
	})
);

export default function AboutMe() {
	const classes = useStyles();
	return (
		<Grid container alignItems='center' spacing={5}>
			<Grid item container justify='center'>
				<Typography variant='h2' align='center'>
					Johan Guzman
				</Typography>
			</Grid>
			<Grid container item lg={6} md={6} sm={12} xs={12} justify='center'>
				<Avatar className={classes.large}></Avatar>
			</Grid>
			<Grid item lg={6} md={6} sm={12} xs={12}>
				<Typography variant='body1' align='justify'>
					Hello! My name is Johan, and I am a third-year Computer Science
					student at the University of California, Riverside (UCR). A little bit
					about myself outside of Computer Science, I was born and raised in
					Peru, South America. I really enjoy to play with dogs, and I'm a big
					fan of Marvel superheroes.
					<br /> <br />
					I started my journey in the field of Computer Science back in high
					school during the summer after my Junior year when I self-learned the
					basics of Python programming. Back then, programming felt like such a
					strong tool to solve real-world problems in an intelligible manner,
					applying logic and critical thinking. When I got to college, I
					continued to improve my programming skills and knowledge about
					Computer Science. I got the opportunity to master C++ in my
					lower-division courses, gain knowledge about complex algorithms and
					data structures, grasp embedded systems programming skills, and learn
					other languages such as C#, Java, HTML, and CSS during my free time,
					Hackathons, and work.
					<br /> <br />I am interested in web and software development, and I am
					currently looking for an internship opportunity for Summer, 2020 in
					order to further develop my skills, grow professionally, and gain more
					real-work experience.
				</Typography>
			</Grid>
		</Grid>
	);
}
