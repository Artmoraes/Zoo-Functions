const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length < 1) {
    return 0;
  }
  const criança = entrants.filter((visit) => visit.age < 18).length;
  const adulto = entrants.filter((visit) => visit.age >= 18 && visit.age < 50).length;
  const idosos = entrants.filter((visit) => visit.age >= 50).length;

  return { adult: adulto, child: criança, senior: idosos };
}

function calculateEntry(entrants) {
  // seu código aqui
  const enterAdulto = 49.99;
  const enterIdoso = 24.99;
  if (entrants === undefined || Object.keys(entrants).length < 1) {
    return 0;
  }
  const valor = countEntrants(entrants);
  return (valor.child * prices.child) + (valor.adult * enterAdulto) + (valor.senior * enterIdoso);
}

module.exports = { calculateEntry, countEntrants };
