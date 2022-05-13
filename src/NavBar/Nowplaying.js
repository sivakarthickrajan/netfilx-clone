import { useEffect, useState } from "react";
import MovieList from "../movie/MovieList";
import api, { api_key } from "../axios";
import Spinner from "../Spinner";

const Nowplaying = () => {
  const [data, setData] = useState([]);
  const apiUpcoming = api.get("/movie/now_playing", { params: { api_key } });
  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setData(response.data.results);
    };
    data();
  }, []);
  return data ? <MovieList data={data} /> : <Spinner />;
};
export default Nowplaying;
