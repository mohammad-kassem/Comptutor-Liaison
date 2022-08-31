const bcrypt = require("bcryptjs");

export const createHash = async (
  password: string,
  saltLength: number = 8
): Promise<string> => {
  const salt = await bcrypt.genSalt(saltLength);
  return await bcrypt.hash(password, salt);
};

export const compareHash = async (
  passwordInput: string,
  passwordDB: string
): Promise<boolean> => {
  return await bcrypt.compare(passwordInput, passwordDB);
};
