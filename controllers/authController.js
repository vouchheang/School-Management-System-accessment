import Auth from "../models/authModel.js";

export const register = async (req, res) => {
  const { fullname, password, email, role } = req.body;

  try {
    const NewAuth = new Auth({
      fullname,
      email,
      password,
      role,
      new: true,
    });

    await NewAuth.save();
    return res.status(201).json({ NewAuth });
  } catch (error) {
    console.log(error.message);
  }
};

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ error: "All fields are required." });
//     }

//     const user = await Auth.findOne({ email: email });
//     if (!user) {
//       return res.status(400).json({ error: "Invalid email." });
//     }
    
//   } catch (error) {
//     console.log(error.message);
//   }
// };

