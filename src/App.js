import "./movie/movie.css";
import Upcoming from "./Upcoming";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="nav">
        <Link to="/Upcoming">Upcoming</Link>
      </nav>
      <Routes>
        <Route path="Upcoming" element={<Upcoming />}></Route>
      </Routes>
    </>
  );
}

export default App;
