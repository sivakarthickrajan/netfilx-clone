import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api, { api_key } from "../axios";
import MovieDetails from "./MovieDetails";

const MovieSelected = () => {
  const { movieid } = useParams();
  console.log("movie id ", movieid);
  const [data, setData] = useState([]);
  const apiUpcoming = api.get(`movie/${movieid}/videos`, {
    params: { api_key },
  });

  useEffect(() => {
    console.log("idid id", movieid);
    console.log("api calling ", apiUpcoming);
    const data = async () => {
      const response = await apiUpcoming;
      setData(response.data.results);
    };
    data();
  }, [movieid, apiUpcoming]);
  console.log("videodata", data);

  return (
    <>
      <div>HELLO</div>
      <MovieDetails videodetails={data} />
    </>
  );
};
export default MovieSelected;
