const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) { // Compara o parâmetro da função, caso seja undefined(Ou vazio), retorna um objeto vazio.
    return {};
  } // OK!
  const comparativo = data.employees.find((pessoa) => { // Constante criada para gerar uma arrow function para percorrer os objetos de funcionários
    let pessoaQuestao;
    if (employeeName === pessoa.firstName || employeeName === pessoa.lastName) { // Caso o employeeName satisfaça a comparação, retorna o próprio objeto comparado.
      pessoaQuestao = pessoa; // Retorna o objeto.
    }
    return pessoaQuestao;
  });
  return comparativo; // Retorna a constante.
}

module.exports = getEmployeeByName;
