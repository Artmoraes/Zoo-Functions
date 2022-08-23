const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids === ' ') { // Caso o array esteja vazio, retorna um array vazio.
    return [];
  }
  if (ids === undefined) { // Já nessa caso, se o array for tiver valor 'undefined', também retorna um array vazio.
    return [];
  }
  return ids.map((animal) => data.species.find((especie) => especie.id === animal)); // Mapeia todo o array, através do map, utiliza o find para confirmar a informação passada e retorna o valor solicitado.
} // Estudei essa linha 11, pelo código do Vinicius Dionísio, ele me ajudou em outro projeto e decidi fazer um code review no código dele para entender qual foi a lógica utilizada para retornar o array.

module.exports = getSpeciesByIds;
