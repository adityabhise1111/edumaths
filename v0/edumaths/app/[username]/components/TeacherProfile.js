"use client";
import Image from "next/image";
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  AcademicCapIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";
import TeacherHero from "./TeacherHero";
import ClassesSection from "./ClassesSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

const TeacherProfile = ({ teacher }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                EduMaths
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">
                About
              </a>
              <a href="#classes" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Classes
              </a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Contact
              </a>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
                Join Classes
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <TeacherHero teacher={teacher} />

      {/* About Section */}
      <AboutSection teacher={teacher} />

      {/* Classes Section */}
      <ClassesSection teacher={teacher} />

      {/* Contact Section */}
      <ContactSection teacher={teacher} />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              EduMaths
            </h3>
            <p className="text-gray-600 mb-4">
              Empowering students through innovative abacus and mental math education
            </p>
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
              <span>© 2025 EduMaths. All rights reserved.</span>
              <span>•</span>
              <span>Teacher: {teacher.name}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeacherProfile;
