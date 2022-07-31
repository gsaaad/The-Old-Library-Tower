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

//todo START HERE PLACE OBJECT
var Place = function (title, description) {
  var newLine = spacer.newLine();
  this.title = title;
  this.description = description;
  this.items = [];
  // exits are objects
  this.exits = {};

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
    var exitsString = "Exits from " + this.title;
    exitsString += ":" + newLine;

    Object.keys(this.exits).forEach(function (key) {
      exitsString += "   - " + key;
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
  this.addExit = function (direction, exit) {
    this.exits[direction] = exit;
  };
  this.showInfo = function () {
    console.log(this.getInfo());
  };
  this.showExits = function () {
    console.log("Exits from  " + this.title + ":");

    Object.keys(this.exits).forEach(function (key) {
      console.log(key);
    });
  };
};

// var library = new Place(
//   "The Old Library",
//   "You are in a library. Dusty books line the walls."
// );

// var kitchen = new Place(
//   "The Kitchen",
//   "You are in the kitchen. There is a disturbing smell"
// );
// var hall = new Place(
//   "The Main Hall",
//   "You are in a large hall. It is strangely empty"
// );
// library.addItem("A rusty key");
// library.addExit(kitchen);
// library.addExit(hall);
// library.showInfo();

// ? Constructor function, Player
// var Player = function (name, health) {
//   var newLine = spacer.newLine();

//   this.name = name;
//   this.health = health;
//   this.items = [];
//   this.place = null;

//   this.addItem = function (item) {
//     this.items.push(item);
//   };
//   this.getName = function () {
//     return this.name;
//   };
//   this.getHealth = function () {
//     return this.name + " has health " + this.health;
//   };
//   this.getPlace = function () {
//     return this.name + " is in " + this.place.title;
//   };
//   this.getItems = function () {
//     var itemsString = "Items " + newLine;
//     this.items.forEach(function (item) {
//       itemsString += "   - " + item + newLine;
//     });
//     return itemsString;
//   };

//   this.getInfo = function (character) {
//     var place = this.getPlace();
//     var health = this.getHealth();
//     var longest = Math.max(place.length, health.length) + 4;
//     var info = spacer.box(this.getName(), longest, character);
//     info += spacer.wrap(place, longest, character);
//     info += newLine + spacer.wrap(health, longest, character);
//     info += newLine + spacer.line(longest, character);
//     info += newLine;
//     info += " " + this.getItems();
//     info += newLine;
//     info += spacer.line(longest, character);
//     info += newLine;
//     return info;
//   };
//   this.showInfo = function (character) {
//     console.log(this.getInfo(character));
//   };
// };

// var player1 = new Player("Kandra", 50);

// player1.place = library;
// player1.addItem("A rusty key");
// player1.addItem("The Sword of Doom");

// player1.showInfo("=");

// ? more about objects and dot notation/when to use square
// var states = {};
// states["New Hampshire"] = "This works";
// states["Ohio"] = "This also works";
// states.michigan = "This also also works, for nonspaced elements";

// var allStates = Object.keys(states);
// console.log(allStates);
// allStates.forEach((state) => {
//   console.log(state);
// });

var ages = {};
// basic function of adding key/value pairs
// var addAge = function (name, age) {
//   ages[name] = age;
// };
// addAge("Kandra Smith", 56);
// addAge("Dax Aniaku", 21);
// addAge("Blinky", 36);
// console.log(ages["Kandra Smith"]);
// console.log(ages["Dax Aniaku"]);
// console.log(ages["Blinky"]);
// console.log(Object.keys(ages));
// console.log(Object.values(ages));

// ? using Object and keys to have word count for a set of tweets
// var tweets = [
//   "Education is showing business the way by using technology to share information. How do we do so safely?",
//   "Enjoy a free muffin & coffee with Post Plus, our new loyalty club exclusive to subscribers!",
//   "We're LIVE on Periscope right now answering all your #pet questions. tweet us yours now!",
// ];
// console.log(tweets);

// var words = {};
// console.log(words);
// all the tweets together separated by spaces btween each tweet
// var tweetText = tweets.join(" ");
// split words/segments by the spaces in between them!
// var tweetWords = tweetText.split(" ");
// for each word, run a function where you add to words object, set to 0. [INITIALIZE THE OBJECT]
// tweetWords.forEach(function (word) {
//   words[word] = 0;
// });
// RUN another for each word, then check in words object if word matches that property, add +1 every time the word appears
// tweetWords.forEach(function (word) {
//   // this is the long way
//   words[word] = words[word] + 1;
//   // not bad but can still be improved
//   words[word] += 1;
//   // concise
//   words[word]++;
// });
// console.log(words);

// how to check for each letter in a tweet
// var letters = {};
// var tweetText = tweets.join("");
// var tweetLetters = tweetText.split("");
// tweetLetters.forEach(function (letter) {
//   letters[letter.toLowerCase()] = 0;
// });
// tweetLetters.forEach(function (letter) {
//   letters[letter.toLowerCase()] += 1;
// });
// console.log(letters);
var kitchen = new Place("The Kitchen");
var dungeon = new Place("The Dungeon");
var exits = {};
exits["north"] = kitchen;
exits["the trapdoor"] = dungeon;
// var keys = Object.keys(exits);
// keys.forEach(function (key) {
//   console.log(key + " goes to " + exits[key].title);
// });

// create Exists and show it
var addExit = function (direction, place) {
  exits[direction] = place;
};

var showExits = function () {
  var keys = Object.keys(exits);

  keys.forEach(function (key) {
    console.log(key + " goes to " + exits[key].title);
  });
};
addExit("north", kitchen);
addExit("the trapdoor", dungeon);

// showExits();

var kitchen = new Place(
  "The Kitchen",
  "You are in a kitchen. There is a disturbing smell."
);
var library = new Place(
  "The Old Library",
  "You are in a library. Dusty books line the walls."
);
var garden = new Place(
  "The Kitchen Garden",
  "You are in a small, walled garden."
);
var cupboard = new Place(
  "The Kitchen Cupboard",
  "You are in a cupboard. It's surprisingly roomy."
);
kitchen.addItem("a piece of cheese");
library.addItem("a rusty key");
cupboard.addItem("a tin of spam");
kitchen.addExit("south", library);
kitchen.addExit("west", garden);
kitchen.addExit("east", cupboard);
library.addExit("north", kitchen);
garden.addExit("east", kitchen);
cupboard.addExit("west", kitchen);
// kitchen.showInfo();

console.clear();
// render game
var render = function () {
  console.clear();
  player.place.showInfo();
  player.showInfo("*");
};

var go = function (direction) {
  // to move, go to player's location, find player location's exits, and based on the direction input, let player place property equal that location
  player.place = player.place.exits[direction];
  render();
  return "";
};
var get = function () {
  // for items, same idea, go to player's location, find items on ground in place items array, and pop(),
  var item = player.place.items.pop();
  player.addItem(item);
  render();
  return "";
};

// var player = new Player("Kandra", 50);
// player.addItem("The Sword of Doom");
// player.place = kitchen;
// render();

//? asking questions and answers
// var quiz = {
//   questions: [
//     {
//       question: "What is the highest Mountain in the world?",
//       answer: "Everest",
//     },
//     {
//       question: "What is the highest mountain in Scotland?",
//       answer: "Ben Nevis",
//     },
//     { question: "How many munros are in Scotland", answer: "284" },
//   ],
//   // question index
//   qIndex: 0,
//   // next question
//   quizMe: function () {
//     // return question[index].question
//     return quiz.questions[quiz.qIndex].question;
//   },
//   showMe: function () {
//     // return question[index].answer
//     return quiz.questions[quiz.qIndex].answer;
//   },
//   next: function () {
//     // go to next question, add 1 to qIndex counter
//     quiz.qIndex = quiz.qIndex + 1;
//     return "Ok";
//   },
// };

var quiz;
// you want to have functions formatted this way so that variables and functions are not accessed

// var getQuiz = function () {
//   var qIndex = 0;
//   var questions = [
//     {
//       question: "What is the highest mountain in the world?",
//       answer: "Everest",
//     },
//     {
//       question: "What is the highest mountain in Scotland?",
//       answer: "Ben Nevis",
//     },
//     {
//       question: "How many munros are in Scotland?",
//       answer: "284",
//     },
//   ];
//   return {
//     quizMe: function () {
//       return questions[qIndex].question;
//     },
//     showMe: function () {
//       return questions[qIndex].answer;
//     },
//     next: function () {
//       qIndex = qIndex + 1;
//       return "Ok";
//     },
//   };
// };

// var quiz = getQuiz();

// quiz.quizMe();

// var Player = function(name,health){
//   // name and health are local variables

//   this.getHealthInfo = function(){
//     // name and health can be used here
//   }
// }

var GAMESTART;
// TODO THIS IS WHERE THE GAME START
// TODO SPACER, PLAYER, PLACE

var getGame = function () {
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

  var Player = function (name, health) {
    var newLine = spacer.newLine();
    var items = [];
    var place = null;

    //! these are private functions. internal use only
    var getNameInfo = function () {
      return name;
    };

    var getHealthInfo = function () {
      return "( " + health + " )";
    };

    var getItemsInfo = function () {
      var itemsString = "Items: " + newLine;

      items.forEach(function (item) {
        itemsString += "   - " + item + newLine;
      });
      return itemsString;
    };
    var getTitleInfo = function () {
      return getNameInfo() + " " + getHealthInfo();
    };

    var getInfo = function () {
      var info = spacer.box(getTitleInfo(), 40, "*");
      info += "  " + getItemsInfo();
      info += spacer.line(40, "*");
      info += newLine;

      return info;
    };

    //! manage access
    this.addItem = function (item) {
      items.push(item);
    };
    this.setPlace = function (destination) {
      place = destination;
    };
    this.getPlace = function () {
      return place;
    };
    this.showInfo = function (character) {
      console.log(getInfo(character));
    };
  };

  // to make a player, enter a name and health value

  var Place = function (title, description) {
    // new line for logging info
    // private variables
    var newLine = spacer.newLine();
    var items = [];
    var exits = {};

    // accessable, public

    this.title = title;
    this.description = description;
    this.items = [];
    this.exits = {};

    // show info each function for each piece of info
    var getItemsInfo = function () {
      var itemsString = "Items:" + newLine;
      items.forEach(function (item) {
        itemsString += "   -" + item;
        itemsString += newLine;
      });
      return itemsString;
    };
    var getExitsInfo = function () {
      var exitsString = "Exits from  " + title;
      exitsString += ":" + newLine;

      Object.keys(exits).forEach(function (key) {
        exitsString += "   -" + key;
        exitsString += newLine;
      });
      return exitsString;
    };
    var getTitleInfo = function () {
      return spacer.box(title, title.length + 4, "=");
    };

    var getInfo = function () {
      var infoString = getTitleInfo();
      infoString += description;
      infoString += newLine + newLine;
      infoString += getItemsInfo() + newLine;
      infoString += getExitsInfo();
      infoString += spacer.line(40, "=") + newLine;
      return infoString;
    };

    // show total info
    this.showInfo = function () {
      console.log(getInfo());
    };
    // add items functions
    this.addItem = function (item) {
      items.push(item);
    };
    this.addExit = function (direction, exit) {
      exits[direction] = exit;
    };
    this.getExit = function (direction) {
      return exits[direction];
    };
    this.getLastItem = function () {
      return items.pop();
    };
  };
  // render game
  var render = function () {
    console.clear();
    player.getPlace().showInfo();
    player.showInfo();
  };

  // var go = function (direction) {
  //   var place = player.getPlace();
  //   var destination = place.getExit(direction);
  //   player.setPlace(destination);
  //   render();
  //   return "";
  // };
  // var get = function () {
  //   var place = player.getPlace();
  //   var item = place.getLastItem();
  //   player.addItem(item);
  //   render();
  //   return " ";
  // };
  // Map
  var kitchen = new Place(
    "The Kitchen",
    "You are in a kitchen. There is a disturbing smell."
  );
  var library = new Place(
    "The Old Library",
    "You are in a library. Dusty books line the walls."
  );
  // kitchen library add items
  kitchen.addItem("a piece of cheese");
  library.addItem("a rusty key");
  // kitchen library add exits
  kitchen.addExit("south", library);
  library.addExit("north", kitchen);

  // first player is kandra, item sword, in kitchen
  var player = new Player("Kandra", 50);
  player.addItem("The Sword of Doom");
  player.setPlace(kitchen);
  render();
  return {
    // return player can go in direction
    go: function (direction) {
      var place = player.getPlace();
      var destination = place.getExit(direction);
      player.setPlace(destination);
      render();
      return "";
    },
    // player can get item
    get: function () {
      var place = player.getPlace();
      var item = place.getLastItem();
      player.addItem(item);
      render();
      return "";
    },
  };
};
// so now player can only access go and get! keeping all other elements privaate and secure frmo manipulation

var game = getGame();

// conditional block If/else else if statements
var getGuesser = function () {
  var secret = Math.floor(Math.random() * 10 + 1);

  return function (userNumber) {
    if (userNumber === secret) {
      return "Well done";
    } else if (useRNumber > secret) {
      return "Too High!";
    } else {
      return "Too low!";
    }
  };
};
var guess = getGuesser();

var getQuiz = (function () {
  var score = 0,
    qIndex = 0,
    inPlay = true,
    questions,
    next,
    getQuestion,
    checkAnswer,
    submit;

  questions = [
    {
      question: "What is the highest mountain in the world?",
      answer: "Ben Nevis",
    },
    {
      question: "What is the highest moutain in Scotland?",
      answer: "Ben Nevis",
    },
  ];
  getQuestion = function () {
    if (inPlay) {
      return questions[qIndex].question;
    } else {
      return "You have finished the quiz";
    }
  };
  next = function () {
    qIndex = qIndex + 1;

    if (qIndex >= questions.length) {
      inPlay = false;
      console.log("You have finished the quiz!");
    }
  };
  checkAnswer = function (userAnswer) {
    if (userAnswer === questions[qIndex].answer) {
      console.log("Correct!");
      score = score + 1;
    } else {
      console.log("No, the answer is " + questions[qIndex].answer);
    }
  };
  submit = function (userAnswer) {
    var message = "You have finished the quiz!";

    if (inPlay) {
      checkAnswer(userAnswer);
      next();
      message = "Your score is " + score + " out of  " + qIndex;
    }
    return message;
  };
  return { quizMe: getQuestion, submit: submit };
})();

var User = function (name) {
  this.name = name;
  var sessions = [];
  var totalDuration = 0;

  this.addSession = function (sessionDate, duration) {
    sessions.push({
      sessionDate: sessionDate,
      duration: duration,
    });

    totalDuration += duration;

    return totalDuration;
  };

  this.getData = function () {
    return {
      name: name,
      total: totalDuration,
      sessions: sessions.slice(),
    };
  };
};
var user = new User("George");
// console.log(User, user);
user.addSession("2022-05-08", 120);
user.addSession("2022-06-22", 35);
console.log("hello USer, ", user);
console.log(user.getData().total);

// var buildUser = function (userData) {
//   var user = new User(userData.name);

//   userData.sessions.forEach(function (session) {
//     user.addSession(session.sessionDate, session.duration);
//   });

//   return user;
// };

// var userinformation = buildUser(user);
// console.log(user.addSession("2022-07-28", 44));

// var mapData = {
//   title: "The Dark House",
//   firstPlace: "The Kitchen",

//   places: [
//     {
//       title: "The Kitchen",
//       description: "You are in a kitchen. There is a disturbbing smell.",
//       items: ["a piece of cheese"],
//       exits: [
//         { direction: "south", to: "The Old Library" },
//         { direction: "west", to: "The Kitchen Garden" },
//         {
//           direction: "east",
//           to: "The Kichen Cupboard",
//         },
//       ],
//     },

//     {
//       title: "The Old Library",
//       description: "You are in a library. Dusty books line the walls.",
//       items: ["a rusty key"],
//       exits: [{ direction: "north", to: "The Kitchen" }],
//     },
//     {
//       title: "The Kitchen Garden",
//     },
//     { title: "The Kichen Cupboard," },
//   ],
// };
