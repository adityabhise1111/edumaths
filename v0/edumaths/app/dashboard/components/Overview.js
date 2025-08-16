"use client";
import { 
  UserGroupIcon, 
  DocumentTextIcon, 
  QuestionMarkCircleIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

const Overview = () => {
  // Mock data - replace with real data from your database
  const stats = [
    {
      name: "Total Students",
      value: "24",
      change: "+2 this week",
      changeType: "increase",
      icon: UserGroupIcon,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "Active Exams",
      value: "3",
      change: "2 upcoming",
      changeType: "neutral",
      icon: DocumentTextIcon,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      name: "Question Bank",
      value: "157",
      change: "+12 this month",
      changeType: "increase",
      icon: QuestionMarkCircleIcon,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      name: "Avg. Score",
      value: "85%",
      change: "+5% improvement",
      changeType: "increase",
      icon: ChartBarIcon,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "exam_completed",
      student: "John Doe",
      action: "completed Abacus Level 2 exam",
      score: "92%",
      time: "2 hours ago",
      icon: CheckCircleIcon,
      iconColor: "text-green-500"
    },
    {
      id: 2,
      type: "student_joined",
      student: "Sarah Smith",
      action: "joined your class",
      time: "5 hours ago",
      icon: UserGroupIcon,
      iconColor: "text-blue-500"
    },
    {
      id: 3,
      type: "exam_scheduled",
      student: "System",
      action: "Abacus Level 3 exam scheduled for tomorrow",
      time: "1 day ago",
      icon: ClockIcon,
      iconColor: "text-yellow-500"
    }
  ];

  const upcomingExams = [
    {
      id: 1,
      name: "Abacus Level 3 Assessment",
      date: "Tomorrow, 10:00 AM",
      students: 15,
      duration: "45 minutes"
    },
    {
      id: 2,
      name: "Mental Math Challenge",
      date: "Friday, 2:00 PM",
      students: 20,
      duration: "30 minutes"
    },
    {
      id: 3,
      name: "Speed Calculation Test",
      date: "Next Monday, 11:00 AM",
      students: 18,
      duration: "20 minutes"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">
          Welcome to your teaching dashboard. Here&apos;s what&apos;s happening with your classes today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className={`flex-shrink-0 ${stat.bgColor} rounded-md p-3`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="ml-4 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'increase' ? 'text-green-600' : 
                        stat.changeType === 'decrease' ? 'text-red-600' : 'text-gray-500'
                      }`}>
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivities.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <Icon className={`h-5 w-5 ${activity.iconColor}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.student}</span> {activity.action}
                        {activity.score && (
                          <span className="ml-1 font-medium text-green-600">
                            ({activity.score})
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Upcoming Exams */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Exams</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {upcomingExams.map((exam) => (
                <div key={exam.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        {exam.name}
                      </h3>
                      <p className="text-sm text-gray-500">{exam.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-900">{exam.students} students</p>
                      <p className="text-xs text-gray-500">{exam.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
                Schedule New Exam
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200">
            <div className="text-center">
              <UserGroupIcon className="mx-auto h-8 w-8 text-gray-400" />
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Add Student
              </span>
            </div>
          </button>
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200">
            <div className="text-center">
              <DocumentTextIcon className="mx-auto h-8 w-8 text-gray-400" />
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Create Exam
              </span>
            </div>
          </button>
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200">
            <div className="text-center">
              <QuestionMarkCircleIcon className="mx-auto h-8 w-8 text-gray-400" />
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Add Question
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
