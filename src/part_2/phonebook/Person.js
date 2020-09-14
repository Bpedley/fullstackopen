import React from "react";

const Person = ({ person: { name, number, id }, deletePerson }) => {
  return (
    <div>
      <p style={{ display: "inline-block" }}>
        {name} {number}
      </p>
      <button onClick={() => deletePerson(id)}>delete</button>
    </div>
  );
};

export default Person;
