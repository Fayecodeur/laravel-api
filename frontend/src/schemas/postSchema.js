import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string()
    .min(1, "Le titre est requis")
    .min(3, "Minimum 3 caractères"),

  description: z
    .string()
    .min(1, "La description est requise")
    .min(5, "Minimum 5 caractères"),
});
