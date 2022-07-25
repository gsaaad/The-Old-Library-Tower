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
// var showPlayerInfo = function (player, character) {
//   console.log(player.name);
//   console.log("------------------------------");
//   console.log(player.name + " is in " + player.place);
//   console.log(player.name + " has health " + player.health);
//   console.log("------------------------------");
//   console.log("");
//   console.log(getPlayerInfo(player, character));
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
// var getPlayerItems = function (player) {
//   var itemsString = "Items:" + spacer.newLine();
//   player.items.forEach(function (item) {
//     itemsString += "    -  " + item + spacer.newLine();
//   });
//   return itemsString;
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

// // ? but its much easier to access when placing an object in the parameter. its cleaner, and if you needed to, you can decontruct it

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

// var point1, point2;
// var move;
// var showPoint;

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
var spacer = {
  blank: function () {
    return "";
  },
  newLine: function () {
    return "\n";
  },
  line: function (length, character) {
    var longString = "****************************************";
    longString += "----------------------------------------";
    longString += "========================================";
    longString += "++++++++++++++++++++++++++++++++++++++++";
    longString += " ";
    length = Math.max(0, length);
    length = Math.min(40, length);
    return longString.substr(longString.indexOf(character), length);
  },
  wrap: function (text, length, character) {
    var padLength = length - text.length - 3;
    var wrapText = character + " " + text;
    wrapText += spacer.line(padLength, " ");
    wrapText += character;
    return wrapText;
  },
  box: function (text, length, character) {
    var boxText = spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    boxText += spacer.wrap(text, length, character) + spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    return boxText;
  },
};
// console.log(spacer.box("Mercury", 11, "="));
// console.log(spacer.box("Mars", 11, "*"));

var getPlayerName = function (player) {
  return player.name;
};
var getPlayerHealth = function (player) {
  return player.health;
};
var getPlayerPlace = function (player) {
  return player.name + " is in " + player.place;
};
var getPlayerItems = function (player) {
  var itemsString = "Items:" + spacer.newLine();
  player.items.forEach(function (item) {
    itemsString += " - " + item + spacer.newLine();
  });
  return itemsString;
};
var getPlayerInfo = function (player, character) {
  var place = getPlayerPlace(player);
  var health = getPlayerHealth(player);
  // find out which sentence is longer for presentation purposes
  var longest = Math.max(place.length, health.length);

  var info = spacer.box(getPlayerName(player), longest, character);
  // player information
  info += spacer.wrap(place, longest, character);
  info += spacer.newLine() + spacer.wrap(health, longest, character);
  info += spacer.newLine() + spacer.line(longest, character);
  // get items
  info += spacer.newLine();
  info += "  " + getPlayerItems(player);
  info += spacer.newLine();
  info += spacer.line(longest, character);

  info += spacer.newLine();
  return info;
};

var player1 = {
  name: "Kandra",
  place: "The Dungeon Of Doom",
  health: 50,
  items: ["a trusty lamp"],
};
var player2 = { name: "Dax", place: "The Monster of the Arena", health: 50 };

var showPlayerInfo = function (player, character) {
  console.log(getPlayerInfo(player, character));
};
// showPlayerInfo(player1, "=");
// player1.items.push("a rusty key");
// showPlayerInfo(player1, "*");
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

// var displayQuestion = function (questionAndAnswer) {
//   var options = ["A", "B", "C", "D", "E"];

//   console.log(questionAndAnswer.question);

//   questionAndAnswer.answers.forEach(function (answer, i) {
//     console.log(options[i] + " -  " + answer);
//   });
// };

// var question1 = {
//   question: "What is the capital of France",
//   answers: ["Bordeaux", "F", "Paris", "Brussels"],
// };

// displayQuestion(question1);

var planets;
//? constructor function, creating Planets

// var Planet = function (name, position, type) {
//   this.name = name;
//   this.position = position;
//   this.type = type;
//   this.moons = [];

//   this.showPlanet = function () {
//     var info = this.name + ": planet " + this.position;
//     info += " - " + this.type;
//     console.log(info);
//     console.log("Moons: " + this.moons.join(", ") + ".");
//   };
//   this.addMoon = function (moon) {
//     // this.moons.push(moon);
//     // use this to prepend elements to start
//     this.moons.unshift(moon);
//   };
// };

// var planet = new Planet("Jupiter", 5, "Gas Giant");
// planet.addMoon("I0");
// planet.addMoon("Europa");
// planet.showPlanet();

// var planet2 = new Planet("Neptune", 8, "Ice Giant");
// planet2.addMoon("Triton");

// var planet3 = new Planet("Mercury", 1, "Terrestrial");
// [planet, planet2, planet3].forEach(function (planet) {
//   planet.showPlanet();
// });

// // thiis is how to check for instance of a class
// console.log(planet instanceof Planet);

var quizQuestions;
//? constructor funciton, creating a quiz with answers

var QuizQuestion = function (question, answer) {
  this.question = question;
  this.answer = answer;
  this.options = [];

  this.addOption = function (option) {
    this.options.push(option);
  };
  this.showQuestion = function () {
    console.log(this.question);
    this.options.forEach(function (option, i) {
      // for each options, print index of option, display 1-4 instead of 0-3
      console.log("(" + (i + 1) + ") " + option);
    });
  };
};

var question1 = new QuizQuestion("What is the capital of France?", "Paris");
question1.addOption("Bordeaux");
question1.addOption("F");
question1.addOption("Paris");
question1.addOption("Brussels`");

// question1.showQuestion();

//? constructor function, creating a calendar event
var CalendarEvent = function (title, startDate, startTime, endTime) {
  this.title = title;
  this.startDate = startDate;
  this.startTime = startTime;
  this.endTime = endTime;

  this.showEvent = function () {
    // create array of date,
    var dateString = [
      this.startDate,
      ", from ",
      this.startTime,
      " to ",
      this.endTime,
    ].join("");
    console.log(this.title);
    console.log(dateString);
  };
};

// var calEvent = new CalendarEvent(
//   "Annual Review",
//   "3/15/16/",
//   "4:00 PM",
//   "5:00 PM"
// );
// calEvent.showEvent();

var Place = function (title, description) {
  var newLine = spacer.newLine();
  this.title = title;
  this.description = description;
  this.items = [];
  this.exits = [];

  this.getItems = function () {
    var itemsString = "Items: " + spacer.newLine();
    this.items.forEach(function (item) {
      itemsString += "    - " + item;
      itemsString += spacer.newLine();
    });

    return itemsString;
  };
  this.getTitle = function () {
    return spacer.box(this.title, this.title.length + 4, "=");
  };
  this.getExits = function () {
    var exitsString = "Exists from " + this.title;
    this.exits.forEach(function (exit) {
      exitsString += "   - " + exit.title;
      exitsString += newLine;
    });
    return exitsString;
  };
  this.getInfo = function () {
    var infoString = this.getTitle();
    infoString += this.description + newLine + newLine;
    infoString += this.getItems() + newLine;
    infoString += this.getExits();
    infoString += spacer.line(40, "=") + newLine;
    return infoString;
  };
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.addExit = function (exit) {
    this.exits.push(exit);
  };
  this.showInfo = function () {
    console.log(this.getInfo());
  };
};

var library = new Place(
  "The Old Library",
  "You are in a library. Dusty books line the walls."
);

var kitchen = new Place(
  "The Kitchen",
  "You are in the kitchen. There is a disturbing smell"
);
var hall = new Place(
  "The Main Hall",
  "You are in a large hall. It is strangely empty"
);
library.addItem("A rusty key");
library.addExit(kitchen);
library.addExit(hall);
library.showInfo();
