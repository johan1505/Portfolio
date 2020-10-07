import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TIMIPicture1 from '../assets/TIMI1.png';
import TIMIPicture2 from '../assets/TIMI2.png';
import TherapyScreeningPicture from '../assets/ThErapyScreening.jpg';
import MagnitiePicture1 from '../assets/Magnitie1.jpg';
import MagnitiePicture2 from '../assets/Magnitie2.jpg';
import MagnitiePicture3 from '../assets/Magnitie3.jpg';
import MagnitiePicture4 from '../assets/Magnitie4.jpg';
import MagnitiePicture5 from '../assets/Magnitie5.jpg';
import MoodMixerPicture1 from '../assets/MoodMixer1.png';
import MoodMixerPicture2 from '../assets/MoodMixer2.png';
import MoodMixerPicture3 from '../assets/MoodMixer3.png';
import RshellPicture from '../assets/Rshell.png';
import Project from './Project';

const personalProjects = [
	{
		title: 'Mood Mixer',
		description: (
			<>
				Mood Mixer is a web application that automatically creates Spotify
				playlists with songs selected based on user’s choice of moods and music
				genres. All playlists created by Mood Mixer are automatically saved in
				the user's account. <br /> <br /> To develope Mood Mixer, I used React
				for the front-end. Furthermore, Spotify Web API library was to used to
				make requests to accomplish the following:
				<ul>
					<li>Securely authenticate Spotify accounts</li>
					<li>Create playlists</li>
					<li>Query songs by music genre</li>
					<li>Analyze songs' sentiment attributes</li>
					<li>Populate playlists with selected songs</li>
				</ul>
			</>
		),
		picturePaths: [MoodMixerPicture1, MoodMixerPicture2, MoodMixerPicture3],
		date: 'December, 2019',
		githubLink: 'https://github.com/johan1505/MoodMixer',
	},
	{
		title: 'TIMI- Time Management Informer',
		description: (
			<>
				TIMI is a website that I developed using Django web-framework and
				PostgreSQL database management system. My goal on developing TIMI was to
				create a useful tool that informs Google Calendar users about their
				time-management habits and, at the same time, provide to them a visual
				representation of those habits. <br /> <br /> TIMI generates summaries
				of how much time a user has spent or will spend per event on his/her
				current week. Data used to generate these summaries is collected from
				user's Google Calendars using Google's OAuth 2.0 protocol for
				authentication and Google Calendar's API. Once a user has created an
				account on the website, he/she can let TIMI start generating summaries
				based on the current week. These summaries get saved in the website's
				database and can be re-accessed or deleted by the user at any given
				time. Furthermore, summaries come with a nice colored-doughnut chart
				that displays the data gathered, this feature was achieved using Char.js
				library.
			</>
		),
		picturePaths: [TIMIPicture1, TIMIPicture2],
		date: 'October, 2019',
		githubLink:
			'https://github.com/johan1505/TIMI-Time-Management-Informer-Website',
	},
	{
		title: 'ThErapy Screening',
		description: (
			<>
				This project is an android app meant to improve the collection of
				information from patients of Child Therapists. I developed this app
				using Android Studio, Java, and Google's Firebase. <br /> <br />
				The app lets a therapist sign in with his/her Google account, this
				authentication functionality was accomplished using Google's Firebase
				API. Once the therapist is signed in, the app can be used to gathered
				information (names, ages, sexes, concerns) from the therapists' patients
				as well ass their answers to a questionnarie that is composed of two
				portions, one for the parent of the child and one for the child. <br />
				<br />
				After the patients finish inputting their information and answering to
				the questionnarie, the app generates a report with the information
				gathered and sends the report to the email of the therapist for him to
				compare and contrast the patients' answers before, during, or after the
				appointment.
			</>
		),
		picturePaths: [TherapyScreeningPicture],
		date: 'June, 2019',
		githubLink: 'https://github.com/johan1505/ThErapy-Screening',
	},
];

const SchoolProjects = [
	{
		title: 'Magnitie - Metal Finder Robot',
		description: (
			<>
				This is my final project for the Intro to Embedded systems course that I
				took during my second year. For this project, I developed a four-wheel
				motorized robot called Magnitie that is capable of detecting small-size
				metal objects as it travels in a straight direction. <br /> <br />
				Magnitie keeps count of the number of metal objects that finds as it
				travels, and it stops if it detects a potential obstacle in front of it.
				Magnitie has incorporated an ATMega 1284 micro-controller to control its
				entire functionality, two DC motors that enable it to move, an inductive
				proximity sensor to detect metals, and an ultrasonic sensor to detect
				obstacles. The software for this project was implemented using Atmel
				Studio, C programming language, and concurrnet-synchronous state
				machines.
			</>
		),
		picturePaths: [
			MagnitiePicture1,
			MagnitiePicture2,
			MagnitiePicture3,
			MagnitiePicture4,
			MagnitiePicture5,
		],
		date: 'May, 2019',
		githubLink: 'https://github.com/johan1505/Magnitie--The-Metal-Finder-Robot',
	},
	{
		title: 'Rshell',
		description: (
			<>
				This is a project on which I worked with a partner on the development of
				a C++ program that simulates the functionality of a command terminal
				program. The main concepts that we applied on this project were
				object-oriented programming principles and design patterns. We achieved
				the proper functionality of the program by parsing and analyzing user
				inputted linux commands, decomposing the inputted commands into
				appropiate objects that formed a tree composite object, and executing
				those objects in a recursive manner using system calls. <br />
				This program was progressively developed, adding extra features after
				unit testing the behavior of individual components by using the Google
				Test Framework for C++ and integration testing of the whole system using
				bash I/0 redirection.
			</>
		),
		picturePaths: [RshellPicture],
		date: 'May, 2019',
		githubLink:
			'https://github.com/johan1505/CS100---Rshell-Project/tree/master/spring-2019-assignment-cs100_ja_assn1',
	},
];

export default function Portfolio() {
	return (
		<Grid container spacing={10}>
			<Grid item container spacing={10}>
				<Grid item container justify='center'>
					<Typography variant='h4'>Personal Projects</Typography>
				</Grid>
				{personalProjects.map((project, index) => (
					<Grid item>
						<Project
							key={index}
							title={project.title}
							description={project.description}
							picturePaths={project.picturePaths}
							date={project.date}
							githubLink={project.githubLink}
						/>
					</Grid>
				))}
			</Grid>
			<Grid item container spacing={10}>
				<Grid item container justify='center'>
					<Typography variant='h4'>School Projects</Typography>
				</Grid>
				{SchoolProjects.map((project, index) => (
					<Grid item>
						<Project
							key={index}
							title={project.title}
							description={project.description}
							picturePaths={project.picturePaths}
							date={project.date}
							githubLink={project.githubLink}
						/>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
}
