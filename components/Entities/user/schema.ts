import { z } from "zod";

export const registrationFormSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "Must be at least 2 characters.",
    })
    .max(30, {
      message: "Must not be longer than 30 characters.",
    }),
  lastName: z
    .string()
    .min(2, {
      message: "Must be at least 2 characters.",
    })
    .max(30, {
      message: "Must not be longer than 30 characters.",
    }),
  email: z
    .string()
    .email({
      message: "Invalid email format.",
    })
    .min(1, {
      message: "Email is required.",
    })
    .max(254, {
      message: "Email must not exceed 254 characters.",
    }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(30, {
      message: "Password must not be longer than 30 characters.",
    }),
  bio: z
    .string()
    .min(1, {
      message: "A bio is required.",
    })
    .max(500, {
      message: "A bio must not be longer than 500 characters.",
    }),
  profilePic: z.custom<File>((v) => v instanceof File),
  privacySettings: z.boolean(),
  notificationSettings: z.boolean(),
});
