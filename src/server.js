"use strict";
const Hapi = require("@hapi/hapi"),
  Inert = require("@hapi/inert"),
  Vision = require("@hapi/vision"),
  HapiSwagger = require("hapi-swagger"),
  options = require("./config/const"),
  database = require("./db"),
  { dbConnectionUrl, host, port } = require("./config/env_config"),
  routes = require("./controller/student_routes");
const init = async () => {
  const server = Hapi.Server({
    port,
    host
  });
  await server
    .register([
      Inert,
      Vision,
      {
        plugin: HapiSwagger,
        options: options.swaggerOptions
      }
    ])
    .catch(error => {
      console.log("Error while registering", error);
    });
  server.route(routes);
  console.log("server running on s%", server.info.uri);
  await server.start().catch(error => {
    console.log("Error in server starting: ", error);
  });
  database.dbConnectionCreator(dbConnectionUrl);
};
process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});
init();
