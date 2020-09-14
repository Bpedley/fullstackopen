import React from "react";

const Header = ({ name }) => {
  return (
    <header>
      {name ? <h2>{name}</h2> : <h1>Web development curriculum</h1>}
    </header>
  );
};

export default Header;
