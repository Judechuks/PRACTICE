import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext()

import axios from "axios";
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const getFavoritesFromLocalStorage = () => {
  let favorites = localStorage.getItem('favorites');
  if (favorites) {
    favorites = JSON.parse(favorites)
  } else {
    favorites = []
  }
  return favorites
}

const AppProvider = ({children}) => { // destructured the props (App.jsx)

  const [loading, setLoading] = useState(false)
  const [meals, setMeals] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState(null)
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage())

  const fetchMeals = async(url) => { 
    setLoading(true)
    try {
      //const response = await axios(url) // response from axios
      const {data} = await axios(url) // response has a property called data, which we destructured
      if(data.meals){
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false)
  }

  const fetchRandomMeal = () => {
    fetchMeals(randomMealUrl)
  }

  //SelectedMeal
  const selectMeal = (idMeal, favoriteMeal) => {
    let meal;
    if (favoriteMeal) {
      meal = favorites.find((meal) => meal.idMeal === idMeal);
    } else {
      meal = meals.find((meal) => meal.idMeal === idMeal);
    }
    setSelectedMeal(meal)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  // Add to favorite meal list
  const addToFavorites = (idMeal) => {
    const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal);
    if (alreadyFavorite) return
    const meal = meals.find((meal) => meal.idMeal === idMeal);
    const updatedFavorites = [...favorites, meal]
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  // Remove favorite meal list
  const removeFromFavorites = (idMeal) => {
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }
  useEffect(()=> {
    fetchMeals(allMealsUrl)
  }, [])

  useEffect(()=> {
    if(!searchTerm) return // if search term is empty do nothing
    fetchMeals(`${allMealsUrl}${searchTerm}`)
  }, [searchTerm])

  return <AppContext.Provider value={{loading, meals, setSearchTerm, fetchRandomMeal, showModal, selectMeal, selectedMeal, closeModal, favorites, addToFavorites, removeFromFavorites}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
// fetching data using fetch (trying to catch any error) and useEffect
/*
useEffect(()=> {
  const fetchData = async() => {
    try {
      const response = await fetch('https://randomuser.me/api/')
      const data = await response.json()
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  fetchData()
}, [])
*/