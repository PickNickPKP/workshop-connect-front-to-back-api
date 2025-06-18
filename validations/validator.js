//Validate with yup
import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string().email("Email is incorrect").required("Email is required"),
  name: string().min(3, "name more than 3 "),
  password: string().min(6, "Password more than 6 "),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Confirm Password incorrect"
  ),
});

export const loginSchema = object({
  email: string().email("Email is incorrect").required("Email is required"),
  password: string().min(6, "Password more than 6 "),
});

export const validate = (schema) => async (req, res, next) => {
  //code body
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    // console.log(error);
    const errMsg = error.errors.map((item) => item);
    // console.log(errMsg)
    const errTxt = errMsg.join(",");
    // console.log(errTxt)
    const mergeErr = new Error(errTxt)
    
    next(mergeErr);
  }
};