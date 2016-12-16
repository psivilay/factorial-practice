$(document).ready(function() {
  $("form#numbers_input").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#input-number").val());
    var total = userInput

    for (var index = 1; index < userInput ; index += 1 ) {
      var total = total * (userInput-index)
    }

    $("#results").text(total);

  });
});

//var num1 = [5, 4, 3, 2, 1]
//var num2 = [(5*(5-1) *(5-2) * (5-3) *(5-4))]

//      for (var index1 = total; index1 > ; index1 = index)
//      var total = index * (index-1)


///5 is what we start with, multiply by 5-1, then loop around
//but multiply (5-1) * (5-2)
