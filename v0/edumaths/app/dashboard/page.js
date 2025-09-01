"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardSidebar from "./components/DashboardSidebar";
import DashboardHeader from "./components/DashboardHeader";
import Overview from "./components/Overview";
import StudentsSection from "./components/StudentsSection";
import ExamsSection from "./components/ExamsSection";
import QuestionsSection from "./components/QuestionsSection";
import SettingsSection from "./components/SettingsSection";
import { getClassIdByTeacherId } from "@/lib/actions/userActions";



const DashboardPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("overview");


  // Redirect to /register if not authenticated (client-side only)
  React.useEffect(  () => {
    if (session === null) {
      router.push("/register/teacher");
    }

    async (params) => {
      const classId = await getClassIdByTeacherId(session.user.id);
      session.user.classId = classId;
    }
    
    
  }, [session, router]);
  if (!session) return null;

  const renderActiveSection = () => {
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "students":
        return <StudentsSection />;
      case "exams":
        return <ExamsSection />;
      case "questions":
        return <QuestionsSection />;
      case "settings":
        return <SettingsSection />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* Dashboard Header */}
      <DashboardHeader session={session} />
      
      {/* Sidebar */}
      <DashboardSidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      
      {/* Main Content */}
      <main className="ml-64 pt-16 p-6">
        <div className="max-w-7xl mx-auto">
          {renderActiveSection()}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;