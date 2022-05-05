import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api, { api_key } from "../axios";
import MovieDetails from "./MovieDetails";

const GetMovieDetails = () => {
  const { movieid } = useParams();
  console.log("movie id ", movieid);
  const [data, setData] = useState([]);
  const apiUpcoming = api.get(`/movie/${movieid}`, {
    params: { api_key },
  });

  useEffect(() => {
    console.log("Inside useeffect", movieid);
    console.log("api calling ", apiUpcoming);
    const data = async () => {
      const response = await apiUpcoming;
      setData(response.data);
    };
    data();
  }, [movieid]);
  console.log("movie details", data);

  return <MovieDetails moviedetails={data} />;
};
export default GetMovieDetails;
