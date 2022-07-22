var Rooms = {
  First: "First Floor: Books Of The Common",
  Second: "Second Floor: Obscurity From The World",
  Third: "Third Floor: Uncommon Among The Common",
  Fourth: "Fourth Floor: Esoteric Novelity",
  Fifth: "Fifth Floor: Uncommon Among The Uncommon",
  Sixth: "Sixth Floor: Unfolding Of The Inner Tunnel",
  Seventh: "Seventh Floor: Reaching Resolve",
  Eighth: "Eighth Floor: Supreme Wizdom",
};

var LibraryRooms = [];

var buildLibraryRoom = function (rooms) {
  var increaseBoost = [
    "+20ATTACK",
    "+20HEALTH",
    "+30ATTACK",
    +"30HEALTH",
    "+40ATTACK",
    +"40HEALTH",
  ];
  var floorLevel = [
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
    "Eighth",
  ];
  var randomBoost = function () {
    var boost = increaseBoost[Math.floor(Math.random() * increaseBoost.length)];
    if (typeof boost === "number") {
      // console.log("We got a NaN, make it 20 Attack boost");
      boost = increaseBoost[1];
    } else {
      boost = boost;
    }

    return boost;
  };

  floorLevel.forEach((item) => {
    var floor = item;
    var room = {};
    var newRoom = rooms[floor];
    var exit = ["East", "North", "West"];
    var entrance = "south";
    var items = [
      "Blue Wizard Hat",
      "Blue Wizard Robe",
      "Red Wizard Hat",
      "Red Wizard Robe",
      "Green Wizard Hat",
      "Green Wizard Robe",
      "White Wizard Hat",
      "White Wizard Robe",
    ];
    room.level = floor;
    room.name = newRoom;
    room.increaseBoost = randomBoost();
    room.difficulty = Math.floor(Math.random() * 4) + 1;
    room.entrance = entrance;
    room.exit = exit[Math.floor(Math.random() * exit.length)];
    room.coordinates = {
      x: 5,
      y: 7,
    };

    LibraryRooms.push(room);
  });
  console.log(LibraryRooms);
};
buildLibraryRoom(Rooms);

var WeaponsList = {
  Beginner: [
    "Echo Fusion Rocket",
    "Svana Kelso Sword",
    "Kojer Slicing Katana",
    "Wand Of The Wanderer",
    "Book Of Spells",
  ],
  Intermediate: [
    "Scolter Fire Cannon",
    "Frosty Book Of Marv",
    "Poison Dagger Solstice",
    "Wand Of Conjuring",
    "Jehm Keim Boh",
  ],
  Master: [
    "Master Of The Scortched Flames",
    "ColdHeart Windstorm Staff",
    "Toad Dagger",
    "Necromancer Tree Kolt ",
    "Staff Of Supreme Wizdom",
    "Goj The Moment",
  ],
};

var EsotericNovice = {
  name: "Nermok",
  age: 21,
  level: 1,
  health: 140,
  place: Rooms["First"],

  items: "Generational Ring",
};
var Librarian = {
  name: "Graham",
  age: 32,
  level: 3,
  health: 80,
  place: Rooms["First"],

  items: "5TH EDITION: George Orwell 1984",
};

startMessage = function () {
  var message = "Whoa.. What is this place";
  console.log(message);
  return message;
};

getMessage = function () {
  var message = "I am going on an adventure to learn my books";
  console.log(message);
  return message;
};

showHealth = function (player) {
  console.log(player.name + " has health " + player.health);
};
showPlayerPlace = function (player) {
  console.log(player.name + " is in " + player.place);
};

var giveWeapon = function (player, weaponClass) {
  var levelLength = WeaponsList[weaponClass].length;
  var weaponClassList = WeaponsList[weaponClass];

  var randomNum = Math.floor(Math.random() * levelLength);
  console.log(randomNum);

  console.log(weaponClassList[randomNum]);
  var randomWeapon = weaponClassList[randomNum];
  var randomWeaponLevel = Math.floor(Math.random() * 3) + 1 + " STAR";
  player.weapon = randomWeapon;
  player.weaponLevel = randomWeaponLevel;

  // console.log(
  //   (WeaponsList[weaponClass][randomNum],
  //   Math.floor(Math.random() * 3) + 1 + " STAR")
  // );
};

// ? give player a weapon from Beginner class.
// giveWeapon(EsotericNovice, "Beginner");
// giveWeapon(Librarian, "Beginner");
var spacer = {
  blank: function () {
    return "";
  },
  newLine: function () {
    return "\n";
  },
  line: function (lineLength) {
    var line =
      "==================================================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(70, lineLength);
    return line.substring(0, lineLength);
  },

  linetwo: function (length, character) {
    var longString = "****************************************";
    longString += "----------------------------------------";
    longString += "========================================";
    longString += "++++++++++++++++++++++++++++++++++++++++";
    longString += " ";
    length = Math.max(0, length);
    length = Math.min(40, length);

    return longString.substr(longString.indexOf(character), length);
  },

  wrap: function (text, character) {
    var padLength = 0;
    var wrapText = character + " " + text + " ";
    wrapText += spacer.line(padLength, " ");
    wrapText += character;
    return wrapText;
  },
  box: function (text, character) {
    var boxText = spacer.newLine();
    length = spacer.wrap(text, character).length;

    boxText += spacer.line(length, character) + spacer.newLine();
    boxText += spacer.wrap(text, character) + spacer.newLine();
    boxText += spacer.line(length, character) + spacer.newLine();
    return boxText;
  },
};

var showSmaller = function (num1, num2) {
  return Math.min(num1, num2);
};

// this is the Immediate invoked function! reduce pollution and create more privacy!
// var displayQuestions = (function () {
//   var question1 = {
//     question: "Hello, Do you want to start?",
//     answers: ["Yes", "No", "Let me save CHECKPOINT!", "Exit"],
//   };
//   var options = ["A", "B", "C", "D", "E"];
//   console.log(question1.question);
//   question1.answers.forEach(function (answer, i) {
//     console.log(options[i] + " - " + answer);
//   });
// })();

// console.log(spacer.box(JSON.stringify(EsotericNovice.age), "="));
var getPlayerName = function (player) {
  return console.log(spacer.box(player.name, "*"));
};
var getPlayerPlace = function (player) {
  console.log(spacer.box(player.place, "*"));
};

var getPlayerHealth = function (player) {
  var PlayerHealth = spacer.wrap(player.health, "~");
  return console.log("Health: ", PlayerHealth);
};

var getPlayerAge = function (player) {
  var PlayerAge = spacer.wrap(player.age, "~");
  return console.log("Age: ", PlayerAge);
};
var getPlayerLevel = function (player) {
  ``;
  var PlayerLevel = spacer.wrap(player.level, "~");
  return console.log("Level: ", PlayerLevel);
};

var getPlayerInfo = function (player) {
  var place = getPlayerPlace(player);
  var name = getPlayerName(player);
  var age = getPlayerAge(player);
  var health = getPlayerHealth(player);
  var level = getPlayerLevel(player);

  return place, name, age, health, level;
};
// getPlayerInfo(EsotericNovice);

// this is a constructor function (which can be turned into a class)
var User = function (name) {
  var sessions = [];
  var totalDuration = 0;

  // create a session for the user
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
      "name ": name,
      "total ": totalDuration,
      "sessions ": sessions.slice(),
    };
  };
};
var user = new User("George");
