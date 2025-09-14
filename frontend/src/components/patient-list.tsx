"use client";
import PatientCard from "./patient-card";

const patients = [
  {
    id: 1,
    name: "فراس",
    lastname: "حصرية",
    age: 25,
    gender: "ذكر",
    email: "firass@example.com",
    phone: "+90 535 420 9309",
  },
  {
    id: 2,
    name: "محمد",
    lastname: "علي",
    age: 30,
    gender: "ذكر",
    email: "moh@example.com",
    phone: "+90 500 123 4567",
  },
  {
    id: 2,
    name: "محمد",
    lastname: "علي",
    age: 30,
    gender: "ذكر",
    email: "moh@example.com",
    phone: "+90 500 123 4567",
  },
  {
    id: 2,
    name: "محمد",
    lastname: "علي",
    age: 30,
    gender: "ذكر",
    email: "moh@example.com",
    phone: "+90 500 123 4567",
  },
  {
    id: 2,
    name: "محمد",
    lastname: "علي",
    age: 30,
    gender: "ذكر",
    email: "moh@example.com",
    phone: "+90 500 123 4567",
  },
  {
    id: 2,
    name: "محمد",
    lastname: "علي",
    age: 30,
    gender: "ذكر",
    email: "moh@example.com",
    phone: "+90 500 123 4567",
  },
  {
    id: 2,
    name: "محمد",
    lastname: "علي",
    age: 30,
    gender: "ذكر",
    email: "moh@example.com",
    phone: "+90 500 123 4567",
  },
  {
    id: 2,
    name: "محمد",
    lastname: "علي",
    age: 30,
    gender: "ذكر",
    email: "moh@example.com",
    phone: "+90 500 123 4567",
  },
];

export default function PatientList() {
  return (
    <div className="flex gap-2 flex-wrap justify-between ">
      {patients.map((element, index) => {
        return (
          <div key={index}>
            <PatientCard
              title={element.name + " " + element.lastname}
              name={element.name}
              lastName={element.lastname}
              age={element.age}
              gender={element.gender}
              email={element.email}
              phone={element.phone}
            />
          </div>
        );
      })}
    </div>
  );
}
