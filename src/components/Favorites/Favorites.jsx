import style from './Favorites.module.css'
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../cardComponent/Card"; // Asegúrate de importar el componente Card
import { filterCards, orderCards, removeFav } from "../../redux/actions"; // Asegúrate de importar la acción removeFav
 

function Favorites() {
  
  const [aux, setAux] = useState(false);
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const removeFromFavorites = (id) => {
    dispatch(removeFav(id));
  };

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true)
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  }

  return (
    <div className={style.cardList}>
      
      <h2>Favorites</h2>

    <div className={style.button}>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </div>
      <br />

        {favorites.map((character) => (
          <Card
            key={character.id}
            {...character}
            onClose={() => removeFromFavorites(character.id)}
          />
        ))}

      </div>
  );
}
export default Favorites;