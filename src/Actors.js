import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api, { api_key } from "./axios";
import "./moviedetails.css";
const Actor = ({ moviedata }) => {
  const { movieid } = useParams();
  const [data, setData] = useState([]);

  const apiUpcoming = api.get(`/movie/${movieid}/credits`, {
    params: { api_key },
  });
  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setData(response.data.cast);
    };
    data();
  }, [movieid]);

  return (
    <>
      <img
        className="actor_bgimage"
        src={`https://image.tmdb.org/t/p/original/${moviedata.backdrop_path}`}
        alt=""
      ></img>
      <div className="actor">
        {data.map((actor) => {
          return (
            <div className="actor_card">
              <img
                className="dp_image"
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt=""
              ></img>
              <div>{actor.original_name}</div>
            </div>
          );
        })}
        ;
      </div>
    </>
  );
};
export default Actor;
