const mongoClient = require('mongodb').MongoClient;

let schema = null;
const MONGO_DB_URL = 'mongodb://localhost:27017/Petsearch';
const DB_NAME = 'Petsearch';
async function connection() {
  if (schema) return Promise.resolve(schema);
  return mongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(DB_NAME))
    .then((dbSchema) => {
      schema = dbSchema;
      return schema;
    })
    .catch((err) => {
      err;
      process.exit(1);
    });
}
module.exports = connection;
