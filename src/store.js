import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./features/watchlist/watchlistSlice";

const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("watchlist", JSON.stringify(state.watchlist.items));
});

export default store;
