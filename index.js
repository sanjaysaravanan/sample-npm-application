// compare two objects - Simple version
var obj1 = { name: "Sanjay", age: 25 }
var obj2 = { age: 25, name: "Sanjay" }

// Print true if both are same, else false

var flag = true;
for (var key in obj1) {
  if (obj1[key] !== obj2[key]) {
    flag = false;
    break;
  }
}

// console.log(flag);

// require is old syntax
const isEqual = require('lodash/isEqual');

var obj1 = { name: "Sanjay", age: 25, bio: { height: 25, weight: 90 } }
var obj2 = { age: 25, name: "Sanjay", bio: { weight: 90, height: 25 } }

console.log(isEqual(obj1, obj2));