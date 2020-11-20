const connection = require('./connection');

const findPetshopList = async () => connection()
  .then((db) => db.collection('shoplist').find({}).toArray())
  .catch((err) => { console.error(err) });

const insertData = async () => {
  return await connection().then((db) => db.collection('shoplist').insertMany([{
    "_id": 1, "name": "Meu Canino Feliz",
    "distance": 2000,
    "littleDogs": 20,
    "bigDogs": 40,
    "littleDogsWend": 24,
    "bigDogsWend": 48
  },
  {
    "_id": 2, "name": "Vai Rex",
    "distance": 1700,
    "littleDogs": 15,
    "bigDogs": 50,
    "littleDogsWend": 20,
    "bigDogsWend": 55
  },
  {
    "_id": 3, "name": "ChowChawgas",
    "distance": 800,
    "littleDogs": 30,
    "bigDogs": 45,
    "littleDogsWend": 30,
    "bigDogsWend": 45
  }
  ]))
  .catch((err) => err);
}


module.exports = {
  findPetshopList,
  insertData,
};
