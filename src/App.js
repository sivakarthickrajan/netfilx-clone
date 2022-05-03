import "./movie.css";
import Upcoming from "./NavBar/Upcoming";
import Toprated from "./NavBar/Toprated";
import Nowplaying from "./NavBar/Nowplaying";
import Popular from "./NavBar/Popular";
import Navbar from "./NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home, Homenowplaying, Homepopular, Hometoprated } from "./NavBar/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="Upcoming/*" element={<Upcoming />}></Route>
        <Route path="Toprated/*" element={<Toprated />}></Route>
        <Route path="Nowplaying/*" element={<Nowplaying />}></Route>
        <Route path="Popular/*" element={<Popular />}></Route>
        <Route
          path="/"
          element={
            <div className="home-container">
              <div className="home_titles top">
                Now Playing
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="white"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
              <Homenowplaying />

              <div className="home_titles">
                Top Rated
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="white"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
              <Hometoprated />

              <div className="home_titles">
                Popular
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="white"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
              <Homepopular />

              <div className="home_titles">
                Upcoming
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="white"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
              <Home />
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
