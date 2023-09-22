const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body;
    if(!name || !origin || !status || !image || !species || !gender) 
    return res.status(401).json("Faltan datos");
    
   await Favorite.findOrCreate({where: {name, origin, status, image, 
    species, gender}});

    const favoritesAll = Favorite.findAll(); // va a buscar todos los datos de favoritos pasados mas arriba en la base de datos y los va a guardar;
    return res.status(200).json(favoritesAll);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
}

module.exports = {
    postFav,
}