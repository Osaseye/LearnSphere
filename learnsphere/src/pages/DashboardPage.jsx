import { Calendar, Clock, Star, TrendingUp, Users, BookOpen, DollarSign, Award } from 'lucide-react'
import Layout from '../components/Layout'
import Button from '../components/ui/Button'

const DashboardPage = ({ userRole = 'learner' }) => {
  // Mock data - would come from API
  const learnerStats = {
    totalSessions: 24,
    hoursStudied: 48,
    avgRating: 4.8,
    activeTutors: 5
  }

  const tutorStats = {
    totalSessions: 67,
    hoursTaught: 134,
    avgRating: 4.9,
    totalEarnings: 2680,
    activeStudents: 12
  }

  const upcomingSessions = [
    {
      id: 1,
      subject: 'Mathematics',
      tutor: 'Sarah Johnson',
      student: 'Mike Chen',
      date: '2025-09-27',
      time: '2:00 PM',
      duration: '1 hour',
      type: 'Video Call'
    },
    {
      id: 2,
      subject: 'Physics',
      tutor: 'Dr. Ahmed',
      student: 'Emma Davis',
      date: '2025-09-27',
      time: '4:30 PM',
      duration: '1.5 hours',
      type: 'In Person'
    }
  ]

  const recentActivity = [
    { id: 1, action: 'Completed session with Sarah Johnson', time: '2 hours ago' },
    { id: 2, action: 'Received 5-star rating from Mike Chen', time: '1 day ago' },
    { id: 3, action: 'New message from Dr. Ahmed', time: '2 days ago' },
    { id: 4, action: 'Session scheduled with Emma Davis', time: '3 days ago' }
  ]

  const stats = userRole === 'tutor' ? tutorStats : learnerStats

  return (
    <Layout currentPage="dashboard" userRole={userRole}>
      <div className="p-6">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-poppins font-bold text-white mb-2">
            Welcome back, John! 👋
          </h1>
          <p className="text-gray-300">
            {userRole === 'tutor' 
              ? "Here's what's happening with your tutoring today."
              : "Ready to continue your learning journey?"
            }
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Total Sessions</p>
                <p className="text-2xl font-bold text-white">{stats.totalSessions}</p>
              </div>
              <div className="bg-accent/20 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">
                  Hours {userRole === 'tutor' ? 'Taught' : 'Studied'}
                </p>
                <p className="text-2xl font-bold text-white">
                  {userRole === 'tutor' ? stats.hoursTaught : stats.hoursStudied}
                </p>
              </div>
              <div className="bg-primary/20 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Average Rating</p>
                <p className="text-2xl font-bold text-white">{stats.avgRating}</p>
              </div>
              <div className="bg-yellow-500/20 p-3 rounded-full">
                <Star className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">
                  {userRole === 'tutor' ? 'Total Earnings' : 'Active Tutors'}
                </p>
                <p className="text-2xl font-bold text-white">
                  {userRole === 'tutor' ? `₦${stats.totalEarnings.toLocaleString()}` : stats.activeTutors}
                </p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-full">
                {userRole === 'tutor' ? (
                  <DollarSign className="h-6 w-6 text-green-500" />
                ) : (
                  <Users className="h-6 w-6 text-green-500" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Sessions */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-poppins font-semibold text-white">
                  Upcoming Sessions
                </h2>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="bg-gray-700 border border-gray-600 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="bg-accent/20 p-2 rounded-lg">
                            <BookOpen className="h-4 w-4 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">{session.subject}</h3>
                            <p className="text-sm text-gray-300">
                              {userRole === 'tutor' ? `with ${session.student}` : `with ${session.tutor}`}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>📅 {session.date}</span>
                          <span>🕐 {session.time}</span>
                          <span>⏱️ {session.duration}</span>
                          <span>📹 {session.type}</span>
                        </div>
                      </div>
                      <Button variant="primary" size="sm">
                        Join
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity & Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <h2 className="text-xl font-poppins font-semibold text-white mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                {userRole === 'tutor' ? (
                  <>
                    <Button variant="accent" size="md" className="w-full justify-start">
                      <Calendar className="h-4 w-4 mr-2" />
                      Set Availability
                    </Button>
                    <Button variant="primary" size="md" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      View Students
                    </Button>
                    <Button variant="secondary" size="md" className="w-full justify-start">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="accent" size="md" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2" />
                      Find Tutors
                    </Button>
                    <Button variant="primary" size="md" className="w-full justify-start">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Session
                    </Button>
                    <Button variant="secondary" size="md" className="w-full justify-start">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      View Progress
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <h2 className="text-xl font-poppins font-semibold text-white mb-4">
                Recent Activity
              </h2>
              <div className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="bg-accent/20 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-300">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DashboardPage