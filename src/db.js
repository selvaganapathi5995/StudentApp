const Mongoose = require("mongoose");
class DbConnector {
  dbConnectionCreator(dbConnectionString) {
    Mongoose.connect(dbConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const db = Mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function() {
      console.log("Mongodb Connection Successfully Established");
      console.log("************************************************");
    });
  }
}
const DatabaseConnection = new DbConnector();
module.exports = DatabaseConnection;
