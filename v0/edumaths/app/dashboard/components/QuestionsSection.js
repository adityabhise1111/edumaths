"use client";
import { useState } from "react";
import { 
  QuestionMarkCircleIcon, 
  PlusIcon, 
  MagnifyingGlassIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  DocumentDuplicateIcon,
  FunnelIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from "@heroicons/react/24/outline";

const QuestionsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  // Mock questions data
  const questions = [
    {
      id: 1,
      question: "What is 25 + 37?",
      type: "multiple_choice",
      difficulty: "easy",
      category: "addition",
      options: ["52", "62", "72", "82"],
      correctAnswer: "62",
      explanation: "25 + 37 = 62",
      timeLimit: 30,
      points: 10,
      createdAt: "2024-08-01",
      usedInExams: 5
    },
    {
      id: 2,
      question: "Calculate 156 × 23 using abacus method",
      type: "calculation",
      difficulty: "medium",
      category: "multiplication",
      options: ["3588", "3568", "3578", "3598"],
      correctAnswer: "3588",
      explanation: "Using abacus multiplication method: 156 × 23 = 3588",
      timeLimit: 60,
      points: 20,
      createdAt: "2024-07-28",
      usedInExams: 3
    },
    {
      id: 3,
      question: "Solve (245 + 167) - (89 + 34) using mental calculation",
      type: "mental_math",
      difficulty: "hard",
      category: "mixed_operations",
      options: ["289", "299", "279", "269"],
      correctAnswer: "289",
      explanation: "245 + 167 = 412, 89 + 34 = 123, 412 - 123 = 289",
      timeLimit: 90,
      points: 30,
      createdAt: "2024-07-25",
      usedInExams: 2
    }
  ];

  const difficulties = ["all", "easy", "medium", "hard"];
  const categories = ["all", "addition", "subtraction", "multiplication", "division", "mixed_operations"];
  const questionTypes = ["multiple_choice", "calculation", "mental_math"];

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.question.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === "all" || question.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === "all" || question.category === selectedCategory;
    return matchesSearch && matchesDifficulty && matchesCategory;
  }).sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const questionStats = {
    total: questions.length,
    easy: questions.filter(q => q.difficulty === 'easy').length,
    medium: questions.filter(q => q.difficulty === 'medium').length,
    hard: questions.filter(q => q.difficulty === 'hard').length
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-600';
      case 'medium': return 'bg-yellow-100 text-yellow-600';
      case 'hard': return 'bg-red-100 text-red-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Question Bank
            </h2>
            <p className="text-gray-600">
              Create and manage your abacus questions library
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="inline-flex items-center px-4 py-3 border border-purple-300 text-purple-600 font-medium rounded-xl hover:bg-purple-50 transition-colors">
              <DocumentDuplicateIcon className="h-5 w-5 mr-2" />
              Import
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Question
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Total Questions</p>
                <p className="text-3xl font-bold text-blue-900">{questionStats.total}</p>
              </div>
              <QuestionMarkCircleIcon className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Easy</p>
                <p className="text-3xl font-bold text-green-900">{questionStats.easy}</p>
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">E</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-600 text-sm font-medium">Medium</p>
                <p className="text-3xl font-bold text-yellow-900">{questionStats.medium}</p>
              </div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-600 text-sm font-medium">Hard</p>
                <p className="text-3xl font-bold text-red-900">{questionStats.hard}</p>
              </div>
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">H</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400"
            />
          </div>
          
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
          >
            {difficulties.map(diff => (
              <option key={diff} value={diff}>
                {diff === "all" ? "All Difficulties" : diff.charAt(0).toUpperCase() + diff.slice(1)}
              </option>
            ))}
          </select>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase())}
              </option>
            ))}
          </select>

          <div className="flex items-center space-x-2">
            <FunnelIcon className="h-5 w-5 text-gray-400" />
            <select
              value={`${sortBy}-${sortOrder}`}
              onChange={(e) => {
                const [field, order] = e.target.value.split('-');
                setSortBy(field);
                setSortOrder(order);
              }}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
            >
              <option value="createdAt-desc">Newest First</option>
              <option value="createdAt-asc">Oldest First</option>
              <option value="difficulty-asc">Difficulty: Easy to Hard</option>
              <option value="difficulty-desc">Difficulty: Hard to Easy</option>
              <option value="usedInExams-desc">Most Used</option>
            </select>
          </div>
        </div>
      </div>

      {/* Questions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredQuestions.map((question) => (
          <div key={question.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Question Header */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 border-b">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {question.question}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
                      {question.difficulty.toUpperCase()}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                      {question.category.replace("_", " ").toUpperCase()}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">
                      {question.type.replace("_", " ").toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Question Body */}
            <div className="p-6">
              {/* Options */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-3">Options:</p>
                <div className="grid grid-cols-2 gap-2">
                  {question.options.map((option, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg border-2 ${
                        option === question.correctAnswer 
                          ? 'border-green-300 bg-green-50 text-green-700' 
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                    </div>
                  ))}
                </div>
              </div>

              {/* Question Details */}
              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-purple-600">{question.points}</p>
                  <p className="text-xs text-gray-500">Points</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">{question.timeLimit}s</p>
                  <p className="text-xs text-gray-500">Time Limit</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">{question.usedInExams}</p>
                  <p className="text-xs text-gray-500">Used in Exams</p>
                </div>
              </div>

              {/* Explanation */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Explanation:</p>
                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  {question.explanation}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors">
                  <EyeIcon className="h-4 w-4 mr-1" />
                  Preview
                </button>
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-colors">
                  <PencilIcon className="h-4 w-4 mr-1" />
                  Edit
                </button>
                <button className="flex-1 flex items-center justify-center px-4 py-2 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-colors">
                  <DocumentDuplicateIcon className="h-4 w-4 mr-1" />
                  Duplicate
                </button>
                <button className="px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors">
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Question Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Add New Question</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Question
                </label>
                <textarea
                  placeholder="Enter your question here..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Question Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200">
                    {questionTypes.map(type => (
                      <option key={type} value={type}>
                        {type.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase())}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200">
                    {categories.slice(1).map(cat => (
                      <option key={cat} value={cat}>
                        {cat.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase())}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Option A
                  </label>
                  <input
                    type="text"
                    placeholder="Enter option A"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Option B
                  </label>
                  <input
                    type="text"
                    placeholder="Enter option B"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Option C
                  </label>
                  <input
                    type="text"
                    placeholder="Enter option C"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Option D
                  </label>
                  <input
                    type="text"
                    placeholder="Enter option D"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correct Answer
                  </label>
                  <input
                    type="text"
                    placeholder="Enter correct answer"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Limit (seconds)
                  </label>
                  <input
                    type="number"
                    placeholder="60"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Points
                  </label>
                  <input
                    type="number"
                    placeholder="10"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Explanation
                </label>
                <textarea
                  placeholder="Explain the solution..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 resize-none"
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-colors"
                >
                  Add Question
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionsSection;
