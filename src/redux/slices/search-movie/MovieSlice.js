import { createSlice } from "@reduxjs/toolkit";
import { getMovieDetails, MovieSearchFunc } from "../../thunk/movie/MovieThunk";

//default value
const initialState = {
  movies: [],
  isLoading: false,
  error: null,
  totalResults: 0,
  movieDetails:{},
  isDetails:false,
  watchlist:[]
};

const searchMovieSlice = createSlice({
  name: "movie-slice",
  initialState,
  reducers: {
    clearMovies: (state) => {
      state.movies = [];
      state.totalResults = 0;
      state.error = null;
    },

    detailedMovie: (state,action) => {
      state.isDetails=action.payload.status
    },
  },
  extraReducers(builder) {
    builder
      // Get all movies
      .addCase(MovieSearchFunc.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(MovieSearchFunc.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = [...state.movies,...action.payload.Search];
        state.totalResults = action.payload.totalResults;
      })
      .addCase(MovieSearchFunc.rejected, (state, action) => {
        state.isLoading = false;
        state.movies = [];
        state.totalResults = 0;
        state.error = action.error.message;
      })


      //get-movie-details
      .addCase(getMovieDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.movieDetails=action.payload,
        state.isDetails=true,
        state.isLoading = false;
      
      })
      .addCase(getMovieDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })


  },
});
export const { clearMovies,detailedMovie} = searchMovieSlice.actions;

export default searchMovieSlice.reducer;
