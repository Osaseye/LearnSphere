import { useState } from 'react'
import { Calendar, Clock, Video, MapPin, DollarSign, Star, ArrowLeft } from 'lucide-react'
import Layout from '../components/Layout'
import Button from '../components/ui/Button'

const SessionBookingPage = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [sessionType, setSessionType] = useState('online')
  const [duration, setDuration] = useState('60')
  const [notes, setNotes] = useState('')

  // Mock tutor data
  const tutor = {
    name: 'Sarah Johnson',
    rating: 4.9,
    reviewCount: 127,
    subject: 'Mathematics',
    hourlyRate: 25,
    university: 'MIT'
  }

  const availableSlots = {
    '2025-09-27': ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'],
    '2025-09-28': ['10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'],
    '2025-09-29': ['9:00 AM', '12:00 PM', '2:00 PM', '6:00 PM']
  }

  const handleBooking = (e) => {
    e.preventDefault()
    console.log('Booking session:', {
      tutor: tutor.name,
      date: selectedDate,
      time: selectedTime,
      duration,
      sessionType,
      notes
    })
  }

  const totalCost = (parseInt(duration) / 60) * tutor.hourlyRate

  return (
    <Layout currentPage="search" userRole="learner">
      <div className="p-6">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Search
          </Button>
          <h1 className="text-3xl font-poppins font-bold text-white">
            Book a Session
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <form onSubmit={handleBooking} className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Select Date
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.keys(availableSlots).map((date) => (
                      <button
                        key={date}
                        type="button"
                        onClick={() => setSelectedDate(date)}
                        className={`p-3 text-sm rounded-lg border transition-colors ${
                          selectedDate === date
                            ? 'border-accent bg-accent/20 text-accent'
                            : 'border-gray-600 text-gray-300 hover:border-gray-500'
                        }`}
                      >
                        {new Date(date).toLocaleDateString('en-US', { 
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                {selectedDate && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Available Times
                    </label>
                    <div className="grid grid-cols-4 gap-3">
                      {availableSlots[selectedDate].map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`p-2 text-sm rounded-lg border transition-colors ${
                            selectedTime === time
                              ? 'border-accent bg-accent/20 text-accent'
                              : 'border-gray-600 text-gray-300 hover:border-gray-500'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Duration */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Session Duration
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="60">1 hour</option>
                    <option value="90">1.5 hours</option>
                    <option value="120">2 hours</option>
                  </select>
                </div>

                {/* Session Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Session Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setSessionType('online')}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        sessionType === 'online'
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-gray-600 text-gray-300 hover:border-gray-500'
                      }`}
                    >
                      <Video className="h-6 w-6 mx-auto mb-2" />
                      <div className="text-sm font-medium">Online</div>
                      <div className="text-xs opacity-80">Video call</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSessionType('in-person')}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        sessionType === 'in-person'
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-gray-600 text-gray-300 hover:border-gray-500'
                      }`}
                    >
                      <MapPin className="h-6 w-6 mx-auto mb-2" />
                      <div className="text-sm font-medium">In Person</div>
                      <div className="text-xs opacity-80">On campus</div>
                    </button>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-2">
                    Session Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows="3"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    placeholder="What would you like to focus on in this session?"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={!selectedDate || !selectedTime}
                >
                  Book Session - ₦{totalCost.toLocaleString()}
                </Button>
              </form>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            {/* Tutor Info */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-poppins font-semibold text-white mb-4">
                Session with {tutor.name}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-white">{tutor.rating}</span>
                  <span className="text-gray-400 text-sm">({tutor.reviewCount} reviews)</span>
                </div>
                
                <p className="text-gray-300">Subject: {tutor.subject}</p>
                <p className="text-gray-300">University: {tutor.university}</p>
                
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-green-500" />
                  <span className="text-white">₦{tutor.hourlyRate.toLocaleString()}/hour</span>
                </div>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-poppins font-semibold text-white mb-4">
                Booking Summary
              </h3>
              
              <div className="space-y-3 text-sm">
                {selectedDate && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Date:</span>
                    <span className="text-white">
                      {new Date(selectedDate).toLocaleDateString()}
                    </span>
                  </div>
                )}
                
                {selectedTime && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Time:</span>
                    <span className="text-white">{selectedTime}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">{parseInt(duration) / 60} hour{parseInt(duration) > 60 ? 's' : ''}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">Type:</span>
                  <span className="text-white capitalize">{sessionType.replace('-', ' ')}</span>
                </div>
                
                <div className="border-t border-gray-700 pt-3 mt-3">
                  <div className="flex justify-between font-semibold">
                    <span className="text-gray-300">Total:</span>
                    <span className="text-white">₦{totalCost.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Policies */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-poppins font-semibold text-white mb-4">
                Booking Policies
              </h3>
              
              <div className="space-y-2 text-sm text-gray-400">
                <p>• Free cancellation up to 2 hours before session</p>
                <p>• Late cancellation incurs 50% fee</p>
                <p>• No-show incurs full session fee</p>
                <p>• Payment processed after session completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SessionBookingPage