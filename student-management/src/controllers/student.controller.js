const service = require('../services/student.service');

exports.create = async (req, res) => {
  const student = await service.createStudent(req.body);
  res.json(student);
};

exports.getAll = async (req, res) => {
  const students = await service.getStudents();
  res.json(students);
};

exports.getById = async (req, res) => {
  const student = await service.getStudentById(req.params.id);
  res.json(student);
};

exports.update = async (req, res) => {
  const updated = await service.updateStudent(req.params.id, req.body);
  res.json(updated);
};

exports.delete = async (req, res) => {
  await service.deleteStudent(req.params.id);
  res.json({ message: "Deleted" });
};