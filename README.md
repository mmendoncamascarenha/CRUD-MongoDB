![GitHub License](https://img.shields.io/github/license/mmendoncamascarenha/CRUD-MongoDB)

# CRUD-MongoDB

Projeto de exemplo com operações CRUD (Create, Read, Update, Delete) utilizando **Node.js**, **Express** e **MongoDB**. Ideal para aprendizado de integração entre back-end e banco de dados NoSQL.

---

## Sobre

Este projeto demonstra como criar uma aplicação CRUD simples usando Node.js e MongoDB, com foco em organização de código e boas práticas no uso de rotas, controllers e integração com o banco de dados.

---

## Funcionalidades

* Criação de registros
* Listagem de todos os dados salvos
* Edição e atualização de documentos
* Remoção de dados existentes

---

## Tecnologias Utilizadas

* Node.js
* Express
* MongoDB com Mongoose
* dotenv para variáveis de ambiente
* Postman ou Insomnia para testes de API

---

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/mmendoncamascarenha/CRUD-MongoDB.git
   cd CRUD-MongoDB
   ```
2. Instale as dependências:

   ```bash
   npm install
   ```
3. Crie um arquivo `.env` e configure a URL do MongoDB:

   ```env
   MONGODB_URI=mongodb://localhost:27017/nomedobanco
   PORT=3000
   ```

---

## Uso

1. Inicie o servidor:

   ```bash
   npm start
   ```
2. Use o Postman ou outro cliente HTTP para testar as rotas:

   * `POST /items`
   * `GET /items`
   * `PUT /items/:id`
   * `DELETE /items/:id`

---

## Estrutura de Pastas

```
CRUD-MongoDB/
├─ src/
│   ├─ controllers/
│   ├─ models/
│   ├─ routes/
│   └─ index.js
├─ .env
├─ package.json
└─ README.md
```

---

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções:

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b melhoria/descricao`
3. Faça os commits necessários
4. Envie um Pull Request

---

## Licença

Este projeto está licenciado sob os termos da licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.
