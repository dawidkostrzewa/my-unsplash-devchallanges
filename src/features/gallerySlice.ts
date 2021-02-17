import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllCloudinaryPhotos } from 'Core/Main.connector';
import { SLICES } from './slices';

export const fetchPhotos = createAsyncThunk('gallery/fetchAllCloudinaryPhotos', async () => {
    const response = await fetchAllCloudinaryPhotos();
    return response.resources;
});

const gallerySlice = createSlice({
    name: SLICES.GALLERY,
    initialState: {
        photos: [],
        isLoading: false
    },
    reducers: {},
    extraReducers: {
        [fetchPhotos.pending.toString()]: (state, action) => {
            state.isLoading = true;
        },
        [fetchPhotos.fulfilled.toString()]: (state, action) => {
            state.photos = action.payload;
            state.isLoading = false;
        }
    }
});

export const galleryPhotos = (state: any) => state[SLICES.GALLERY].photos;
export const isGalleryLoading = (state: any) => state[SLICES.GALLERY].isLoading;

export default gallerySlice.reducer;
