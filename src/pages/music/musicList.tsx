import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";

import {
  getMusicSuccess,
  getMusicStart,
} from "../../features/music/musicSlice";
import { useGetMusicQuery } from "../../features/music/api";
import "./style.css";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function musicList() {
  const { data, error, isLoading } = useGetMusicQuery();
  const musicListData = useAppSelector((state) => state.musicReducer.musicList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMusicSuccess(data));
  }, [data, error, dispatch]);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">Başlık</TableCell>
              <TableCell align="left">Albüm</TableCell>
              <TableCell align="right">Çıkış Tarihi</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {musicListData?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="right">{row.createdDate}</TableCell>
                <TableCell align="right">
                  <Button color="success">
                    <PlayArrowIcon />
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button color="error">
                    {row.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default musicList;
