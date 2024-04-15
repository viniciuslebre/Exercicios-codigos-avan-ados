var minhabiblioteca = require("./Biblioteca2");
var http = require("http")
var minhaApp = "arquivo principal";

minhabiblioteca.temadeaula = minhaApp;

http.createServer( function (res, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("RGM"  + (minhabiblioteca.RGM) + " "+ (minhabiblioteca.PrimeiroNome) + " "+ (minhabiblioteca.SegundoNome))
}).listen(3030);