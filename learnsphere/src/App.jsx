import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import TutorProfileSetupPage from './pages/ProfileSetupPage'
import LearnerProfileSetupPage from './pages/LearnerProfileSetupPage'
import LearnerDashboardPage from './pages/LearnerDashboardPage'
import TutorDashboardPage from './pages/TutorDashboardPage'
import DashboardPage from './pages/DashboardPage'
import TutorSearchPage from './pages/TutorSearchPage'
import SessionBookingPage from './pages/SessionBookingPage'
import MySessionsPage from './pages/MySessionsPage'
import AnalyticsPage from './pages/AnalyticsPage'
import SettingsPage from './pages/SettingsPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Onboarding */}
          <Route path="/tutor/profile-setup" element={<TutorProfileSetupPage />} />
          <Route path="/learner/profile-setup" element={<LearnerProfileSetupPage />} />
          
          {/* Learner Routes */}
          <Route path="/dashboard" element={<DashboardPage userRole="learner" />} />
          <Route path="/learner/dashboard" element={<LearnerDashboardPage />} />
          <Route path="/search" element={<TutorSearchPage />} />
          <Route path="/book-session" element={<SessionBookingPage />} />
          <Route path="/sessions" element={<MySessionsPage userRole="learner" />} />
          <Route path="/analytics" element={<AnalyticsPage userRole="learner" />} />
          <Route path="/settings" element={<SettingsPage userRole="learner" />} />
          
          {/* Tutor Routes */}
          <Route path="/tutor/dashboard" element={<TutorDashboardPage />} />
          <Route path="/tutor/sessions" element={<MySessionsPage userRole="tutor" />} />
          <Route path="/tutor/analytics" element={<AnalyticsPage userRole="tutor" />} />
          <Route path="/tutor/settings" element={<SettingsPage userRole="tutor" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
