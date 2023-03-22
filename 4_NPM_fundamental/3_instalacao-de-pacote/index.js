const _ = require("lodash")

const a = [1, 2, 3, 4]
const b = [2, 4, 7, 8]

const diff = _.difference(a,b)
const diff_2 = _.difference(b, a)

console.log(diff)
console.log(diff_2)
