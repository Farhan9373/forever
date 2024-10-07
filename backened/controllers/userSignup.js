import { User } from "../modal/user.js";
import bcrypt from "bcrypt";


export const Signup = async (req, res) => {
  try {
    const { email, name, password,profile } = req.body;

    if (!email) {
      return res.status(400).json({
        message:"Please provide email",
        success: false,
      });
    }

    if (!name) {
      return res.status(400).json({
        message: "Please provide name",
        success: false,
      });
    }

    if (!password) {
      return res.status(400).json({
        message: "Please provide password",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const hashpass = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashpass,
      profile,
      role:"GENERAL"

    });

    res.status(200).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};
