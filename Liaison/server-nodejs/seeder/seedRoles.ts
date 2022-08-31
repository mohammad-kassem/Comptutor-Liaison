import { rolesData } from "../data/roles";
import Role from "../model/role";

export const seedRoles = async () => {
  for (const role of rolesData) {
    const newRole = new Role(role);
    await newRole.save();
  }
};
