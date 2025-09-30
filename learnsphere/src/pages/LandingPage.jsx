import { BookOpen, Users, Star, TrendingUp } from 'lucide-react'
import Button from '../components/ui/Button'
import logoImage from '../assets/images/logo.png'

const LandingPage = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">      
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  src={logoImage} 
                  alt="LearnSphere Logo" 
                  className="h-10 w-10"
                />
                <span className="ml-3 text-2xl font-poppins font-bold text-white hover:text-accent transition-colors">
                  LearnSphere
                </span>
              </div>
            </div>



            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </a>
              <a href="/signup">
                <Button variant="primary" size="sm">
                  Sign Up
                </Button>
              </a>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="md:hidden">
              <Button variant="primary" size="sm">
                Sign Up
              </Button>
            </div>
          </div>
        </div>


      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-accent/10 py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6">
              Learn Together,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                Grow Together
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto font-inter">
              Connect with peer tutors and learners in a collaborative educational environment. 
              Share knowledge, learn from others, and achieve your academic goals together.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-gray-400">Active Tutors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">2,000+</div>
                <div className="text-gray-400">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-gray-400">Subjects</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/signup">
                <Button className="bg-accent hover:bg-accent/80 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 w-full sm:w-auto">
                  Get Started as Learner
                </Button>
              </a>
              <a href="/signup">
                <Button className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 w-full sm:w-auto">
                  Become a Tutor
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">
              Why Choose LearnSphere?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Experience peer-to-peer learning like never before with our comprehensive platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-xl bg-gray-700 border border-gray-600 hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-white mb-4">
                Peer-to-Peer Learning
              </h3>
              <p className="text-gray-300">
                Connect with fellow students who understand your learning journey and can provide relatable guidance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-xl bg-gray-700 border border-gray-600 hover:border-secondary hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-white mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-300">
                Our rating system ensures you connect with the best tutors and maintain high learning standards.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-xl bg-gray-700 border border-gray-600 hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-white mb-4">
                Progress Tracking
              </h3>
              <p className="text-gray-300">
                Monitor your learning progress with detailed analytics and insights to optimize your study sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-dark mb-4">
              How LearnSphere Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started is simple. Follow these three easy steps to begin your learning journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-poppins font-semibold text-dark mb-4">
                Create Your Profile
              </h3>
              <p className="text-gray-600">
                Sign up and create your profile as either a tutor or learner. Add your subjects, skills, and preferences.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-white rounded-full text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-poppins font-semibold text-dark mb-4">
                Find Your Match
              </h3>
              <p className="text-gray-600">
                Browse through our community of tutors and learners. Use filters to find the perfect study partner.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-white rounded-full text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-poppins font-semibold text-dark mb-4">
                Start Learning
              </h3>
              <p className="text-gray-600">
                Book sessions, connect with your peers, and start your collaborative learning journey today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning together on LearnSphere
          </p>
          <Button variant="accent" size="xl" className="bg-white text-primary hover:bg-gray-100">
            Join LearnSphere Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4 group cursor-pointer">
                <img 
                  src={logoImage} 
                  alt="LearnSphere Logo" 
                  className="h-12 w-12 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="ml-3 text-2xl font-poppins font-bold group-hover:text-primary transition-colors duration-300">
                  LearnSphere
                </span>
              </div>
              <p className="text-gray-300 mb-4">
                Empowering students through peer-to-peer learning and collaborative education.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-poppins font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-poppins font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">support@learnsphere.com</li>
                <li className="text-gray-300">Help Center</li>
                <li className="text-gray-300">Community Guidelines</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 LearnSphere. All rights reserved. Built for academic excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage