const Student = require("../models/Student");


exports.createStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.json(student);
};

exports.getStudents = async (req, res) => {
  const students = await Student.findAll();
  res.json(students);
};

exports.getStudent = async (req, res) => {
  const student = await Student.findByPk(req.params.id);
  res.json(student);
};

exports.updateStudent = async (req, res) => {

  await Student.update(req.body, {
    where: { id: req.params.id },
  });

  res.json({ message: "Student updated" });
};

exports.deleteStudent = async (req, res) => {

  await Student.destroy({
    where: { id: req.params.id },
  });

  res.json({ message: "Student deleted" });
};