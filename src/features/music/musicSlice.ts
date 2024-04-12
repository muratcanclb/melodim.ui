import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Music } from "../../features/music/types";

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

// export const fetchMusic = createAsyncThunk("music/fetchMusic", () => {
//   const res = fetch(
//     "https://66141b0b2fc47b4cf27b9bf3.mockapi.io/api/music"
//   ).then((data) => data.json());
//   return res;
// });

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    getMusicStart(state) {
      state.loading = true;
      state.error = "null";
    },
    getMusicSuccess(state, action: PayloadAction<Music[]>) {
      state.loading = false;
      state.musicList = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { getMusicSuccess,getMusicStart } = musicSlice.actions;
export const userSelector = (state: RootState) => state.musicReducer;
export default musicSlice.reducer;
