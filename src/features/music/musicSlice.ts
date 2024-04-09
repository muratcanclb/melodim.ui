import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Music {
  name: string;
  type: string;
  isFavorite: boolean;
  singer: string;
  isDeleted: boolean;
  favoriteId: string;
  lyrics: string;
  createdDate: Date;
  id: string;
}
export interface MusicState {
  loading: boolean;
  musicList: Array<Music>;
  error: string | undefined;
}
const initialState: MusicState = {
  musicList: [],
  loading: false,
  error: undefined,
};

export const fetchMusic = createAsyncThunk("music/fetchMusic", () => {
  const res = fetch(
    "https://66141b0b2fc47b4cf27b9bf3.mockapi.io/api/music"
  ).then((data) => data.json());
  return res;
});

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMusic.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
        fetchMusic.fulfilled,
      (state, action: PayloadAction<Array<Music>>) => {
        state.loading = false;
        state.musicList = action.payload;
      }
    );
    builder.addCase(fetchMusic.rejected, (state, action) => {
      state.loading = false;
      state.musicList = [];
      state.error = action.error.message;
    });
  },
});

export const userSelector = (state: RootState) => state.musicReducer;
export default musicSlice.reducer;
