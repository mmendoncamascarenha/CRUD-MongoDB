/**
 * Modelo de dados para construção das coleções("tabelas")
 * Clientes 
 */

// importação dos recursos do framework mongoose 
const { model, Schema} = require('mongoose')


// criação da estrutura da coleção Clientes
const clienteSchema = new Schema ({
    nomeCliente: {
        type: String
    }, 
    foneCliente: {
        type: String
    },
    cpf: {
        type: String,
        unique: true,
        index : true
    },
    dataCadastro: {
        type: Date,
        default : Date.now
    }
}, {versionKey: false})

// exportar para o main o modelo de dados
// OBS: Clientes sera o nome da coleção 

module.exports = model('clientes', clienteSchema)
    