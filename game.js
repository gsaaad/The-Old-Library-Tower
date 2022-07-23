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
// var showPlayerInfo = function (player) {
//   console.log(player.name);
//   console.log("------------------------------");
//   console.log(player.name + " is in " + player.place);
//   console.log(player.name + " has health " + player.health);
//   console.log("------------------------------");
//   console.log("");
// };

// showPlayerInfo(player1);
// showPlayerInfo(player2);

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
var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;

buildPlanet = function (name, position, type, radius, rank) {
  return {
    name: name,
    position: position,
    type: type,
    radius: radius,
    sizeRank: rank,
  };
};
getPlanetInfo = function (planet) {
  return planet.name.toUpperCase() + " \n" + "planet: " + planet.position;
};
planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);
console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));

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
// ability for Wizards/player to walk
move = function (point, change) {
  return {
    x: point.x + change.x,
    y: point.y + change.y,
  };
};

// show player position/point
showPoint = function (point) {
  console.log(" (" + point.x + " , " + point.y + " )");
};
