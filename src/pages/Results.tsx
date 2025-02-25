
import { Link, useLocation } from "react-router-dom";
import { FileText, AlertTriangle, ArrowRight } from "lucide-react";

const Results = () => {
  const location = useLocation();
  const { patientData, selectedImage } = location.state || {};

  // Mock results data with actual patient name
  const results = {
    confidence: 89,
    findings: [
      {
        area: "Upper Right Quadrant",
        observation: "Slight density variation detected",
        confidence: 92,
      },
      {
        area: "Lower Left Region",
        observation: "Normal tissue composition",
        confidence: 95,
      },
    ],
    recommendations: [
      "Further examination recommended for upper right quadrant",
      "Follow-up scan in 6 months",
    ],
  };

  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
        <div className="text-center space-y-4">
          <h1 className="section-title">Diagnostic Results</h1>
          <p className="text-gray-600">AI-assisted analysis complete</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Findings */}
          <div className="glass-card rounded-2xl p-6 space-y-6">
            <h2 className="font-semibold flex items-center gap-2">
              <FileText className="h-5 w-5 text-medical-600" />
              Key Findings
            </h2>
            
            <div className="space-y-4">
              {results.findings.map((finding, index) => (
                <div key={index} className="p-4 bg-white/50 rounded-lg space-y-2">
                  <h3 className="font-medium">{finding.area}</h3>
                  <p className="text-sm text-gray-600">{finding.observation}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Confidence</span>
                    <span className="text-medical-600 font-medium">
                      {finding.confidence}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="glass-card rounded-2xl p-6 space-y-6">
            <h2 className="font-semibold flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-medical-600" />
              Recommendations
            </h2>
            
            <div className="space-y-4">
              {results.recommendations.map((recommendation, index) => (
                <div key={index} className="p-4 bg-white/50 rounded-lg">
                  <p className="text-sm text-gray-600">{recommendation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link 
            to="/detailed-report" 
            state={{ patientData, selectedImage }}
            className="diagnose-button"
          >
            View Detailed Report
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Results;
