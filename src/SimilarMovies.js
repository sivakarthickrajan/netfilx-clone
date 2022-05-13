import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api, { api_key } from "./axios";
import MovieList from "./movie/MovieList";
const SimilarMovies = () => {
  const { movieid } = useParams();
  const [data, setData] = useState([]);
  const apiUpcoming = api.get(`/movie/${movieid}/similar`, {
    params: { api_key },
  });
  useEffect(() => {
    console.log("inside useeffect");
    const data = async () => {
      const response = await apiUpcoming;
      console.log("response", response);
      setData(response.data.results);
    };
    data();
  }, [movieid]);
  const slicedata = data.slice(0, 5);
  return (
    <>
      <div className="similartitles">SimilarMovies</div>
      <MovieList data={slicedata} />
    </>
  );
};
export default SimilarMovies;
