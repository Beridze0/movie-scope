import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("watchlist")) || [],
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addMovie(state, action) {
      const isInWatchlist = state.items.some(
        (item) => item.id === action.payload.id
      );
      if (isInWatchlist) return;
      state.items.push(action.payload);
    },
    removeMovie(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export default watchlistSlice.reducer;
export const { addMovie } = watchlistSlice.actions;
