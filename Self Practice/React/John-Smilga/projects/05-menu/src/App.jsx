import React, { useEffect, useState } from "react";
import items from "./menu";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

export default function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  useEffect(() => {
    const allCategories = [
      "all",
      ...new Set(items.map((item) => item.category)),
    ];
    setCategories(allCategories);
  }, [items]);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <section className="info">
          <Categories filterItems={filterItems} categories={categories} />
          <Menu items={menuItems} />
        </section>
      </section>
    </main>
  );
}
