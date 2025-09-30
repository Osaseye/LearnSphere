import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Upload, X, Plus } from 'lucide-react'
import Button from '../components/ui/Button'
import logoImage from '../assets/images/logo.png'

const LearnerProfileSetupPage = () => {
  const navigate = useNavigate()
  const [profileImage, setProfileImage] = useState(null)
  const [interests, setInterests] = useState([])
  const [newInterest, setNewInterest] = useState('')
  const [formData, setFormData] = useState({
    bio: '',
    university: '',
    yearOfStudy: '',
    major: '',
    learningGoals: '',
    preferredSubjects: []
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const addInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()])
      setNewInterest('')
    }
  }

  const removeInterest = (interestToRemove) => {
    setInterests(interests.filter(interest => interest !== interestToRemove))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setProfileImage(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Learner profile setup:', { ...formData, interests, profileImage })
    
    // Redirect to learner dashboard
    navigate('/learner/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-secondary/20 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="LearnSphere Logo" 
                className="h-12 w-12"
              />
              <span className="ml-3 text-3xl font-poppins font-bold text-white">
                LearnSphere
              </span>
            </div>
          </div>
          <h2 className="text-3xl font-poppins font-bold text-white">
            Complete Your Learner Profile
          </h2>
          <p className="mt-2 text-gray-300">
            Tell us about your learning goals and interests
          </p>
        </div>

        {/* Profile Setup Form */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Profile Image Upload */}
            <div className="text-center">
              <div className="relative inline-block">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-accent/20"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-700 border-4 border-gray-600 flex items-center justify-center">
                    <Upload className="h-8 w-8 text-gray-400" />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              <p className="mt-2 text-sm text-gray-300">Upload your profile photo</p>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-gray-400"
                placeholder="Tell us a bit about yourself..."
              />
            </div>

            {/* Academic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  University/Institution
                </label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-gray-400"
                  placeholder="Your university"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Year of Study
                </label>
                <select
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white"
                >
                  <option value="">Select year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Major/Field of Study
              </label>
              <input
                type="text"
                name="major"
                value={formData.major}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-gray-400"
                placeholder="Your field of study"
              />
            </div>

            {/* Learning Goals */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Learning Goals
              </label>
              <textarea
                name="learningGoals"
                value={formData.learningGoals}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-gray-400"
                placeholder="What do you hope to achieve through tutoring?"
              />
            </div>

            {/* Learning Interests */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Learning Interests
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent text-white placeholder-gray-400"
                  placeholder="Add a subject you're interested in"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addInterest())}
                />
                <Button 
                  type="button" 
                  onClick={addInterest}
                  className="px-4 py-2 bg-accent hover:bg-accent/80 text-white rounded-lg"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
                  >
                    {interest}
                    <button
                      type="button"
                      onClick={() => removeInterest(interest)}
                      className="ml-2 text-accent/70 hover:text-accent"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white font-semibold py-3 rounded-lg transition-all duration-200"
            >
              Complete Profile Setup
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LearnerProfileSetupPage