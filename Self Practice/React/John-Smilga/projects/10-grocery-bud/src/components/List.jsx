import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function List({ items, editItem, removeItem }) {
  const [alert, setAlert] = useState("");

  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}>
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default List;
