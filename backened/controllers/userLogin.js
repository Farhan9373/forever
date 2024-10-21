import { User } from "../modal/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({
        message: "Please provide email",
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
    if (!user) {
      return res.status(200).json({
        message: "user not register",
        success: false,
      });
    }
    //checking the password wheather it is right or not
    const isMatch = await bcrypt.compare(
      password,
      user.password,
      function (err, result) {
        if (result == true) {
          const tokendata = {
            _id: user._id,
            email: user.email,
          };
          const tokenOption = {
            httpOnly: true,
            secure: true,
            sameSite:'None'
          };
          const token = jwt.sign(
            {
              tokendata,
            },
            process.env.SECRET_KEY,
            { expiresIn: 60 * 60 * 8 }
          );
          res.cookie("token", token, tokenOption, tokenOption).json({
            message: "Login succesfully",
            data: token,
            success: true,
          });
        } else {
          console.log(err);
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};