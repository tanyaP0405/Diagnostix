
import React from "react";

interface MedicalHistoryProps {
  medicalHistory: string;
  symptoms: string[];
}

const MedicalHistory = ({ medicalHistory, symptoms }: MedicalHistoryProps) => {
  return (
    <>
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-medical-700">Medical History</h2>
        <p className="text-gray-800 p-4 bg-medical-50/50 rounded-xl">{medicalHistory}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold text-medical-700">Reported Symptoms</h2>
        <ul className="list-none space-y-2 p-4 bg-medical-50/50 rounded-xl">
          {symptoms.map((symptom, index) => (
            <li key={index} className="flex items-center space-x-2 text-gray-800">
              <span className="h-2 w-2 rounded-full bg-medical-500"></span>
              <span>{symptom}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default MedicalHistory;
