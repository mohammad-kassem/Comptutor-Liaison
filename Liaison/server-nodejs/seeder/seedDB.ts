import { connectDB, discconectDB } from "../config/db";
import { seedAdmins } from "./seedAdmins";
import { seedRoles } from "./seedRoles";

(async () => {
  try {
    await connectDB();
    await seedRoles();
    await seedAdmins();
    await discconectDB();
    console.log("Database seeded successfully");
  } catch (err) {
    console.log(err);
  }
})();
