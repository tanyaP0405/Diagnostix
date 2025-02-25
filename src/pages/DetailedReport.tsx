
import { useState, useEffect } from "react";
import { FileText, Download, Printer } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import PatientInfo from "./detailed-report/components/PatientInfo";
import MedicalHistory from "./detailed-report/components/MedicalHistory";
import ImageAnalysis from "./detailed-report/components/ImageAnalysis";
import Prescription from "./detailed-report/components/Prescription";
import Recommendations from "./detailed-report/components/Recommendations";

const DetailedReport = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [patientData, setPatientData] = useState({
    name: "John Doe",
    age: 45,
    gender: "Male",
    medicalHistory: "Hypertension, Type 2 Diabetes",
    symptoms: ["Persistent cough", "Fatigue", "Shortness of breath"],
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (location.state?.patientData) {
      setPatientData(location.state.patientData);
      setSelectedImage(location.state.selectedImage);
      toast.success("Report generated successfully!");
    }
  }, [location.state]);

  const handlePrint = () => {
    window.print();
    toast.success("Printing report...");
  };

  const handleDownload = () => {
    toast.success("Downloading report...");
  };

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-up print:animate-none">
        <div className="text-center space-y-4">
          <h1 className="section-title text-3xl md:text-4xl text-medical-800 font-bold">
            Detailed Diagnostic Report
          </h1>
          <p className="text-gray-600 text-lg">Comprehensive analysis and recommendations</p>
          
          <div className="flex justify-center space-x-4 print:hidden">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-medical-50 text-medical-600 hover:bg-medical-100 transition-colors"
            >
              <Printer className="h-4 w-4" />
              <span>Print Report</span>
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-medical-50 text-medical-600 hover:bg-medical-100 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 md:p-8 space-y-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <PatientInfo
            name={patientData.name}
            age={patientData.age}
            gender={patientData.gender}
          />
          
          <MedicalHistory
            medicalHistory={patientData.medicalHistory}
            symptoms={patientData.symptoms}
          />
          
          <ImageAnalysis selectedImage={selectedImage} />
          
          <Prescription />
          
          <Recommendations />
        </div>

        <div className="flex justify-center print:hidden">
          <button
            onClick={() => navigate("/results")}
            className="text-medical-600 hover:text-medical-700 transition-colors"
          >
            <span className="inline-flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Back to Results</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedReport;
