
import React from "react";

interface ImageAnalysisProps {
  selectedImage: string | null;
}

const ImageAnalysis = ({ selectedImage }: ImageAnalysisProps) => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-medical-700">Image Analysis Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="font-medium text-medical-600">Analysis Image</h3>
          <div className="relative aspect-square bg-medical-50 rounded-lg overflow-hidden">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Medical Image Analysis"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-sm text-gray-600">
            Uploaded medical image for analysis
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-medium text-medical-600">Detection Metrics</h3>
          <div className="space-y-4 p-4 bg-medical-50/50 rounded-xl">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Clarity Score</span>
                <span className="text-sm font-medium text-medical-700">95%</span>
              </div>
              <div className="w-full bg-medical-100 rounded-full h-2">
                <div className="bg-medical-500 h-2 rounded-full" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Analysis Confidence</span>
                <span className="text-sm font-medium text-medical-700">87%</span>
              </div>
              <div className="w-full bg-medical-100 rounded-full h-2">
                <div className="bg-medical-500 h-2 rounded-full" style={{ width: "87%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageAnalysis;
