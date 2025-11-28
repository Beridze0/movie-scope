import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addMovie(state, action) {
      state.items.push(action.payload);
    },
    removeMovie(state, action) {
      state.items.filter((item) => item.id === action.payload);
    },
  },
});

export default watchlistSlice.reducer;
export const { addMovie } = watchlistSlice.actions;
