import { useState } from 'react'
import { Search, Filter, Star, MapPin, Clock, DollarSign, Heart } from 'lucide-react'
import Layout from '../components/Layout'
import Button from '../components/ui/Button'

const TutorSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    subject: '',
    priceRange: '',
    rating: '',
    availability: '',
    location: ''
  })

  const tutors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: '/api/placeholder/100/100',
      rating: 4.9,
      reviewCount: 127,
      subjects: ['Mathematics', 'Calculus', 'Statistics'],
      hourlyRate: 25,
      location: 'Online & Campus',
      availability: 'Available now',
      university: 'MIT',
      year: 'PhD Student',
      bio: 'Experienced math tutor with 5+ years helping students excel in calculus and statistics.',
      responseTime: '~1 hour',
      isFavorite: false
    },
    {
      id: 2,
      name: 'Dr. Ahmed Hassan',
      image: '/api/placeholder/100/100',
      rating: 4.8,
      reviewCount: 89,
      subjects: ['Physics', 'Quantum Mechanics'],
      hourlyRate: 35,
      location: 'Online only',
      availability: 'Available tomorrow',
      university: 'Stanford',
      year: 'Professor',
      bio: 'Physics professor with expertise in quantum mechanics and theoretical physics.',
      responseTime: '~2 hours',
      isFavorite: true
    },
    {
      id: 3,
      name: 'Emma Chen',
      image: '/api/placeholder/100/100',
      rating: 4.7,
      reviewCount: 56,
      subjects: ['Computer Science', 'Python', 'Data Structures'],
      hourlyRate: 30,
      location: 'Campus only',
      availability: 'Available this week',
      university: 'Berkeley',
      year: 'Graduate Student',
      bio: 'CS graduate student specializing in algorithms and data structures.',
      responseTime: '~3 hours',
      isFavorite: false
    }
  ]

  return (
    <Layout currentPage="search" userRole="learner">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-poppins font-bold text-white mb-2">
            Find Your Perfect Tutor
          </h1>
          <p className="text-gray-300">
            Discover experienced peer tutors ready to help you succeed
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by subject, tutor name, or keyword..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Filter Button */}
            <Button variant="outline" size="md" className="lg:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {['Mathematics', 'Physics', 'Computer Science', 'Chemistry', 'Biology'].map((subject) => (
              <button
                key={subject}
                className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-full transition-colors"
              >
                {subject}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-300">
              Found <span className="text-white font-semibold">{tutors.length}</span> tutors
            </p>
            <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm">
              <option>Sort by: Best Match</option>
              <option>Highest Rated</option>
              <option>Lowest Price</option>
              <option>Most Reviews</option>
            </select>
          </div>

          {/* Tutor Cards */}
          <div className="grid gap-6">
            {tutors.map((tutor) => (
              <div key={tutor.id} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-colors">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Profile Info */}
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-poppins font-semibold text-white">{tutor.name}</h3>
                          <p className="text-gray-300 text-sm">{tutor.university} • {tutor.year}</p>
                        </div>
                        <button className="text-gray-400 hover:text-red-400 transition-colors">
                          <Heart className={`h-5 w-5 ${tutor.isFavorite ? 'fill-red-400 text-red-400' : ''}`} />
                        </button>
                      </div>

                      {/* Rating & Reviews */}
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-white font-medium">{tutor.rating}</span>
                          <span className="text-gray-400 text-sm">({tutor.reviewCount} reviews)</span>
                        </div>
                        <span className="text-gray-400 text-sm">Response time: {tutor.responseTime}</span>
                      </div>

                      {/* Subjects */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {tutor.subjects.map((subject, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>

                      {/* Bio */}
                      <p className="text-gray-300 text-sm mb-4">{tutor.bio}</p>

                      {/* Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>₦{tutor.hourlyRate.toLocaleString()}/hour</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{tutor.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{tutor.availability}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex lg:flex-col gap-3 lg:w-40">
                    <Button variant="accent" size="md" className="flex-1 lg:flex-none">
                      Book Session
                    </Button>
                    <Button variant="outline" size="md" className="flex-1 lg:flex-none">
                      View Profile
                    </Button>
                    <Button variant="ghost" size="md" className="flex-1 lg:flex-none">
                      Message
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TutorSearchPage