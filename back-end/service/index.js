const model = require('../model');

const searchService = async (date, littleDogs, bigDogs) => {
  // Obtendo lista de petshop disponíveis.
  const allPetshopList = await model.findPetshopList();

  // Lidando com a Data.
  const weekWay = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"];
  const day = new Date(date);
  const weekDay = weekWay[day.getDay()];
  const isWeekDay = (weekDay === "Sábado") || (weekDay === "Domingo");
  
  // Array para guardar lista de petshop já com preço dos banhos atribuído.
  const Result = new Array();

  // Percorrendo cada petshop da lista para definição de preços.
  allPetshopList.forEach(petshop => {
    const weekdayPrice = petshop.littleDogs * littleDogs + petshop.bigDogs * bigDogs;
    const weekendPrice = petshop.littleDogsWend * littleDogs + petshop.bigDogsWend * bigDogs;
    
    // Salvando informações para reutilizar com spread operator na linha 28.
    const infoShop = {
        "petshop": petshop.name,
        "distance": petshop.distance,
    };

    // Atribuindo no Array Result, o preço, conforme a data, se é ou não final de semana.
    isWeekDay ? Result.push({ ...infoShop, "price": weekdayPrice }) : Result.push({ ...infoShop, "price": weekendPrice });
  })

  // Retornando lista ordenada, dando preferência para preços menores e em casos de empate, distâncias menores.
  return Result.sort((a, b) => {
    if (a.price > b.price) return 1;

    if (a.price < b.price) return -1;
    
    if (a.price === b.price) {
      if (a.distance > b.distance) return 1;
      else return -1
    }
  });
};

module.exports = {
  searchService,
};
