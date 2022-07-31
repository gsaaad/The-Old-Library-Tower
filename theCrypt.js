var theCrypt = function () {
  // PLAYER
  (function () {
    var Player = function (name, health) {
      var newLine = spacer.newLine();
      var items = [];
      var place = null;

      var getNameInfo = function () {
        return name;
      };

      var getHealthInfo = function () {
        return "(" + health + ")";
      };

      var getItemsInfo = function () {
        var itemsString = "Items:" + newLine;

        items.forEach(function (item, i) {
          itemsString += "   - " + item + newLine;
        });

        return itemsString;
      };

      var getTitleInfo = function () {
        return getNameInfo() + " " + getHealthInfo();
      };

      var getInfo = function () {
        var info = spacer.box(getTitleInfo(), 40, "*");
        info += "  " + getItemsInfo();
        info += spacer.line(40, "*");
        info += newLine;

        return info;
      };

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

    if (window.theCrypt === undefined) {
      window.theCrypt = {};
    }

    theCrypt.Player = Player;
  })();

  //PLACE
  (function () {
    var Place = function (title, description) {
      var newLine = spacer.newLine();
      var items = [];
      var exits = {};

      var getItemsInfo = function () {
        var itemsString = "Items: " + newLine;
        items.forEach(function (item) {
          itemsString += "   - " + item;
          itemsString += newLine;
        });
        return itemsString;
      };

      var getExitsInfo = function () {
        var exitsString = "Exits from " + title;
        exitsString += ":" + newLine;

        Object.keys(exits).forEach(function (key) {
          exitsString += "   - " + key;
          exitsString += newLine;
        });

        return exitsString;
      };

      var getTitleInfo = function () {
        return spacer.box(title, title.length + 4, "=");
      };

      var getInfo = function () {
        var infoString = getTitleInfo();
        infoString += description;
        infoString += newLine + newLine;
        infoString += getItemsInfo() + newLine;
        infoString += getExitsInfo();
        infoString += spacer.line(40, "=") + newLine;
        return infoString;
      };

      this.showInfo = function () {
        console.log(getInfo());
      };

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

    if (window.theCrypt === undefined) {
      window.theCrypt = {};
    }

    theCrypt.Place = Place;
  })();

  // MAPCODE
  (function () {
    var buildMap = function () {
      var Place = theCrypt.Place;

      // Create some places
      var kitchen = new Place(
        "The Kitchen",
        "You are in a kitchen. There is a disturbing smell."
      );
      var library = new Place(
        "The Old Library",
        "You are in a library. Dusty books line the walls."
      );
      var garden = new Place(
        "The Kitchen Garden",
        "You are in a small, walled garden."
      );
      var cupboard = new Place(
        "The Kitchen Cupboard",
        "You are in a cupboard. It's surprisingly roomy."
      );

      // Add items and exits to places
      kitchen.addItem("a piece of cheese");
      library.addItem("a rusty key");
      cupboard.addItem("a tin of spam");

      kitchen.addExit("south", library);
      kitchen.addExit("west", garden);
      kitchen.addExit("east", cupboard);

      library.addExit("north", kitchen);
      garden.addExit("east", kitchen);
      cupboard.addExit("west", kitchen);

      return kitchen;
    };

    if (window.theCrypt === undefined) {
      window.theCrypt = {};
    }

    theCrypt.buildMap = buildMap;
  })();
  // GAME INITIALIZE
  (function () {
    var getGame = function () {
      var render = function () {
        console.clear();
        player.getPlace().showInfo();
        player.showInfo();
      };

      var firstPlace = theCrypt.buildMap();

      var player = new theCrypt.Player("Kandra", 50);
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
    };

    if (window.theCrypt === undefined) {
      window.theCrypt = {};
    }

    theCrypt.getGame = getGame;
  })();
};
