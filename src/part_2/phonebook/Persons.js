import React from "react";
import Person from "./Person";

const Persons = ({ filteredPersons, deletePerson }) => {
  return (
    <div>
      {filteredPersons.length ? (
        filteredPersons.map(person => (
          <Person key={person.id} person={person} deletePerson={deletePerson} />
        ))
      ) : (
        <p>No matches</p>
      )}
    </div>
  );
};

export default Persons;
