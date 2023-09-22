const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
  try {
    const {id} = req.params;
    await Favorite.destroy({where: {id}});

    const favoritesAll = Favorite.findAll(); // va a buscar todos los datos de favoritos pasados mas arriba en la base de datos y los va a guardar;
    return res.status(200).json(favoritesAll);
    
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
   
}

module.exports = {
    deleteFav,
}