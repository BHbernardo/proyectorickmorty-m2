import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "../DetailComponent/Detail.module.css"

import axios from "axios";

const Detail = () => {
   const {id} = useParams() 
   const [character, setCharacter] = useState ({}); //! el estado va a indicar la informacion de CADA PERSONAJE;
   useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    }).catch(error=>alert("No se encontró el ID!!"));
    
    return setCharacter({}); //! se DESMONTA;
    
 }, [id]);

//  useEffect(() => { // ANTIGUA
//   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
//      if (data.name) {
//         setCharacter(data);
//      } else {
//         window.alert('No hay personajes con ese ID');
//      }
//   }).catch(error=>alert("No se encontró el ID!!"));
  
//   return setCharacter({}); //! se DESMONTA;
  
// }, [id]);

 return (
   <div className={style.detailContainer}>
     <div className={style.characterDetails}>
       <h2 className={style.characterName}>{character?.name}</h2>
       <h2 className={style.characterInfo}>{character?.status}</h2>
       <h2 className={style.characterInfo}>{character?.species}</h2>
       <h2 className={style.characterInfo}>{character?.gender}</h2>
       <h2 className={style.characterInfo}>{character?.origin?.name}</h2>
     </div>
     <img
       className={style.characterImage}
       src={character?.image}
       alt={character?.name}
     />
   </div>
 );
};
export default Detail;