import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";
import Movie from "./Movie";
const MovieList = ({ data }) => {
  return (
    <div className="movie_container">
      {data.map((dataitems) => {
        return <Movie item={dataitems} />;
      })}
    </div>
  );
};
export default MovieList;
