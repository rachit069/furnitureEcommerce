import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user.js';

dotenv.config();

// User Signup
export const signup = async (req, res) => {
  try {
    const { username, email, password, roleId } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      roleId,
    });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};
  
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Fix Role Association
    const user = await User.findOne({ 
      where: { email },
      include: { model: Role, as: 'role' } // Ensure Role association is included
    });
    console.log("🔍 User fetched from DB:", user);
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });


    // Generate JWT Token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role.name }, // Use role name
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Login successful', token, user });
  } catch (error) {
    console.error(' Login Error:', error);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};