import User from "../models/user";
import { generateAccessToken } from "../utils/jwt";
import { hashPassword, comparePassword } from "../utils/password";

class AuthService {
  static async register(email: string, password: string) {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) throw new Error("User already exists");

    const hashedPassword = await hashPassword(password);
    const user = await User.create({ email, password: hashedPassword });

    return generateAccessToken(user.id);
  }

  static async login(email: string, password: string) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await comparePassword(password, user.password || "");
    if (!isMatch) throw new Error("Invalid credentials");

    return generateAccessToken(user.id);
  }
}

export default AuthService;
