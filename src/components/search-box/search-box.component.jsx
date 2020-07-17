import React from "react";
import "./search-box.styles.css";
const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="search-box">
      <input
        type="search"
        name=""
        id=""
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
