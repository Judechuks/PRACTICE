import React, { useEffect, useReducer, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import Modal from "./Modal";
import { reducer } from "./reducer";
// useReducer: is similar to redux

// reducer function
// which was moved to another file and impoerted at the top

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

export default function App() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [id, setId] = useState(state.people.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: generateId(id), name };
      // dispatch(action - where the action needs to be an object with a property of type)
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const generateId = (userId) => {
    userId = userId + 1;
    setId(userId);
    return userId;
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_PERSON", payload: id });
  };

  return (
    <main>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="text-center">useReducer</h1>
        <div className="form-control">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn">Add</button>
        </div>
      </form>
      {state.people.length ? (
        <table>
          <tbody>
            {state.people.map((person) => {
              return (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>{person.name}</td>
                  <td>
                    <FaTrash
                      className="removeBtn"
                      onClick={() => removeItem(person.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </main>
  );
}
