import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

const favoriteSlice = createSlice({
    name: 'favorite', 
    initialState: {
        favoriteList: JSON.parse(localStorage.getItem('favorite') || '[]'),
    },
    reducers: {
        addToFevorite: (state, action) => {
            state.favoriteList.push(action.payload);
            localStorage.setItem('favorite', JSON.stringify(state.favoriteList));
        },
        removeFromFevorite: (state, action) => {
            state.favoriteList = state.favoriteList.filter((id) => id !== action.payload);
            localStorage.setItem('favorite', JSON.stringify(state.favoriteList));
        }
    }
})

export const {addToFevorite, removeFromFevorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;