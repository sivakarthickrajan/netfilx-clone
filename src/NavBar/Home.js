import { useEffect, useState } from "react";
import MovieList from "../movie/MovieList";
import api, { api_key } from "../axios";

export const Home = () => {
  const [data, setData] = useState([]);
  const apiUpcoming = api.get("movie/upcoming", { params: { api_key } });
  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setData(response.data.results);
    };
    data();
  }, []);
  const homeup = data.slice(0, 4);

  return <MovieList data={homeup} />;
};
export const Hometoprated = () => {
  const [data, setData] = useState([]);
  const apiUpcoming = api.get("movie/top_rated", { params: { api_key } });
  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setData(response.data.results);
    };
    data();
  }, []);
  const hometop = data.slice(0, 4);

  return <MovieList data={hometop} />;
};
export const Homepopular = () => {
  const [data, setData] = useState([]);
  const apiUpcoming = api.get("movie/popular", { params: { api_key } });
  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setData(response.data.results);
    };
    data();
  }, []);
  const homepop = data.slice(0, 4);

  return <MovieList data={homepop} />;
};
export const Homenowplaying = () => {
  const [data, setData] = useState([]);
  const apiUpcoming = api.get("movie/popular", { params: { api_key } });
  useEffect(() => {
    const data = async () => {
      const response = await apiUpcoming;
      setData(response.data.results);
    };
    data();
  }, []);
  const homenow = data.slice(0, 4);

  return <MovieList data={homenow} />;
};
