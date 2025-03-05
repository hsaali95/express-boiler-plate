import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
class User extends Model {
  public id!: number;
  public email!: string;
  public password?: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize,
    timestamps: true,
    freezeTableName: true,
  }
);

export default User;

(async function syncUserTable() {
  try {
    await User.sync({ force: true });
    console.log("The User table has been recreated successfully!");
  } catch (error) {
    console.error("Error occurred while syncing the User table:", error);
  } finally {
    console.log("Database connection closed.");
  }
})();
