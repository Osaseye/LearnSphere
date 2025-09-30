import { useState } from 'react'
import Layout from '../components/Layout'
import Button from '../components/ui/Button'
import { Search, BookOpen, Clock, Star, Calendar, User, MessageSquare, TrendingUp } from 'lucide-react'

const LearnerDashboardPage = () => {
  const [upcomingSessions] = useState([
    { id: 1, tutor: 'Sarah Johnson', subject: 'Mathematics', time: '2:00 PM', date: 'Today', duration: '1 hour' },
    { id: 2, tutor: 'Mike Chen', subject: 'Physics', time: '4:30 PM', date: 'Tomorrow', duration: '1.5 hours' },
  ])

  const [recentSessions] = useState([
    { id: 1, tutor: 'Emily Davis', subject: 'Chemistry', date: 'Oct 15', rating: 5, feedback: 'Excellent explanation of organic chemistry concepts!' },
    { id: 2, tutor: 'David Wilson', subject: 'Statistics', date: 'Oct 12', rating: 4, feedback: 'Very helpful with probability distributions.' },
  ])

  const [recommendedTutors] = useState([
    { id: 1, name: 'Alex Thompson', subject: 'Calculus', rating: 4.9, rate: '₦2,500/hr', availability: 'Available now' },
    { id: 2, name: 'Lisa Rodriguez', subject: 'Biology', rating: 4.8, rate: '₦2,000/hr', availability: 'Available in 2 hours' },
    { id: 3, name: 'James Kim', subject: 'Computer Science', rating: 4.9, rate: '₦3,000/hr', availability: 'Available tomorrow' },
  ])

  return (
    <Layout userRole="learner">
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-accent/20 to-secondary/20 rounded-xl p-6 border border-gray-700">
          <h1 className="text-2xl font-poppins font-bold text-white mb-2">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-gray-300">
            Ready to continue your learning journey? You have 2 upcoming sessions this week.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <Button className="bg-accent hover:bg-accent/80 text-white p-3 md:p-4 h-auto flex flex-col items-center space-y-1 md:space-y-2">
            <Search className="h-5 w-5 md:h-6 md:w-6" />
            <span className="text-xs md:text-sm">Find Tutors</span>
          </Button>
          <Button className="bg-secondary hover:bg-secondary/80 text-white p-3 md:p-4 h-auto flex flex-col items-center space-y-1 md:space-y-2">
            <Calendar className="h-5 w-5 md:h-6 md:w-6" />
            <span className="text-xs md:text-sm">Book Session</span>
          </Button>
          <Button className="bg-gray-700 hover:bg-gray-600 text-white p-3 md:p-4 h-auto flex flex-col items-center space-y-1 md:space-y-2">
            <MessageSquare className="h-5 w-5 md:h-6 md:w-6" />
            <span className="text-xs md:text-sm">Messages</span>
          </Button>
          <Button className="bg-gray-700 hover:bg-gray-600 text-white p-3 md:p-4 h-auto flex flex-col items-center space-y-1 md:space-y-2">
            <TrendingUp className="h-5 w-5 md:h-6 md:w-6" />
            <span className="text-xs md:text-sm">Progress</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
          {/* Upcoming Sessions */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-poppins font-semibold text-white flex items-center">
                <Clock className="h-5 w-5 mr-2 text-accent" />
                Upcoming Sessions
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
                      <p className="text-sm text-gray-300">with {session.tutor}</p>
                    </div>
                    <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                      {session.date}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{session.time} • {session.duration}</span>
                    <Button className="text-accent hover:text-accent/80 text-xs">
                      Join Session
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Sessions & Reviews */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-poppins font-semibold text-white flex items-center">
                <Star className="h-5 w-5 mr-2 text-accent" />
                Recent Sessions
              </h2>
              <Button className="text-accent hover:text-accent/80 text-sm">
                View all
              </Button>
            </div>

            <div className="space-y-3">
              {recentSessions.map((session) => (
                <div key={session.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-white">{session.subject}</h3>
                      <p className="text-sm text-gray-300">with {session.tutor}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < session.rating ? 'text-yellow-400 fill-current' : 'text-gray-500'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{session.feedback}</p>
                  <span className="text-xs text-gray-500">{session.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommended Tutors */}
        <div className="bg-gray-800 rounded-xl p-4 md:p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-poppins font-semibold text-white flex items-center">
              <User className="h-5 w-5 mr-2 text-accent" />
              Recommended Tutors
            </h2>
            <Button className="text-accent hover:text-accent/80 text-sm">
              View all
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {recommendedTutors.map((tutor) => (
              <div key={tutor.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                    <User className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{tutor.name}</h3>
                    <p className="text-sm text-gray-300">{tutor.subject}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm text-white">{tutor.rating}</span>
                  </div>
                  <span className="text-sm font-medium text-accent">{tutor.rate}</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">{tutor.availability}</p>
                <Button className="w-full bg-accent hover:bg-accent/80 text-white text-sm">
                  Book Session
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Progress */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-poppins font-semibold text-white flex items-center mb-4">
            <BookOpen className="h-5 w-5 mr-2 text-accent" />
            Learning Progress
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">12</div>
              <div className="text-sm text-gray-300">Sessions Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">24</div>
              <div className="text-sm text-gray-300">Hours Learned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">4.8</div>
              <div className="text-sm text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LearnerDashboardPage