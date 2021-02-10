import { createSlice } from '@reduxjs/toolkit';
import { IPopupState } from 'Core/Interfaces';

const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        isShown: false
    },
    reducers: {
        togglePopup: (state) => {
            state.isShown = !state.isShown;
        }
    }
});

export const { togglePopup } = popupSlice.actions;

export const isPopupShown = (state: { popup: IPopupState }) => state.popup.isShown;

export default popupSlice.reducer;
