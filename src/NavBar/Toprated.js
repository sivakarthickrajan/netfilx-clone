import { useEffect, useState } from "react";
import MovieList from "../movie/MovieList";
import api, { api_key } from "../axios";

const Toprated = () => {
  const [data, setData] = useState([]);
  const apiUpcoming = api.get("/movie/top_rated", { params: { api_key } });
  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setData(response.data.results);
    };
    data();
  }, []);
  return <MovieList data={data} />;
};
export default Toprated;
