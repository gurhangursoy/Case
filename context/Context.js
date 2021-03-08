import React, { useState, useContext } from "react";

import useFetch from "../components/UseFetch";

export const API_ENDPOINT =
  "http://www.omdbapi.com/?i=tt3896198&apikey=8b3179cf";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("Search...");
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
