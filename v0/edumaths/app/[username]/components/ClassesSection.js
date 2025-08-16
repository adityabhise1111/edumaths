"use client";
import { 
  ClockIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  StarIcon
} from "@heroicons/react/24/outline";

const ClassesSection = ({ teacher }) => {
  const courses = [
    {
      id: 1,
      title: "Beginner Abacus (Level 1-3)",
      description: "Perfect for children aged 4-8 years. Introduction to abacus and basic arithmetic operations.",
      duration: "3 months",
      students: "8-10 students",
      schedule: "Mon, Wed, Fri - 4:00 PM",
      price: "₹2,000/month",
      features: [
        "Introduction to Abacus",
        "Basic Addition & Subtraction", 
        "Number Recognition",
        "Fun Learning Activities",
        "Progress Certificates"
      ],
      popular: true
    },
    {
      id: 2,
      title: "Intermediate Abacus (Level 4-7)",
      description: "For students with basic abacus knowledge. Advanced operations and mental math development.",
      duration: "4 months",
      students: "6-8 students",
      schedule: "Tue, Thu, Sat - 5:00 PM",
      price: "₹2,500/month",
      features: [
        "Advanced Calculations",
        "Multiplication & Division",
        "Mental Math Development",
        "Speed Building Exercises",
        "Competition Preparation"
      ]
    },
    {
      id: 3,
      title: "Advanced Mental Math",
      description: "Master level course focusing on lightning-fast mental calculations without abacus.",
      duration: "6 months",
      students: "4-6 students",
      schedule: "Mon, Wed - 6:00 PM",
      price: "₹3,000/month",
      features: [
        "Pure Mental Calculations",
        "Advanced Techniques",
        "Competition Level Training",
        "Speed & Accuracy Focus",
        "National Level Preparation"
      ]
    }
  ];

  return (
    <section id="classes" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Classes Offered
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive abacus and mental math courses designed for different age groups and skill levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                course.popular ? 'ring-2 ring-indigo-500' : ''
              }`}
            >
              {course.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-bl-lg text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Course Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Course Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <ClockIcon className="w-5 h-5 text-indigo-500" />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <UserGroupIcon className="w-5 h-5 text-indigo-500" />
                    <span>Batch Size: {course.students}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <CalendarDaysIcon className="w-5 h-5 text-indigo-500" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <CurrencyDollarIcon className="w-5 h-5 text-indigo-500" />
                    <span className="font-semibold text-gray-900">{course.price}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">What you&apos;ll learn:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-600">
                        <StarIcon className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    course.popular 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Our Classes?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Small Batches</h4>
              <p className="text-gray-600 text-sm">Individual attention with limited students per batch</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CalendarDaysIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Flexible Schedule</h4>
              <p className="text-gray-600 text-sm">Multiple time slots to fit your convenience</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <StarIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Teaching</h4>
              <p className="text-gray-600 text-sm">Certified instructor with proven track record</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Progress Tracking</h4>
              <p className="text-gray-600 text-sm">Regular assessments and progress reports</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
