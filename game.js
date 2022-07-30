const { spacer } = require("./gameModules/Spacer");
const Place = require("./gameModules/Place");
const Player = require("./gameModules/Player");
const buildMap = require("./gameModules/buildMap");
const getGame = require("./gameModules/getGame");
const kalliesCode = require("./gameModules/kalliesCode");

console.log(kalliesCode);

var GAMESTART;

// so now player can only access go and get! keeping all other elements privaate and secure frmo manipulation
