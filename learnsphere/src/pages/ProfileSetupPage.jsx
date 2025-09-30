import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Upload, X, Plus } from 'lucide-react'
import Button from '../components/ui/Button'
import logoImage from '../assets/images/logo.png'

const TutorProfileSetupPage = () => {
  const navigate = useNavigate()
  const [profileImage, setProfileImage] = useState(null)
  const [skills, setSkills] = useState([])
  const [interests, setInterests] = useState([])
  const [newSkill, setNewSkill] = useState('')
  const [newInterest, setNewInterest] = useState('')
  const [formData, setFormData] = useState({
    bio: '',
    university: '',
    yearOfStudy: '',
    major: '',
    hourlyRate: '',
    availability: []
  })

  const userRole = 'tutor' // This is explicitly for tutors

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill('')
    }
  }

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove))
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
    console.log('Profile setup:', { ...formData, skills, interests, profileImage })
    
    // Redirect to tutor dashboard
    navigate('/tutor/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-primary/20">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="LearnSphere Logo" 
              className="h-8 w-8"
            />
            <span className="ml-3 text-xl font-poppins font-bold text-white">
              LearnSphere
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-poppins font-bold text-white mb-2">
            Complete Your Tutor Profile
          </h1>
          <p className="text-gray-300">
            Set up your tutoring profile and start helping students learn
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Profile Picture */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full bg-gray-700 border-4 border-gray-600 overflow-hidden flex items-center justify-center">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <Upload className="h-12 w-12 text-gray-400" />
                  )}
                </div>
                <label htmlFor="profile-upload" className="absolute bottom-0 right-0 bg-accent hover:bg-accent/90 text-white rounded-full p-2 cursor-pointer transition-colors">
                  <Upload className="h-4 w-4" />
                </label>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
              <p className="mt-2 text-sm text-gray-400">Upload your profile picture</p>
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="university" className="block text-sm font-medium text-gray-300 mb-2">
                  University/Institution
                </label>
                <input
                  id="university"
                  name="university"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="Your university"
                  value={formData.university}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="major" className="block text-sm font-medium text-gray-300 mb-2">
                  Major/Field of Study
                </label>
                <input
                  id="major"
                  name="major"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="Your major"
                  value={formData.major}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="yearOfStudy" className="block text-sm font-medium text-gray-300 mb-2">
                  Year of Study
                </label>
                <select
                  id="yearOfStudy"
                  name="yearOfStudy"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  value={formData.yearOfStudy}
                  onChange={handleInputChange}
                >
                  <option value="">Select year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                  <option value="graduate">Graduate</option>
                  <option value="postgraduate">Postgraduate</option>
                </select>
              </div>

              {userRole === 'tutor' && (
                <div>
                  <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-300 mb-2">
                    Hourly Rate (₦)
                  </label>
                  <input
                    id="hourlyRate"
                    name="hourlyRate"
                    type="number"
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="2500"
                    value={formData.hourlyRate}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>

            {/* Bio */}
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-300 mb-2">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows="4"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                placeholder={`Tell us about yourself as a ${userRole}...`}
                value={formData.bio}
                onChange={handleInputChange}
              />
            </div>

            {/* Skills */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {userRole === 'tutor' ? 'Subjects you can teach' : 'Subjects you want to learn'}
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                  className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="Add a subject"
                />
                <Button type="button" onClick={addSkill} variant="accent" size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-accent/20 text-accent text-sm rounded-full"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="hover:text-accent/80"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Interests & Hobbies
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addInterest())}
                  className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="Add an interest"
                />
                <Button type="button" onClick={addInterest} variant="secondary" size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full"
                  >
                    {interest}
                    <button
                      type="button"
                      onClick={() => removeInterest(interest)}
                      className="hover:text-secondary/80"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="px-12"
              >
                Complete Setup
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TutorProfileSetupPage