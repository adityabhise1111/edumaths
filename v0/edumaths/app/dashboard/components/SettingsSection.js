"use client";
import { useState } from "react";
import { 
  CogIcon, 
  UserIcon,
  GlobeAltIcon,
  BellIcon,
  KeyIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  ChartBarIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  CheckIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";

const SettingsSection = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSubdomainModal, setShowSubdomainModal] = useState(false);
  const [formData, setFormData] = useState({
    // Profile settings
    displayName: "Dr. Rajesh Kumar",
    email: "rajesh@example.com",
    phone: "+91 9876543210",
    bio: "Experienced abacus teacher with 10+ years of experience",
    profileImage: "",
    
    // Subdomain settings
    subdomain: "rajesh-abacus",
    customDomain: "",
    
    // Notification settings
    emailNotifications: true,
    pushNotifications: true,
    examReminders: true,
    studentUpdates: true,
    
    // Security settings
    twoFactorAuth: false,
    sessionTimeout: "30",
    
    // Exam settings
    defaultExamDuration: "60",
    autoGrading: true,
    allowRetakes: false,
    showCorrectAnswers: true
  });

  const settingsTabs = [
    { id: "profile", label: "Profile", icon: UserIcon },
    { id: "subdomain", label: "Subdomain", icon: GlobeAltIcon },
    { id: "notifications", label: "Notifications", icon: BellIcon },
    { id: "security", label: "Security", icon: ShieldCheckIcon },
    { id: "exams", label: "Exam Settings", icon: ChartBarIcon },
    { id: "billing", label: "Billing", icon: CreditCardIcon },
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h3>
        
        <div className="space-y-6">
          {/* Profile Image */}
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                {formData.displayName.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors">
                Change Photo
              </button>
              <p className="text-sm text-gray-500 mt-1">JPG, PNG or GIF. Max size 2MB.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Display Name
              </label>
              <input
                type="text"
                value={formData.displayName}
                onChange={(e) => handleInputChange('displayName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              value={formData.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 resize-none"
              placeholder="Tell students about yourself..."
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50">
              Cancel
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubdomainSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Subdomain & Website</h3>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Your Student Portal</h4>
            <p className="text-gray-600 mb-4">
              Students can access your exams and content through your personalized subdomain.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-medium text-purple-600">
                https://{formData.subdomain}.edumaths.com
              </span>
              <button className="p-2 text-purple-600 hover:bg-purple-100 rounded-lg">
                <EyeIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subdomain
            </label>
            <div className="flex">
              <input
                type="text"
                value={formData.subdomain}
                onChange={(e) => handleInputChange('subdomain', e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
              />
              <span className="px-4 py-3 bg-gray-100 border border-l-0 border-gray-300 rounded-r-xl text-gray-500">
                .edumaths.com
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Only lowercase letters, numbers, and hyphens allowed.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Custom Domain (Optional)
            </label>
            <input
              type="text"
              value={formData.customDomain}
              onChange={(e) => handleInputChange('customDomain', e.target.value)}
              placeholder="www.yourschool.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
            />
            <p className="text-sm text-gray-500 mt-1">
              Connect your own domain name (Premium feature).
            </p>
          </div>

          <div className="flex justify-end space-x-4">
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50">
              Preview Site
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700">
              Update Subdomain
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Notification Preferences</h3>
        
        <div className="space-y-6">
          {[
            { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive important updates via email' },
            { key: 'pushNotifications', label: 'Push Notifications', desc: 'Get real-time browser notifications' },
            { key: 'examReminders', label: 'Exam Reminders', desc: 'Notifications about upcoming exams' },
            { key: 'studentUpdates', label: 'Student Updates', desc: 'When students join or complete exams' }
          ].map((setting) => (
            <div key={setting.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <h4 className="font-medium text-gray-900">{setting.label}</h4>
                <p className="text-sm text-gray-500">{setting.desc}</p>
              </div>
              <button
                onClick={() => handleInputChange(setting.key, !formData[setting.key])}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  formData[setting.key] ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    formData[setting.key] ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Security Settings</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                formData.twoFactorAuth ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}>
                {formData.twoFactorAuth ? 'Enabled' : 'Disabled'}
              </span>
              <button
                onClick={() => handleInputChange('twoFactorAuth', !formData.twoFactorAuth)}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                {formData.twoFactorAuth ? 'Disable' : 'Enable'}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Session Timeout (minutes)
            </label>
            <select
              value={formData.sessionTimeout}
              onChange={(e) => handleInputChange('sessionTimeout', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
              <option value="0">Never</option>
            </select>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Password & Account</h4>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
                Change Password
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50">
                Download Data
              </button>
              <button 
                onClick={() => setShowDeleteModal(true)}
                className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExamSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Default Exam Settings</h3>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Exam Duration (minutes)
              </label>
              <input
                type="number"
                value={formData.defaultExamDuration}
                onChange={(e) => handleInputChange('defaultExamDuration', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200"
              />
            </div>
          </div>

          <div className="space-y-4">
            {[
              { key: 'autoGrading', label: 'Auto Grading', desc: 'Automatically grade multiple choice questions' },
              { key: 'allowRetakes', label: 'Allow Retakes', desc: 'Students can retake exams' },
              { key: 'showCorrectAnswers', label: 'Show Correct Answers', desc: 'Display correct answers after exam completion' }
            ].map((setting) => (
              <div key={setting.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <h4 className="font-medium text-gray-900">{setting.label}</h4>
                  <p className="text-sm text-gray-500">{setting.desc}</p>
                </div>
                <button
                  onClick={() => handleInputChange(setting.key, !formData[setting.key])}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    formData[setting.key] ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      formData[setting.key] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBillingSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Billing & Subscription</h3>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-green-900">Free Plan</h4>
                <p className="text-green-700">You&apos;re currently on the free plan</p>
              </div>
              <button className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700">
                Upgrade to Pro
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-2">Free</h4>
              <p className="text-3xl font-bold text-gray-900 mb-4">$0<span className="text-sm text-gray-500">/month</span></p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Up to 25 students</li>
                <li>• 5 exams per month</li>
                <li>• Basic analytics</li>
                <li>• Email support</li>
              </ul>
            </div>

            <div className="text-center p-6 border-2 border-purple-500 rounded-2xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Popular
                </span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Pro</h4>
              <p className="text-3xl font-bold text-gray-900 mb-4">$29<span className="text-sm text-gray-500">/month</span></p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>• Up to 100 students</li>
                <li>• Unlimited exams</li>
                <li>• Advanced analytics</li>
                <li>• Custom subdomain</li>
                <li>• Priority support</li>
              </ul>
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700">
                Upgrade Now
              </button>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-2">Enterprise</h4>
              <p className="text-3xl font-bold text-gray-900 mb-4">$99<span className="text-sm text-gray-500">/month</span></p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Unlimited students</li>
                <li>• White-label solution</li>
                <li>• API access</li>
                <li>• Custom domain</li>
                <li>• Dedicated support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "profile": return renderProfileSettings();
      case "subdomain": return renderSubdomainSettings();
      case "notifications": return renderNotificationSettings();
      case "security": return renderSecuritySettings();
      case "exams": return renderExamSettings();
      case "billing": return renderBillingSettings();
      default: return renderProfileSettings();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Settings</h2>
        <p className="text-gray-600">Manage your account preferences and configurations</p>
      </div>

      <div className="flex gap-6">
        {/* Settings Sidebar */}
        <div className="w-80">
          <div className="bg-white rounded-3xl shadow-2xl p-6">
            <nav className="space-y-2">
              {settingsTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    }`}
                  >
                    <Icon className={`h-5 w-5 mr-3 ${isActive ? "text-white" : "text-gray-500"}`} />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          {renderContent()}
        </div>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold text-red-600 mb-4">Delete Account</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete your account? This action cannot be undone and will permanently delete all your data, exams, and student records.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsSection;
