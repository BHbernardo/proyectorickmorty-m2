import { useState } from "react";
import './SearchBar.module.css'

export default function SearchBar(props) {
   const {onSearch} = props;

   const[id, setId] = useState (' '); 

   const handleChange = (event) => {
     setId(event.target.value)
   }

   return (
      <div>
         <input type='search' onChange = {handleChange} value={id}/>
         <button onClick={ () => onSearch(id)}>AGREGAR</button>
      </div>
   );
}

//! cuando enviamos una busqueda con argumentos, hay que realizarlo con un CB;