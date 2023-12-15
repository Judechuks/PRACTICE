import React, { useEffect, useState } from "react";
import List from "./components/List";
import Alert from "./components/Alert";

// function for getLocalStorage
const getLocalStorage = () => {
  let list = localStorage.getItem("grocery-reactjs");
  if (list) {
    return JSON.parse(localStorage.getItem("grocery-reactjs"));
  } else {
    return [];
  }
};

export default function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter a value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "item changed");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true, "success", "item added");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "all items removed");
    return setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    return setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  // local storage
  useEffect(() => {
    localStorage.setItem("grocery-reactjs", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <section className="section-center">
        <form action="" className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g. eggs"
              value={name}
              onChange={() => setName(event.target.value)}
            />
            <button className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className="clear-btn" onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </section>
    </>
  );
}
