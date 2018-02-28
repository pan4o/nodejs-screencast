

var phrases;

exports.connect = function() {
  phrases = require('./ru');
}

exports.getPhrase = function(name) {
  if(!phrases[name]) {
    throw new Error('net takoy frazi ' + name);
  }
  return phrases[name];
}
