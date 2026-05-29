import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const logincontroller = async (req, res) => {
  try {
    console.log("=== LOGIN CONTROLLER STARTED ===");
    console.log("Request body:", req.body);

    const { email, password } = req.body;

    // Convert email to lowercase to match signup storage
    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
    
    console.log("User found:", user ? "Yes" : "No");
    
    if (!user) {
      console.log("Login failed: User not found with email:", email.toLowerCase());
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    console.log("Comparing passwords...");
    console.log("Password provided:", password);
    console.log("Password hash in DB:", user.password);
    
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);
    
    if (!isMatch) {
      console.log("Login failed: Password mismatch");
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    console.log("Generating JWT token...");
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    console.log("=== LOGIN SUCCESSFUL ===");
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        fullName: user.fullName,
      },
    });

  } catch (error) {
    console.error("=== LOGIN ERROR ===");
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export default logincontroller;
