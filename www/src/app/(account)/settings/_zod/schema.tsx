"use client";

import { z } from "zod";

export const profileUpdateSchema = z
  .object({
    username: z.string().min(2).max(50),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
