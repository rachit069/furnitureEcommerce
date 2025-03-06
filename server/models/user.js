import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Role from "./role.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      // Change role to roleId
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2, // Assuming 2 is 'user'
      references: {
        model: Role,
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  }
);

User.belongsTo(Role, { foreignKey: "roleId" }); // Change foreignKey to roleId

export default User;
