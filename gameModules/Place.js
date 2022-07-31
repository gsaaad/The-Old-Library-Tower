const spacer = require("./Spacer");

var Place = function (title, description) {
  // new line for logging info
  // private variables
  const spaceUse = spacer;
  var newLine = spaceUse.newLine;

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
    return spaceUse.box(title, title.length + 4, "=");
  };

  var getInfo = function () {
    var infoString = getTitleInfo();
    infoString += description;
    infoString += newLine + newLine;
    infoString += getItemsInfo() + newLine;
    infoString += getExitsInfo();
    infoString += spaceUse.line(40, "=") + newLine;
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

  // add challenge for this place
  var challenges = {};

  this.addChallenge = function (direction, challenge) {
    challenges[direction] = challenge;
  };

  this.getChallenge = function (direction) {
    return challenges[direction];
  };
};

module.exports = Place;
