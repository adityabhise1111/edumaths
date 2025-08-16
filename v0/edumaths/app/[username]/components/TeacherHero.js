"use client";
import Image from "next/image";
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  AcademicCapIcon,
  StarIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

const TeacherHero = ({ teacher }) => {
  return (
    <section className="relative py-20">
      {/* Cover Image Background */}
      <div className="absolute inset-0">
        {teacher.coverPicture ? (
          <Image
            src={teacher.coverPicture}
            alt={`${teacher.name} cover`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800"></div>
        )}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Picture */}
          <div className="mb-8">
            {teacher.profilePicture ? (
              <Image
                src={teacher.profilePicture}
                alt={teacher.name}
                width={150}
                height={150}
                className="mx-auto rounded-full border-4 border-white shadow-xl"
              />
            ) : (
              <div className="mx-auto w-36 h-36 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                <AcademicCapIcon className="w-16 h-16 text-white" />
              </div>
            )}
          </div>

          {/* Teacher Info */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {teacher.name}
          </h1>
          
          {teacher.orgname && (
            <h2 className="text-xl md:text-2xl text-indigo-200 mb-6 font-medium">
              {teacher.orgname}
            </h2>
          )}

          {teacher.description && (
            <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              {teacher.description}
            </p>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <UserGroupIcon className="w-8 h-8 text-white mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-indigo-200">Students</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <AcademicCapIcon className="w-8 h-8 text-white mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-indigo-200">Years Experience</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
              <StarIcon className="w-8 h-8 text-white mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">4.9</div>
              <div className="text-indigo-200">Rating</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white">
            {teacher.address && (
              <div className="flex items-center space-x-2">
                <MapPinIcon className="w-5 h-5" />
                <span>{teacher.address}</span>
              </div>
            )}
            {teacher.phone && (
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5" />
                <span>{teacher.phone}</span>
              </div>
            )}
            {teacher.email && (
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="w-5 h-5" />
                <span>{teacher.email}</span>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg transform hover:scale-105">
              Enroll in Classes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherHero;
