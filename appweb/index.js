// index.js
const express    = require("express");
const bodyParser = require("body-parser");
const app        = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.post("/dosave", (req,res) => {
  console.log("os dados recebidos do formulário são:");
  console.log(req.body);
  res.send(`<h1>Sucesso!</h1><ul><li>Seu nome: ${req.body.nome}</li><li>Endereço: ${req.body.endereco} </li><li>Telefone: ${req.body.telefone} </li></ul>
<ahref='index.html'>voltar</a>`);
});

app.post("/adivinha",(req,res) =>{
 	console.log("numero: ");
 	console.log(req.body.numero);
 	res.send(`<h1> ${req.body.numero} </h1>`)
});

app.listen(3005);
console.log("app online");
