"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PatientCard() {
  return (
    <Card className="w-[300px] shadow-md border rounded-xl">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-center">
          المريض فراس حصرية
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div>
          <p className="flex gap-2">
            <span className="font-bold">الاسم:</span>فراس
          </p>
        </div>
        <div>
          <p className="flex gap-2">
            <span className="font-bold">الكنية:</span>حصرية
          </p>
        </div>
        <div>
          <p className="flex gap-2">
            <span className="font-bold">العمر:</span>25
          </p>
        </div>
        <div>
          <p className="flex gap-2">
            <span className="font-bold">الجنس:</span>ذكر
          </p>
        </div>
        <div>
          <p className="flex gap-2">
            <span className="font-bold">البريد الإلكتروني:</span>
            firass@example.com
          </p>
        </div>
        <div>
          <p className="flex gap-2">
            <span className="font-bold">رقم الهاتف:</span>
            <span dir="ltr">+90 535 420 9309</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
