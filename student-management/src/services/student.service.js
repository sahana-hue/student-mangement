const Student = require('../models/student.model');

exports.createStudent = async (data) => {
  return await Student.create(data);
};

exports.getStudents = async () => {
  return await Student.find();
};

exports.getStudentById = async (id) => {
  return await Student.findById(id);
};

exports.updateStudent = async (id, data) => {
  return await Student.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteStudent = async (id) => {
  return await Student.findByIdAndDelete(id);
};