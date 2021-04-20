import Student from "../models/Student";

export const getAllStudent = async (req, res) => {
  const students = await Student.find();
  res.status(200).json({ students });
};

export const getStudent = async (req, res) => {
  const { studentId } = req.params;
  const student = await Student.findById(studentId);
  res.status(200).json({ student });
};

export const createStudent = async (req, res) => {
  const { firstName, lastName, age, gender } = req.body;
  const student = await Student.create({
    firstName,
    lastName,
    age,
    gender,
  });
  res.status(201).json({ student });
};

export const updateStudent = async (req, res) => {
  const { studentId } = req.params;
  const student = await Student.findByIdAndUpdate(studentId, req.body, {
    new: true,
  });
  res.status(200).json({ student });
};

export const deleteStudent = async (req, res) => {
  const { studentId } = req.params;
  await Student.findByIdAndDelete(studentId);
  res.status(200).json({ message: "Student deleted" });
};
