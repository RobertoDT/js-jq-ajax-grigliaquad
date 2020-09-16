$(document).ready(function(){

  var boxes = $(".box");

  boxes.click(function(){
    $.ajax(
      {
        "url": "https://flynn.boolean.careers/exercises/api/random/int",
        "method": "GET",
        "success": function (data, stato) {
          var numeroServer = data.response;
          console.log(numeroServer);

          for(var i = 1; i <= boxes.length; i++){
            var index = i - 1;
            if(numeroServer <= 5){
              $(boxes[index]).addClass("yellow");
              $(boxes[index]).removeClass("green");
              $(boxes[index]).text(numeroServer);
            } else {
              $(boxes[index]).addClass("green");
              $(boxes[index]).removeClass("yellow");
              $(boxes[index]).text(numeroServer);
            }
          }

        },
        "error": function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errore);
        }
      }
    );
  })


});
