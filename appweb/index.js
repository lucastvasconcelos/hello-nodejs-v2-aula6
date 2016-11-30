// index.js
const express    = require("express");
const bodyParser = require("body-parser");
const app        = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.post("/dosave", (req,res) => {
  console.log("os dados recebidos do formulário são:");
  console.log(req.body);
  res.send(`<h1>Sucesso!</h1><ul><li>Seu nome: ${req.body.nome}</li>
	<li>Endereço: ${req.body.endereco} </li>
	<li>Telefone: ${req.body.telefone} </li>
</ul>

<a href='index.html'>voltar</a>`);
});

app.listen(3002);
console.log("app online");
