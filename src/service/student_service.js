const studentsModel = require("../model/schema"),
  Joi = require("@hapi/joi"),
  Method = require("../interceptor");
class StudentService {
  getAllStudents() {
    return {
      handler: async (request, h) => {
        try {
          const data = Method.get();
          console.log(data)
          return h.response(data);
        } catch (error) {
          console.log("Error get student list route: ", error);
        }
      },
      description: "Get Students",
      tags: ["api"],
      notes: ["Return list of students details"],
      plugins: {
        "hapi-swagger": {
          responses: {
            200: {
              description: "List of student details",
              schema: Joi.array()
                .items(
                  Joi.object({
                    _id: Joi.number().required(),
                    name: Joi.string()
                      .required()
                      .max(30),
                    department: Joi.string()
                      .required()
                      .max(30),
                    type: Joi.string()
                      .required()
                      .min(7)
                      .max(30)
                  })
                )
            },
            204: {
              description: "No Content"
            },
            400: {
              description: "Something wrong happened"
            }
          }
        }
      }
    };
  }
}
const student = new StudentService();
module.exports = student;
// server.route({
//   method: "GET",
//   path: "/students",
//   options: {
//     plugins: {
//       "hapi-swaggerd": {
//         operationId: "Get list of student details",
//         responses: {
//           default: {
//             description: "Bad request",
//             schema: Joi.array().items(
//               OutputValidationSchema.studentDetailsSchema
//             )
//           },
//           500: { description: "Internal Server Error" }
//         }
//       }
//     },
//     handler: async (request, h) => {
//       try {
//         const data = await students.find({});
//         return h.response(data);
//       } catch (error) {
//         console.log("Error get student list route: ", error);
//       }
//     }
//   }
// });

// server.route({
//   method: "GET",
//   path: "/students/{_id}",
//   handler: async (request, h) => {
//     const data = await students.fin
// dOne({ _id: request.params._id });
//     console.log(data);
//     return h.response(data);
//   },
//   options: {
//     validate: {
//       params: InputValidationSchema._id.validate.params
//     },
//     plugins: {
//       "hapi-swaggerd": {
//         operationId: "Get detail of an particular student",
//         responses: {
//           default: {
//             description: "Bad request",
//             schema: Joi.object({
//               _id: Joi.number().required(),
//               name: Joi.string()
//                 .required()
//                 .max(30),
//               department: Joi.string()
//                 .required()
//                 .max(30),
//               type: Joi.string()
//                 .required()
//                 .min(7)
//                 .max(30)
//             })
//           },
//           500: { description: "Internal Server Error" }
//         }
//       }
//     }
//   }
// });
// server.route({
//   method: "DELETE",
//   path: "/students/{_id}",
//   handler: (request, h) => {
//     return "Remove particular student from list";
//   },
//   options: InputValidationSchema._id
// });
// server.route({
//   method: "PUT",
//   path: "/students/{_id}",
//   handler: async (request, h) => {
//     const result = await students.updateOne(
//       { _id: request.params._id },
//       { type: request.query.type }
//     );
//     return "Type Updated Successfully";
//   },
//   options: InputValidationSchema.type
// });
// server.route({
//   method: "POST",
//   path: "/students",
//   handler: (request, h) => {
//     const studetnDetails = {
//       _id: request.payload._id,
//       name: request.payload.name,
//       department: request.payload.department,
//       type: request.payload.type
//     };
//     return studetnDetails;
//   },
//   options: InputValidationSchema.studentDetails
// });
