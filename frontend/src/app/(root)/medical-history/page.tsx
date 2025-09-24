"use client";
import PatientList from "@/components/patient-list";

export default function MedicalHistory() {
  return (
    <>
      <h1>
        <PatientList TabType="التاريخ الطبي" />
      </h1>
    </>
  );
}
