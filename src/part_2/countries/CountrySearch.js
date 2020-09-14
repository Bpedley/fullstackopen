import React from "react";

const CountrySearch = ({ searchValue, setSearchValue }) => {
  return (
    <label>
      find countries
      <input
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
    </label>
  );
};

export default CountrySearch;
