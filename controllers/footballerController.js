import footballerModel from "../models/footballerModel.js";

export const createFootballer = async (req, res) => {
  const { fullName, position, avatar, nationality, dob, bio } = req.body;
  const createdBy = req.user._id;
  try {
    const newFootballer = new footballerModel({
      fullName: fullName,
      position,
      avatar,
      nationality,
      dob,
      bio,
      createdBy,
      new: true
    });
    await newFootballer.save();
    return res.status(201).json({ newFootballer });
  } catch (error) {
    console.log(error.message);
  }
};

export const getFootballerById = async (req, res) => {
  const { id } = req.params;
  try {
    const footballer = await footballerModel.findById(id);
    if (!footballer) {
      return res.status(404).json({ message: "footballer not found" });
    }
    return res.status(200).json({ footballer });
  } catch (error) {
    console.log(error.message);
  }
};
