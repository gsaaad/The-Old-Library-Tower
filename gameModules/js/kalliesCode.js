var kalliesCode = {
  spreader: function (text, character) {
    return text.split("").join(character);
  },

  spacer: function (text) {
    return kalliesCode.spreader(text, " ");
  },

  dasher: function (text) {
    return kalliesCode.spreader(text, "-");
  },
};

module.export = kalliesCode;
