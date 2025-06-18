import { createError } from "../utils/createError.js";

export const listUser = (req, res, next) => {
  try {
    if (true) {
      createError(400, "Email already exist!!!");
    } else {
      throw new Error("Password is Invalid");
    }
    res.json({ message: "This is list All User" });
  } catch (error) {
    next(error);
  }
};

export const readUser = (req, res) => {
  res.json({ message: "This is read User" });
};

export const postUser = (req, res) => {
  res.json({ message: "This is post User" });
};

export const updateRoleUser = (req, res) => {
  res.json({ message: "This is Update Role User" });
};

export const deleteUser = (req, res) => {
  res.json({ message: "This is Delete User" });
};
