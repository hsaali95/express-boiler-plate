import { Request, Response } from "express";
import AuthService from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await AuthService.register(email, password);
    res.status(201).json({ token });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await AuthService.login(email, password);
    res.json({ token });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
