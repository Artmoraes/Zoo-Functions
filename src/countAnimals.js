const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui

  const livroQuantidadeAnimais = {};

  if (animal === undefined) {
    for (let i = 0; i < species.length; i += 1) {
      livroQuantidadeAnimais[species[i].name] = species[i].residents.length;
    }
    return livroQuantidadeAnimais;
  }

  const bookAnimais = data.species.filter((each) => each.name === animal.specie);
  const quantAnimais = bookAnimais[0].residents.length;

  if (animal.sex) {
    return bookAnimais[0].residents.filter((each) => each.sex === animal.sex).length;
  }
  return quantAnimais;
}
module.exports = countAnimals;
