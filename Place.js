const { spacer } = require("./Spacer");
var Place = function (title, description) {
  var spaceUse = spacer;
  console.log(spaceUse, "we got space");
  // new line for logging info
  // private variables
  var newLine = spaceUse.newLine();
  var items = [];
  var exits = {};
  var Player = function (name, health) {
    var newLine = spaceUse.newLine();
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
      var info = spaceUse.box(getTitleInfo(), 40, "*");
      info += "  " + getItemsInfo();
      info += spaceUse.line(40, "*");
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
var kitchen = new Place("kitchen", "dnfosndf");
console.log(kitchen);

module.exports = Place;
