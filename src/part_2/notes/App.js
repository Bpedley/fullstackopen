import React, { useState, useEffect } from "react";
import Note from "./Note";
import Notification from "./Notification";
import Footer from "./Footer";
import noteService from "./services/notes";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    noteService.getAll().then(initialNotes => {
      setNotes(initialNotes);
    });
  }, []);

  const addNote = e => {
    e.preventDefault();

    if (!newNote) {
      alert("Fill the input field");
      return;
    }

    const noteObj = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5
    };

    noteService.create(noteObj).then(returnedNote => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const handleNoteChange = ({ target: { value } }) => {
    setNewNote(value);
  };

  const toggleImportance = id => {
    const note = notes.find(n => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => (note.id !== id ? note : returnedNote)));
      })
      .catch(err => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setNotes(notes.filter(n => n.id !== id));
      });
  };

  const notesToShow = showAll ? notes : notes.filter(note => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button>Add</button>
      </form>
      <div>
        {notesToShow.map(note => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportance(note.id)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
