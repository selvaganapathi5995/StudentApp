const Mongoose = require("mongoose");

const studentSchema = Mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true, max: 30 },
  department: { type: String, required: true,max: 30 },
  type: { type: String, required: true, min: 7, max: 30 }
});

module.exports = Mongoose.model("students", studentSchema);
