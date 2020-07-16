class mainController{
	index(req,res){
		res.status(200).view("index.html");
	}
}

module.exports = new mainController();