import {z} from "zod";

export const MessageSchema = z.object({
    constent:z
    .string()
    .min(10, "Content must be at least 10 characters long")
    .max(300, "Content must be at most 300 characters long")

})