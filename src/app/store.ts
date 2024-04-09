import { configureStore } from '@reduxjs/toolkit';
import musicReducer from '../features/music/musicSlice'
export const store = configureStore({
  reducer: {
    musicReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;