import { createSlice } from "@reduxjs/toolkit";

//default value
const initialState = {
    isLoading: false,
    error: null,
    watchlist: [],
    Count: 8,

};

const watchListSlice = createSlice({
    name: "watchlist-slice",
    initialState,
    reducers: {
        addToWatchlist: (state, action) => {
            const existing = state.watchlist.find((m) => m.imdbID === action.payload.imdbID);
            if (!existing) {
                state.watchlist.push(action.payload);
            }
        },
        removeFromWatchlist: (state, action) => {
            state.watchlist = state.watchlist.filter((m) => m.imdbID !== action.payload);
        },
        incrementCount: (state, action) => {
            state.Count += action.payload || 4;
        },
        resetCount: (state) => {
            state.Count = 8;
        },
        clearWatchlist: (state) => {
            state.watchlist = [];
        },
        setWatchList:(state,action)=>{
            state.watchlist = action.payload;
        }
    },
});
export const { addToWatchlist, removeFromWatchlist, incrementCount, resetCount, clearWatchlist ,setWatchList} = watchListSlice.actions;

export default watchListSlice.reducer;
