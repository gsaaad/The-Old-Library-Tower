const spacer = require("./Spacer");
console.log(spacer);

var Place = function (title, description) {
  // new line for logging info
  // private variables
  const spaceUse = spacerUse;
  console.log(spaceUse);
  console.log("new line coming");
  var newLine = spaceUse.newLine();
  console.log("", "this is new line!");
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
};

module.exports = Place;
