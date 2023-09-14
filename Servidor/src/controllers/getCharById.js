// const axios = require('axios');

// const getCharById = (res, id) =>{
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//   .then((result)=> result.data)
//   .then(({name, gender, species, origin, image , status})=>{
//    let character = {
//       id,
//       name,
//       gender,
//       origin,
//       image,
//       status,
//       species
//    }
//    res.writeHead(200, {"Content-Type" : "application/json"});
//    res.end(JSON.stringify(character))
// })
// .catch((error) => {
//    res.writeHead(500, { "Content-Type": "text/plain" });
//    res.end(error.message)
// });
// }
// module.exports = getCharById;

// const getCharById = (req, res) => {
  //   const { id } = req.params;
  //   axios(`${URL}/${id}`)
  //     .then((response) => response.data)
  //     .then((data) => {
    //       let character = {};
    //       if (data) {
      //         character = {
        //           id: data.id,
        //           status: data.status,
        //           name: data.name,
        //           species: data.species,
        //           origin: data.origin,
        //           image: data.image,
        //           gender: data.gender
        //         }
        //         res.status(200).json(character);
        //       } 
        //         res.status(404).json('Not found'); 
        //     })
        //     .catch(error => res.status(500).send(error.message));
        // }
    const axios = require('axios');
    const { response } = require('express');
    const URL = "https://rickandmortyapi.com/api/character/";

    const getCharById = async (req, res) => {
      try {
            const { id } = req.params;
            const { data } = await axios(`${URL}/${id}`);

            if(!data.name) throw new Error(`Faltan datos del personaje con ID: ${id}`)// si encuntra un error corta la ejecucion, por eso lo ponemos primero;
            // este vendria a ser el error 404 del cliente (si modifican el personaje EJ: le borraron el nombre);
            const character = {
                  id: data.id,
                  status: data.status,
                  name: data.name,
                  species: data.species,
                  origin: data.origin,
                  image: data.image,
                  gender: data.gender
            }
                 return res.status(200).json(character);
              
          } 
      catch (error) {
                 return error.message.includes('ID')
                 ? res.status(404).send(error.message) // si incluye ID, retorna este error;
                 : res.status(500).send(error.message) // si no retorna este error;
          }
      }
        
module.exports = {
  getCharById,
}
