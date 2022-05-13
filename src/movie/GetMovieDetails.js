import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import api, { api_key } from "../axios";
import Spinner from "../Spinner";

const GetMovieDetails = () => {
  const [loading, setLoading] = useState(true);
  const { movieid } = useParams();
  console.log("movie id ", movieid);

  const [data, setData] = useState([]);
  const apiUpcoming = api.get(`/movie/${movieid}`, {
    params: { api_key },
  });
  useEffect(() => {
    setLoading(true);
  }, [movieid]);

  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setData(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    data();
  }, [movieid]);

  return loading ? <Spinner /> : <MovieDetails moviedata={data} />;
};
export default GetMovieDetails;
