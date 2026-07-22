import { createSlice } from "@reduxjs/toolkit";

export const PAGE_SIZE = 4;

const initialState = {
  location: "",
  form: "",
  engine: "",
  transmission: "",
  visibleCount: PAGE_SIZE,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setForm(state, action) {
      state.form = action.payload;
    },
    setEngine(state, action) {
      state.engine = action.payload;
    },
    setTransmission(state, action) {
      state.transmission = action.payload;
    },
    applyFilters(state) {
      state.visibleCount = PAGE_SIZE;
    },
    clearFilters() {
      return initialState;
    },
    loadMore(state) {
      state.visibleCount += PAGE_SIZE;
    },
  },
});

export const {
  setLocation,
  setForm,
  setEngine,
  setTransmission,
  applyFilters,
  clearFilters,
  loadMore,
} = filtersSlice.actions;

export default filtersSlice.reducer;
