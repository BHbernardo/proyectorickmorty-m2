import { useState } from "react";
import validation from "../../validation";
import style from "./forms.module.css";

const Form = ({login}) => { // estado LOCAL;
    
  const [errors, setErrors] = useState({}); 

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });


  const handleChange = (event) => {
    
    setUserData({
        ...userData, 
        [event.target.name]: event.target.value // modifica cualquier cosa del evento;
      //NAME= correo/password--//-- EMAIL/CONTRASEÑA que le enviemos;
    })
    
    setErrors(validation({
        ...userData,
        [event.target.name]: event.target.value
    }))

  }
  
  const handleSubmit = (event) => { // funcion para enviar el formulario;
    event.preventDefault() // permite que no se recargue la pag y no perder la informacion aplicada;
    login(userData)
  }


  return (
  <body className={style.bod}> 

    <form className={style.container} onSubmit={handleSubmit}>
    <h1 className={style.title}>RICK AND MORTY</h1>
      <label className={style.label} htmlFor="email">
        EMAIL
      </label>
      <input
        name="email"
        type="email"
        placeholder="Ingresa tu mail aquí"
        value={userData.email}
        onChange={handleChange}
        className={style.input}
        />
      {errors.email && <p style={{ color: "blue" }}>{errors.email}</p>}
      <br />
      <label className={style.label} htmlFor="password">PASSWORD</label>
      <input
        name="password"
        type="password"
        placeholder="Ingrese su contraseña aquí"
        value={userData.password}
        onChange={handleChange}
        className={style.input}
        />
      {errors.password && <p style={{ color: "black" }}>{errors.password}</p>}
      <br />
      <button className={style.submitButton}>Submit</button>
    </form>
  </body>
  );
};
export default Form;