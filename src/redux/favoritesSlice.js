import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "travel-trucks:favorites";

const loadFavorites = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveFavorites = (ids) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // Ignore write failures (e.g., storage quota exceeded, private mode, etc.)
  }
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: loadFavorites(),
  },
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      state.ids = state.ids.includes(id)
        ? state.ids.filter((favId) => favId !== id)
        : [...state.ids, id];
      saveFavorites(state.ids);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
