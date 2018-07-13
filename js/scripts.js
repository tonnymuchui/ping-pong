$(document).ready(function(){
  $("form#myForm").submit(function(event){
    event.preventDefault();
    var userinput = $("input#user").val();
    for (var i=1; i<=userinput; i++) {
      var results =  "";
      if (i % 3 != 0 && i % 5 !=0) results =(i)
      if (i % 3 === 0) results = "ping";
      if (i % 5 === 0) results += "pong";
      console.log(results || i);
      $("p#display").append(results + "<br/>" || i + '<br/>');
    }
  });
});
