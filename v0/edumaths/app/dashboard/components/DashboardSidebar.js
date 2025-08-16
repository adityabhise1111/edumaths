"use client";
import { 
  HomeIcon, 
  UserGroupIcon, 
  DocumentTextIcon, 
  QuestionMarkCircleIcon, 
  CogIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";

const DashboardSidebar = ({ activeSection, setActiveSection }) => {
  const navigation = [
    { 
      name: "Overview", 
      href: "overview", 
      icon: HomeIcon,
      current: activeSection === "overview"
    },
    { 
      name: "Students", 
      href: "students", 
      icon: UserGroupIcon,
      current: activeSection === "students"
    },
    { 
      name: "Exams", 
      href: "exams", 
      icon: DocumentTextIcon,
      current: activeSection === "exams"
    },
    { 
      name: "Questions", 
      href: "questions", 
      icon: QuestionMarkCircleIcon,
      current: activeSection === "questions"
    },
    { 
      name: "Analytics", 
      href: "analytics", 
      icon: ChartBarIcon,
      current: activeSection === "analytics"
    },
    { 
      name: "Settings", 
      href: "settings", 
      icon: CogIcon,
      current: activeSection === "settings"
    },
  ];

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 pt-16 shadow-sm">
      <div className="flex flex-col h-full">
        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => setActiveSection(item.href)}
                className={`
                  group flex items-center w-full px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200
                  ${item.current
                    ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 border-r-4 border-indigo-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }
                `}
              >
                <Icon
                  className={`mr-3 h-5 w-5 flex-shrink-0 ${
                    item.current ? "text-indigo-600" : "text-gray-400 group-hover:text-gray-500"
                  }`}
                />
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="p-4 border-t border-gray-200">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-900 mb-1">
              Need Help?
            </h3>
            <p className="text-xs text-gray-600 mb-3">
              Check our documentation or contact support.
            </p>
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-medium py-2 px-3 rounded-md hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
              Get Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
