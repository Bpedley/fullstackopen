import React from "react";

const SearchFilter = ({ searchValue, handleInputChange }) => {
  return (
    <label>
      filter shown with
      <input name="filter" value={searchValue} onChange={handleInputChange} />
    </label>
  );
};

export default SearchFilter;
