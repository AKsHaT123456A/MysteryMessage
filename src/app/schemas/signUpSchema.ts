import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(5, "Username must be at least 5 characters long")
  .max(20, "Username must be at most 20 characters long")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must contain only alphabets and numbers");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(8, { message: "Please enter a valid password" }),
});
