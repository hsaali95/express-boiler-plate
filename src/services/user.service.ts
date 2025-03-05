import User from "../models/user";

class UserService {
  static async getAllUsers() {
    return await User.findAll();
  }
  static async createUser(data: { email: string; password: string }) {
    return await User.create(data);
  }
}
export default UserService;
