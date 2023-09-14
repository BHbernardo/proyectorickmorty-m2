const express = require('express');
const server = express();
const { usuarios } = require('../utils/users')

const login = (req, res) => {
    const { email, password } = req.query; 
    // metodo some, comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
    return (usuarios.some(element => (element.email === email && element.password === password)))
    ?  res.status(200).json({ "access": true })
    :  res.status(200).json({ "access": false })
}

module.exports = {
    login,
}