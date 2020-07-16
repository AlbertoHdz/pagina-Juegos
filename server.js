const http = require("http");
const express =  require("express");
var app = express();

const main = require("./controller/main.js");
const partida = require("./controller/partidaController.js");

app.use(express.static('public'));
app.use((req,res,next)=>{
	res.view = (name) =>{
		res.sendFile(`public/views/${name}`,{root:__dirname});
	};
	next();
});


app.get("/",(req,res)=>{
	return main.index(req,res)}
);

app.post("/nuevo/:tipo/:usuario",(req,res)=>{
	let tipo = req.param.tipo;
	let usuario = req.param.usuario;
	const data = {};
	switch(tipo){
		case "ggr": case "ggl": 
			data = partida.nuevaPartida(tipo,usuario);
		break;
	}

	return res.send("tipo");
})

app.post("/partida/:id",(req,res)=>{

});

app.get("/home",(req,res)=>{
	return res.send("Holaaa");
});


app.set("port",process.env.PORT || 5000);
app.listen(app.get("port"),()=>{
	console.log("servidor en puerto:",app.get("port"));
});