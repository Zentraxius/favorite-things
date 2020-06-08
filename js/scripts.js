// Business Logic
// compile user data into an array
const favArray = [favColor, favDay, favCoffee, favVacay];

// User Interface Logic
// gather data from form
$(document).ready(function() {
  const favColor = $("input:radio[name=color]:checked").val();
  const favDay = $("input:radio[name=day]:checked").val();
  const favCoffee = $("input:radio[name=coffee").val();
  const favVacay = $("input#vacation").val();


})


// display array