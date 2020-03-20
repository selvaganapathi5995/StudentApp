const routePaths = require("../config/route_paths"),
  student = require("../service/student_service");
module.exports = [
  {
    method: "GET",
    path: routePaths.students,
    options: student.getAllStudents
  }
  // {
  //   method: "GET",
  //   path: routePaths.studentsById,
  //   options: {},
  // },
  // {
  //   method: "PUT",
  //   path: routePaths.students,
  //   options: {},
  // },
  // {
  //   method: "POST",
  //   path: routePaths.students,
  //   options: {},
  // },
  // {
  //   method: "DELETE",
  //   path: routePaths.students,
  //   options: {},
  // }
];
