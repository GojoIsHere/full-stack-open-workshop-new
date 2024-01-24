const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: Number, required: true },
  DOB: { type: String, required: true },
  Address: { type: String, required: true },
  image: { type: String, required: true },
  gender: { type: String, required: true },
});
patientSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
module.exports = mongoose.model("patients", patientSchema);
