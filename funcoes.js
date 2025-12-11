//created table employees
export async function criarTabelaFuncionarios(conexao) {
  await conexao.schema.createTable("funcionarios", table =>{
    table.increments("codFunc").unsigned().notNullable()
    table.string("nome")
    table.string("email")
    table.date("dataNascimento")
    table.date("dataInicio")
    table.integer("cpf")
  })

  console.log("Tabela funcionario criada.")
}

    //inserir funcionarios
    export async function inserirFunc(conexao, inserir) {
      await conexao("funcionarios").insert(inserir)
      console.log("Funcionario inserido")
    }

    //consultar funcionarios
    export async function consultarFunc(conexao, filtro){
      const dado = await conexao.select().from("funcionarios").where(filtro)

      console.log(dado)
    }

    //alterar funcionarios
    export async function alterarFunc(conexao, ondeAlt, oQueAlt){
      await conexao("funcionarios").where(ondeAlt).update(oQueAlt)
      console.log("Alteração de funcionario realizada")

    }

    // excluir o funcionario
    export async function excluirFunc(conexao, filtro){
      await conexao("funcionarios").where(filtro).del()
      console.log("Funcionario delatado do sistema")
    }

//created table clients
export async function criarTabelaClientes(conexao){
  await conexao.schema.createTable("clientes", table =>{
    table.increments("codCli").unsigned().notNullable()
    table.string("nome")
    table.string("lograduro")
    table.integer("numero")
    table.integer("cpf")
  })

  console.log("tabela cliente criada.")
}

    //inserir clientes
    export async function inserirCliente(conexao, inserir){
      await conexao("clientes").insert(inserir)
      console.log("Cliente inserido com sucesso.")
    }

    //consultar clientes
    export async function consultarCliente(conexao, filtro){
      const dado = await conexao.select().from("clientes").where(filtro)
      console.log(dado)
    }

    //alterar clientes
    export async function alterarCliente(conexao, ondeAlt, oQueAlt){
      await conexao("clientes").where(ondeAlt).update(oQueAlt)
      console.log("Cliente alterado com sucesso.")
    }

    //deletar cliente
    export async function excluirCliente(conexao, filtro){
      await conexao("clientes").where(filtro).del()
      console.log("Cliente deletado com sucesso.")
    }

//created table suppliers
export async function criarTabelaFornecedores(conexao){
  await conexao.schema.createTable("fornecedores", table=>{
    table.increments("codFornce").unsigned().notNullable()
    table.string("nome")
    table.string("logradouro")
    table.integer("contato")
    table.integer("cnpj")
  })

  console.log("tabela fornecedores criada") 
}

    //inserir fornecedores
    export async function inserirForncedores(conexao, inserir){
      await conexao("fornecedores").insert(inserir)
      console.log("fornecedor inserido")
    }

    //consultar forncedores
    export async function consultarForncedores(conexao, filtro){
      const dado = await conexao.select().from("fornecedores").where(filtro)
      console.log(dado)
    }

    //alterar fornecedores
    export async function alterarFornecedores(conexao, ondeAlt, oQueAlt){
      await conexao("fornecedores").where(ondeAlt).update(oQueAlt)
      console.log("Fornecedor alterado com sucesso")
    }

    //deletar fornecedores
    export async function excluirFornecedores(conexao, filtro){
      await conexao("forecedores").where(filtro).del()
      console.log("Fornecedor deletado")
    }

//created table products
export async function criarTabelaProduto(conexao) {
  await conexao.schema.createTable("produtos", table => {
    table.increments("codProd").unsigned().notNullable()
    table.string("nome")
    table.float("price")
    table.date("date")
    table.text("bio")
    table.integer("codFornce").unsigned()
    table.foreign("codFornce").references("codFornce").inTable("fornecedores")
  })

  console.log("Tabela produtos criada.")
}

    //inserir produto
    export async function inserirProduto(conexao, inserir){
      await conexao("produtos").insert(inserir)
      console.log("Produto inserido")
    }

    //consultar produto
    export async function consultarProduto(conexao, filtro){
      const dado = await conexao.select().from("produtos").where(filtro)
      console.log(dado)
    } 

    //alterar produto
    export async function alterarProduto(conexao, ondeAlt, oQueAlt){
      await conexao("produtos").where(ondeAlt).update(oQueAlt)
      console.log("Produto alterado")
    }

    //exluir produto
    export async function excluirProduto(conexao, filtro){
      await conexao("produtos").where(filtro).del()
      console.log("Produto exluido")
    }

//created table user
export async function criarTabelaUsuarios(conexao) {
  await conexao.schema.createTable("usuarios", table =>{
    table.increments("codUsu").unsigned().notNullable()
    table.string("nome")
    table.string("email")
    table.date("dataNascimento")
    table.integer("cpf")
    table.integer("codFunc").unsigned()
    table.foreign("codFunc").references("codFunc").inTable("funcionarios")
    })

  console.log("Tabela usuário criada.")
}

    //inserir usuario
    export async function inserirUsuario(conexao, inserir){
      await conexao("usuarios").insert(inserir)
      console.log("Usuario inserido")
    }

    //consultar usuario
    export async function consultarUsuario(conexao, filtro){
      const dado = await conexao.select().from("usuarios").where(filtro)
      console.log(dado)
    }

    //alterar usuario
    export async function alterarUsuario(conexao, ondeAlt, oQueAlt){
      await conexao("usuarios").where(ondeAlt).update(oQueAlt)
      console.log("Usuario alterado")
    }

    //exluir usuario
    export async function excluirUsuario(conexao, filtro){
      await conexao("ususarios").where(filtro).del()
      console.log("usuario deletado")
    }

//created table sales
export async function criarTabelaVendas(conexao){
  await conexao.schema.createTable("vendas", table =>{
    table.increments("codVenda").unsigned().notNullable()
    table.string("nome")
    table.string("vendedor")
    table.string("cliente")
    table.string("forncedor")
    table.integer("price")
    table.integer("codProd").unsigned().notNullable()
    table.integer("codFornce").unsigned().notNullable()
    table.integer("codCli").unsigned().notNullable()
    table.foreign("codProd").references('codProd').inTable("produtos")
    table.foreign("codFornce").references("codFornce").inTable("fornecedores")
    table.foreign("codCli").references("codCli").inTable("clientes")
  })

  console.log("tabela vendas criada.")
}

    //inserir vendas
    export async function inserirVenda(conexao, inserir){
      await conexao("vendas").insert(inserir)
      console.log("Venda inserir")
    }

    //consultar vendas
    export async function consultarVenda(conexao, filtro){
      const dado = await conexao.select().from("vendas").where(filtro)
      console.log(dado)
    }

    // atualizar vendas
    export async function alterarVenda(conexao, ondeAlt, oQueAlt){
      await conexao("vendas").where(ondeAlt).update(oQueAlt)
      console.log("Venda atualizada")
    }

    //excluir venda
    export async function excluirVenda(conexao, filtro){
      await conexao("vendas").where(filtro).del()
      console.log("Venda excluida")
    }