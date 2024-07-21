import {z} from "zod";

export const signInSchema = z.object({
  identifier:z.string(),
  password: z.string().min(8, {message: "Please enter a valid password"}),
});