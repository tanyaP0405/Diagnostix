
import { Link } from "react-router-dom";
import { Activity, FileText, Home, Upload, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-medical-600" />
            <span className="text-xl font-semibold">Diagnostix</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" icon={<Home className="h-4 w-4" />} text="Home" />
            <NavLink to="/patient-input" icon={<User className="h-4 w-4" />} text="Patient Info" />
            <NavLink to="/upload-images" icon={<Upload className="h-4 w-4" />} text="Upload" />
            <NavLink to="/results" icon={<FileText className="h-4 w-4" />} text="Results" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 text-sm text-gray-600 hover:text-medical-600 transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;
