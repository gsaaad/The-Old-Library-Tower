const Place = require("./gameModules/Place");
const Player = require("./gameModules/Player");
const buildMap = require("./gameModules/buildMap");
const getGame = require("./gameModules/getGame");
const kalliesCode = require("./gameModules/kalliesCode");

const theCrypt = function () {
  console.log(Place, Player, buildMap, getGame, kalliesCode);
};

theCrypt();
