import config from "./env";

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(config.POSTGRESQL_CONNECTION_STRING, {
  dialect: "postgres",
});

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
dbConnect();

export default sequelize;
