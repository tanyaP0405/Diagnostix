
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { toast } from "sonner";

const PatientInput = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    medicalHistory: "",
    symptoms: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Convert symptoms string to array for consistency
    const processedData = {
      ...formData,
      symptoms: formData.symptoms.split(',').map(s => s.trim()),
    };
    navigate("/upload-images", { state: { patientData: processedData } });
    toast.success("Patient information saved successfully!");
  };

  return (
    <div className="page-container">
      <div className="max-w-2xl mx-auto space-y-8 animate-fade-up">
        <div className="text-center space-y-4">
          <h1 className="section-title">Patient Information</h1>
          <p className="text-gray-600">Please enter the patient's details below</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
          <div className="space-y-4">
            <InputField
              label="Patient Name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            
            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Age"
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                required
              />
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Gender</label>
                <select
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-medical-600"
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Medical History</label>
              <textarea
                className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-medical-600"
                rows={4}
                value={formData.medicalHistory}
                onChange={(e) => setFormData({ ...formData, medicalHistory: e.target.value })}
                placeholder="Enter relevant medical history..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Symptoms</label>
              <textarea
                className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-medical-600"
                rows={4}
                value={formData.symptoms}
                onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                placeholder="Enter symptoms, separated by commas..."
                required
              />
            </div>
          </div>

          <button type="submit" className="diagnose-button w-full">
            Continue to Image Upload
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, type, value, onChange, required = false }: { 
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => (
  <div className="space-y-2">
    <label className="text-sm font-medium">{label}</label>
    <input
      type={type}
      className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-medical-600"
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default PatientInput;
