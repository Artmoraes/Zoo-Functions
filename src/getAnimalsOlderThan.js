const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const especieAnimal = data.species.find((especie) => especie.name === animal); // Se o nome do animal no atributo especie.name satisfazer a comparação com o nome animal, continua a comparação.
  return especieAnimal.residents.every((mediaConfirm) => mediaConfirm.age >= age); // Retorna-rá true ou false, caso o atributo age seja menor que a media de idade dos animais.
}

module.exports = getAnimalsOlderThan;
