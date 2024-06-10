import { createSlice } from "@reduxjs/toolkit";
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';

const initialState = {
    loading: false,
    activeStep: 0,
    images: [
        {
            label: 'San Francisco – Oakland Bay Bridge, United States',
            imgPath: carousel1,
        },
        {
            label: 'Bird',
            imgPath: carousel2,
        },
        {
            label: 'Bali, Indonesia',
            imgPath: carousel3,
        },
    ],
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        nextStep(state) {
            if (state.activeStep < state.images.length - 1) {
                state.activeStep += 1;
            }
        },
        prevStep(state) {
            if (state.activeStep > 0) {
                state.activeStep -= 1;
            }
        },
        setStep(state, action) {
            state.activeStep = action.payload;
        },
    }
});

export const { nextStep, prevStep, setStep } = appSlice.actions;
export default appSlice.reducer;