import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Split from "react-split";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
// import { data } from "./data";

function App() {
  // fetch initial notes from localStorage
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notepal")) || [] // lazy load initialization
  );
  // create and set id of the current note
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  // store notes to the localStorage each time there is changes to note
  useEffect(() => {
    localStorage.setItem("notepal", JSON.stringify(notes));
  }, [notes]);

  // creates a new note with a nano generated id and set the content of the note as the value of body.
  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  // get the current note that is selected based on the id and update it's content based on the text typed into the textarea (onChange), but does not rearange the notes
  /* function updateNote(text) {
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    );
  } */

  // rearanges the notes to the top after being updated
  function updateNote(text) {
    setNotes((oldNotes) => {
      const newArray = [];
      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i];
        if (oldNote.id === currentNoteId) {
          newArray.unshift({ ...oldNote, body: text });
        } else {
          newArray.push(oldNote);
        }
      }
      return newArray;
    });
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();
    // filter and return only notes that were not clicked (based on their id)
    setNotes((oldNotes) => oldNotes.filter((oldNote) => oldNote.id !== noteId));
  }

  // set the current note based on the id of the note that was clicked from the list of notes in the sidebar
  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[25, 75]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="create-note-btn" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
/*
Lazy State Initialization
```
const [notes, setNotes] = useState(
  JSON.parse(localStorage.getItem("notepal")) || []
);
```
In the code above, React gets to fetch notes from the localStorage storage every time the state changes (as the user is constantly typing text into the textarea), which can reduce performance. As a result of this, React has come up with a way of initializing state once by passing the value to a callback function. This process is known as **Lazy State Initialization**
So the code would look like:
```
const [notes, setNotes] = useState(
  () => JSON.parse(localStorage.getItem("notepal")) || []
);
*/
