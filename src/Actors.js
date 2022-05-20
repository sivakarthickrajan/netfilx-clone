import React, { useEffect, useState } from "react";
import { Route, Routes, useParams, Link } from "react-router-dom";
import ActorDetails from "./ActorDetails";

import api, { api_key } from "./axios";
import "./moviedetails.css";
const Actor = ({ moviedata }) => {
  const { movieid, actorpage } = useParams();
  const [data, setData] = useState([]);
  //const [dataslice, setDataslice] = useState([]);
  const [actorcounter, setActorcounter] = useState(0);
  const [slicestart, setSlicestart] = useState(0);
  const [sliceend, setSliceend] = useState(5);

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
  function add() {
    setActorcounter(actorcounter + 1);
    setSlicestart(actorcounter * 6);
    setSliceend(slicestart + 5);
  }
  function minus() {
    setActorcounter(actorcounter - 1);
    setSlicestart(actorcounter * 6);
    setSliceend(slicestart + 5);
  }

  const dataslice = data.slice(slicestart, sliceend);

  return (
    <>
      <h1>Actors</h1>

      <div className="actor">
        {actorcounter !== 0 && (
          <button onClick={minus} className="actorbutton">
            count{actorcounter}
          </button>
        )}

        {dataslice.map((actor) => {
          return (
            <ActorDetails actordetail={actor} actorcounter={actorcounter} />
          );
        })}

        <button onClick={add} className="actorbutton">
          count{actorcounter}
        </button>
      </div>
    </>
  );
};
export default Actor;
