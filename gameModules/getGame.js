const Player = require("./Player");
const buildMap = require("./buildMap");

module.exports = (function () {
  const BuildMap = buildMap;
  console.log(BuildMap, "this is map");

  var render = function () {
    console.clear();
    player.getPlace().showInfo();
    player.showInfo();
  };

  var firstPlace = BuildMap;

  var player = new Player("Kandra", 50);
  player.addItem("The Sword of Doom");
  player.setPlace(firstPlace);

  render();

  // Return the public interface
  return {
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
})();
