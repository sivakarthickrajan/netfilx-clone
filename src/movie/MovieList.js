import Movie from "./Movie";
const MovieList = ({ data }) => {
  return (
    <div className="movie-container">
      {data.map((item) => {
        return <Movie item={item} />;
      })}
    </div>
  );
};
export default MovieList;
