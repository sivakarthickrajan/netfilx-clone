import React from "react";
import { Link } from "react-router-dom";

const ActorDetails = ({ actordetail, actorcounter }) => {
  const { profile_path, character, original_name, id } = actordetail;
  const arrayOfNumbers = [20, 30, 40, 50, 70, 80, 90, 100, 200, 300, 400, 500]; //splice make changes to actual array

  const removedNumbers = arrayOfNumbers.splice(5, 1, 100); // removedNumbers consist of items removed
  console.log(arrayOfNumbers);
  console.log(removedNumbers);
  return (
    <>
      <Link to={`/cast_name/${id}`}>
        <div className="actor_card">
          <img
            className="dp_image"
            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
            alt=""
          ></img>
          <h5 style={{ textDecoration: "none" }}>{original_name}</h5>
          <h6 style={{ font: "italic" }}>as {character}</h6>
        </div>
      </Link>
    </>
  );
};
export default ActorDetails;
