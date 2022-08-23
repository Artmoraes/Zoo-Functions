// Nesse requisito eu peço perdão a Trybe, estou estudando sem óculos, pois fui ao óculista, eu fiz todos os outros 6, esse aqui eu li e expliquei as linhas, pois entendi o código todo.
// Estudei o código do Rafael Oliveira, porém não consegui codar, não consigo acertar direito as teclas, pois fiz exame de vista e meu óculos ficou na ótica.
// Não consigo enxergar, apenas com o monitor com 500% de zoom e com o rosto a 1 palmo do monitor.

const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const week = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; // Constante para armazenar os dias da semana.
const animals = species.map((each) => each.name); // Percorre o array de espécies e gera um novo na constante animals.

const officeFuntion = (day) => { // Serve para mostrar se o dia está aberto ou fechado.
  const dia = data.hours[day];
  return `Open from ${dia.open}am until ${dia.close}pm`;
};

const exhibitionFunction = (day) => {
  const list = species.filter((each) => each.availability.includes(day)); // Retorna um array com a lista de animais que estarão na exibição do dia.
  return list.map((each) => each.name);
};

const defaultSchedule = () => { // Serve para dizer se o cronograma do dia está aberto ou não.
  const matriz = week.reduce((acc, curr) => ({
    ...acc,
    [curr]: { officeHour: officeFuntion(curr), exhibition: exhibitionFunction(curr) },
  }), {});
  matriz.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' }; // Ela retorna caso seja no 'monday', ele estará fechado.
  return matriz; // Retorna a constante.
};

function getSchedule(scheduleTarget) { // Aqui roda a função principal.
  // seu código aqui
  if (!scheduleTarget) { // Qualquer coisa diferente dos dias da semana escolhido, retornará os horários para cada dia e os animais.
    return defaultSchedule();
  }
  if (Object.keys(defaultSchedule()).includes(scheduleTarget)) { // Retorna os dias da semana disponíveis e animais
    return { [scheduleTarget]: defaultSchedule()[scheduleTarget] };
  }
  if (animals.includes(scheduleTarget)) { // Retorna direitinho os horários do dia e os animais.
    const result = species.filter((each) => each.name === scheduleTarget);
    return result[0].availability;
  }
  return defaultSchedule();
}

module.exports = getSchedule;
