import { z } from 'zod';

export const addPatientSchema = z.object({
  name: z.string().nonempty('الاسم مطلوب').min(2, 'الاسم يجب أن يكون على الأقل حرفين'),
  surname: z
    .string()
    .nonempty('الاسم الأخير مطلوب')
    .min(2, 'الاسم الأخير يجب أن يكون على الأقل حرفين'),
  age: z
    .number()
    .min(0, 'العمر يجب أن يكون أكبر من أو يساوي 0')
    .max(120, 'العمر يجب أن يكون أقل من 120'),
  gender: z
    .string()
    .nonempty('الجنس مطلوب')
    .refine((val) => val === 'male' || val === 'female', {
      message: 'الجنس يجب أن يكون ذكر أو أنثى',
    }),
  email: z.string().email('البريد الإلكتروني غير صحيح').optional().or(z.literal('')),
  phoneNumber: z
    .string()
    .nonempty('رقم الهاتف مطلوب')
    .regex(/^[\+]?[0-9\s\-\(\)]{10,}$/, 'رقم الهاتف غير صحيح'),
});

export type AddPatientFormData = z.infer<typeof addPatientSchema>;
