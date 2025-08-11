'use client'; // This directive marks the component as a Client Component

import React, { useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
// import { findUserByEmail } from '../api/users/route';



// Main Register Page component
export default function RegisterPage() {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        document.title = "Login - EduMaths"

        if (session) {
            // If user is already logged in, redirect to dashboard or home page
            router.push('/details'); // Adjust the path as needed
        }
    }, [session, router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 md:p-10 text-center transform transition-all duration-500 hover:scale-[1.01] hover:shadow-3xl">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Join Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Abacus Community
            </span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Start your journey with the best abacus teaching platform
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-4 mb-8">
          {/* Google Sign Up */}
          <button
            onClick={() => signIn("google")}
            className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          {/* GitHub Sign Up */}
          <button
            onClick={() => signIn("github")}
            className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl shadow-sm bg-gray-900 text-white font-medium hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Continue with GitHub
          </button>

          {/* Facebook Sign Up */}
          <button
            onClick={() => signIn("facebook")}
            className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl shadow-sm bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Continue with Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">Quick & Secure Registration</span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-purple-600 hover:text-purple-500 transition-colors">
              Sign in here
            </a>
          </p>
          <p className="text-xs text-gray-500">
            By signing up, you agree to our{' '}
            <a href="/terms" className="text-purple-600 hover:text-purple-500">Terms of Service</a>
            {' '}and{' '}
            <a href="/privacy" className="text-purple-600 hover:text-purple-500">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

// Function to handle social login
function handleSocialLogin(provider) {
  console.log(`Initiating ${provider} login...`);
  
  // In a real application, you would integrate with NextAuth.js or similar
  // For now, we'll just log the action
  switch (provider) {
    case 'google':
      console.log('Redirecting to Google OAuth...');
      // Example: signIn('google', { callbackUrl: '/dashboard' });
      break;
    case 'github':
      console.log('Redirecting to GitHub OAuth...');
      // Example: signIn('github', { callbackUrl: '/dashboard' });
      break;
    case 'facebook':
      console.log('Redirecting to Facebook OAuth...');
      // Example: signIn('facebook', { callbackUrl: '/dashboard' });
      break;
    default:
      console.log('Unknown provider');
  }
}