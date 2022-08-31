import { Response } from "express";
import { handleValidationError } from "../../error-handeling/dataValidation";
import { handleDuplicateFieldsError } from "../../error-handeling/duplicateUsers";
import { handleUnexpectedError } from "../../error-handeling/unexcpectedError";
import Role from "../../model/role";
import User from "../../model/user";
import { compareHash } from "../../utility/hashPass";

export const addUser = async (body: any, hashPassword: string) => {
  const role = await Role.findOne({ role: "user" });
  const { fname, lname, email } = body;

  const user = new User({
    fname,
    lname,
    email,
    password: hashPassword,
    role: role?._id,
  });

  role?.users.push(user._id);
  await role?.save();
  
  return await user.save();
};
