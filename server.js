"use strict";
const Hapi = require("@hapi/hapi");
const Mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const Inert = require("@hapi/inert");
const Swaggered = require("hapi-swaggered");
const SwaggeredUi = require("hapi-swaggered-ui");
const Vision = require("@hapi/vision");
const InputValidationSchema = require("./input_validation_schema");
const OutputValidationSchema = require("./output_validation_schema");
const swaggerOptions = require("./const");
const students = require("./schema");

const init = async () => {
  const server = Hapi.Server({
    port: 3000,
    host: "localhost"
  });try {
    await server.register([
      Inert,
      Vision,
      {
        plugin: Swaggered,
        options: swaggerOptions.swageredOptions
      },
      {
        plugin: SwaggeredUi,
        options: swaggerOptions.swageredUiOptions
      }
    ]);   
  } catch (error) {
    console.log("Error while registering", error)
  }
 
  server.route({
    method: "GET",
    path: "/students",
    options: {
      plugins: {
        "hapi-swaggerd": {
          operationId: "Get list of student details",
          responses: {
            default: {
              description: "Bad request",
              schema: Joi.array().items(
                OutputValidationSchema.studentDetailsSchema
              )
            },
            500: { description: "Internal Server Error" }
          }
        }
      },
      handler: async (request, h) => {
        try {
          const data = await students.find({});
          return h.response(data);
        } catch (error) {
          console.log("Error get student list route: ", error);
        }
      }
    }
  });

  console.log("server running on s%", server.info.uri);

  Mongoose.connect("mongodb://127.0.0.1:27017/details", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = Mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("Mongodb Connection Successfully Established");
    console.log("************************************************");
  });
  try {
    await server.start();
  } catch (error) {
    console.log("Error in server starting: ", error);
  }
 
};
process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});
  init();

