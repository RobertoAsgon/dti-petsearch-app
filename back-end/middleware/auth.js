const moment = require('moment');
const Boom = require('@hapi/boom');

const validation = async (req, _res, next) => {
  const { date, littleDogs, bigDogs } = req.query;

  const today = moment().format('YYYY-MM-DD');

  if (date < today || !date) return next(Boom.badData('Data inválida!'));

  if (littleDogs < 1) return next(Boom.badData('Quantidade de cães pequenos inválida.'));

  if (bigDogs < 1) return next(Boom.badData('Quantidade de cães grandes inválida.'));

  next();
};

module.exports = {
  validation,
};
