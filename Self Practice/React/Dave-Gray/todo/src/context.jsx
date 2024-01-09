import { createContext, useContext, useState, useEffect, useRef } from "react";
import apiRequest from "./apiRequest";

export const AppContext = createContext();

export const API_URL = "http://localhost:3500/items";
//where port 3500 is where you have set your json-server to run on

export const AppProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);
  const addRef = useRef("");

  //GET Request (READ operation)
  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("404 - No data. Check the link");
      }
      const listItems = await response.json();
      setItems(listItems);
      setFetchError(null);
      setLoading(false);
    } catch (error) {
      setFetchError(error.message);
    }
  };
  useEffect(() => {
    // (async () => await fetchData())(); // no need since it doesn't return a value
    fetchData();
  }, []);

  // search
  useEffect(() => {
    const filteredResult = items.filter((grocery) =>
      grocery.item.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredResult);
  }, [items, search]);

  const addItem = async (item) => {
    const newItem = { id: items.length + 1, checked: false, item };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    //POST Request (READ operation)
    const postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) {
      setFetchError(result);
    }
    // the return value is an error message, therefore, if the return vaLlue is null(i.e no value), then it means the fetch was successful
  };

  const handleCheck = async (id) => {
    const updatedListItems = items.map((grocery) =>
      grocery.id === id ? { ...grocery, checked: !grocery.checked } : grocery
    );
    setItems(updatedListItems);
    // PATCH or PUT Request (UPDATE operation)
    // item that was updated
    const updatedItem = updatedListItems.find((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checked: updatedItem.checked }),
    };
    // the path to the item to be updated
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) {
      setFetchError(result);
    }
  };

  const removeItem = async (id) => {
    const newItems = items.filter((grocery) => grocery.id !== id);
    setItems(newItems);
    // DELETE Request (DELETE operation)
    const deleteOptions = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        items,
        search,
        searchResult,
        fetchError,
        addRef,
        setItems,
        setSearch,
        addItem,
        removeItem,
        handleCheck,
      }}>
      {children}
    </AppContext.Provider>
  );
};

// to pass down the props/values that you may want to use
export const useGlobalContext = () => {
  return useContext(AppContext);
};
