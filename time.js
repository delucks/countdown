// magic numbers happen
var countdownDate = new Date(1458766800 * 1000);

function round(number, digits) {
  var multiple = Math.pow(10, digits);
  var curvy = Math.round(number * multiple) / multiple;
  return curvy;
}

function refreshTime(type){
  var d = new Date();
  var diff = countdownDate - d; // milliseconds
  if (type === "minutes") {
    var number = (diff/1000/60);
  } else if (type === "hours") {
    var number = (diff/1000/60/60);
  } else if (type === "days") {
    var number = (diff/1000/60/60/24);
  } else {
    // default to be seconds
    var number = diff / 1000;
    var type = "seconds"; // seems like this shouldn't work
  }
  // throw the updated vars back into the DOM
  document.getElementById("amount").innerHTML = round(number, 3);
  document.getElementById("type").innerHTML = type;
}
