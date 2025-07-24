
import jwt from "jsonwebtoken";
import schema from "../models/schema.js";
const { User, Book, Review, Order } = schema;
import nodemailer from "nodemailer";
import crypto from "crypto";





const registerUser = async (req, res) => {

  const { name, email, password, username } = req.body;
  if (!email || !password || !username) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await User.create({
      username: username,
      email,
      password,
    });
    console.log(user);

    if (!username) {
      return res.status(400).json({
        message: "User not registered",


      });
    }

    const token = crypto.randomBytes(32).toString("hex");
    user.verificationToken = token;
    await user.save();



    //send email ,basically its called a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    // Defining the email options
    const mailOption = {
      // service: 'Gmail',
      from: process.env.MAILTRAP_SENDEREMAIL,
      to: user.email,
      subject: "Verify your email", // Subject line
      text: `Please click on the following link:
      ${process.env.BASE_URL}/api/v1/users/verify/${token}
      `,
    };

    await transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        console.log('Error:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });

  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "User not registered ",
      error: error.message,
      success: false,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email })
    console.log(user);


    if (!user) {
      return res.status(401).json({
        error: "User not found"
      })
    }

    const isMatch = await password === user.password;
    console.log(user.password);
    console.log(password);


    if (!isMatch) {
      return res.status(401).json({
        error: `Invalid credentials`
      })
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },

      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );



    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development" ? true : false,
      maxAge: 24 * 60 * 60 * 1000,
    };
    res.cookie("token", token, cookieOptions);


    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });


  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      error: "Error logging in user"
    })
  }
}

export const aboutMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    console.log(user);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("Error in get me", error);
  }
};


export const generateApiKey = async (req, res) => {
  try {
    const userId = req.user.id;

    const apiKey = crypto.randomBytes(32).toString("hex");
    


    const user = await User.findById(userId);
    user.apiKey = apiKey;
    await user.save();

    res.status(200).json({
      success: true,
      message: "API Key generated",
      apiKey: apiKey,
    });
  } catch (error) {
    console.error("API key generation failed:", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};



export { registerUser };
