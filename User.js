var User = function (name) {
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
console.log(user);
module.exports = User;
