// /pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from "next";

// Mock user data
const mockUser = {
  email: "user@example.com",
  password: "password123",
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (email === mockUser.email && password === mockUser.password) {
      return res
        .status(200)
        .json({ message: "Login successful", user: mockUser });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
