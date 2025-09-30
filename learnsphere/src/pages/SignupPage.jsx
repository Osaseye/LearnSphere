import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, User, GraduationCap } from 'lucide-react'
import Button from '../components/ui/Button'
import logoImage from '../assets/images/logo.png'

const SignupPage = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [userRole, setUserRole] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Signup attempt:', { ...formData, role: userRole })
    
    // Validate form and redirect to appropriate profile setup
    if (formData.firstName && formData.lastName && formData.email && formData.password && userRole) {
      if (userRole === 'tutor') {
        navigate('/tutor/profile-setup')
      } else {
        navigate('/learner/profile-setup')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-secondary/20 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full space-y-8">
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
            Join LearnSphere
          </h2>
          <p className="mt-2 text-gray-300">
            Create your account and start your learning journey
          </p>
        </div>

        {/* Role Selection */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700">
          <h3 className="text-lg font-poppins font-semibold text-white mb-4 text-center">
            Choose Your Role
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              type="button"
              onClick={() => setUserRole('learner')}
              className={`p-4 rounded-lg border-2 transition-colors ${
                userRole === 'learner'
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-gray-600 text-gray-300 hover:border-gray-500'
              }`}
            >
              <User className="h-8 w-8 mx-auto mb-2" />
              <div className="text-sm font-medium">Learner</div>
              <div className="text-xs opacity-80">I want to learn</div>
            </button>
            <button
              type="button"
              onClick={() => setUserRole('tutor')}
              className={`p-4 rounded-lg border-2 transition-colors ${
                userRole === 'tutor'
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-gray-600 text-gray-300 hover:border-gray-500'
              }`}
            >
              <GraduationCap className="h-8 w-8 mx-auto mb-2" />
              <div className="text-sm font-medium">Tutor</div>
              <div className="text-xs opacity-80">I want to teach</div>
            </button>
          </div>

          {/* Signup Form */}
          {userRole && (
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full px-3 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-sm"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full px-3 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-sm"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-3 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-sm"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="w-full px-3 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-sm pr-10"
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    className="w-full px-3 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors text-sm pr-10"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-accent focus:ring-accent border-gray-600 bg-gray-700 rounded mt-1"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                  I agree to the{' '}
                  <a href="#" className="text-accent hover:text-accent/80">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-accent hover:text-accent/80">Privacy Policy</a>
                </label>
              </div>

              {/* Create Account Button */}
              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full"
              >
                Create Account
              </Button>
            </form>
          )}

          {/* Sign In Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Already have an account?{' '}
              <a href="/login" className="text-accent font-medium hover:text-accent/80 transition-colors">
                Sign in here
              </a>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <a href="/" className="text-gray-300 hover:text-white transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignupPage