// Importar  dependências do mongoose
const { Schema, model } = require('mongoose');
//Estrutura da tabela do banco de dados
const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user:{
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
}, {
    //Data de criação e atualização
    timestamps:true,
});
//Exportar model
module.exports = model('Dev', DevSchema);