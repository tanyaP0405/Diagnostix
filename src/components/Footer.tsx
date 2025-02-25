
import { Activity } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-lg border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-medical-600" />
            <span className="text-xl font-semibold">Diagnostix</span>
          </div>
          <p className="text-sm text-gray-500 text-center max-w-lg">
            This is a simulated diagnostic tool for demonstration purposes only. Not intended for actual medical use.
          </p>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-medical-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-medical-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-medical-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
