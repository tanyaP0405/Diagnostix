
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Upload, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const ImageUpload = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const patientData = location.state?.patientData;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage) {
      toast.error("Please select an image to upload");
      return;
    }
    
    navigate("/results", {
      state: {
        patientData,
        selectedImage
      }
    });
    toast.success("Image uploaded successfully!");
  };

  return (
    <div className="page-container">
      <div className="max-w-2xl mx-auto space-y-8 animate-fade-up">
        <div className="text-center space-y-4">
          <h1 className="section-title">Upload Medical Images</h1>
          <p className="text-gray-600">Please upload the relevant medical images for analysis</p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
              <label className="flex flex-col items-center justify-center cursor-pointer space-y-4">
                <Upload className="h-8 w-8 text-medical-600" />
                <span className="text-sm text-gray-600">Click to upload or drag and drop</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            {selectedImage && (
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={selectedImage}
                  alt="Selected medical image"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>

          <button type="submit" className="diagnose-button w-full">
            Begin Analysis
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImageUpload;
