import "../movie.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";

const Movie = ({ item }) => {
  const [loading, setLoading] = useState(false);
  const { title, release_date, original_language, id, poster_path } = item;

  useEffect(() => {
    setLoading(true);
  }, [item]);

  return loading ? (
    <>
      <NavLink className="movie_card" to={`/movies/${id}`}>
        <div className="image">
          <img
            className="img"
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
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
  ) : (
    <Spinner />
  );
};
export default Movie;
