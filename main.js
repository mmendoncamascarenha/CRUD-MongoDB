/**
 * processo principal 
 * Estudo do Banco de Dados MongoDB
 * @author Murillo Mendonca
 */

// importaçao para o modulo de conexao 
const { conectar, desconectar} = require('./database.js')

// importação do modelo de dados do clientes 
const clienteModel = require('./src/models/Clientes.js')


// Função para cadastrar um novo cliente 
// atençao! PARA TRABALHAR COM O BANCO DE DADOS USAR SEMPRE ASYNC-AWAIT E TRY-CATCH
const salvarCliente = async (nomeCli, foneCli, cpfCli) => {
    try {
        //setar a estrutura de dados com os valores
        // obs: usar o mesmo nome da estrutura
        const novoCliente = new clienteModel({
            nomeCliente: nomeCli,
            foneCliente: foneCli,
            cpf: cpfCli
        })
        // a linha abaixo salva os dados no banco de dados
        await novoCliente.save()
        console.log("Cliente adicionado com sucesso")
    } catch (error) {
        console.log(error)
        
    }
}

//=========================================================================
const iniciarSistema = async () => {
    console.clear()
    console.log("Estudo do MongoDB")
    console.log("----------------------------------------------------")
    await conectar()
    // CRUD Create (inserção no banco de dados )
    await salvarCliente("murillinho", "912486970", "1253453604366")
    await desconectar()

}

iniciarSistema()

