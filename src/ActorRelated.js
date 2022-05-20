import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api, { api_key } from "./axios";
import MovieList from "./movie/MovieList";
import Spinner from "./Spinner";

const ActorRelated = () => {
  const [loading, setLoading] = useState(true);
  const { cast_name } = useParams();

  const [data, setData] = useState([]);
  const apiUpcoming = api.get(`/discover/movie?with_cast=${cast_name}`, {
    params: { api_key },
  });
  useEffect(() => {
    setLoading(true);
  }, [cast_name]);

  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setData(response.data.results);

      setLoading(false);
    };
    data();
  }, [cast_name]);
  return loading ? <Spinner /> : <MovieList data={data} />;
};
export default ActorRelated;
