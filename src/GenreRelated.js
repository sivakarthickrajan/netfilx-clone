import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api, { api_key } from "./axios";
import MovieList from "./movie/MovieList";
import Spinner from "./Spinner";

const GenreRelated = () => {
  const [loading, setLoading] = useState(true);
  const { genre } = useParams();

  const [data, setData] = useState([]);
  const apiUpcoming = api.get(`/discover/movie?with_genres=${genre}`, {
    params: { api_key },
  });
  useEffect(() => {
    setLoading(true);
  }, [genre]);

  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setData(response.data.results);

      setLoading(false);
    };
    data();
  }, [genre]);
  return loading ? <Spinner /> : <MovieList data={data} />;
};
export default GenreRelated;
