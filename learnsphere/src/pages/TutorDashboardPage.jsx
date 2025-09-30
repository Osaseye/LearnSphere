import { useState } from 'react'
import Layout from '../components/Layout'
import Button from '../components/ui/Button'
import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  Star, 
  MessageSquare,
  BookOpen,
  Settings,
  Plus,
  Eye,
  X
} from 'lucide-react'

const TutorDashboardPage = () => {
  const [showAddAvailabilityModal, setShowAddAvailabilityModal] = useState(false)
  const [showNewSessionModal, setShowNewSessionModal] = useState(false)
  const [upcomingSessions] = useState([
    { id: 1, student: 'Alex Johnson', subject: 'Mathematics', time: '2:00 PM', date: 'Today', duration: '1 hour', rate: '₦2,500' },
    { id: 2, student: 'Emma Davis', subject: 'Physics', time: '4:30 PM', date: 'Tomorrow', duration: '1.5 hours', rate: '₦3,750' },
  ])

  const [recentEarnings] = useState([
    { date: 'Oct 15', amount: '₦7,500', sessions: 3 },
    { date: 'Oct 14', amount: '₦5,000', sessions: 2 },
    { date: 'Oct 13', amount: '₦10,000', sessions: 4 },
  ])

  const [studentRequests] = useState([
    { id: 1, student: 'Sarah Wilson', subject: 'Calculus', preferredTime: 'Mon 3-5 PM', message: 'Need help with derivatives and integrals' },
    { id: 2, student: 'Mark Thompson', subject: 'Statistics', preferredTime: 'Wed 2-4 PM', message: 'Struggling with hypothesis testing' },
  ])

  return (
    <Layout userRole="tutor">
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-accent/20 to-secondary/20 rounded-xl p-6 border border-gray-700">
          <h1 className="text-2xl font-poppins font-bold text-white mb-2">
            Good morning, Dr. Sarah! 🌟
          </h1>
          <p className="text-gray-300">
            You have 2 sessions today and 3 new student requests. Keep up the great work!
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Users className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-white">24</span>
            </div>
            <p className="text-sm text-gray-300">Active Students</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold text-white">₦45,000</span>
            </div>
            <p className="text-sm text-gray-300">This Month</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Star className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white">4.9</span>
            </div>
            <p className="text-sm text-gray-300">Average Rating</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Clock className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">36</span>
            </div>
            <p className="text-sm text-gray-300">Hours This Week</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <Button 
            className="bg-accent hover:bg-accent/80 text-white p-3 md:p-4 h-auto flex flex-col items-center space-y-1 md:space-y-2"
            onClick={() => setShowAddAvailabilityModal(true)}
          >
            <Plus className="h-5 w-5 md:h-6 md:w-6" />
            <span className="text-xs md:text-sm">Add Availability</span>
          </Button>
          <Button className="bg-secondary hover:bg-secondary/80 text-white p-3 md:p-4 h-auto flex flex-col items-center space-y-1 md:space-y-2">
            <Calendar className="h-5 w-5 md:h-6 md:w-6" />
            <span className="text-xs md:text-sm">View Schedule</span>
          </Button>
          <Button className="bg-gray-700 hover:bg-gray-600 text-white p-3 md:p-4 h-auto flex flex-col items-center space-y-1 md:space-y-2">
            <MessageSquare className="h-5 w-5 md:h-6 md:w-6" />
            <span className="text-xs md:text-sm">Messages</span>
          </Button>
          <Button className="bg-gray-700 hover:bg-gray-600 text-white p-3 md:p-4 h-auto flex flex-col items-center space-y-1 md:space-y-2">
            <Settings className="h-5 w-5 md:h-6 md:w-6" />
            <span className="text-xs md:text-sm">Settings</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
          {/* Upcoming Sessions */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-poppins font-semibold text-white flex items-center">
                <Clock className="h-5 w-5 mr-2 text-accent" />
                Today's Sessions
              </h2>
              <Button className="text-accent hover:text-accent/80 text-sm">
                View all
              </Button>
            </div>

            <div className="space-y-3">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-white">{session.subject}</h3>
                      <p className="text-sm text-gray-300">with {session.student}</p>
                    </div>
                    <span className="text-sm font-medium text-green-400">{session.rate}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{session.time} • {session.duration}</span>
                    <Button className="bg-accent hover:bg-accent/80 text-white text-xs px-3 py-1">
                      Start Session
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white"
              onClick={() => setShowNewSessionModal(true)}
            >
              Add New Session
            </Button>
          </div>

          {/* Student Requests */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-poppins font-semibold text-white flex items-center">
                <Users className="h-5 w-5 mr-2 text-accent" />
                Student Requests
              </h2>
              <span className="bg-accent text-white text-xs px-2 py-1 rounded-full">
                {studentRequests.length} New
              </span>
            </div>

            <div className="space-y-3">
              {studentRequests.map((request) => (
                <div key={request.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-white">{request.student}</h3>
                      <p className="text-sm text-gray-300">{request.subject}</p>
                    </div>
                    <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">
                      {request.preferredTime}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{request.message}</p>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-accent hover:bg-accent/80 text-white text-xs">
                      Accept
                    </Button>
                    <Button className="flex-1 bg-gray-600 hover:bg-gray-500 text-white text-xs">
                      Decline
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Earnings Overview */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-poppins font-semibold text-white flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-accent" />
              Recent Earnings
            </h2>
            <Button className="text-accent hover:text-accent/80 text-sm flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              View Analytics
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentEarnings.map((earning, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-green-400 mb-1">{earning.amount}</div>
                <div className="text-sm text-gray-300">{earning.date}</div>
                <div className="text-xs text-gray-400">{earning.sessions} sessions</div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-700">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Total this month:</span>
              <span className="text-xl font-bold text-green-400">₦45,000</span>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-poppins font-semibold text-white flex items-center mb-4">
            <BookOpen className="h-5 w-5 mr-2 text-accent" />
            Performance Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">156</div>
              <div className="text-sm text-gray-300">Total Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">98%</div>
              <div className="text-sm text-gray-300">Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">24</div>
              <div className="text-sm text-gray-300">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">15</div>
              <div className="text-sm text-gray-300">Positive Reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Availability Modal */}
      {showAddAvailabilityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-gray-800 rounded-xl p-4 md:p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-poppins font-semibold text-white">Add Availability</h3>
              <button
                onClick={() => setShowAddAvailabilityModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Start Time</label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">End Time</label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  className="flex-1 bg-gray-600 hover:bg-gray-500 text-white"
                  onClick={() => setShowAddAvailabilityModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1 bg-accent hover:bg-accent/80 text-white"
                  onClick={() => {
                    // Handle save availability
                    setShowAddAvailabilityModal(false)
                  }}
                >
                  Add Availability
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* New Session Modal */}
      {showNewSessionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-gray-800 rounded-xl p-4 md:p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-poppins font-semibold text-white">Schedule New Session</h3>
              <button
                onClick={() => setShowNewSessionModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Student</label>
                <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-accent">
                  <option value="">Select a student</option>
                  <option value="alex">Alex Johnson</option>
                  <option value="emma">Emma Davis</option>
                  <option value="mike">Mike Wilson</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="e.g., Mathematics"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Date & Time</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                  <input
                    type="time"
                    className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Duration (hours)</label>
                <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-accent">
                  <option value="1">1 hour</option>
                  <option value="1.5">1.5 hours</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  className="flex-1 bg-gray-600 hover:bg-gray-500 text-white"
                  onClick={() => setShowNewSessionModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1 bg-accent hover:bg-accent/80 text-white"
                  onClick={() => {
                    // Handle schedule session
                    setShowNewSessionModal(false)
                  }}
                >
                  Schedule Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default TutorDashboardPage