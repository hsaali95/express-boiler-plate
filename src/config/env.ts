const dotenv = require("dotenv").config();

const config = {
  POSTGRESQL_CONNECTION_STRING: process.env.POSTGRESQL_CONNECTION_STRING,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "",
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || "",
};
export default config;
