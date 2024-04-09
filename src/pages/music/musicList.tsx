import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { fetchMusic, userSelector } from "../../features/music/musicSlice";

function musicList() {
  const musicListData = useAppSelector((state) => state.musicReducer.musicList);
  const selectedMusic = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchMusic());
  }, []);
  function handleFetchUser() {
    dispatch(fetchMusic());
  }
  return (
    <div>
      {musicListData?.map((music) => (
        <li key={music.id}>
          {music.id} | {music.name} | {music.singer}
        </li>
      ))}
      <button className="btn" onClick={handleFetchUser}>
        Fetch
      </button>
    </div>
  );
}
export default musicList;
