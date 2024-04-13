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
      action.payload?.map((i) => {
        const date = new Date();

        const hour = date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        });
        console.log(hour, "hour");
        const cDate = new Date(i.createdDate);
        const year = cDate.getFullYear();
        const value = {
          name: i.name,
          type: i.type,
          isFavorite: i.isFavorite,
          singer: i.singer,
          isDeleted: i.isDeleted,
          favoriteId: i.favoriteId,
          lyrics: i.lyrics,
          createdDate: year,
          id: i.id,
          img: i.img,
          hour: hour,
        };
        state.musicList.push(value);
      });
    },
  },
  extraReducers: () => {},
});

export const { getMusicSuccess, getMusicStart } = musicSlice.actions;
export const userSelector = (state: RootState) => state.musicReducer;
export default musicSlice.reducer;
