
/**
 *  Módulo e conexão com o banco de dados uso do framework mongoose 
 */

// importação do mongoose
const mongoose = require('mongoose')

// configuração do acesso ao banco de dados 
// ip/link - autenticação 
// Obs: atlas(Obter via compass)

const url = 'mongodb+srv://admin:123Senac@projetonode.4eylp.mongodb.net/dbclientes'// Para Criar um banco de  dados personalizado basta escolher um nome noo final da url (ex: dbclientes)

// criar uma variavel de apoio para validação
let conectado = false 

// método para conectar o banco de dados 
// "async" executar a função de forma assincrona
const conectar = async () => {
    // validação (se nao tiver conectado, conectar)
    if (!conectado) {
         // conectar com o banco de dados 
         // try catch - tratamento de exceções
         try {
            await mongoose.connect(url) // conectar     
            conectado =  true // setar a variavel
            console.log("MongoDB conectado")       
         } catch (error) {
            //se o codigo de erro é igualk a 8000 (autenticação)
            if (error.code = 8000){
                console.log("Erro de autenticação")
            } else{
                console.log(error)
            }
         }
    }
}



// método para desconectar o banco de dados 
// "async" executar a função de forma assincrona
const desconectar = async () => {
    // validação (se estiver conectado, desconectar)
    if (conectado) {
         // desconectar com o banco de dados 
         // try catch - tratamento de exceções
         try {
            await mongoose.disconnect(url) // desconectar     
            conectado =  false // setar a variavel
            console.log("MongoDB desconectado")       
         } catch (error) {
            console.log(error)
         }
    }
}



// exportar para o main os métodos conectar e desconectar 
module.exports = { conectar, desconectar} 