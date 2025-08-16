"use client";
import { useState } from "react";
import { 
  DocumentTextIcon, 
  PlusIcon, 
  CalendarIcon,
  ClockIcon,
  UsersIcon,
  TrophyIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  PlayIcon,
  StopIcon
} from "@heroicons/react/24/outline";

const ExamsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Mock exam data
  const exams = [
    {
      id: 1,
      title: "Beginner Abacus Test",
      type: "demo",
      status: "scheduled",
      date: "2024-08-15",
      time: "10:00 AM",
      duration: 30,
      participants: 0,
      maxParticipants: 25,
      questions: 20,
      createdAt: "2024-08-01"
    },
    {
      id: 2,
      title: "Intermediate Level Exam",
      type: "paid",
      status: "active",
      date: "2024-08-13",
      time: "2:00 PM",
      duration: 45,
      participants: 12,
      maxParticipants: 30,
      questions: 25,
      createdAt: "2024-07-25"
    },
    {
      id: 3,
      title: "Advanced Calculation Test",
      type: "paid",
      status: "completed",
      date: "2024-08-10",
      time: "11:00 AM",
      duration: 60,
      participants: 18,
      maxParticipants: 20,
      questions: 30,
      createdAt: "2024-07-20"
    }
  ];

  const filteredExams = exams.filter(exam => {
    if (activeTab === "all") return true;
    return exam.status === activeTab;
  });

  const examStats = {
    total: exams.length,
    scheduled: exams.filter(e => e.status === 'scheduled').length,
    active: exams.filter(e => e.status === 'active').length,
    completed: exams.filter(e => e.status === 'completed').length
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-600';
      case 'active': return 'bg-green-100 text-green-600';
      case 'completed': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getTypeColor = (type) => {
    return type === 'paid' 
      ? 'bg-purple-100 text-purple-600' 
      : 'bg-orange-100 text-orange-600';
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Exam Management
            </h2>
            <p className="text-gray-600">
              Create, schedule, and manage your abacus exams
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Create Exam
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Total Exams</p>
                <p className="text-3xl font-bold text-blue-900">{examStats.total}</p>
              </div>
              <DocumentTextIcon className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-600 text-sm font-medium">Scheduled</p>
                <p className="text-3xl font-bold text-orange-900">{examStats.scheduled}</p>
              </div>
              <CalendarIcon className="h-8 w-8 text-orange-600" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Active</p>
                <p className="text-3xl font-bold text-green-900">{examStats.active}</p>
              </div>
              <PlayIcon className="h-8 w-8 text-green-600" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 text-sm font-medium">Completed</p>
                <p className="text-3xl font-bold text-purple-900">{examStats.completed}</p>
              </div>
              <TrophyIcon className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-2">
          {['all', 'scheduled', 'active', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Exams Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredExams.map((exam) => (
          <div key={exam.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 text-white">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{exam.title}</h3>
                <div className="flex space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exam.type)} bg-white`}>
                    {exam.type.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  {new Date(exam.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  {exam.time}
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{exam.participants}</p>
                  <p className="text-sm text-gray-500">Participants</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{exam.questions}</p>
                  <p className="text-sm text-gray-500">Questions</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Participation</span>
                  <span>{exam.participants}/{exam.maxParticipants}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full"
                    style={{ width: `${(exam.participants / exam.maxParticipants) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(exam.status)}`}>
                  {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
                </span>
                <span className="text-sm text-gray-500">
                  {exam.duration} minutes
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors">
                  <EyeIcon className="h-4 w-4 mr-1" />
                  View
                </button>
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors">
                  <PencilIcon className="h-4 w-4 mr-1" />
                  Edit
                </button>
                {exam.status === 'scheduled' && (
                  <button className="flex-1 flex items-center justify-center px-4 py-2 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-colors">
                    <PlayIcon className="h-4 w-4 mr-1" />
                    Start
                  </button>
                )}
                {exam.status === 'active' && (
                  <button className="flex-1 flex items-center justify-center px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors">
                    <StopIcon className="h-4 w-4 mr-1" />
                    Stop
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Exam Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Create New Exam</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Exam Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter exam title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Exam Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200">
                    <option value="demo">Demo Exam</option>
                    <option value="paid">Paid Exam</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration (minutes)
                  </label>
                  <input
                    type="number"
                    placeholder="30"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Participants
                  </label>
                  <input
                    type="number"
                    placeholder="25"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Questions
                  </label>
                  <input
                    type="number"
                    placeholder="20"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Enter exam description..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 resize-none"
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-colors"
                >
                  Create Exam
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamsSection;
