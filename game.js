//? multiple players + defining variables
var player1;
var player2;
var player;
var getMessage;
var getHelloTo;
var add;
var totalCost;
// ?player Object
player1 = {
  name: "Kandra",
  place: "The Dungeon of Doom",
  health: 50,
};
// ?Player Object
player2 = {
  name: "Dax",
  place: "The Old Library",
  health: 40,
};
// ? Show player info
var showPlayerInfo = function (player, character) {
  console.log(player.name);
  console.log("------------------------------");
  console.log(player.name + " is in " + player.place);
  console.log(player.name + " has health " + player.health);
  console.log("------------------------------");
  console.log("");
  console.log(getPlayerInfo(player, character));
};

showPlayerInfo(player1);
showPlayerInfo(player2);

// getMessage = function () {
//   console.log("I am going on an adventure");
// };
// getHelloTo = function (name) {
//   console.log("Hello to " + name);
// };
// add = function (number1, number2) {
//   console.log(number1 + number2);
// };
// totalCost = function (callOutCharge, costPerHour, numberOfHours) {
//   console.log(callOutCharge + costPerHour * numberOfHours);
// };

// getMessage();
// getHelloTo("GMoney");
// add(15, 7);
// totalCost(300, 50, 10);

//? learning the game functions and using variables as parameters.

// var getPlayerName = function (playerName) {
//   return playerName;
// };
// var getPlayerHealth = function (playerName, playerHealth) {
//   return playerName + " has health " + playerHealth;
// };
// var getPlayerPlace = function (playerName, playerPlace) {
//   return playerName + " is in " + playerPlace;
// };
var getPlayerPlace = function (player) {
  return player.name + " is in  ", player.place;
};
// var getBorder = function () {
//   return "================================";
// };

// var getPlayerInfo = function (playerName, playerPlace, playerHealth) {
//   var playerInfo;
//   playerInfo = "\n" + getPlayerName(playerName);
//   playerInfo += "\n" + getBorder();
//   playerInfo += "\n" + getPlayerPlace(playerName, playerPlace);
//   playerInfo += "\n" + getPlayerHealth(playerName, playerHealth);
//   playerInfo += "\n" + getBorder();
//   playerInfo += "\n";
//   return playerInfo;
// };
// var player1 = {
//   name: "Kandra",
//   place: "The Dungeon of Doom",
//   health: 50,
// };
// var player2 = {
//   name: "Dax",
//   place: "The Old Library",
//   health: 40,
// };
// console.log(getPlayerInfo(player1.name, player1.place, player1.health));
// console.log(getPlayerInfo(player2.name, player2.place, player2.health));

// ? but its much easier to access when placing an object in the parameter. its cleaner, and if you needed to, you can decontruct it

// var planet1 = { name: "Jupiter", radius: 69911 };
// var buildPlanet;
// var getPlanetInfo;
// var planet1;
// var planet2;

// buildPlanet = function (name, position, type, radius, rank) {
//   return {
//     name: name,
//     position: position,
//     type: type,
//     radius: radius,
//     sizeRank: rank,
//   };
// };
// getPlanetInfo = function (planet) {
//   return planet.name.toUpperCase() + " \n" + "planet: " + planet.position;
// };
// planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
// planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);
// console.log(getPlanetInfo(planet1));
// console.log(getPlanetInfo(planet2));

// var calculateSizes = function (planet) {
//   var r = planet.radius;

//   planet.area = 4 * Math.PI * r ** 2;
//   planet.volume = 4 * Math.PI * (r ** 3 / 3);
//   return planet;
// };
// var displaySizes = function (planet) {
//   console.log(planet.name);
//   console.log("Radius = " + planet.radius);
//   console.log("Surface area = " + planet.area + "square km");
//   console.log("volume = " + planet.volume + " cubic km");
// };

// calculateSizes(planet1);
// displaySizes(planet1);

var point1, point2;
var move;
var showPoint;

// ? ability for Wizards/player to walk
// move = function (point, change) {
//   return {
//     x: point.x + change.x,
//     y: point.y + change.y,
//   };
// };
// point1 = { x: 2, y: 5 };
// point2 = move(point1, { x: 4, y: -2 });

// show player position/point
// showPoint = function (point) {
//   console.log(" (" + point.x + " , " + point.y + " )");
// };

// showPoint(point1);
// showPoint(point2);

// ?create space/lines function
// var spacer = {};

// create a function that returns blank
// spacer.blank = function () {
//   return "";
// };
// create a function that return a new line
// spacer.newLine = function () {
//   return "\n";
// };

// console.log(spacer.blank());
// console.log("Line 1" + spacer.newLine() + "Line 2");
// console.log(spacer.blank());

// var showSmaller = function (num1, num2) {
//   var smaller = Math.min(num1, num2);
//   var larger = Math.max(num1, num2);
//   console.log(smaller + " is smaller than  " + larger);
//   return smaller, larger;
// };
// console.log(showSmaller(5, 17));

// var line = function (lineLength) {
//   var line = "==================================";
//   lineLength = Math.max(0, lineLength);
//   lineLength = Math.min(65, lineLength);
//   return line.substring(0, lineLength);
// };
// console.log(line(30));
// console.log(line(40));
// console.log(line(60));
// console.log(line(80));

// ? using substring(endhere INDEX, begin here INDEX)
// var message = "We choose to go to the moon!";

// console.log(message.substring(3, 12));

// var message = "The cow jumped over the Moon!";
// var charIndex = message.indexOf("M");
// console.log(charIndex);

// give me substring(end, beginning)
// console.log(message.substring(charIndex, 3));

//? main spacer code
// var spacer = {
//   blank: function () {
//     return "";
//   },
//   newLine: function () {
//     return "\n";
//   },
//   line: function (length, character) {
//     var longString = "****************************************";
//     longString += "----------------------------------------";
//     longString += "========================================";
//     longString += "++++++++++++++++++++++++++++++++++++++++";
//     longString += " ";
//     length = Math.max(0, length);
//     length = Math.min(40, length);
//     return longString.substr(longString.indexOf(character), length);
//   },
//   wrap: function (text, length, character) {
//     var padLength = length - text.length - 3;
//     var wrapText = character + " " + text;
//     wrapText += spacer.line(padLength, " ");
//     wrapText += character;
//     return wrapText;
//   },
//   box: function (text, length, character) {
//     var boxText = spacer.newLine();
//     boxText += spacer.line(length, character) + spacer.newLine();
//     boxText += spacer.wrap(text, length, character) + spacer.newLine();
//     boxText += spacer.line(length, character) + spacer.newLine();
//     return boxText;
//   },
// };
// console.log(spacer.box("Mercury", 11, "="));
// console.log(spacer.box("Mars", 11, "*"));

// var getPlayerName = function (player) {
//   return player.name;
// };
// var getPlayerHealth = function (player) {
//   return player.health;
// };
// var getPlayerPlace = function (player) {
//   return player.name + " is in " + player.place;
// };
// var getPlayerInfo = function (player, character) {
//   var place = getPlayerPlace(player);
//   var health = getPlayerHealth(player);
// find out which sentence is longer for presentation purposes
//   var longest = Math.max(place.length, health.length);

//   var info = spacer.box(getPlayerName(player), longest, character);
//   info += spacer.wrap(place, longest, character);
//   info += spacer.newLine() + spacer.wrap(health, longest, character);
//   info += spacer.newLine() + spacer.line(longest, character);
//   info += spacer.newLine();
//   return info;
// };
// var player1 = { name: "Kandra", place: "The Dungeon Of Doom", health: 50 };
// var player2 = { name: "Dax", place: "The Monster of the Arena", health: 50 };

// console.log(getPlayerInfo(player1, "="));
// console.log(getPlayerInfo(player2, "+"));

// var items = [];
// var item = "The Pyramids";
// var removed;
// items.push(item);
// items.push("The Grand Canyon");
// items.push("Bondi Beach");

// console.log(items);
// removed = items.pop();
// console.log(removed + " was removed!");
// console.log(items.join(" and "));

// items = ["The Pyramids", "The Grand Canyon", "Bondi Beach", "Lake Garda"];
// console.log(items);
// // DOES NOT CHANGE ORIGINAL, return new array
// console.log(items.slice(0, 3));
// console.log(items.slice(2, 3));
// console.log(items);
// CHANGES ORIGINAL ARRAY
// console.log(items.splice(0, 2));
// console.log(items.splice(1, 2));
// console.log(items);

// items = ["The Pyramids", "The Grand Canyon", "Bondi Beach", "Lake Garda"];

// var showInfo;

// showInfo = function (itemToShow) {
//   console.log(itemToShow);
// };

// console.log("Dream Destinations");

// items.forEach(function (item) {
//   console.log("-" + item);
// });

// // for each you can get item, index, and whole array
// showArguments = function (item, index, wholeArray) {
//   console.log("Item: " + item);
//   console.log("Index: " + index);
//   console.log("Array: " + wholeArray);
// };
// var players = ["Dax", "Jahver", "Kandra"];
// players.forEach(showArguments);

var displayQuestion = function (questionAndAnswer) {
  var options = ["A", "B", "C", "D", "E"];

  console.log(questionAndAnswer.question);

  questionAndAnswer.answers.forEach(function (answer, i) {
    console.log(options[i] + " -  " + answer);
  });
};

var question1 = {
  question: "What is the capital of France",
  answers: ["Bordeaux", "F", "Paris", "Brussels"],
};

displayQuestion(question1);

var getPlayerItems = function (player) {
  var itemsString = "Items:" + spacer.newLine();
  player.items.forEach(function (item) {
    itemsString += "    -  " + item + spacer.newLine();
  });
  return itemsString;
};
