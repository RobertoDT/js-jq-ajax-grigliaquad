$(document).ready(function(){

  //genera griglia
  var row = "";
  for (var i = 0; i < 6; i++){
  	row += "<div class='box-row'></div>";
  	for(var j = 0; j < 6; j++){
  		row += "<div class='box'></div>";
  	}
  }
  $('.box-wrapper').append(row);

  var boxes = $(".box");
  boxes.click(function(){

    //salvo il this in una variabile dato che dentro l'ajax il this non funziona
    var self = $(this);
    $.ajax(
      {
        "url": "https://flynn.boolean.careers/exercises/api/random/int",
        "method": "GET",
        "success": function (data, stato) {
          var numeroServer = data.response;

            if(numeroServer <= 5){
              self.addClass("yellow");
              self.removeClass("green");
              self.text(numeroServer);
            } else {
              self.addClass("green");
              self.removeClass("yellow");
              self.text(numeroServer);
            }

        },
        "error": function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errore);
        }
      }
    );
  })


});
