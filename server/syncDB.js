import sequelize from "./config/database.js";
import User from "./models/user.js";
import Role from "./models/role.js";

const syncDB = async () => {
  try {
    await sequelize.sync({ force: true }); // Drops and recreates tables
    console.log(" Database synchronized successfully.");

    // Insert default roles
    await Role.bulkCreate([{ name: "admin" }, { name: "user" }], {
      ignoreDuplicates: true,
    });
    console.log(" Default roles inserted");
  } catch (error) {
    console.error(" Database sync error:", error);
  } finally {
    await sequelize.close();
  }
};

syncDB();
