import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosCoins = createAsyncThunk(
  "coins/axiosCoins",
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=true"
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const coinsSlice = createSlice({
  name: "coins",
  initialState: {
    coins: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [axiosCoins.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [axiosCoins.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.coins = action.payload;
    },
    [axiosCoins.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const {} = coinsSlice.actions;

export default coinsSlice.reducer;
