import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers, getCamperById } from '../api/campersApi';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getCampers();
      return data.items ?? data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchById',
  async (id, thunkAPI) => {
    try {
      return await getCamperById(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  current: null,
  isCurrentLoading: false,
  currentError: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    clearCurrentCamper(state) {
      state.current = null;
      state.currentError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // List of all campers
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        // Reset previous results so stale data never lingers while a new
        // filtered request is in flight.
        state.items = [];
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Something went wrong while loading campers.';
      })
      // Single camper details
      .addCase(fetchCamperById.pending, (state) => {
        state.isCurrentLoading = true;
        state.currentError = null;
        state.current = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isCurrentLoading = false;
        state.current = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isCurrentLoading = false;
        state.currentError = action.payload ?? 'Could not load this camper.';
      });
  },
});

export const { clearCurrentCamper } = campersSlice.actions;
export default campersSlice.reducer;
