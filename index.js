
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const flatsToSharps = {
  'Db': 'C#', 'Eb': 'D#', 'Gb': 'F#', 'Ab': 'G#', 'Bb': 'A#'
};
const sharpsToFlats = Object.fromEntries(Object.entries(flatsToSharps).map(([k, v]) => [v, k]));
const steps = {
  major: [0, 4, 7], // Tônica, terça maior, quinta justa
  minor: [0, 3, 7], // Tônica, terça menor, quinta justa
  diminished: [0, 3, 6], // Tônica, terça menor, quinta diminuta
  augmented: [0, 4, 8], // Tônica, terça maior, quinta aumentada
  seventh: [0, 4, 7, 10], // Tônica, terça maior, quinta justa, sétima menor
  "minor seventh": [0, 3, 7, 10], // Tônica, terça menor, quinta justa, sétima menor
  "major seventh": [0, 4, 7, 11], // Tônica, terça maior, quinta justa, sétima maior
  sus2: [0, 2, 7], // Tônica, segunda maior, quinta justa
  sus4: [0, 5, 7] // Tônica, quarta justa, quinta justa
};

function getChord(root, type = "major") {
  let hasFlats = false;
  // Converte bemol para sustenido, se necessário
  if (flatsToSharps[root]) {
    root = flatsToSharps[root];
    hasFlats = true;
  }

  const rootIndex = notes.indexOf(root);
  if (rootIndex === -1) {
    throw new Error(`Invalid root note: ${root}`);
  }

  if (!steps[type]) {
    throw new Error(`Unknown chord type: ${type}`);
  }

  return steps[type].map(step => notes[(rootIndex + step) % notes.length]).map(r => hasFlats && sharpsToFlats[r] ? sharpsToFlats[r] : r);
}


function identifyChord(noteList) {
  // Converte bemóis para sustenidos, se necessário
  noteList = noteList.map(note => flatsToSharps[note] || note);
  const result = [];
  for (const root of notes) {
    const rootIndex = notes.indexOf(root);
    const normalized = noteList.map(note => (notes.indexOf(note) - rootIndex + 12) % 12).sort((a, b) => a - b);

    for (const [chordType, intervals] of Object.entries(steps)) {
      if (JSON.stringify(normalized) === JSON.stringify(intervals)) {
        result.push(`${root}${sharpsToFlats[root] ? ` (${sharpsToFlats[root]})` : ""} ${chordType}`);
      }
    }
  }

  if (result.length > 0) {
    return result.find(r => r.includes(noteList[0]));
  }

  return "Acorde não identificado";
}

module.exports = {
  identifyChord,
  getChord
}
