import React from "react";
import Country from "./Country";
import CountryInfo from "./CountryInfo";
import { v4 as uuidv4 } from "uuid";

const ResultCountries = ({ searchedCountries, searchValue }) => {
  return (
    <div>
      {searchedCountries.length === 1 ? (
        <CountryInfo country={searchedCountries[0]} />
      ) : searchedCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : searchedCountries.length ? (
        searchedCountries.map(el => <Country key={uuidv4()} country={el} />)
      ) : searchValue ? (
        <p>No matches</p>
      ) : (
        <p>Type country name in search box</p>
      )}
    </div>
  );
};

export default ResultCountries;
