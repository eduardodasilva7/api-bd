function gerarThAuto(dados){
  if (!dados.length) return;

  const chaves = Object.keys(dados[0])
  const cabecalho = document.querySelector("#tabela thead tr")

  cabecalho.innerHTML = "";

  chaves.forEach(chave => {
    cabecalho.insertAdjacentHTML("beforeend", `<th>${chave}</th>`)
  })
}

async function carregarFuncionarios() {
  try {
    const resposta = await fetch("http://localhost:3000/funcionarios");
    const dados = await resposta.json();

    gerarThAuto(dados)

    const tabela = document.querySelector("#tabela tbody");
    tabela.innerHTML = "";

    dados.forEach(func => {
      tabela.insertAdjacentHTML("beforeend", `
        <tr>
          <td>${func.codFunc}</td>
          <td>${func.nome}</td>
          <td>${func.email}</td>
          <td>${func.dataNascimento}</td>
          <td>${func.dataInicio}</td>
          <td>${func.cpf}</td>
        </tr>
      `);
    });


  } catch (error) {
    console.error("Erro ao carregar", error);
  }
}

async function carregarClientes() {
  try{
    const resposta = await fetch("http://localhost:3000/clientes");
    const dados = await resposta.json();

    gerarThAuto(dados);

    const tabela = document.querySelector("#tabela tbody");
    tabela.innerHTML = "";

    dados.forEach(cli => {
      tabela.insertAdjacentHTML("beforeend",
        `<tr>
          <td>${cli.codCli}</td>
          <td>${cli.nome}</td>
          <td>${cli.lograduro}</td>
          <td>${cli.numero}</td>
          <td>${cli.cpf}</td>
        </tr>`
      );
    });
  }catch( error ){
    console.error("Erro ao carregar ", error)
  }
}