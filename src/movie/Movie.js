import "../movie.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, NavLink } from "react-router-dom";
import MovieSelected from "./MovieSelected";

const Movie = ({ item }) => {
  const { title, release_date, original_language, id } = item;

  return (
    <>
      <NavLink className="movie_card" to={`MovieSelected/${id}`}>
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
      <Routes>
        <Route
          path="MovieSelected/:movieid"
          element={<MovieSelected />}
        ></Route>
      </Routes>
    </>
  );
};
export default Movie;
