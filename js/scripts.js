$(document).ready (function (){
  $("form#form-entry").submit(event);
  event.preventDefault();






  var groceries = ["item1", "item2", "item3", "item4"]
  var listGroceries = groceries.map(function (grocery){
    var userInput = $("input#" + grocery).val();
    $("." + grocery).text(userInput);
  });

});
