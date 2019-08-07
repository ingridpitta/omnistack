//Importar Express
const express = require('express');
//Importar Mongoose
const mongoose = require('mongoose');
//Importar rotas
const routes = require('./routes');
// Servidor
const server = express();
//Conectar com o banco de dados
mongoose.connect('mongodb+srv://ingridpitta:22765500Ab@cluster0-cydv3.mongodb.net/omnistack?retryWrites=true&w=majority', {useNewUrlParser: true});
//"Ler" json
server.use(express.json());
// Usar rotas em routes
server.use(routes);
//Iniciar porta do servidor
server.listen(3333);

