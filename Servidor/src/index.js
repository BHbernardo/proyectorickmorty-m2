// const http = require("http");
// const  getCharById   = require("./controllers/getCharById")
// http.createServer((req, res) =>{
// res.setHeader('Access-Control-Allow-Origin', '*');
// const { url } = req;
// if(url.includes("/rickandmorty/character/")) {
//   const id = url.split("/").at(-1)
//  getCharById(res, Number(id))
// }
// }).listen(3001);

const server = require('./app');
const { conn } = require('./DB_connection');
const PORT = 3001;


conn.sync({force: true}).then(() =>{ 
  server.listen(PORT, () => {
    console.log(`Servidor montado en ${PORT}`);
  });
});
// conectamos nuestra BASE DE DATOS con el SERVIDOR y su PUERTO de manera sincronica;
    

