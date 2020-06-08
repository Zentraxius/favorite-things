// Business Logic
const favArray = [1, 2, 3, 4];

// User Interface Logic
$(document).ready(function() {
  $("#fav-things").submit(function(event) {

    const favColor = $("input:radio[name=color]:checked").val();
    const favDay = $("input:radio[name=day]:checked").val();
    const favCoffee = $("input:radio[name=coffee]:checked").val();
    const favVacay = $("input#vacation").val();

    favArray[0] = favColor;
    favArray[1] = favDay;
    favArray[2] = favCoffee;
    favArray[3] = favVacay;

    favArray.forEach(function(favorite-thing) {
      $("#fav-list").append("<li>" + favorite-thing + "</li>")
    });

    // $("#fav-list").append("<li>" + favArray[0] + "</li>");
    // $("#fav-list").append("<li>" + favArray[1] + "</li>");
    // $("#fav-list").append("<li>" + favArray[2] + "</li>");
    // $("#fav-list").append("<li>" + favArray[3] + "</li>");

    event.preventDefault();
  });  
})