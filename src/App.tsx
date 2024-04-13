import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import MusicList from "./pages/music/musicList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2196f3",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/music-list" element={<MusicList />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
