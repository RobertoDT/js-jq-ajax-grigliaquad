$(document).ready(function(){

  var boxes = $(".box");

  function check(numero){
    for(var i = 1; i <= boxes.length; i++){
      var index = i - 1;
      if(numero <= 5){
        $(boxes[index]).addClass("yellow");
        $(boxes[index]).removeClass("green");
      } else {
        $(boxes[index]).addClass("green");
        $(boxes[index]).removeClass("yellow");
      }
    }
  }

  boxes.click(function(){
    $.ajax(
      {
        "url": "https://flynn.boolean.careers/exercises/api/random/int",
        "method": "GET",
        "success": function (data, stato) {
          var numeroServer = data.response;
          console.log(numeroServer);

          check(numeroServer);

          boxes.text(numeroServer);
        },
        "error": function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errore);
        }
      }
    );
  })


});
