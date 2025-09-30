import { useState } from 'react'
import { Calendar, Clock, Video, MapPin, Star, MessageCircle, X, CheckCircle } from 'lucide-react'
import Layout from '../components/Layout'
import Button from '../components/ui/Button'

const MySessionsPage = ({ userRole = 'learner' }) => {
  const [activeTab, setActiveTab] = useState('upcoming')

  const sessions = {
    upcoming: [
      {
        id: 1,
        subject: 'Mathematics',
        tutor: 'Sarah Johnson',
        student: 'You',
        date: '2025-09-27',
        time: '2:00 PM',
        duration: '1 hour',
        type: 'online',
        status: 'confirmed',
        cost: 25
      },
      {
        id: 2,
        subject: 'Physics',
        tutor: 'Dr. Ahmed',
        student: 'Mike Chen',
        date: '2025-09-28',
        time: '4:30 PM',
        duration: '1.5 hours',
        type: 'in-person',
        status: 'pending',
        cost: 52.5
      }
    ],
    completed: [
      {
        id: 3,
        subject: 'Computer Science',
        tutor: 'Emma Chen',
        student: 'You',
        date: '2025-09-25',
        time: '10:00 AM',
        duration: '2 hours',
        type: 'online',
        status: 'completed',
        cost: 60,
        rating: 5,
        feedback: 'Excellent session! Very helpful with data structures.'
      }
    ],
    cancelled: [
      {
        id: 4,
        subject: 'Chemistry',
        tutor: 'John Smith',
        student: 'You',
        date: '2025-09-20',
        time: '3:00 PM',
        duration: '1 hour',
        type: 'online',
        status: 'cancelled',
        cost: 30,
        cancelReason: 'Tutor unavailable'
      }
    ]
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'text-green-400 bg-green-400/20'
      case 'pending': return 'text-yellow-400 bg-yellow-400/20'
      case 'completed': return 'text-blue-400 bg-blue-400/20'
      case 'cancelled': return 'text-red-400 bg-red-400/20'
      default: return 'text-gray-400 bg-gray-400/20'
    }
  }

  return (
    <Layout currentPage="sessions" userRole={userRole}>
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-poppins font-bold text-white mb-2">
            My Sessions
          </h1>
          <p className="text-gray-300">
            Manage your {userRole === 'tutor' ? 'tutoring' : 'learning'} sessions
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl mb-6">
          <div className="flex border-b border-gray-700">
            {['upcoming', 'completed', 'cancelled'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {tab} ({sessions[tab].length})
              </button>
            ))}
          </div>

          {/* Session List */}
          <div className="p-6">
            {sessions[activeTab].length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">No {activeTab} sessions</p>
              </div>
            ) : (
              <div className="space-y-4">
                {sessions[activeTab].map((session) => (
                  <div key={session.id} className="bg-gray-700 border border-gray-600 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-poppins font-semibold text-white">
                            {session.subject}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(session.status)}`}>
                            {session.status}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3">
                          {userRole === 'tutor' 
                            ? `Session with ${session.student}`
                            : `with ${session.tutor}`
                          }
                        </p>
                      </div>
                      {session.status === 'upcoming' && (
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(session.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{session.time} ({session.duration})</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        {session.type === 'online' ? (
                          <Video className="h-4 w-4" />
                        ) : (
                          <MapPin className="h-4 w-4" />
                        )}
                        <span className="capitalize">{session.type}</span>
                      </div>
                      <div className="text-gray-400">
                        ₦{session.cost.toLocaleString()}
                      </div>
                    </div>

                    {/* Completed Session Details */}
                    {session.status === 'completed' && session.rating && (
                      <div className="bg-gray-800 rounded-lg p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-gray-300">Your rating:</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < session.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        {session.feedback && (
                          <p className="text-gray-400 text-sm italic">{session.feedback}</p>
                        )}
                      </div>
                    )}

                    {/* Cancelled Session Details */}
                    {session.status === 'cancelled' && session.cancelReason && (
                      <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-4">
                        <p className="text-red-300 text-sm">
                          Cancellation reason: {session.cancelReason}
                        </p>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3">
                      {session.status === 'confirmed' && (
                        <>
                          <Button variant="accent" size="sm">
                            {session.type === 'online' ? 'Join Call' : 'Get Directions'}
                          </Button>
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button variant="ghost" size="sm">
                            Cancel
                          </Button>
                        </>
                      )}
                      {session.status === 'pending' && (
                        <>
                          <Button variant="primary" size="sm">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Confirm
                          </Button>
                          <Button variant="ghost" size="sm">
                            <X className="h-4 w-4 mr-1" />
                            Decline
                          </Button>
                        </>
                      )}
                      {session.status === 'completed' && !session.rating && (
                        <Button variant="accent" size="sm">
                          Rate Session
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MySessionsPage