
import { Link } from "react-router-dom";
import { Activity, ArrowRight, Brain, FileText, Upload } from "lucide-react";

const Index = () => {
  return (
    <div className="page-container">
      <div className="max-w-4xl mx-auto space-y-16 animate-fade-up">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-medical-50 text-medical-600">
            <Activity className="h-6 w-6" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Intelligent Medical Diagnostics
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering healthcare professionals with AI-driven diagnostic assistance for improved patient care.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/patient-input" className="diagnose-button">
              Start Diagnosis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain className="h-8 w-8 text-medical-600" />}
            title="AI Analysis"
            description="Advanced image processing and symptom analysis powered by artificial intelligence."
          />
          <FeatureCard
            icon={<Upload className="h-8 w-8 text-medical-600" />}
            title="Easy Upload"
            description="Seamlessly upload and manage medical images for instant analysis."
          />
          <FeatureCard
            icon={<FileText className="h-8 w-8 text-medical-600" />}
            title="Detailed Reports"
            description="Generate comprehensive diagnostic reports with actionable insights."
          />
        </section>

        {/* How It Works */}
        <section className="text-center space-y-8">
          <h2 className="section-title">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Step number={1} title="Patient Information" description="Enter patient details and symptoms" />
            <Step number={2} title="Image Upload" description="Upload relevant medical images" />
            <Step number={3} title="Get Results" description="Receive AI-assisted diagnostic insights" />
          </div>
        </section>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="glass-card rounded-2xl p-6 card-hover">
    <div className="space-y-4">
      {icon}
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const Step = ({ number, title, description }: { number: number; title: string; description: string }) => (
  <div className="space-y-4">
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-medical-50 text-medical-600 font-semibold">
      {number}
    </div>
    <h3 className="font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default Index;
