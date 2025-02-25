
import React from "react";
import { FileText } from "lucide-react";

const Prescription = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-medical-700">Prescription</h2>
      <div className="p-4 bg-medical-50/50 rounded-xl space-y-4">
        <div className="flex items-center space-x-2 text-medical-600">
          <FileText className="h-5 w-5" />
          <span className="font-medium">Recommended Medications</span>
        </div>
        <ul className="space-y-2 text-gray-800">
          <li className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-medical-500"></span>
            <span>Amoxicillin 500mg - 3 times daily</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-medical-500"></span>
            <span>Paracetamol 500mg - As needed for fever</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Prescription;
