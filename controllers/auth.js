import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    //code body
    // //TODO
    //0.validate
    // // 1.check body
    // 2.check Email in DB
    // 3.Ecrypt Password => bryptjs
    // 4.Save to DB => Prisma
    // 5.Response

    //Step 1 check body
    console.log(req.body);
    const { email, name, password } = req.body;

    //Step 2 Check Email in DB
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    console.log(user);
    if (user) {
      createError(400, "Email already exist!!!");
    }

    //Step3 install bcrypt
    const hashPassword = bcrypt.hashSync(password, 10);
    console.log(hashPassword);

    //Step4 Insert to DB
    const result = await prisma.user.create({
      data: {
        email,
        name,
        password: hashPassword,
      },
    });

    res.json({ message: `Register ${result.name} Success` });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    //code body
    //TODO
    // 1.Validate Body
    // 2.Check body
    // 3.check Email in DB
    // 4.check pwd
    // 5.Create token
    // 6.Response

    //Step2 check body
    const { email, password } = req.body;

    //Step3 check Email
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    console.log(user);

    if (!user) {
      createError(400, "Email or Password is invalid");
    }

    //Step 4 check password
    const checkPassword = bcrypt.compareSync(password, user.password);

    //pattern ผิดจะ ไม่ show ไป show ที่ validator
    if (!checkPassword) {
      createError(400, "Email or Password is invalid2");
    }

    //Step 5 Generate Token
    const payload = {
      id: user.id,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1d" });

    res.json({ 
      message: `Welcome back ${user.name}`,
      payload: payload,
      token: token,
     });
  } catch (error) {
    next(error);
  }
};
