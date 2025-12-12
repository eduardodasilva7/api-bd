import knex from "knex";
import knexfile from "./knexfile.js";
import { criarTabelaProduto, criarTabelaClientes, criarTabelaFornecedores, criarTabelaFuncionarios, criarTabelaUsuarios, criarTabelaVendas, 
  inserirFunc, consultarFunc, alterarFunc, excluirFunc,
  inserirCliente, consultarCliente, alterarCliente, excluirCliente,
inserirForncedores, consultarForncedores, alterarFornecedores, excluirFornecedores,
inserirProduto, consultarProduto, alterarProduto, excluirProduto,
inserirUsuario, consultarUsuario, alterarUsuario, excluirUsuario,
inserirVenda, consultarVenda, alterarVenda, excluirVenda } from "./funcoes.js";

const conexao = knex(knexfile);

// await criarTabelaFuncionarios(conexao)
// await criarTabelaClientes(conexao)
// await criarTabelaFornecedores(conexao)
// await criarTabelaProduto(conexao)
// await criarTabelaUsuarios(conexao)
// await criarTabelaVendas(conexao)

// await inserirFunc(conexao, { nome: "Carla Souza 4", email: "carla.souza@gmail.com", dataNascimento: "1988-04-20", dataInicio: "2024-03-15", cpf: 98765432100 })

// await consultarFunc(conexao, {codFunc: 2})
// await consultarFunc(conexao, {}) //aparece todos

// await alterarFunc(conexao, {codFunc: 2}, {nome: "Laercio Silva"})

// await excluirFunc(conexao, {codFunc: 3})

// await inserirCliente(conexao, 
//   [{ nome: 'João Silva', lograduro: 'Rua das Flores', numero: 120, cpf: 12345678901 },
//   { nome: 'Maria Oliveira', lograduro: 'Avenida Brasil', numero: 450, cpf: 98765432100 },
//   { nome: 'Carlos Pereira', lograduro: 'Rua Central', numero: 89, cpf: 45678912300 },
//   { nome: 'Ana Souza', lograduro: 'Travessa Azul', numero: 33, cpf: 32165498700 }])

// await alterarCliente(conexao, {codCli: 6}, {nome: 'Alan Pererira'})

// await consultarCliente(conexao, {})

// await excluirCliente(conexao, {codCli: 8})

// await inserirForncedores(conexao, [
//   { nome: 'Alimentos Brasil Ltda', logradouro: 'Rua das Indústrias, 500', contato: 11987654321,    cnpj: 12345678000199 },
//   { nome: 'Comercial Vitória', logradouro: 'Avenida Central, 210', contato: 21999887766, cnpj: 98765432000155 },
//   { nome: 'Distribuidora Sol Nascente', logradouro: 'Rua dos Comerciantes, 45', contato: 31988776655, cnpj: 45678912000133 },
//   { nome: 'Tech Supplies', logradouro: 'Avenida Tecnológica, 900', contato: 11944556677, cnpj: 66554433000122 }
// ])

// await alterarFornecedores(conexao, {codFornce: 3}, {nome: 'Distrbuidora Sol das Nascentes'} )

// await consultarForncedores(conexao, {})

// await inserirProduto(conexao, [
//   { nome: "Boné Aba Reta Urban", price: 59.90, date: "2025-02-13", bio: "Boné com design urbano, perfeito para o dia a dia.", codFornce: 2 },
//   { nome: "Moletom Oversized Black", price: 199.00, date: "2025-02-14", bio: "Moletom confortável, tecido premium, estilo oversized.", codFornce: 3
//   },
//   { nome: "Calça Cargo Tactical", price: 149.50, date: "2025-02-15", bio: "Calça cargo com múltiplos bolsos e tecido resistente.", codFornce: 3
//   }
// ])

// await consultarProduto(conexao, [])

// await alterarProduto(conexao, {codProd: 3}, {nome: "VideoGame"})

// await excluirProduto(conexao, {codProd: 2});

// await inserirUsuario(conexao, { nome: "Eduardo Silva", email: "eduardo.silva@example.com", dataNascimento: "2002-07-15", cpf: 12345678901, codFunc: 1
// })

// await consultarUsuario(conexao, {})

// await alterarUsuario(conexao, {codUsu: 2}, {nome: "Jonas Carvalho"})

// await excluirUsuario(conexao, {codUsu: 2});


// await inserirVenda(conexao, [
//   { nome: "Venda #002", vendedor: "Marcos Santos", cliente: "Pedro Reis", forncedor: "Fornecedor XYZ", price: 159, codProd: 2, codFornce: 1, codCli: 2
//   },
//   { nome: "Venda #003", vendedor: "João Carvalho", cliente: "Bruna Castro", forncedor: "Fornecedor Alpha", price: 449, codProd: 3, codFornce: 2, codCli: 3
//   },
//   { nome: "Venda #004", vendedor: "Carla Borges", cliente: "Felipe da Luz", forncedor: "Fornecedor Beta", price: 89, codProd: 1, codFornce: 3, codCli: 2
//   }
// ])

// await consultarVenda(conexao, {})

// await alterarVenda(conexao, {codVenda: 2}, {nome: "Jonas Carvalho"})

// await excluirVenda(conexao, {codVenda: 5});



conexao.destroy;