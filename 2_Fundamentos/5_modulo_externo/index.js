// mode index.js --nome=daniel
const minimist = require('minimist')

const args = minimist(process.argv.slice(2));
const name = args['name']
console.log(name);

