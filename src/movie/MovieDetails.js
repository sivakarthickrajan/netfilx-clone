import React, { useState } from "react";

import "../moviedetails.css";
const MovieDetails = ({ moviedetails }) => {
  const hrs = Math.floor(moviedetails.runtime / 60);
  const mins = moviedetails.runtime % 60;

  return (
    <>
      <img
        className="bg_image"
        src={`https://image.tmdb.org/t/p/original/${moviedetails.backdrop_path}`}
        alt=""
      ></img>
      <div className="aboutMovie">
        <div className="aboutMovie_left">
          <img
            className="thumbnail_image"
            src={`https://image.tmdb.org/t/p/w300/${moviedetails.poster_path}`}
            alt=""
          ></img>
        </div>

        <div className="aboutMovie_right">
          <h1 style={{ fontFamily: "Josefin Sans" }}>
            {moviedetails.original_title}
          </h1>
          <div className="aboutMovie_runtime">
            <h6 style={{ fontStyle: "italic" }}>
              {hrs}Hrs {mins}Mins
            </h6>
            <h5 style={{ display: "flex", gap: "10px" }}>
              {moviedetails.genres?.length > 0 &&
                moviedetails.genres.map((genre) => {
                  return <div>{genre.name},</div>;
                })}
            </h5>
          </div>

          <h2>{moviedetails.tagline}</h2>

          <div>{moviedetails.overview}</div>
          <div>Budget : $ {moviedetails.budget}</div>
        </div>
      </div>
    </>
  );
};
export default MovieDetails;
