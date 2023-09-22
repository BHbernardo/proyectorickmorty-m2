const { User } = require('../DB_connection');

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    if(!email || !password) return res.status(400).json("Faltan datos");

    const user = await User.findOne({where: {email}});
    if(!user) return res.status(404).json("Usuario no encontrado");

    return user.password === password // compara si la contraseña del usuario es igual a la ya almacenada;
    ? res.status(200).json({access: true})
    : res.status(403).json("Contraseña incorrecta") // de caso contrario responde con este error;
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

module.exports = {
    login,
}