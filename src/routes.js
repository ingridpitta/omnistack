//Importar Express
const express = require('express');
//Importar Controller
const DevController = require('./controllers/DevController');
//Rotas
const routes = express.Router();
//Chamadas de rota
//Pegar infos
routes.get('/', (req,res) => {
    return res.json({mensage: `Hello,Ingrid!`});
});
//Postar infos
routes.post('/devs', DevController.store)
//Exportar rotas
module.exports = routes;