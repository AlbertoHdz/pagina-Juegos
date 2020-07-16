const partida = require("../service/partidaService");

class partidaController{
	nuevaPartida(tipo,usuario){
		return partida.crearPartida(tipo,usuario);
	}


}

module.exports = new partidaController();