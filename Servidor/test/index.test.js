const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character = {
    id: 850,
    name: 'Berna',
    species: 'Human',
    gender: 'Male',
    status: 'Alive',
    origin: {
       name: 'Earth (C-137)'
    },
    image: 'image.jpg',
}

describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', 
        async () => {
            const response = await request.get('/rickandmorty/character/1');
            for(const prop in character) {
                expect(response.body).toHaveProperty(prop);
            };
        });
        it('Si hay un error responde con status: 500', async () => {
            const response = await request.get('/rickandmorty/character/900x');
            expect(response.statusCode).toBe(500);
        });
    });
    describe("GET /rickandmorty/login", () => {
        it('Debe responder a un objeto con la propiedad access true si la informacion es valida', 
        async () => {
            const response = await request.get('/rickandmorty/login?email=berni@gmail.com&password=aea123');
            const access = { access: true };
            expect(response.body).toEqual(access);
        });
        it('Debe responder a un objeto con la propiedad access false si la informacion no es valida', 
        async () => {
            const response = await request.get('/rickandmorty/login?email=bern1@gmail.com&password=aEeEa123');
            const access = { access: false };
            expect(response.body).toEqual(access);
        });
    });
    describe("POST /rickandmorty/fav", () => {
        it('Debe guardar personajes en favoritos', async () => {
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body).toContainEqual(character) // "toContainEqual se queda con un objeto/array, el que necesitemos";
        });
        it('Debe agregar personajes a favoritos sin elminar los que ya existen', 
        async () => {
           character.id = 900, // reutilizamos el objeto en donde le medificamos dos propiedades;
           character.name = 'FT-42a' // con esto ahorramos memoria;
           const response = await request.post('/rickandmorty/fav').send(character); // .send manda informacion de la ruta "metodo de supertest";
           expect(response.body.length).toBe(2); // se aplica el "2" porque mantiene el el personaje anterior y le agrega el nuevo sin pisarlo/perderlo;
        });
    });
    describe("DELETE /rickandmorty/fav/:id", () => {
        it('Si el ID solicitado no existe deberia retornar un arreglo con todos los favoritos', 
        async () => {
          const response = await request.delete('/rickandmorty/fav/999h');
          expect(response.body.length).toBe(2);
        });
        it('Si el ID existe deberia eliminarlo', async () => {
          const response = await request.delete('/rickandmorty/fav/850'); 
          expect(response.body.length).toBe(1);
        });
    });
});
