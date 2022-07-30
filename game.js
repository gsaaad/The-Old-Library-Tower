const { spacer } = require("./Spacer");
const Place = require("./Place");
const Player = require("./Player");
const buildMap = require("./buildMap");
const getGame = require("./getGame");

var GAMESTART;

var getGame = function () {
  // render game
  var render = function () {
    console.clear();
    player.getPlace().showInfo();
    player.showInfo();
  };

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

      if (destination !== undefined) {
        player.setPlace(destination);
        render();
        return "";
      } else {
        return "*** There is no exit in that direction ***";
      }
    },
    // player can get item
    get: function () {
      var place = player.getPlace();
      var item = place.getLastItem();

      if (item !== undefined) {
        player.addItem(item);
        render();
        return "";
      } else {
        return "*** There is no item to get ***";
      }
    },
  };
};
// so now player can only access go and get! keeping all other elements privaate and secure frmo manipulation

var game = getGame();
