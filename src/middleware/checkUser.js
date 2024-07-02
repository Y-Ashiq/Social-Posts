import userSchema from "../database/user.model.js";
import bcrypt from "bcrypt";

export const cehckUser = async (req, res, next) => {
  let { email } = req.body;

  let isExist = await userSchema.findOne({ where: { email } });

  if (isExist) {
    res.json({ message: " this email is already exist" });
  } else {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    next();
  }
};
