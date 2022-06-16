import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosTrending = createAsyncThunk(
  "trending/axiosTrending",
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const data = await response.data.coins;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const trendingSlice = createSlice({
  name: "trending",
  initialState: {
    trending: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [axiosTrending.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [axiosTrending.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.trending = action.payload;
    },
    [axiosTrending.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const {} = trendingSlice.actions;

export default trendingSlice.reducer;
