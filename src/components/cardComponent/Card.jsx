import { useSelector  } from "react-redux";
import { useState, useEffect } from "react";


import {connect} from 'react-redux'

import { addFav, removeFav } from "../../redux/actions";
import { Link } from "react-router-dom";

import style from "../cardComponent/card.module.css";

function Card({id, name, status, gender, image, species, origin, onClose, myFavorites, addFav, removeFav}) {
   const [isFav, setIsFav] = useState(false);
   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, status, gender, image, species, origin, onClose});
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   const estatus = () => {
      if(status === "Alive")  {return style.backAlive }
      if(status === "Dead")   { return style.backDead }
      if(status === "unknown"){ return style.backUnknown }
   }
   const estado = estatus(status)

   return (
      <div className={style.card}>
         <button onClick={handleFavorite}>{isFav? '❤️' : '🤍' }</button>
         <div className={`${style.face} ${style.front}`}>
         <img className={style.imagen} src={image} alt='' />
         <h2 className={style.nombre}>{name}</h2>
         </div>
         <div className={`${style.face} ${estado}`}>
         <Link to={`/detail/${id}`}>
               <div className={style.nombreBack}>{name}</div>
         </Link>
         <h3>Status: {status}</h3>
         <h3>Species: {species}</h3>
         <h3>Gender: {gender}</h3>
         <button className={style.closeButton.svg} onClick={() => onClose(id)}>X</button>
         </div>
      </div>
   );
}
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)





 