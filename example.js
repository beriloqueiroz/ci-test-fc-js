const { identifyChord, getChord } = require(".");

console.log('should identify C major', ['C', 'E', 'G']);
console.log(identifyChord(['C', 'E', 'G']));

console.log('should identify C minor', ['C', 'Eb', 'G']);
console.log(identifyChord(['C', 'Eb', 'G']));

console.log('should generate C major');
console.log(getChord('C', 'major'));