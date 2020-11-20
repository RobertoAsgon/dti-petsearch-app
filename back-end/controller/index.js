const { searchService } = require('../service');

const searchController = async (req, res) => {
  const { date, littleDogs, bigDogs } = req.query;

  const response = await searchService(date, littleDogs, bigDogs);

  return res.status(200).json(response);
};

module.exports = {
  searchController,
};
