import { createSlice } from '@reduxjs/toolkit';
import { SLICES } from './slices';

const spinnerSlice = createSlice({
    name: SLICES.SPINNER,
    initialState: {
        isShown: false
    },
    reducers: {
        showSpinner: (state) => {
            state.isShown = true;
        },
        hideSpinner: (state) => {
            state.isShown = false;
        }
    }
});

export const { showSpinner, hideSpinner } = spinnerSlice.actions;

export const isSpinnerShown = (state: { [SLICES.SPINNER]: { isShown: boolean } }) => state[SLICES.SPINNER].isShown;

export default spinnerSlice.reducer;
