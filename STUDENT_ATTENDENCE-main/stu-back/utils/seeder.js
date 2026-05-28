import bcrypt from "bcryptjs";
import User from "../models/user.js";
import Admin from "../models/admin.js";
import Teacher from "../models/teacher.js";
import Student from "../models/student.js";

export const seedDatabase = async () => {
  try {
    const userCount = await User.countDocuments();
    if (userCount > 0) {
      console.log("Database already has users. Skipping auto-seeding.");
      return;
    }

    console.log("=== AUTO-SEEDING DEFAULT USERS ===");

    // 1. Hash passwords
    const adminPassword = await bcrypt.hash("Admin#1234", 10);
    const teacherPassword = await bcrypt.hash("Teacher@123", 10);
    const studentPassword = await bcrypt.hash("Student@123", 10);

    // 2. Create Admin User
    const adminUser = await User.create({
      fullName: "Admin User",
      email: "admin@gmail.com",
      phone: "1234567890",
      password: adminPassword,
      role: "admin",
      isActive: true,
    });
    await Admin.create({ userId: adminUser._id });
    console.log("Seeded Admin: admin@gmail.com / Admin#1234");

    // 3. Create Teacher User
    const teacherUser = await User.create({
      fullName: "Rajesh Kumar",
      email: "rajesh@school.com",
      phone: "9876543210",
      password: teacherPassword,
      role: "teacher",
      isActive: true,
    });
    await Teacher.create({ 
      userId: teacherUser._id,
      department: "Computer Science",
      phone: "9876543210",
      experience: 8,
      qualifications: ["M.Tech", "Ph.D. in CSE"]
    });
    console.log("Seeded Teacher: rajesh@school.com / Teacher@123");

    // 4. Create Student User
    const studentUser = await User.create({
      fullName: "Aarav Singh",
      email: "aarav@school.com",
      phone: "8765432109",
      password: studentPassword,
      role: "student",
      isActive: true,
    });
    await Student.create({ 
      userId: studentUser._id,
      regNumber: "reg1244",
      branch: "Computer Science",
      currentSemester: 5,
      section: "A",
      parentName: "Sanjay Singh",
      parentPhone: "9000000000",
      parentEmail: "sanjay@gmail.com"
    });
    console.log("Seeded Student: aarav@school.com / Student@123");

    console.log("=== AUTO-SEEDING COMPLETED SUCCESSFULLY ===");
  } catch (error) {
    console.error("Auto-seeding error:", error);
  }
};
