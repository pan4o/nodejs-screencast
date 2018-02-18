//exports
//users

var phrases = require('./ru');

function UserConstructor(name) {
  this.name = name;
}

UserConstructor.prototype.hello = function (who) {
  console.log(phrases.Hello + ', ' + who.name);
}

function GlobalUser(name) {
  this.name = name;
}

console.log('file is required');

exports.userConstructor = UserConstructor;
global.GlobalUser = GlobalUser;
