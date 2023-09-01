import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import  { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root')) // aca es donde se renderiza totalmente nuestra pagina;
root.render( // asi le indicamos a nuestra app entera que trabaje con rutas;
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  
)
