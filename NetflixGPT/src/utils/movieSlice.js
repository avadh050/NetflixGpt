import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: null,
        video: null,
    },
    reducers: {
        addMovie(state, action) {
            state.movies = action.payload;
        },
        addVideo(state,action){
            state.video = action.payload;
        }
    }
})

export const {addMovie ,addVideo} = movieSlice.actions;
export default movieSlice.reducer;