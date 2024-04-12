import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import imgLogo from "../../assets/images/logo/lg.png";
import {
  getMusicSuccess,
  getMusicStart,
} from "../../features/music/musicSlice";
import { useGetMusicQuery } from "../../features/music/api";
import "./style.css";
function musicList() {
  const { data, error, isLoading } = useGetMusicQuery();
  const musicListData = useAppSelector((state) => state.musicReducer.musicList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMusicSuccess(data));
    console.log(data, "data burdamı");
  }, [data, error, dispatch]);
  return (
    <>
      <div className="banner">
        <img className="logo" src={imgLogo}></img> <p>MELODİM</p>
      </div>
      <div className="banner">
        <table className="song-table">
          <thead>
            <tr>
              <h2>Müzik Listesi Top 20</h2>
            </tr>
            <tr>
              <th>#</th>
              <th>Şarkıcı</th>
              <th>Şarkı</th>
              <th>Albüm</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {musicListData?.map((music: any) => (
              <tr>
                <td><p className="paragrapher">{music.id}</p></td>
                <td>
                  <div className="profile-container">
                    <div className="profile-circle">
                      <img src={music.img} alt="Profile Picture" />
                    </div>
                    <p className="paragrapher">{music.singer}</p>
                    <p className="paragrapher">...</p>
                  </div>
                </td>
                <td><p className="paragrapher">{music.name}</p></td>
                <td><p className="paragrapher">Album 1</p></td>
                <td>
                  <button className="play-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#4CAF50"
                      width="18px"
                      height="18px"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </td>
                <td>
                  <button className="heart-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#000000"
                      width="48px"
                      height="48px"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default musicList;
