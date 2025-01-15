const { identifyChord, getChord } = require(".");

describe('Chord Identification and Generation', () => {
  describe('identifyChord function', () => {
    it('should identify C major', () => {
      expect(identifyChord(['C', 'E', 'G'])).toBe('C major');
    });

    it('should identify A minor', () => {
      expect(identifyChord(['A', 'C', 'E'])).toBe('A minor');
    });

    it('should identify Ab major', () => {
      expect(identifyChord(['Ab', 'C', 'Eb'])).toBe('G# (Ab) major');
    });

    it('should identify B diminished', () => {
      expect(identifyChord(['B', 'D', 'F'])).toBe('B diminished');
    });

    it('should identify F augmented', () => {
      expect(identifyChord(['F', 'A', 'C#'])).toBe('F augmented');
    });

    it('should identify G seventh', () => {
      expect(identifyChord(['G', 'B', 'D', 'F'])).toBe('G seventh');
    });

    it('should return "Acorde não identificado" for unrecognized chord', () => {
      expect(identifyChord(['C', 'D', 'E'])).toBe('Acorde não identificado');
    });
  });

  describe('getChord function', () => {
    it('should generate C major', () => {
      expect(getChord('C', 'major')).toEqual(['C', 'E', 'G']);
      expect(getChord('C')).toEqual(['C', 'E', 'G']);
    });

    it('should generate A minor', () => {
      expect(getChord('A', 'minor')).toEqual(['A', 'C', 'E']);
    });

    it('should generate Ab major', () => {
      expect(getChord('Ab', 'major')).toEqual(['Ab', 'C', 'Eb']);
    });

    it('should generate B diminished', () => {
      expect(getChord('B', 'diminished')).toEqual(['B', 'D', 'F']);
    });

    it('should generate F augmented', () => {
      expect(getChord('F', 'augmented')).toEqual(['F', 'A', 'C#']);
    });

    it('should generate G seventh', () => {
      expect(getChord('G', 'seventh')).toEqual(['G', 'B', 'D', 'F']);
    });

    it('should throw error for invalid root note', () => {
      expect(() => getChord('H', 'major')).toThrow('Invalid root note: H');
    });

    it('should throw error for unknown chord type', () => {
      expect(() => getChord('C', 'unknown')).toThrow('Unknown chord type: unknown');
    });
  });
});