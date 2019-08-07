//Importar Axios
const axios = require('axios');
//Importar Model Dev
const Dev = require('../models/Dev');
//Exportar Controller.store
module.exports = {
    async store(req,res) {
        //Pegar info na requisição
        const {username} = req.body; 
        //Verificar duplicados
        const userExists = await Dev.findOne({user: username});

        if(userExists){
            return res.json(userExists);
        }

        //Endereço API 
        const url = `https://api.github.com/users/${username}`; 
        //Resposta Axios
        const response = await axios.get(url);
        //Desestruturação
        const {name, bio, avatar_url: avatar} = response.data
        //Criar Dev no banco a partir das infos da API
        const dev = await Dev.create({
        nome:name,
        user:username,
        bio:bio,
        avatar: avatar,
        });
        
        return res.json(dev);
    }
};
