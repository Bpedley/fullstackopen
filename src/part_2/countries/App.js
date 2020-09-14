import React, { useState, useEffect } from "react";
import CountrySearch from "./CountrySearch";
import ResultCountries from "./ResultCountries";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(res => {
      setCountries(res.data);
    });
  }, []);

  const searchedCountries = searchValue
    ? countries.filter(country =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  return (
    <div>
      <CountrySearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ResultCountries
        searchValue={searchValue}
        searchedCountries={searchedCountries}
      />
    </div>
  );
};

export default App;
