import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import api, { api_key } from "../axios";

const GetMovieDetails = () => {
  const { movieid } = useParams();
  console.log("movie id ", movieid);

  const [data, setData] = useState([]);
  const apiUpcoming = api.get(`/movie/${movieid}`, {
    params: { api_key },
  });

  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setData(response.data);
    };
    data();
  }, [movieid]);

  return <MovieDetails moviedata={data} />;
};
export default GetMovieDetails;
