var ndarray = require("ndarray")
var interp = require("../interp.js")
var zeros = require("zeros")


var x = zeros([3, 3])
x.set(1, 1, 1.0)

for(var u=0.0; u<=3.0; u+=0.25) {
  var row = []
  for(var v=0.0; v<=3.0; v+=0.25) {
    row.push(interp(x, u, v))
  }
  console.log(row.join(" "))
}