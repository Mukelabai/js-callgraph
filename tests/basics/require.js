// This file tests the most common usage of exports/require
let m1 = require('./require-module');
console.log("Adding %d to 10 gives us %d", m1.x, m1.addX(10));