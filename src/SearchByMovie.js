import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api, { api_key } from "./axios";
import MovieList from "./movie/MovieList";
import Spinner from "./Spinner";

const SearchByMovie = ({ search_input }) => {
  const [loading, setLoading] = useState(true);
  const { searchinput } = useParams();

  const [data, setData] = useState([]);
  const apiUpcoming = api.get(`/search/movie?query=${searchinput}`, {
    params: { api_key },
  });
  useEffect(() => {
    setLoading(true);
  }, [searchinput]);

  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setData(response.data.results);

      setLoading(false);
    };
    data();
  }, [searchinput]);
  return loading ? <Spinner /> : <MovieList data={data} />;
};
export default SearchByMovie;
