import React from "react";
import "./movie.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Movie = ({ item }) => {
  console.log("Movie Card", item);
  const {
    original_title,
    poster_path,
    title,
    overview,
    release_date,
    original_language,
  } = item;

  return (
    <div className="container">
      <div className="movie_card">
        <div className="thumb_nail">
          <img
            className="img"
            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            alt=""
          />
        </div>
        <div className="title">{original_title}</div>
        <div className="rel_date">Release Date: {release_date}</div>
        <div className="lang">Language {original_language}</div>
      </div>
    </div>
  );
};
export default Movie;
