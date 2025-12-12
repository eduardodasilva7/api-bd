import express from "express";
import knex from "knex";
import knexfile from "./knexfile.js";
import { consultarFunc } from "./funcoes.js";
import cors from "cors";

const app = express(); 
app.use(cors());  
const conexao = knex(knexfile);

app.get("/funcionarios", async (req, res) =>{
  try{
    const funcionarios = await consultarFunc(conexao, {});
    res.json(funcionarios)
  } catch(error){
    res.status(500).json({ error: error.message })
  }
})

app.listen(3000, () => console.log("Servidor rodadno na porta 3000"))
