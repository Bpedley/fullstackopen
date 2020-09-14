import React, { useState, useEffect } from "react";
import SearchFilter from "./SearchFilter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import Notification from "./Notification";
import personService from "./services/persons";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [newPerson, setNewPerson] = useState({
    name: "",
    number: ""
  });

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons);
    });
  }, []);

  const handleInputChange = ({ target: { name, value } }) => {
    if (name === "filter") {
      setSearchFilter(value);
    } else {
      setNewPerson({
        ...newPerson,
        [name]: value
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = newPerson;

    if (!name || !number) return alert("One or more fields are empty");

    const newPersonData = { name, number };

    const findPerson = persons.find(
      person => person.name.toLowerCase() === name.toLowerCase()
    );

    if (findPerson && findPerson.number !== number) {
      const answer = window.confirm(
        `${findPerson.name} is already added to phonebook, replace the old number with a new one?`
      );
      if (answer) {
        personService
          .update(findPerson.id, newPersonData)
          .then(returnedPerson => {
            setPersons(
              persons.map(person =>
                person.id === returnedPerson.id ? returnedPerson : person
              )
            );
            setSuccessMessage(
              `Phone number of ${returnedPerson.name} changed successfully`
            );
            setTimeout(() => {
              setSuccessMessage(null);
            }, 2000);
          })
          .catch(err => {
            setPersons(persons.filter(person => person.id !== findPerson.id));
            setErrorMessage(
              `the person '${findPerson.name}' was already deleted from server`
            );
            console.log(err);
            setTimeout(() => {
              setErrorMessage(null);
            }, 2000);
          });
      } else {
        return;
      }
    } else if (findPerson && findPerson.number === number) {
      return alert(`${findPerson.name} is already in the phonebook`);
    } else {
      personService.create(newPersonData).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewPerson({ name: "", number: "" });
        setSuccessMessage(`Added ${returnedPerson.name} to phonebook`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 2000);
      });
    }
  };

  const deletePerson = id => {
    personService.remove(id).then(() => {
      personService.getAll().then(changedPersons => {
        setPersons(changedPersons);
      });
    });
  };

  const filteredPersons = searchFilter
    ? persons.filter(e =>
        e.name.toLowerCase().includes(searchFilter.toLowerCase())
      )
    : persons;

  return (
    <div className="container">
      <h2>Phonebook</h2>
      <Notification error={errorMessage} success={successMessage} />
      <SearchFilter
        searchValue={searchFilter}
        handleInputChange={handleInputChange}
      />
      <h3>Add a new</h3>
      <PersonForm
        newPerson={newPerson}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
