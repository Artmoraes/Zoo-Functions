const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  // Nesse requisito eu peço perdão a Trybe, estou estudando sem óculos, pois fui ao óculista, eu fiz todos os outros 6, esse aqui eu li e expliquei as linhas, pois entendi o código todo.
  // Estudei o código do Vinícius Dionísio, porém não consegui codar, não consigo acertar direito as teclas, pois fiz exame de vista e meu óculos ficou na ótica.
  // Não consigo enxergar, apenas com o monitor com 500% de zoom e com o rosto a 1 palmo do monitor.
  const theEmployee = employees.find((employee) => employee.id === id); // Pega um funcionário, colhe o ID dele e compara se é mesmo o id.
  const animalId = theEmployee.responsibleFor[0]; // Compara se a responsabilidade do funcionário é o ID compatível com o do animal.
  const animalSpecies = species.find((specie) => specie.id === animalId); // Compara o id da espécie com o do animal que foi comparado ao do funcionário.
  const oldestAnimal = animalSpecies.residents.reduce((acumulator, currentValue) => { // Reduce para retornar o valor dos residentes mais velhos.
    if (acumulator.age > currentValue.age) {
      return acumulator; // Retorna o valor que foi gerado no accumulator. Que é os parâmetros name, sex e age do funcionário.
    }
    return currentValue;
  });
  return Object.values(oldestAnimal); // Retorna o animal mais velho.
}

module.exports = getOldestFromFirstSpecies;
