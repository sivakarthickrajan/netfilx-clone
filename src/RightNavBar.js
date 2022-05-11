import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./moviedetails.css";
import MovieDetails from "./movie/MovieDetails";
import Actor from "./Actors";
import SimilarMovies from "./SimilarMovies";
const RightNavBar = ({ moviedetails }) => {
  return (
    <>
      <div className="rightBar">
        <Link className="rightbar_details" to="">
          About This Movie
        </Link>
        <Link className="rightbar_details" to="actors">
          Actors
        </Link>
        <Link className="rightbar_details" to="/aboutmovie">
          Videos
        </Link>
        <Link className="rightbar_details" to="similarmovies">
          Similar Movies
        </Link>
        <Link className="rightbar_details" to="/aboutmovie">
          Reviews
        </Link>
      </div>
      <Routes>
        <Route path="" element={<MovieDetails moviedata={moviedetails} />} />
        <Route path="actors" element={<Actor moviedata={moviedetails} />} />
        <Route path="similarmovies" element={<SimilarMovies />} />
      </Routes>
    </>
  );
};
export default RightNavBar;
