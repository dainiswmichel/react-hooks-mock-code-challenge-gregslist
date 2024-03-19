// Search.js
import React, { useState } from "react";

function Search({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;