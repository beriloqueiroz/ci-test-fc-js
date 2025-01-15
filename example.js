const { identifyChord, getChord } = require(".");

console.log('should identify C major');
console.log(identifyChord(['C', 'E', 'G']));

console.log('should generate C major');
console.log(getChord('C', 'major'));