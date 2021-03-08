import React from "react";
import "../src/styles.css";

import { useGlobalContext } from "../context/Context";

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type="text "
        className="form-input"
        value={query}
        placeholder="Search movie..."
        onChange={handleOnChange}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
