# Projeto de identificação de notas e acordes

## introdução

- Este repositório implementa basicamente duas funções, uma que retorna o acorde com base nas notas fornecidas, e um que retorna as notas a depender do acorde fornecido.

## tecnologia

- Foram utilizados:
  - javascript/nodejs
  - testes unitários 100% de cobertura
  - esteira de ci/cd
    - build, lint, sonar cloud, docker build and push on dockerhub

## exemplo de uso

- arquivo exemplo.js

  ```javascript
  const { identifyChord, getChord } = require(".");

  console.log('should identify C major');
  console.log(identifyChord(['C', 'E', 'G']));

  console.log('should generate C major');
  console.log(getChord('C', 'major'));
  ```

by berilo queiroz
