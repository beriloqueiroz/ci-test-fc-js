const whatIsTriadAccord = require(".");

describe('whatIsTriadAccord', () => {
  test('Identifica um acorde maior', () => {
    expect(whatIsTriadAccord('C', 'E', 'G')).toBe('C');
    expect(whatIsTriadAccord('D', 'F#', 'A')).toBe('D');
    expect(whatIsTriadAccord('F', 'A', 'C')).toBe('F');
  });

  test('Identifica um acorde menor', () => {
    expect(whatIsTriadAccord('C', 'D#', 'G')).toBe('Cm');
    expect(whatIsTriadAccord('E', 'G', 'B')).toBe('Em');
    expect(whatIsTriadAccord('D', 'F', 'A')).toBe('Dm');
  });

  test('Identifica um acorde diminuto', () => {
    expect(whatIsTriadAccord('C', 'D#', 'F#')).toBe('Cº');
    expect(whatIsTriadAccord('C#', 'E', 'G')).toBe('C#º');
    expect(whatIsTriadAccord('G#', 'B', 'D')).toBe('G#º');
  });

  test('Substitui notas equivalentes corretamente', () => {
    expect(whatIsTriadAccord('Db', 'F', 'Ab')).toBe('Db'); // Acorde maior
    expect(whatIsTriadAccord('Eb', 'G', 'Bb')).toBe('Eb'); // Acorde maior
    expect(whatIsTriadAccord('F#', 'A', 'C#')).toBe('F#m'); // Acorde menor
    expect(whatIsTriadAccord('Ab', 'B', 'Eb')).toBe('Abm'); // Acorde menor
  });

  test('Retorna undefined para combinações inválidas', () => {
    expect(whatIsTriadAccord('C', 'F', 'G')).toBeUndefined();
    expect(whatIsTriadAccord('D', 'A', 'B')).toBeUndefined();
    expect(whatIsTriadAccord('E', 'G#', 'A#')).toBeUndefined();
  });
});