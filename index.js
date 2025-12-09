import knex from "knex";
import knexfile from "./knexfile.js";
import { criarTabelaProduto, criarTabelaClientes, criarTabelaFornecedores, criarTabelaFuncionarios, criarTabelaUsuarios, criarTabelaVendas, inserirFunc, consultarFunc, alterarFunc, excluirFunc } from "./funcoes.js";

const conexao = knex(knexfile);

// await criarTabelaFuncionarios(conexao)
// await criarTabelaClientes(conexao)
// await criarTabelaFornecedores(conexao)
// await criarTabelaProduto(conexao)
// await criarTabelaUsuarios(conexao)
// await criarTabelaVendas(conexao)

// await inserirFunc(conexao, { nome: "Carla Souza", email: "carla.souza@gmail.com", dataNascimento: "1988-04-20", dataInicio: "2024-03-15", cpf: 98765432100 })

// await consultarFunc(conexao, {codFunc: 2})
// await consultarFunc(conexao, {}) //aparece todos

// await alterarFunc(conexao, {codFunc: 2}, {nome: "Laercio Silva"})

// await excluirFunc(conexao, {codFunc: 3})



conexao.destroy;