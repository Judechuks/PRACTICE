import React from "react";

const Sidebar = (props) => {
  const noteElements = props.notes.map((note, index) => (
    <div className="note-title-container" key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        {/* <h4 className="text-snippet">Note {index + 1}</h4> */}
        <h4 className="text-snippet">
          {index + 1}. {note.body.split("\n")[0].split("#")}
        </h4>
      </div>
    </div>
  ));

  return (
    <section className={`pane sidebar`}>
      <div className={`sidebar-header`}>
        <h3>Notes</h3>
        <button className="create-note-btn" onClick={props.newNote}>
          +
        </button>
      </div>

      {noteElements}
    </section>
  );
};

export default Sidebar;
