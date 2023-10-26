import React from 'react'
import { useGlobalContext } from "../context";
import { FaXmark } from "react-icons/fa6";

function Favorites() {
  const {favorites, selectMeal, removeFromFavorites} = useGlobalContext()

  return (
    <section className='favorites'>
      <div className='favorites-content'>
        <h5>Favorites</h5>
        <div className='favorites-container'>
        {favorites.map((item) => {
          const {idMeal, strMealThumb: image, strMeal: title} = item;
          return <div key={idMeal} className="favorite-item">
            <FaXmark className="remove-btn" onClick={()=> removeFromFavorites(idMeal)} />
            <img src={image} alt={title} className='favorites-img img' onClick={()=> selectMeal(idMeal, true)} />
            <h6 className='title'>{title}</h6>
          </div>
        })}
        </div>
      </div>
    </section>
  )
}

export default Favorites