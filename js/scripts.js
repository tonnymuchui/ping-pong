$(document).ready(function(){
  $("form#myForm").submit(function(event){
    event.preventDefault()
    var userinput = $("input#userInput").val()
    for (var i=1; i<=userinput; i++) {
      var results = "";
      if (i % 3 === 0) results = "ping";
      if (i % 5 === 0) results += "pong"
      console.log(results || i);
    }
    $("p#display").text(userinput)
  });
});
