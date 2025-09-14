"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type PatientCardProps = {
  title: string;
  name: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
};
export default function PatientCard({
  title,
  name,
  lastName,
  age,
  gender,
  email,
  phone,
}: PatientCardProps) {
  const currentTab = useSelector((state: RootState) => state.tab.currentTab);

  return (
    <Card className="w-[300px] shadow-md border rounded-xl">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-center">
          المريض {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div>
          <p className="flex gap-2">
            <span className="font-bold">الاسم:</span>
            {name}
          </p>
        </div>
        <div>
          <p className="flex gap-2">
            <span className="font-bold">الكنية:</span>
            {lastName}
          </p>
        </div>
        <div>
          <p className="flex gap-2">
            <span className="font-bold">العمر:</span>
            {age}
          </p>
        </div>
        <div>
          <p className="flex gap-2">
            <span className="font-bold">الجنس:</span>
            {gender}
          </p>
        </div>
        <div>
          <p className="flex gap-2">
            <span className="font-bold">البريد الإلكتروني:</span>
            {email}
          </p>
        </div>
        <div>
          <p className="flex gap-2">
            <span className="font-bold">رقم الهاتف:</span>
            <span dir="ltr">{phone}</span>
          </p>
        </div>
        <Button className="mt-4 w-full">اضف {currentTab}</Button>
      </CardContent>
    </Card>
  );
}
