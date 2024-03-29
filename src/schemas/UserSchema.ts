import { z } from "zod";

const userSchema = z.object({
  username: z
    .string()
    .nonempty("this field is required")
    .min(3, "enter at least 3 characters"),
  email: z
    .string()
    .nonempty("this field is required")
    .email("this is not a valid email"),
  password: z
    .string()
    .regex(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$",
      ),
      "try something else",
    ),
  confirmPassword: z
    .string()
    .regex(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$",
      ),
      "try something else",
    ),
});

export default userSchema;
