import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, BookOpen } from 'lucide-react'
import Button from '../components/ui/Button'
import logoImage from '../assets/images/logo.png'

const LoginPage = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', formData)
    
    // For demo purposes, determine role based on email
    // In a real app, this would come from authentication response
    if (formData.email && formData.password) {
      const isTutor = formData.email.includes('tutor') || formData.email.includes('teacher')
      
      if (isTutor) {
        navigate('/tutor/dashboard')
      } else {
        navigate('/learner/dashboard')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-primary/20 flex items-center justify-center px-4">
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
            Welcome Back
          </h2>
          <p className="mt-2 text-gray-300">
            Sign in to your account to continue learning
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors pr-10"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-accent focus:ring-accent border-gray-600 bg-gray-700 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-accent hover:text-accent/80 transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="w-full"
            >
              Sign In
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Don't have an account?{' '}
              <a href="/signup" className="text-accent font-medium hover:text-accent/80 transition-colors">
                Sign up here
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

export default LoginPage