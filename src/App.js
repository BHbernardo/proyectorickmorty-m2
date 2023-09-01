import './App.module.css';

import About from './components/AboutComponent/About';
import Cards from './components/CardsComponent/Cards.jsx';
import Detail from './components/DetailComponent/Deatil';
import ErrorPage from './components/ErrorPage';
import Favorites from './components/Favorites/Favorites';
import Form from './components/Form/Form';
import NavBar from './components/NavComponent/NavBar';

import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';

function App() {
   const EMAIL = 'berni@gmail.com';
   const PASSWORD = 'aea123';
   
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   const login = (userData) => {
     if(userData.password === PASSWORD && userData.email === EMAIL){
      setAccess(true);
      navigate('/home');
     }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
  const logout = () => {
   setAccess(false);
  }

   const location = useLocation(); // solo necesito PATHNAME que indica la "/"; RENDERIZADO CONDICIONAL;

   const [characters, setCharacters] = useState ([]);

   const onSearch = (id) =>  { //!! libreria AXIOS;
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
   const charactersFiltered = characters.filter(
      character => character.id !== Number(id));
      setCharacters(charactersFiltered);
   }
   
   return (
      <div className='App'>
         
         {
            location.pathname !== '/' && <NavBar onSearch = {onSearch} logout = {logout} /> 
         }

         <Routes>
           <Route path='/' element = {<Form login={login}/>} />
           <Route path='/home' element = {<Cards characters = {characters} 
            onClose= {onClose} />} /> 
           <Route path='/About' element = {<About/>} />
           <Route path='/detail/:id' element = {<Detail/>} />
           <Route path='*' element = {<ErrorPage/>} />
           <Route path='/favorites' element={<Favorites onClose={onClose}/>} />
         </Routes>
      </div>
   );
}
   
export default App;
   
