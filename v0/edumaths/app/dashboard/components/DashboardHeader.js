"use client";
import { signOut } from "next-auth/react";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const DashboardHeader = ({ session }) => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                EduMaths
              </h1>
            </div>
            <div className="hidden md:block ml-6">
              <div className="text-sm text-gray-600">
                Welcome back, {session?.user?.name || "Teacher"}!
              </div>
            </div>
          </div>

          {/* Right side - Notifications and Profile */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-full">
              <BellIcon className="h-6 w-6" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <div className="flex items-center space-x-3">
                {session?.user?.image ? (
                  <Image
                    className="h-8 w-8 rounded-full"
                    src={session.user.image}
                    alt={session.user.name}
                    width={32}
                    height={32}
                  />
                ) : (
                  <UserCircleIcon className="h-8 w-8 text-gray-400" />
                )}
                <div className="hidden md:block">
                  <div className="text-sm font-medium text-gray-900">
                    {session?.user?.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {session?.user?.email}
                  </div>
                </div>
              </div>
            </div>

            {/* Sign Out Button */}
            <button
              onClick={() => signOut()}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
