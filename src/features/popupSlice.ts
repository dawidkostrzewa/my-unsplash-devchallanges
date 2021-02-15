import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPopupSliceState } from 'Core/Interfaces';
import { SLICES } from './slices';

const popupSlice = createSlice({
    name: SLICES.POPUP,
    initialState: {
        isShown: false,
        popupContent: null
    },
    reducers: {
        hidePopup: (state) => {
            state.isShown = false;
            state.popupContent = null;
        },
        showPopup: (state, action: PayloadAction<JSX.Element>) => {
            state.popupContent = action.payload;
            state.isShown = true;
        }
    }
});

export const { hidePopup, showPopup } = popupSlice.actions;

export const isPopupShown = (state: IPopupSliceState) => state[SLICES.POPUP].isShown;
export const popupContent = (state: IPopupSliceState) => state[SLICES.POPUP].popupContent;

export default popupSlice.reducer;
