import React from "react";
import "../src/styles.css";
import { useParams, Link } from "react-router-dom";

import useFetch from "./UseFetch";

const MovieDetails = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          Back to Movies
        </Link>
      </div>
    );
  }
  const { Poster, Title, Runtime, Year, Actors, Director, Awards } = movie;
  return (
    <>
      <section className="single-movie">
        <div className="col-md-6">
          <img src={Poster} alt={Title} />
        </div>
        <div className="col-md-6">
          <div className="single-movie-info">
            <h2>
              Title:<span>{Title}</span>
            </h2>
            <p>Year: {Year}</p>
            <p>Runtime: {Runtime}</p>
            <p>Director: {Director}</p>
            <p>Actors: {Actors}</p>
            <p>Awards: {Awards === "N/A" ? "-" : Awards}</p>
            <Link to="/" className="btn">
              Back to Movies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
