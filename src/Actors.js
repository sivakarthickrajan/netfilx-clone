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
  const dataSlice = data.slice(0, 5);

  return (
    <>
      <h1>Actors</h1>
      <div className="actor">
        {dataSlice.map((actor) => {
          return (
            <div className="actor_card">
              <img
                className="dp_image"
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt=""
              ></img>
              <h5>{actor.original_name}</h5>
              <h6 style={{ font: "italic" }}>as {actor.character}</h6>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Actor;
