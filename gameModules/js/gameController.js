(function () {
  "use strict";

  var player;
  var inPlay = false;

  function render() {
    console.clear();
    if (inPlay) {
      theCrypt.placeView.render(player.getPlace());
      theCrypt.playerView.render(player);
    }
  }

  function renderMessage(message) {
    theCrypt.messageView.render(message);
  }

  function checkGameStatus() {
    if (player.getData().health <= 0) {
      inPlay = false;
      renderMessage("Overcome by your wounds...");
      renderMessage("...you fall to the ground.");
      renderMessage("- Your adventure is over -");
    }
  }

  function init(firstPlaceId, playerName) {
    theCrypt.map.loadPlace(firstPlaceId, function (firstPlace) {
      player = new theCrypt.Player(playerName, 50);
      player.addItem("The Sword of Doom");
      player.setPlace(firstPlace);

      inPlay = true;
      render();
    });
  }

  function get() {
    if (inPlay) {
      var place = player.getPlace();
      var item = place.getLastItem();

      if (item !== undefined) {
        player.addItem(item);
        render();
      } else {
        renderMessage("There is no item to get");
      }
    } else {
      renderMessage("The game is over!");
    }
  }

  function go(direction) {
    if (inPlay) {
      var place = player.getPlace();
      var destination = place.getExit(direction);
      var challenge = place.getChallenge(direction);

      if (destination === undefined) {
        renderMessage("There is no exit in that direction");
      } else {
        if (challenge === undefined || challenge.complete) {
          theCrypt.map.loadPlace(destination, function (place) {
            player.setPlace(place);
            render();
          });
        } else {
          if (challenge.damage) {
            player.applyDamage(challenge.damage);
          }

          render();
          renderMessage(challenge.message);
          checkGameStatus();
        }
      }
    } else {
      renderMessage("The game is over!");
    }
  }

  function use(item, direction) {
    if (inPlay) {
      var place = player.getPlace();
      var challenge = place.getChallenge(direction);

      if (challenge === undefined || challenge.complete === true) {
        renderMessage("You don't need to use that there");
      } else if (player.hasItem(item)) {
        if (item === challenge.requires) {
          renderMessage(challenge.success);
          challenge.complete = true;
          if (challenge.itemConsumed) {
            player.removeItem(item);
          }
        } else {
          renderMessage(challenge.failure);
        }
      } else {
        renderMessage("You don't have that item");
      }
    } else {
      renderMessage("The game is over!");
    }
  }

  // Assign the public interface
  window.game = {
    get: get,
    go: go,
    use: use,
    init: init,
    message: renderMessage,
  };
})();
(function () {
  var commandButton = document.getElementById("btnCommand");
  var txtCommand = document.getElementById("txtCommand");

  function parseCommand(commandString) {
    var commandWords = commandString.split(" ");
    var command = {
      type: commandWords.shift(),
    };

    if (command.type === "use" || command.type === "go") {
      command.direction = commandWords.pop();
    }

    command.item = commandWords.join(" ");

    return command;
  }

  function doAction() {
    var txtCommand = document.getElementById("txtCommand");
    var commandString = txtCommand.value;
    var command = parseCommand(commandString);

    txtCommand.value = "";
    txtCommand.focus();

    theCrypt.messageView.clear();

    switch (command.type) {
      case "get":
        game.get();
        break;

      case "go":
        game.go(command.direction);
        break;

      case "use":
        game.use(command.item, command.direction);
        break;

      default:
        game.message("I don't know how to do that");
    }
  }

  // Check if the Enter key has been pressed in the
  // text box.
  function checkForEnter(event) {
    var key;

    if (typeof event.charCode === "number" && event.charCode !== 0) {
      key = event.charCode;
    } else {
      key = event.keyCode;
    }

    if (key === 13) {
      doAction();
    }
  }

  commandButton.addEventListener("click", doAction);
  txtCommand.addEventListener("keypress", checkForEnter);
})();
