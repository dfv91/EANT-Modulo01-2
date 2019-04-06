const loki = require("lokijs")
const express = require ("express")
const bodyParser = require ("body-parser")

const app = express ()

const port = 80

let noticiasColeccion= null;

let db = new loki("noticias.json", {
	autoload: true,
    autosave: true, 
    autosaveInterval: 4000,
    autoloadCallback : function(){
    	noticiasColeccion = db.getCollection("noticias")
    	if( noticiasColeccion === null ){
    		noticiasColeccion = db.addCollection("noticas")
    	} 
    }
})

app.set("view engine","ejs")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true} ))
app.use(express.static("publico"))

app.get("/",function(request,response){
    response.send("hola")
})

app.get("/noticias",function(request,response){
    let notas = noticiasColeccion.chain().data()
    response.send(notas)
})

app.get("/noticias/:id",function(request,response){
    let noticiaId = request.params.id
    let nota = noticiasColeccion.get(noticiaId)
    response.send(notas)
})

app.post("/noticias", function(request,response){
    let body = request.body
    noticiasColeccion.insert(body)
    response.send(body)


})

app.listen(port,function(){
	console.log("servidor iniciado")
})