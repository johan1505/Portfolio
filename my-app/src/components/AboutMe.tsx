import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProfilePicture from '../assets/Profile.jpg';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		large: {
			width: theme.spacing(45),
			height: theme.spacing(45),
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
				<Avatar src={ProfilePicture} className={classes.large}></Avatar>
			</Grid>
			<Grid item lg={6} md={6} sm={12} xs={12}>
				<Typography variant='body1' align='justify'>
					Hello! My name is Johan, and I am a fourth-year Computer Science
					student at the University of California, Riverside (UCR). A little bit
					about myself outside of Computer Science, I was born and raised in
					Peru, South America. I really enjoy going for walks, cooking,
					practicing box, reading comics/manga, and watching Netflix and anime.
					<br /> <br />
					I started my journey in the field of Computer Science back in high
					school during the summer after my junior year when I self-learned the
					basics of Python programming. I got completely hooked by how
					programming can be such a strong tool to solve real-world problems in
					an intelligible manner, applying logic and critical thinking. When I
					got to college, I continued to improve my programming skills and
					knowledge about Computer Science. I got the opportunity to master C++
					in lower-division courses and gain knowledge about algorithms, data
					structures, databases, testing, and operating systems in
					upper-division courses. I also learned other languages/frameworks such
					as C#, Typescript, React.js, Vue.js, Node.js, Express.js, and MongoDB
					during my free time, internships, and hackathons.
					<br /> <br />
					My plan after graduating is to pursue a career in web/software
					development; therefore, I am currently looking for a full-time new
					grad web developer/software engineer position. I would be more than
					happy to chat with you if I seem like a good match for your
					organization!
				</Typography>
			</Grid>
		</Grid>
	);
}
