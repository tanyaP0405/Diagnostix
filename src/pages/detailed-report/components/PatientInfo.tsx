
import React from "react";

interface PatientInfoProps {
  name: string;
  age: number;
  gender: string;
}

const PatientInfo = ({ name, age, gender }: PatientInfoProps) => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-medical-700">Patient Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-medical-50/50 rounded-xl">
        <div className="space-y-2">
          <p className="text-gray-600">Name</p>
          <p className="font-medium text-lg text-medical-800">{name}</p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600">Age</p>
          <p className="font-medium text-lg text-medical-800">{age} years</p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600">Gender</p>
          <p className="font-medium text-lg text-medical-800">{gender}</p>
        </div>
      </div>
    </section>
  );
};

export default PatientInfo;
