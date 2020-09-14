import React, { useState } from "react";
import CountryInfo from "./CountryInfo";

const Country = ({ country }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <p style={{ display: "inline-block" }}>{country.name}</p>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "hide" : "show"}
      </button>
      {visible ? <CountryInfo country={country} /> : null}
    </div>
  );
};

export default Country;
