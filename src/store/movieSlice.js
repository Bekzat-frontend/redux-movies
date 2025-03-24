import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const BASE_URL =
  "https://movielist-eb724-default-rtdb.firebaseio.com/MovieList.json";

export const getAllMovies = createAsyncThunk("movies/getAll", async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    return data
      ? Object.entries(data).map(([id, movie]) => ({ id, ...movie }))
      : [];
  } catch (error) {
    console.error(error.message);
  }
});

export const addMovie = createAsyncThunk(
  "movies/addMovie",
  async (movieData) => {
    try {
      const response = await axios.post(BASE_URL, movieData);
      return { id: response.data.name, ...movieData };
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (id) => {
    try {
      await axios.delete(
        `https://movielist-eb724-default-rtdb.firebaseio.com/MovieList/${id}.json`
      );
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);

export const toggleFavorite = createAsyncThunk(
  "movies/toggleFavorite",
  async ({ id, isFavorite }) => {
    try {
      await axios.patch(
        `https://movielist-eb724-default-rtdb.firebaseio.com/MovieList/${id}.json`,
        { isFavorite: !isFavorite }
      );
      return { id, isFavorite: !isFavorite };
    } catch (error) {
      console.log(error);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter(
          (movie) => movie.id !== action.payload
        );
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        const movie = state.movies.find(
          (movie) => movie.id === action.payload.id
        );
        if (movie) movie.isFavorite = action.payload.isFavorite;
      });
  },
});

export default movieSlice.reducer;
