import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(function (prevNotes) {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(function (prevNotes) {
      return prevNotes.filter(function (value, index) {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map(function (note, index) {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
