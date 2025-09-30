import { useState } from 'react'
import { User, Bell, Shield, CreditCard, Globe, Moon, Sun, Save, Check, X } from 'lucide-react'
import Layout from '../components/Layout'
import Button from '../components/ui/Button'

const SettingsPage = ({ userRole = 'learner' }) => {
  const [activeTab, setActiveTab] = useState('profile')
  const [saveStatus, setSaveStatus] = useState(null) // null, 'saving', 'success', 'error'
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    sessionReminders: true,
    newMessages: true,
    weeklyReports: false
  })
  const [theme, setTheme] = useState('dark')

  const handleSave = () => {
    setSaveStatus('saving')
    // Simulate API call
    setTimeout(() => {
      setSaveStatus('success')
      setTimeout(() => setSaveStatus(null), 3000)
    }, 1500)
  }

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'privacy', name: 'Privacy & Security', icon: Shield },
    { id: 'billing', name: 'Billing', icon: CreditCard },
    { id: 'preferences', name: 'Preferences', icon: Globe }
  ]

  const ProfileSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-poppins font-semibold text-white mb-4">Profile Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
            <input
              type="text"
              defaultValue="John"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
            <input
              type="text"
              defaultValue="Doe"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              defaultValue="john.doe@example.com"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">University</label>
            <input
              type="text"
              defaultValue="MIT"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
        <textarea
          rows="4"
          defaultValue="Computer Science student passionate about helping others learn programming and mathematics."
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
        />
      </div>

      {userRole === 'tutor' && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Hourly Rate (₦)</label>
          <input
            type="number"
            defaultValue="25"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>
      )}
    </div>
  )

  const NotificationSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-poppins font-semibold text-white mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-medium">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </h4>
                <p className="text-gray-400 text-sm">
                  {key === 'emailNotifications' && 'Receive notifications via email'}
                  {key === 'pushNotifications' && 'Receive push notifications in browser'}
                  {key === 'sessionReminders' && 'Get reminders before your sessions'}
                  {key === 'newMessages' && 'Notifications for new messages'}
                  {key === 'weeklyReports' && 'Weekly summary of your activity'}
                </p>
              </div>
              <button
                onClick={() => setNotifications(prev => ({ ...prev, [key]: !value }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  value ? 'bg-accent' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    value ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const PrivacySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-poppins font-semibold text-white mb-4">Privacy & Security</h3>
        <div className="space-y-4">
          <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
            <h4 className="text-white font-medium mb-2">Change Password</h4>
            <p className="text-gray-400 text-sm mb-3">Update your password to keep your account secure</p>
            <Button variant="outline" size="sm">Change Password</Button>
          </div>
          
          <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
            <h4 className="text-white font-medium mb-2">Two-Factor Authentication</h4>
            <p className="text-gray-400 text-sm mb-3">Add extra security to your account</p>
            <Button variant="accent" size="sm">Enable 2FA</Button>
          </div>

          <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
            <h4 className="text-white font-medium mb-2">Profile Visibility</h4>
            <p className="text-gray-400 text-sm mb-3">Control who can see your profile</p>
            <select className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm">
              <option>Everyone</option>
              <option>Registered users only</option>
              <option>Private</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )

  const BillingSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-poppins font-semibold text-white mb-4">Billing Information</h3>
        
        <div className="bg-gray-700 border border-gray-600 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium">Payment Method</h4>
              <p className="text-gray-400 text-sm">**** **** **** 1234</p>
            </div>
            <Button variant="outline" size="sm">Update</Button>
          </div>
        </div>

        <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
          <h4 className="text-white font-medium mb-3">Billing History</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center py-2 border-b border-gray-600">
              <span className="text-gray-300">September 2025</span>
              <span className="text-white">₦12,500</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-600">
              <span className="text-gray-300">August 2025</span>
              <span className="text-white">₦9,850</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-300">July 2025</span>
              <span className="text-white">₦15,625</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const PreferencesSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-poppins font-semibold text-white mb-4">App Preferences</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-medium">Theme</h4>
              <p className="text-gray-400 text-sm">Choose your preferred theme</p>
            </div>
            <div className="flex bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setTheme('light')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                  theme === 'light' ? 'bg-gray-600 text-white' : 'text-gray-400'
                }`}
              >
                <Sun className="h-4 w-4" />
                Light
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                  theme === 'dark' ? 'bg-gray-600 text-white' : 'text-gray-400'
                }`}
              >
                <Moon className="h-4 w-4" />
                Dark
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
            <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Timezone</label>
            <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent">
              <option>UTC-8 (Pacific Time)</option>
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC+0 (GMT)</option>
              <option>UTC+1 (Central European Time)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile': return <ProfileSettings />
      case 'notifications': return <NotificationSettings />
      case 'privacy': return <PrivacySettings />
      case 'billing': return <BillingSettings />
      case 'preferences': return <PreferencesSettings />
      default: return <ProfileSettings />
    }
  }

  return (
    <Layout currentPage="settings" userRole={userRole}>
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-poppins font-bold text-white mb-2">
            Settings
          </h1>
          <p className="text-gray-300">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-accent text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              {renderTabContent()}
              
              {/* Save Button */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-700">
                {saveStatus && (
                  <div className={`flex items-center text-sm ${
                    saveStatus === 'success' ? 'text-green-400' : 
                    saveStatus === 'error' ? 'text-red-400' : 'text-gray-300'
                  }`}>
                    {saveStatus === 'saving' && <span>Saving changes...</span>}
                    {saveStatus === 'success' && (
                      <>
                        <Check className="h-4 w-4 mr-1" />
                        Changes saved successfully
                      </>
                    )}
                    {saveStatus === 'error' && (
                      <>
                        <X className="h-4 w-4 mr-1" />
                        Failed to save changes
                      </>
                    )}
                  </div>
                )}
                <Button 
                  variant="accent" 
                  size="md" 
                  onClick={handleSave}
                  disabled={saveStatus === 'saving'}
                  className={saveStatus === 'saving' ? 'opacity-50 cursor-not-allowed' : ''}
                >
                  <Save className="h-4 w-4 mr-2" />
                  {saveStatus === 'saving' ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SettingsPage