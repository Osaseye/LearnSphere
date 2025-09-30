import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { TrendingUp, Clock, Star, DollarSign, Users, BookOpen, Calendar, Filter, Download } from 'lucide-react'
import Layout from '../components/Layout'
import Button from '../components/ui/Button'

const AnalyticsPage = ({ userRole = 'learner' }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months')
  const [selectedMetric, setSelectedMetric] = useState('sessions')

  // Custom tooltip formatter for currency
  const formatCurrency = (value) => `₦${value.toLocaleString()}`
  // Mock data for charts
  const monthlyData = [
    { month: 'Jan', sessions: 8, hours: 12, earnings: 30000 },
    { month: 'Feb', sessions: 12, hours: 18, earnings: 45000 },
    { month: 'Mar', sessions: 15, hours: 22, earnings: 55000 },
    { month: 'Apr', sessions: 18, hours: 27, earnings: 67500 },
    { month: 'May', sessions: 22, hours: 33, earnings: 82500 },
    { month: 'Jun', sessions: 25, hours: 38, earnings: 95000 }
  ]

  const subjectData = [
    { subject: 'Mathematics', sessions: 45, color: '#4338CA' },
    { subject: 'Physics', sessions: 23, color: '#7C3AED' },
    { subject: 'Chemistry', sessions: 18, color: '#06B6D4' },
    { subject: 'Biology', sessions: 12, color: '#10B981' }
  ]

  const ratingData = [
    { rating: '5 Star', count: 67, color: '#F59E0B' },
    { rating: '4 Star', count: 23, color: '#84CC16' },
    { rating: '3 Star', count: 8, color: '#06B6D4' },
    { rating: '2 Star', count: 2, color: '#F97316' },
    { rating: '1 Star', count: 0, color: '#EF4444' }
  ]

  const stats = {
    learner: {
      totalSessions: 98,
      totalHours: 147,
      averageRating: 4.8,
      totalSpent: 367500,
      favoriteSubject: 'Mathematics',
      improvementRate: '+23%'
    },
    tutor: {
      totalSessions: 234,
      totalHours: 351,
      averageRating: 4.9,
      totalEarnings: 877500,
      activeStudents: 28,
      responseRate: '98%'
    }
  }

  const currentStats = stats[userRole]

  return (
    <Layout currentPage="analytics" userRole={userRole}>
      <div className="p-6">
        {/* Header with Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h1 className="text-3xl font-poppins font-bold text-white mb-2">
                Analytics Dashboard
              </h1>
              <p className="text-gray-300">
                Track your {userRole === 'tutor' ? 'tutoring' : 'learning'} progress and performance
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-gray-800 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-accent focus:border-accent"
              >
                <option value="1month">Last Month</option>
                <option value="3months">Last 3 Months</option>
                <option value="6months">Last 6 Months</option>
                <option value="1year">Last Year</option>
              </select>
              <Button className="bg-gray-700 hover:bg-gray-600 text-white text-sm px-3 py-2">
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </Button>
              <Button className="bg-accent hover:bg-accent/80 text-white text-sm px-3 py-2">
                <Download className="h-4 w-4 mr-1" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">Total Sessions</p>
                <p className="text-2xl font-bold text-white">{currentStats.totalSessions}</p>
                <p className="text-green-400 text-sm">+12% from last month</p>
              </div>
              <div className="bg-accent/20 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm font-medium">
                  Total Hours {userRole === 'tutor' ? 'Taught' : 'Studied'}
                </p>
                <p className="text-2xl font-bold text-white">{currentStats.totalHours}</p>
                <p className="text-green-400 text-sm">+8% from last month</p>
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
                <p className="text-2xl font-bold text-white">{currentStats.averageRating}</p>
                <p className="text-green-400 text-sm">+0.2 from last month</p>
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
                  {userRole === 'tutor' ? 'Total Earnings' : 'Total Spent'}
                </p>
                <p className="text-2xl font-bold text-white">
                  ₦{(userRole === 'tutor' ? currentStats.totalEarnings : currentStats.totalSpent).toLocaleString()}
                </p>
                <p className="text-green-400 text-sm">+15% from last month</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sessions Over Time */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-poppins font-semibold text-white mb-4">
              Sessions Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="sessions" fill="#06B6D4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Hours Trend */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-poppins font-semibold text-white mb-4">
              {userRole === 'tutor' ? 'Teaching' : 'Study'} Hours Trend
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="hours" 
                  stroke="#4338CA" 
                  strokeWidth={3}
                  dot={{ fill: '#4338CA', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Subject Distribution */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-poppins font-semibold text-white mb-4">
              Sessions by Subject
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={subjectData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="sessions"
                >
                  {subjectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {subjectData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-gray-300 text-sm">{item.subject}</span>
                  </div>
                  <span className="text-white font-medium">{item.sessions}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-poppins font-semibold text-white mb-4">
              Rating Distribution
            </h3>
            <div className="space-y-4">
              {ratingData.map((rating, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-gray-300 text-sm w-16">{rating.rating}</span>
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${(rating.count / 100) * 100}%`,
                        backgroundColor: rating.color
                      }}
                    ></div>
                  </div>
                  <span className="text-white text-sm w-8">{rating.count}</span>
                </div>
              ))}
            </div>
            
            {/* Performance Insights */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="text-white font-medium mb-3">Performance Insights</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Response Rate:</span>
                  <span className="text-green-400">
                    {userRole === 'tutor' ? currentStats.responseRate : '95%'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">
                    {userRole === 'tutor' ? 'Active Students:' : 'Favorite Subject:'}
                  </span>
                  <span className="text-white">
                    {userRole === 'tutor' ? currentStats.activeStudents : currentStats.favoriteSubject}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Growth Rate:</span>
                  <span className="text-green-400">
                    {userRole === 'tutor' ? '+18%' : currentStats.improvementRate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AnalyticsPage