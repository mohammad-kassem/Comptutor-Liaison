require("dotenv").config();
import { createHash } from "../utility/hashPass";
const adminPassword = process.env.ADMIN_PASSWORD || "123456"; // for testing only
import { adminsData } from "../data/admins";
import Role from "../model/role";
import User from "../model/user";

export const seedAdmins = async (): Promise<void> => {
  var role = await Role.findOne({ role: "admin" });
  for (const admin of adminsData) {
    const newAdmin = new User({
      ...admin,
      password: await createHash(adminPassword),
      role: role?._id,
    });
    await newAdmin.save();
    role?.users.push(newAdmin._id);
    await role?.save();
  }
};
