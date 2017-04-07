

function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
}

var towers = randomArray(10, 9); //[2,2,6,9,7,1,5,7,7,3]; //
var water = [];


var tallerToLeft = function(index){
  var startHeight = towers[index];
  var tallestLeft = 0;

  for (var i = index; i >= 0; i--) {

    if(towers[i] > startHeight && towers[i] > tallestLeft){
      tallestLeft = towers[i];
    }
  }

  //console.log("Tallest to the left: " + tallestLeft);
  return tallestLeft;
};

var tallerToRight = function(index){
  var startHeight = towers[index];
  var tallestRight = 0;

  for (var i = index; i < towers.length; i++) {

    if(towers[i] > startHeight && towers[i] > tallestRight){
      tallestRight = towers[i];
    }
  }

  //console.log("Tallest to the right: " + tallestRight);
  return tallestRight;
};


var printGraph = function(){

  console.log("Tower Heights: " + towers);

  var output = "";

  for (var i = 0; i < towers.length; i++) {

    var blocks = "";

    for (var x = 0; x < towers[i]; x++) {
      blocks += "|";
    }

    for (var x = 0; x < water[i]; x++) {
      blocks += "-";
    }
    blocks += "\n";
    output += blocks;
  }

  console.log(output);

};

var main = function(){

  // start at index 1 and end at length -1
  for (var i = 1; i < towers.length - 1; i++) {

    //console.log("Curent Tower Height: " + towers[i]);

    //Get tallest to left of current tower
    var tallestLeft = tallerToLeft(i);

    //Get tallest to right of current tower
    var tallestRight = tallerToRight(i);

    //Get the smaller of the 2 tallest
    var shortestOfTheTwo =
      tallestLeft > tallestRight ? tallestRight : tallestLeft;

    var waterOnTower = shortestOfTheTwo - towers[i];
    water[i] = waterOnTower;
    //console.log("Water difference: " + waterOnTower);
  }

  printGraph();

};

main();
