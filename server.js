var user = require('./user');

var tom = new user.userConstructor('Tom');
var bill = new user.userConstructor('Bill');
var globalJim = new GlobalUser('Buffalo Jim');

tom.hello(bill);

console.log(globalJim);
