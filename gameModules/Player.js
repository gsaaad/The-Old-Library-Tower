const { spacer } = require("./Spacer");

var Player = function (name, health) {
  var spaceUse = spacer;
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
