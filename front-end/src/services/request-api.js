import axios from 'axios';

const baseUrl = 'http://localhost:3001/';

export const getBestPetShop = async (date, littleDogs, bigDogs) => axios
  .get(`${baseUrl}`, { params: { date, littleDogs, bigDogs } })
  .catch(({ response }) => response);
