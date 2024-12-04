import studentModel from "../models/studentModel.js";

export const createStudent = async (req, res) => {
  const { IDCard, name, email, phone, classId } = req.body;

  try {
    const newStudent = new studentModel({
      classId,
      IDCard,
      name,
      email,
      phone,

      new: true,
    });

    await newStudent.save();

    return res.status(201).json({ newStudent });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatestudent = async (req, res) => {
  const { id } = req.params;
  try {
    const stdentDetail = await studentModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!stdentDetail) {
      return res.status(404).json({ message: "Student not found" });
    }
    return res.status(200).json({ stdentDetail });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await studentModel.findByIdAndDelete(id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    res.status(200).json({
      message: "Student deleted success",
    });
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ message: "Server error" });
  }
};
export const GetStudent = async (req, res) => {
  try {
    const students = await studentModel.find();

    res.status(200).json({
      message: "Data fetched successfully",
      data: students,
    });
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ message: "Server error" });
  }
};
