import { useState } from "react";

function Categories({ filterItems, categories }) {
  return (
    <article className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            // key={category} // you can also use category, since each category is unique
            className="filter-btn"
            onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </article>
  );
}
export default Categories;
