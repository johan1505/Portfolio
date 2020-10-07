import React from 'react';
import Button from '@material-ui/core/Button';
import {
	useTheme,
	makeStyles,
	createStyles,
	Theme,
} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

interface Props {
	picturePaths: string[];
	alt: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		image: {
			height: 350,
			width: 500,
			borderWidth: 1,
			borderStyle: 'solid',
		},
	})
);
export default function ImageSlider({ picturePaths, alt }: Props) {
	const classes = useStyles();
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = picturePaths.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};
	return (
		<div>
			<img src={picturePaths[activeStep]} alt={alt} className={classes.image} />
			{maxSteps > 1 && (
				<MobileStepper
					steps={maxSteps}
					position='static'
					variant='text'
					activeStep={activeStep}
					nextButton={
						<Button
							size='small'
							onClick={handleNext}
							disabled={activeStep === maxSteps - 1}
						>
							Next
							{theme.direction === 'rtl' ? (
								<KeyboardArrowLeft />
							) : (
								<KeyboardArrowRight />
							)}
						</Button>
					}
					backButton={
						<Button
							size='small'
							onClick={handleBack}
							disabled={activeStep === 0}
						>
							{theme.direction === 'rtl' ? (
								<KeyboardArrowRight />
							) : (
								<KeyboardArrowLeft />
							)}
							Back
						</Button>
					}
				/>
			)}
		</div>
	);
}
