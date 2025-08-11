'use client'; // This directive marks the component as a Client Component

import React from 'react';


// Main Landing Page component
export default function App() {
  return (
    <LandingPage />
  );
}

function LandingPage() {
  // Function to handle the "Get Started" button click
  const handleGetStartedClick = () => {
    // Redirect to the registration page
    window.location.href = '/register';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-center transform transition-all duration-500 hover:scale-[1.01] hover:shadow-3xl">
        {/* Hero Section */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Empower Your Abacus Teaching
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
            with Seamless Digital Tools
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Streamline class management, engage students with interactive exams, and grow your abacus academy effortlessly.
          Our platform is designed by teachers, for teachers.
        </p>

        {/* Call to Action Button */}
        <button
          onClick={handleGetStartedClick}
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full shadow-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          Get Started
          {/* Using a simple SVG icon for a modern look */}
          <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}
