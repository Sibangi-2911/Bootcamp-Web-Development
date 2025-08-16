import { z } from "zod";

const passwordValidation =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const SignupSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First Name must be at least 3 characters." })
    .max(100, { message: "First name cannot be more than 100 characters." }),

  lastName: z
    .string()
    .max(100, { message: "Last name cannot be more than 100 characters." })
    .optional(),

  email: z.string().email({ message: "Please enter a valid email address." }),

  password: z.string().regex(passwordValidation, {
    message:
      "Password must be at least 8 characters and include at least one number, one uppercase letter, one lowercase letter, and one special character.",
  }),
});
