import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    randomNumber: 0,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTopRatedVideo: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingVideo: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addRandomNumber: (state, action) => {
      state.randomNumber = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpcomingVideo,
  addTopRatedVideo,
  addRandomNumber
} = moviesSlice.actions;
export default moviesSlice.reducer;
