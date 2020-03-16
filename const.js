const swagerOptions = {
  swageredOptions: {
    tags: {
      students: "Student Details"
    },
    info: {
      title: "Student API",
      description:
        "Powered by node, hapi, joi, hapi-swaggered, hapi-swaggered-ui and swagger-ui",
      version: "1.0"
    }
  },
  swageredUiOptions: {
    title: "Student API",
    path: "/docs",
    authorization: null,
    swaggerOptions: {
      validatorUrl: null
    }
  }
};

module.exports = swagerOptions;
