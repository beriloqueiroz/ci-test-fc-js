
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

const equals = {
  "Db": "C#",
  "Eb": "D#",
  "Gb": "F#",
  "Ab": "G#",
  "Bb": "A#"
}

function whatIsTriadAccord(a, b, c) {
  let first = a;
  let third = b;
  let fift = c;
  let factor1 = 0;
  let factor2 = 0;
  if (equals[a]) {
    first = equals[a]
  }
  if (equals[b]) {
    third = equals[b]
  }
  if (equals[c]) {
    fift = equals[c]
  }
  if (notes.indexOf(third) < notes.indexOf(first)) {
    factor1 = 12
  }
  if (notes.indexOf(fift) < notes.indexOf(third)) {
    factor2 = 12
  }
  if (notes.indexOf(fift) + factor2 - notes.indexOf(first) == 7 && notes.indexOf(third) + factor1 - notes.indexOf(first) == 4) {
    return a;
  }
  if (notes.indexOf(fift) + factor2 - notes.indexOf(first) == 7 && notes.indexOf(third) + factor1 - notes.indexOf(first) == 3) {
    return a + "m";
  }
  if (notes.indexOf(fift) + factor2 - notes.indexOf(first) == 6 && notes.indexOf(third) + factor1 - notes.indexOf(first) == 3) {
    return a + "º";
  }
}

module.exports = whatIsTriadAccord;