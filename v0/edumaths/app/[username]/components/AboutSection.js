"use client";
import { 
  AcademicCapIcon,
  TrophyIcon,
  ClockIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

const AboutSection = ({ teacher }) => {
  const achievements = [
    "Certified Abacus Instructor",
    "5+ Years Teaching Experience", 
    "50+ Successful Students",
    "Mental Math Expert",
    "Child Psychology Understanding",
    "Individual Attention to Each Student"
  ];

  const teachingMethods = [
    {
      title: "Interactive Learning",
      description: "Engaging activities and games to make learning fun and effective",
      icon: AcademicCapIcon
    },
    {
      title: "Personalized Approach", 
      description: "Customized teaching methods based on each student's learning style",
      icon: CheckCircleIcon
    },
    {
      title: "Progress Tracking",
      description: "Regular assessments and progress reports for parents",
      icon: TrophyIcon
    },
    {
      title: "Flexible Timing",
      description: "Convenient class schedules to fit your child's routine",
      icon: ClockIcon
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About {teacher.name}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dedicated to nurturing young minds through innovative abacus and mental math education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose {teacher.name}?
            </h3>
            
            {teacher.description && (
              <p className="text-gray-600 mb-8 leading-relaxed">
                {teacher.description}
              </p>
            )}

            {/* Achievements */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Qualifications & Achievements
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Organization Info */}
            {teacher.orgname && (
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Teaching at
                </h4>
                <p className="text-indigo-600 font-medium text-xl">
                  {teacher.orgname}
                </p>
                {teacher.address && (
                  <p className="text-gray-600 mt-1">{teacher.address}</p>
                )}
              </div>
            )}
          </div>

          {/* Right Content - Teaching Methods */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Teaching Methodology
            </h3>
            <div className="space-y-6">
              {teachingMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-3">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {method.title}
                      </h4>
                      <p className="text-gray-600">
                        {method.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Student Success Stories
              </h3>
              <p className="text-indigo-200">
                Real results from dedicated learning
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
                <div className="text-indigo-200">Improvement Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                <div className="text-indigo-200">Happy Students</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
                <div className="text-indigo-200">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                <div className="text-indigo-200">Parent Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
