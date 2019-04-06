//ES8: import http from "./http"
let http = require("http")

http.createServer(function(peticion, respuesta){

	let saludo = "hola al mundo desde <strong> Node.js </strong>";
	respuesta.setHeader("content-type", "text/html")
	respuesta.write( saludo )
	respuesta.end("Usted quiere este recurso: " + peticion.url)

}).listen(2000)




