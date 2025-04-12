import { combineSlices } from "@reduxjs/toolkit";
import movieReducer from './search-movie/MovieSlice'
import loginReducer from './login-slice/LoginSlice';
import watchListReducer from './search-movie/WatchListSlice'
export default combineSlices({
    movies: movieReducer,
    login: loginReducer,
    watchlist:watchListReducer
});

