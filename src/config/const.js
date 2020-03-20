const swaggerOptions = {
  info: {
    title: "Student API Documentation",
    version: "1.0.0",
    description: "Students information"
  },
  host: "172.24.145.144:3000",
  schemes: ["http"],
  documentationPath: "/docs"
};
module.exports = { swaggerOptions };
