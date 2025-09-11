import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("lutfen gecerli bir email giriniz")
    .nonempty("email girmek zorunludur"),
  password: z
    .string()
    .min(8, "sifre en az 8 karakter olmalidir")
    .nonempty("sifre girmek zorunludur"),
});
export type loginFormData = z.infer<typeof loginSchema>;
