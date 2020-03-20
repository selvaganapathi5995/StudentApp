const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/./../../.env" });

module.exports = {
  host: process.env.HOST,
  port: process.env.PORT,
  dbConnectionUrl: process.env.DATABASE_CONNECTION_STRING
};
