import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import MusicList from "./pages/music/musicList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/music-list" element={<MusicList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
