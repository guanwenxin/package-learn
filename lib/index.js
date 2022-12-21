var _c$info, _c$info$name;
require("core-js/modules/es.function.name.js");
var a = 1;
var b = function b() {
  return console.log('hello word');
};
var c = {
  name: 'hahaha',
  age: '111',
  info: {}
};
var name = c.name,
  peopelAge = c.age,
  info = c.info;

// const test = c && c.info && c.info.name
var test = c === null || c === void 0 ? void 0 : (_c$info = c.info) === null || _c$info === void 0 ? void 0 : (_c$info$name = _c$info.name) === null || _c$info$name === void 0 ? void 0 : _c$info$name.age;

// const array = [1, 2, 3, 4]
// array.forEach(item => console.log(item))

// const asyncTask = new Promise((resolve, reject) => {
//     resolve(1)
// })