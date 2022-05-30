import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  console.log(isExpanded);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleClick(params) {
    setExpanded(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onClick={handleClick}
          onChange={handleChange}
          value={note.title}
          placeholder={isExpanded ? "Title " : "Take a note..."}
        />
        {isExpanded && (
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Description"
            rows="3"
          />
        )}
        {isExpanded && (
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
