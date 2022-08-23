const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const funcionario = data.employees.some((gerente) => gerente.managers.includes(id)); // Vai percorrer o array de employees e comparar os valores se são compatíveis com o ID, recebi essa dica durante o bate papo com o Rafael Elias.
  return funcionario; // Retorna a constante.
}
// Fiz o código desse requisito tendo como referência o do Mauro Marchesan, Rafael Oliveira, Vinicius Dionisio e também das mentorias do Sumo.
function getRelatedEmployees(managerId) {
  // seu código aqui
  const alocarFuncionarios = []; // Criar um array do tipo let para poder ser alterado e alocar os dados gerados.
  if (isManager(managerId)) { // Aqui vai verificar se o ID passado, será validado com funcionário & gerente.
    employees.forEach((pessoa) => { // Loop do tipo forEach para percorrer o ID de employees e saber quem é gerente ou não.
      pessoa.managers.forEach((humano) => { // Esse loop também forEach, será para percorrer os dados do tipo string dentro do array managers e adicionar ao array alocarFuncionarios.
        if (humano === managerId) { // Caso seja verdadeiro, irá empurrar para o array os dados.
          alocarFuncionarios.push(`${pessoa.firstName} ${pessoa.lastName}`);
        }
      });
    });
    return alocarFuncionarios; // Retorna o array alocarFuncionarios.
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!'); // Caso a condição do IF não seja verdadeira, ele irá apresentar este erro.
}

module.exports = { isManager, getRelatedEmployees };
