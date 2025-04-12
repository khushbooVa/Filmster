import { createAsyncThunk } from "@reduxjs/toolkit";
import { DETIALED_MOVIE, SEARCH_MOVIE } from "../../actions/action";
import axios from "axios";

export const MovieSearchFunc = createAsyncThunk(
  SEARCH_MOVIE.search_movie,
  async (data, { rejectWithValue }) => {
    const { searchTerm, page } = data;

    try {
      const response = await axios.get('https://www.omdbapi.com/', {
        params: {
          apikey: import.meta.env.VITE_OMDB_API_KEY,
          s: searchTerm,
          page,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);



export const getMovieDetails = createAsyncThunk(
  DETIALED_MOVIE.detailed_movie,
  async (id, { rejectWithValue }) => {

    try {
      const response = await axios.get('https://www.omdbapi.com/', {
        params: {
          apikey: import.meta.env.VITE_OMDB_API_KEY,
          i	:id,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);
