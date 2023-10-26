import {useGlobalContext} from '../context'
import { FaHeart } from "react-icons/fa";
import Loading from '../components/Loading'

function Meals() {
  const {meals, loading, selectMeal, addToFavorites, removeFromFavorites, checkIfFavorite} = useGlobalContext() // value is destructured
  
  if (loading) {
    return <Loading />
  }

  if (meals.length < 1) {
    return <section className='section'>
      <h4>No Meals Match Your Search Term. Please Try Again.</h4>
    </section>
  }

  return <section className='section-center'>
    {
      meals.map((meal) => {
        const {idMeal, strMeal: title, strMealThumb: image} = meal
        return <article key={idMeal} className='single-meal'>
          <img src={image} className='img' alt={`${title} meal`} onClick={() => selectMeal(idMeal)} />
          <footer>
            <h5>{title}</h5>
            {
              checkIfFavorite(idMeal) ? <button className='like-btn is-favorite' onClick={() => removeFromFavorites(idMeal)}>
              <FaHeart />
              </button>
            :
              <button className='like-btn' onClick={() => addToFavorites(idMeal)}>
                <FaHeart />
              </button>
            }
          </footer>
        </article>
      })
    }
  </section>
}

export default Meals