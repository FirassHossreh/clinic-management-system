'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';
import { addPatientSchema, AddPatientFormData } from '../validations/add-patien-modal-validation';

const genderOptions = [
  { value: 'male', label: 'ذكر' },
  { value: 'female', label: 'أنثى' },
];

interface AddPatientModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddPatientModal({ open, onOpenChange }: AddPatientModalProps) {
  const [selectedGender, setSelectedGender] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AddPatientFormData>({
    resolver: zodResolver(addPatientSchema),
    defaultValues: {
      name: '',
      surname: '',
      age: 0,
      gender: '',
      email: '',
      phoneNumber: '',
    },
  });

  const onSubmit = (data: AddPatientFormData) => {
    console.log('Patient data:', data);
    reset();
    setSelectedGender('');
    onOpenChange(false);
  };

  const handleCancel = () => {
    reset();
    setSelectedGender('');
    onOpenChange(false);
  };

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
    setValue('gender', gender, { shouldValidate: true });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[425px] text-right [&>button]:left-4 [&>button]:right-auto"
        dir="rtl"
      >
        <DialogHeader>
          <DialogTitle className="text-right">إضافة مريض جديد</DialogTitle>
          <DialogDescription className="text-right">
            أدخل بيانات المريض الجديد في النموذج أدناه
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">الاسم</Label>
              <Input id="name" type="text" {...register('name')} placeholder="أدخل الاسم" />
              {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="surname">الاسم الأخير</Label>
              <Input
                id="surname"
                type="text"
                {...register('surname')}
                placeholder="أدخل الاسم الأخير"
              />
              {errors.surname && <p className="text-sm text-red-500">{errors.surname.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">العمر</Label>
              <Input
                id="age"
                type="number"
                {...register('age', { valueAsNumber: true })}
                placeholder="أدخل العمر"
              />
              {errors.age && <p className="text-sm text-red-500">{errors.age.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">الجنس</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between" type="button">
                    {selectedGender
                      ? genderOptions.find((option) => option.value === selectedGender)?.label
                      : 'اختر الجنس'}
                    <ChevronDownIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {genderOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.value}
                      onClick={() => handleGenderSelect(option.value)}
                    >
                      {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              {errors.gender && <p className="text-sm text-red-500">{errors.gender.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="أدخل البريد الالكتروني"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">رقم الهاتف</Label>
            <Input id="phoneNumber" type="tel" {...register('phoneNumber')} />
            {errors.phoneNumber && (
              <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
            )}
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleCancel}>
              إلغاء
            </Button>
            <Button type="submit">إضافة المريض</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
