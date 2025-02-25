
import React from "react";

const Recommendations = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-medical-700">Recommendations</h2>
      <div className="space-y-3 p-4 bg-medical-50/50 rounded-xl">
        <p className="text-gray-800">
          Based on the analysis of symptoms and imaging results:
        </p>
        <ul className="space-y-2 text-gray-800">
          <li className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-medical-500"></span>
            <span>Schedule follow-up appointment in 2 weeks</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-medical-500"></span>
            <span>Monitor blood pressure daily</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-medical-500"></span>
            <span>Continue current medication regimen</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Recommendations;
