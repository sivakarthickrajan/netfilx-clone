import React from "react";
const MovieDetails = ({ moviedetails }) => {
  console.log("backdrop_path", moviedetails.backdrop_path);
  return (
    <div className="aboutMovie">
      <div>
        <img
          className="detailImage"
          src={`https://image.tmdb.org/t/p/original/${moviedetails.backdrop_path}`}
          alt=""
        ></img>

        <div className="aboutMovie_right">
          <div className="aboutmovie_title">
            <h1>{moviedetails.original_title}</h1>
            <h2>{moviedetails.tagline}</h2>
          </div>
          <div className="aboutmovie_details">
            <div>{moviedetails.overview}</div>
            <div>Budget : $ {moviedetails.budget}</div>
            {/* <div>Category : {moviedetails?.belongs_to_collection}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
