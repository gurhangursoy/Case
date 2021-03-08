import React from "react";
import "../src/styles.css";

import { useGlobalContext } from "../context/Context.js";
import { Link } from "react-router-dom";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

const MovieList = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies.map((movie) => {
        const { imdbID, Poster, Title, Year } = movie;

        return (
          <Link to={`/movies/${imdbID}`} key={imdbID} className="movie">
            <article>
              <img src={Poster === "N/A" ? url : Poster} alt={Title} />
              <div className="movie-info">
                <h4 className="title">{Title}</h4>
                <p>{Year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default MovieList;
