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
const PORT = 3001;
    
server.listen(PORT, () => {
  console.log(`Servidor montado en ${PORT}`);
});

