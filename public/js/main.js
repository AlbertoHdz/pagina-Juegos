$(function(){

	$(".loader").hide();

	$(".nuevo-juego").on("click",function(){
		var tj = $(this).attr("data-game");
		$("#tipoJuego").val(tj);
		$("#modalNuevoJuego").modal("show");
	});

	$(".modal-body  a").on("click",function(e){
		e.preventDefault();
		var usr = $("#usuario");
		var tj = $("#tipoJuego").val();
		if(usr.val() === ""){
			usr.focus();
			usr.css("border","2px solid #ff8500");
			//alert("ingresa un nombre de usuario");
			return false;
		}

		$.ajax({
			url:  "/nuevo/"+tj+"/"+usr.val(),
			type: "POST",
			beforeSend: function(){
				$(".loader").show();
			},
			success: function(data){
				$(".loader").hide();
				//window.location.href = data.url;
			}
		});
		

	});
})