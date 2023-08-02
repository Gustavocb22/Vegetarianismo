const express = require('express'); // importando o express
const app = express(); /*Esse express é uma função que vai carregar todo o framework(biblioteca) do express dentro da varável*/
const db = require('./db.js');

//app.listen() vai inicar o servidor
//function(erro){} A função vai ser executada assim que o servidor iniciar, já o parametro erro ocorre sempre quando dar algum erro no servidor.
// Esse Parametro 8080 é a porta onde vai ser rodado o servidor na máquina

app.listen(8080,function(erro){
    if(erro){
        console.log("Ocorreu um erro !!");

    }else{
        console.log("Servidor Iniciado com Sucesso");
        
    }

})
app.get("/",(req,res) =>{
    res.send("Servidor Iniciado com Sucesso")

});


app.post("/salvarsugestoes",(req,res) =>{
    res.send("Formulário recebido");
});