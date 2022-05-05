import React from "react";
const MovieDetails = ({ moviedetails }) => {
  return (
    <div className="aboutMovie">
      <div className="aboutMovie_left">
        <img
          className="detailImage"
          src={`https://image.tmdb.org/t/p/w500/${moviedetails.backdrop_path}`}
          alt=""
        ></img>
        <div className="moviedetails_tagline">{moviedetails.tagline}</div>
      </div>
      <div className="aboutMovie_right">
        <div>{moviedetails.original_title}</div>
        <div>{moviedetails.overview}</div>
        <div>Budget : $ {moviedetails.budget}</div>
        <div>Category : {moviedetails.belongs_to_collection}</div>
      </div>
    </div>
  );
};
export default MovieDetails;
