const { spacer } = require("./Spacer");
const Place = require("./Place");
const Player = require("./Player");
const buildMap = require("./buildMap");
const getGame = require("./getGame");

const TheCrypt = () => {
  var createSpace = spacer;
  var playerCreation = Player;
  var placeCreation = Place;
  var buildPlace = buildMap;
  var game = getGame;
  console.log(
    createSpace,
    playerCreation,
    "PLAYER CRREAATION",
    placeCreation,
    "place creattionnn",
    buildPlace,
    "CREATING GAME BRUH",
    game
  );
};
TheCrypt();
