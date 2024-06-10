import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, prevStep, setStep } from '../store/appSlice';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { activeStep, images } = useSelector((state) => state.app);
    const maxSteps = images.length;

    const handleNext = () => {
        dispatch(nextStep());
    };

    const handleBack = () => {
        dispatch(prevStep());
    };

    const handleStepChange = (step) => {
        dispatch(setStep(step));
    };

    return (
        <Box sx={{
            maxWidth: 1500, flexGrow: 1, display: 'flex', flexDirection: 'column',
            margin: '1px auto',
        }}>

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 350,
                                    display: 'block',
                                    maxWidth: 1300,
                                    overflow: 'hidden',
                                    width: '100%',
                                    borderRadius: '10px'
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                sx={{
                    background: 'transparent',
                }}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                classes={{ dots: 'stepper-dots' }}
                nextButton={
                    <Button
                        sx={{
                            color: '#8cca19'
                        }}
                        size="small"
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
                    <Button size="small" onClick={handleBack}
                        sx={{
                            color: '#8cca19'
                        }} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default Carousel;
