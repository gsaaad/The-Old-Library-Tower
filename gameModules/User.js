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

var user = new User("George");
user.addSession("2017-02-05", 120);
user.addSession("2017-02-06", 35);
console.log(user.getData());
module.exports = User;
