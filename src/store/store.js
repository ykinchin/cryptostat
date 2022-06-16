import { configureStore } from "@reduxjs/toolkit";

import coinsSlice from "./slices/coinsSlice";
import trendingSlice from "./slices/trendingSlice";

export default configureStore({
  reducer: {
    coins: coinsSlice,
    trending: trendingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
