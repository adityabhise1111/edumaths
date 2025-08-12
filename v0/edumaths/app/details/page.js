"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { findUserByEmail , updateProfile } from "@/lib/actions/userActions";

const Page = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [form, setform] = useState({
    name: "",
    username: "",
    email: "",
    orgname: "",
    address: "",
    phone: "",
    description: "",
    profilePicture: "",
    coverPicture: "",
  });

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getdata = async () => {
    try{
        if (session?.user?.email){
            const userData = await findUserByEmail(session.user.email);
            if (userData) {
                setform({
                  name: userData.name || "",
                  username: userData.username || "",
                  email: userData.email || "",
                  orgname: userData.orgname || "",
                  address: userData.address || "",
                  phone: userData.phone || "",
                  description: userData.description || "",
                  profilePicture: userData.profilePicture || "",
                  coverPicture: userData.coverPicture || "", 
                });
                console.log("User data fetched successfully:", userData);
            }
        }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    document.title = "Profile Details - EduMaths";
    if (!session) {
      router.push("/register");
    } else {
      getdata();
    }
  }, [session, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Add submit logic later
     try {
            const response = await updateProfile(session.user.email, form)
            if (response.success) {
                session.user.name = form.name
                alert("Profile updated successfully" )
                router.push('/home')
            } else {
                console.error("Error updating profile:", response.error);
                throw new Error("Error updating profile" + response.error)
            }
        } catch (error) {
            alert("Error updating profile" + error.message)
        }
    console.log("Form submitted:", form);
    setform(form)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {session ? (
          <>
            {/* Header Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 mb-8 text-center transform transition-all duration-500 hover:shadow-3xl">
              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                  Welcome to Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                    Profile Details
                  </span>
                </h1>
                <p className="text-gray-600 text-lg">
                  Signed in as <span className="font-semibold text-purple-600">{session.user.email}</span>
                </p>
              </div>
              
              <button
                onClick={() => signOut()}
                className="inline-flex items-center justify-center px-6 py-3 border border-red-300 rounded-xl shadow-sm bg-white text-red-600 font-medium hover:bg-red-50 focus:outline-none focus:ring-4 focus:ring-red-200 transition duration-300 ease-in-out transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign Out
              </button>
            </div>

            {/* Profile Form Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 transform transition-all duration-500 hover:shadow-3xl">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Profile Information
                </h2>
                <p className="text-gray-600">
                  Complete your profile to get the most out of EduMaths
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition duration-300"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition duration-300"
                      readOnly
                    />
                  </div>

                  {/* Organization Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      name="orgname"
                      value={form.orgname}
                      onChange={handleChange}
                      placeholder="Enter your organization"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition duration-300"
                    />
                  </div>

                  {/* Username Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      User Name
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      placeholder="Enter your username"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition duration-300"
                    />
                  </div>
                </div>

                {/* Address Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Enter your complete address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition duration-300"
                  />
                </div>

                {/* Description Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    About You
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Tell us about yourself and your teaching experience..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition duration-300 resize-none"
                  />
                </div>

                {/* Profile Pictures Section */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Profile Images
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Profile Picture */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Profile Picture URL
                      </label>
                      <input
                        type="url"
                        name="profilePicture"
                        value={form.profilePicture}
                        onChange={handleChange}
                        placeholder="https://example.com/profile.jpg"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition duration-300"
                      />
                    </div>

                    {/* Cover Picture */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Cover Picture URL
                      </label>
                      <input
                        type="url"
                        name="coverPicture"
                        value={form.coverPicture}
                        onChange={handleChange}
                        placeholder="https://example.com/cover.jpg"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl shadow-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          /* Loading State */
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Loading your profile...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;