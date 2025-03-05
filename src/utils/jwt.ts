import jwt from "jsonwebtoken";
import config from "../config/env";
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = config;

export const generateAccessToken = (userId: string | number) => {
  return jwt.sign({ userId }, ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
};
export const generateRefreshToken = (userId: string | number) => {
  return jwt.sign({ userId }, REFRESH_TOKEN_SECRET, { expiresIn: "1h" });
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, ACCESS_TOKEN_SECRET);
};
export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, REFRESH_TOKEN_SECRET);
};
