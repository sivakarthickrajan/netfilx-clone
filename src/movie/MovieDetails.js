import React, { useState } from "react";
import Actor from "../Actors";

import "../moviedetails.css";
import SimilarMovies from "../SimilarMovies";
const MovieDetails = ({ moviedata }) => {
  const hrs = Math.floor(moviedata.runtime / 60);
  const mins = moviedata.runtime % 60;

  return (
    <>
      <img
        className="bg_image"
        src={`https://image.tmdb.org/t/p/original/${moviedata.backdrop_path}`}
        alt=""
      ></img>
      <div className="aboutMovie">
        <div className="aboutMovie_top">
          <div className="aboutMovie_left">
            <img
              className="thumbnail_image"
              src={`https://image.tmdb.org/t/p/w300/${moviedata.poster_path}`}
              alt=""
            ></img>
          </div>
          <div className="aboutMovie_right">
            <h1 style={{ fontFamily: "Josefin Sans" }}>
              {moviedata.original_title}
            </h1>
            <div className="aboutMovie_runtime">
              <h6 style={{ fontStyle: "italic" }}>
                {hrs}Hrs {mins}Mins
              </h6>
              <div className="genres">
                <h5
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  {moviedata.genres?.length > 0 &&
                    moviedata.genres.map((genre) => {
                      return <div>{genre.name}</div>;
                    })}
                </h5>
              </div>
            </div>

            <h2>{moviedata.tagline}</h2>

            <div>{moviedata.overview}</div>
            <div>Budget : $ {moviedata.budget}</div>

            <Actor moviedata={moviedata} />
          </div>
        </div>
        <div className="aboutMovie_bottom">
          <SimilarMovies />
        </div>
      </div>
    </>
  );
};
export default MovieDetails;
