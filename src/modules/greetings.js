/**
 * Says hello
 * @param {String} str
 * @return {String}
 */
const sayHello = function(str) {
  str = str || 'hellooooo!';
  return `Say Hello says, of all things, ${str}`;
};

module.exports = { sayHello };
