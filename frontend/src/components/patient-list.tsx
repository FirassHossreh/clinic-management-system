'use client';
import PatientCard from './patient-card';

const patients = [
  {
    id: 1,
    name: 'فراس',
    lastname: 'حصرية',
    age: 25,
    gender: 'ذكر',
    email: 'firass@example.com',
    phone: '+90 535 420 9309',
  },
  {
    id: 2,
    name: 'محمد',
    lastname: 'علي',
    age: 30,
    gender: 'ذكر',
    email: 'moh@example.com',
    phone: '+90 500 123 4567',
  },
  {
    id: 2,
    name: 'محمد',
    lastname: 'علي',
    age: 30,
    gender: 'ذكر',
    email: 'moh@example.com',
    phone: '+90 500 123 4567',
  },
  {
    id: 2,
    name: 'محمد',
    lastname: 'علي',
    age: 30,
    gender: 'ذكر',
    email: 'moh@example.com',
    phone: '+90 500 123 4567',
  },
  {
    id: 2,
    name: 'محمد',
    lastname: 'علي',
    age: 30,
    gender: 'ذكر',
    email: 'moh@example.com',
    phone: '+90 500 123 4567',
  },
  {
    id: 2,
    name: 'محمد',
    lastname: 'علي',
    age: 30,
    gender: 'ذكر',
    email: 'moh@example.com',
    phone: '+90 500 123 4567',
  },
  {
    id: 2,
    name: 'محمد',
    lastname: 'علي',
    age: 30,
    gender: 'ذكر',
    email: 'moh@example.com',
    phone: '+90 500 123 4567',
  },
  {
    id: 2,
    name: 'محمد',
    lastname: 'علي',
    age: 30,
    gender: 'ذكر',
    email: 'moh@example.com',
    phone: '+90 500 123 4567',
  },
];

export default function PatientList({ TabType }: { TabType: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {patients.map((element, index) => {
        return (
          <div key={index}>
            <PatientCard
              title={element.name + ' ' + element.lastname}
              name={element.name}
              lastName={element.lastname}
              age={element.age}
              gender={element.gender}
              email={element.email}
              phone={element.phone}
              TabType={TabType}
            />
          </div>
        );
      })}
    </div>
  );
}
