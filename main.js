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
        // tratamento personalizado dos erros(exceções)
        if(error.code = 1100) {
            console.log(`Erro: O CPF ${cpfCli} já está cadastrado`)
        } else {
            console.log(error)
        }
    }
}

//========================================função para listar todos os clientes============================================

const listarClientes = async () => {
    try {
        const clientes = await clienteModel.find().sort({nomeCliente: 1})//.sort({nomeCliente: 1}) Listar em ordem alfabética (nome)
        console.log(clientes)
    } catch (error) {
        console.log(error)
    }
}

// Função para buscar um cliente pelo nome 
//find({nomeCliente: new RegExp(nome, i)}) ignorar na busca
//letras maiusculas ou minúculas (i- case insensitive)
const buscarClientNome = async (nome) =>  {
    try {
        const clienteNome = await clienteModel.find(
            {
                nomeCliente: new RegExp(nome, 'i')
            }
        )
        console.log(clienteNome)
    } catch (error) {
        console.log(error)
    }
}

// Função para buscar um cliente oelo CPF
const buscarClientCPF = async (cpf) =>  {
    try {
        const clienteCPF = await clienteModel.find(
            {
                cpf: new RegExp(cpf)
            }
        )
        console.log(clienteCPF)
    } catch (error) {
        console.log(error)
    }
}


// Função pára editar os dados dos clientes
// Atenção!!! Usar o ID do cliente
const atualizarCliente = async (id, nomeCli, foneCli, cpfCli) => {
    try {
        const clienteEditado = await clienteModel.findByIdAndUpdate(
            id,
            {
                nomeCliente: nomeCli, 
                foneCliente: foneCli,
                cpf : cpfCli
            },
            {
                new: true,
                runValidators: true
            }
        )
        console.log("Dados do cliente alterados com sucesso!")
    } catch (error) {
        // tratamento personalizado dos erros(exceções)
        if(error.code = 1100) {
            console.log(`Erro: O CPF ${cpfCli} já está cadastrado`)
        } else {
            console.log(error)
        }
    }
}


// Função parea excluir o cliente
//atenção!!! usar o id do cliente
const excluirCliente = async (id) => {
    try {
        const clienteDeletado = await clienteModel.findByIdAndDelete(id)
        console.log("Cliente excluído com sucesso!")
    } catch (error){
         console.log(error)
    }
}

//========================================================================

//=========================================================================
const iniciarSistema = async () => {
    console.clear()
    console.log("Estudo do MongoDB")
    console.log("----------------------------------------------------")
    await conectar()
    // CRUD Create (inserção no banco de dados )
    //await salvarCliente("mourao", "912486970", "73058483056")

    // CRUD Read (listar todos clientes)
    //await listarClientes()

    // CRUD Read (buscar pelo nome do cliente)
    //await buscarClientNome("nathan")
    
    // CRUD read (buscar pelo cpf do cliente)
    //await buscarClientCPF("1253453604366")
    
    // CRUD update (id do cliente)
    //await atualizarCliente("67d881f40f94e656c4e975e1", "murillaoo","(11)999999-8888","6583605306")
    
    // CRUD Delete(id do cliente)
    await excluirCliente("67d881f40f94e656c4e975e1")
    
    await desconectar()

}

iniciarSistema()

