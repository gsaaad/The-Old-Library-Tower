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
