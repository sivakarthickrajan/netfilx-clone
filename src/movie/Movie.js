import "../movie.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Movie = ({ item }) => {
  const { title, release_date, original_language, id } = item;
  const [clickid, setClickid] = useState();

  return (
    <>
      <NavLink className="movie_card" to={`/movies/${id}`}>
        <div className="image">
          <img
            className="img"
            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            alt=""
          ></img>
        </div>

        <div className="movieDetailstext">
          <div className="title">{title}</div>
          <div className="text rel_date">Released On: {release_date}</div>
          <div className="text lang">Lanugage: {original_language}</div>
        </div>
      </NavLink>
    </>
  );
};
export default Movie;
