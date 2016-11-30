// index.js
const express    = require("express");
const bodyParser = require("body-parser");
const app        = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.post("/dosave", (req,res) => {
  console.log("os dados recebidos do formulário são:");
  console.log(req.body);
  res.send("<h1>Sucesso!</h1><a href='index.html'>voltar</a>");
});
app.post("/adivinha", (req,res) => {
  if(req.body && req.body.numero == 7)
    res.send("<h1>Acertou!</h1><a href='numero.html'>voltar</a>");
  else
    res.send("<h1>Errou!</h1><a href='numero.html'>voltar</a>");
});
app.get("/convidados", (req,res) => {
  var convs = [{nomeconvidado:"Maria"},{nomeconvidado:"João"}];
  res.send(convs);
});
app.listen(3000);
console.log("app online");
