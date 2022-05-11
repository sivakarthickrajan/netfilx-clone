import "./movie.css";
import Upcoming from "./NavBar/Upcoming";
import Toprated from "./NavBar/Toprated";
import Nowplaying from "./NavBar/Nowplaying";
import Popular from "./NavBar/Popular";
import Navbar from "./NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home, Homenowplaying, Homepopular, Hometoprated } from "./NavBar/Home";
import GetMovieDetails from "./movie/GetMovieDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/*" element={<NotFound />}></Route> */}

        <Route path="Upcoming" element={<Upcoming />}></Route>
        <Route path="Toprated" element={<Toprated />}></Route>
        <Route path="Nowplaying" element={<Nowplaying />}></Route>
        <Route path="Popular" element={<Popular />}></Route>
        <Route path="movies/:movieid/*" element={<GetMovieDetails />}></Route>

        <Route
          exact
          path="/"
          element={
            <div className="home-container">
              <div className="home_titles top">Now Playing = </div>
              <Homenowplaying />

              <div className="home_titles">Top Rated</div>
              <Hometoprated />

              <div className="home_titles">Popular</div>
              <Homepopular />

              <div className="home_titles">Upcoming</div>
              <Home />
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
