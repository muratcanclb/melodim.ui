import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../features/music/musicSlice";
import { api } from "../features/music/api";
export const store = configureStore({
  reducer: {
    musicReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
