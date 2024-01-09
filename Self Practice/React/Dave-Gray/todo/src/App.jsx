import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ListContainer from "./components/ListContainer";
import Footer from "./components/Footer";
import { useGlobalContext } from "./context";

function App() {
  const { items, searchResult, loading, fetchError } = useGlobalContext();

  return (
    <main className="">
      <header className="bg-slate-200">
        <Header />
        <Form />
      </header>
      <section>
        {loading && <p className="loading">Loading...</p>}
        {fetchError && <p className="empty error">{fetchError}</p>}
        {!fetchError && !loading && items.length === 0 ? (
          <p className="empty">Your list is empty</p>
        ) : (
          <ListContainer
          // items={items.filter((grocery) =>
          //   grocery.item.toLowerCase().includes(search.toLowerCase())
          // )}
          />
          // makes it possible to search items
        )}
      </section>
      <Footer />
    </main>
  );
}
export default App;
