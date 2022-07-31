var User = function (name) {
  this.name = name;
  var sessions = [];
  var totalDuration = 0;

  this.addSession = function (sessionDate, duration) {
    sessions.push({
      sessionDate: sessionDate,
      duration: duration,
    });
    totalDuration += duration;
    return totalDuration;
  };
  this.getData = function () {
    return {
      name: name,
      total: totalDuration,
      sessions: sessions.slice(),
    };
  };
};

var userView = function () {
  var getInfo = function (userData) {
    var infoString = "\n" + userData.name + "\n";

    userData.sessions.forEach(function (session) {
      infoString += session.duration + " minutes on ";
      infoString += session.sessionDate + "\n";
    });

    infoString += "\n" + userData.total + " minutes so far";
    infoString += "\nWellDone\n";
    return infoString;
  };
  var render = function (user) {
    console.log(getInfo(user.getData()));
  };
  return {
    render: render,
  };
};

var user = new User("George");
user.addSession("202-07-25", 620);
user.addSession("202-07-26", 125);
user.addSession("202-07-26", 65);
user.addSession("202-07-26", 15);
user.addSession("202-07-26", 65);
user.addSession("202-07-26", 25);
user.addSession("202-07-26", 65);
user.addSession("202-07-26", 85);
// console.log(user.getData());
// console.log(user.getData(), " user", "userINFSJDNFONSOFEN");
userView().render(user);
module.exports = User;
