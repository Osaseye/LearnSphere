import { useState } from 'react'
import { Menu, X, Bell, User2, Settings, LogOut, Home, BookOpen, Calendar, BarChart3, Search, ChevronLeft } from 'lucide-react'
import logoImage from '../assets/images/logo.png'

const Layout = ({ children, currentPage = 'dashboard', userRole = 'learner' }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home, current: currentPage === 'dashboard' },
    ...(userRole === 'learner' ? [
      { name: 'Find Tutors', href: '/search', icon: Search, current: currentPage === 'search' },
    ] : []),
    { name: 'My Sessions', href: '/sessions', icon: Calendar, current: currentPage === 'sessions' },
    { name: 'Analytics', href: '/analytics', icon: BarChart3, current: currentPage === 'analytics' },
    { name: 'Settings', href: '/settings', icon: Settings, current: currentPage === 'settings' },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm bg-gray-800 border-r border-gray-700">
            <div className="flex items-center justify-between flex-shrink-0 px-4 py-4 border-b border-gray-700">
              <div className="flex items-center">
                <img src={logoImage} alt="LearnSphere" className="h-8 w-8" />
                <span className="ml-3 text-lg font-poppins font-bold text-white">LearnSphere</span>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-white">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 px-4 py-4 overflow-y-auto">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                      item.current
                        ? 'bg-accent text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className={`hidden lg:fixed lg:inset-y-0 lg:flex lg:flex-col transition-all duration-300 ${sidebarCollapsed ? 'lg:w-16' : 'lg:w-64'}`}>
        <nav className="flex flex-col flex-1 bg-gray-800 border-r border-gray-700">
          <div className="flex items-center flex-shrink-0 px-4 py-4 border-b border-gray-700">
            <img src={logoImage} alt="LearnSphere" className="h-8 w-8" />
            {!sidebarCollapsed && <span className="ml-3 text-lg font-poppins font-bold text-white">LearnSphere</span>}
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="ml-auto text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft className={`h-5 w-5 transition-transform duration-200 ${sidebarCollapsed ? 'rotate-180' : ''}`} />
            </button>
          </div>
          <div className="flex-1 px-4 py-4 overflow-y-auto">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    item.current
                      ? 'bg-accent text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  title={sidebarCollapsed ? item.name : ''}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!sidebarCollapsed && <span className="ml-3">{item.name}</span>}
                </a>
              ))}
            </nav>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'lg:pl-16' : 'lg:pl-64'}`}>
        {/* Top navigation */}
        <header className="bg-gray-800 border-b border-gray-700">
          <div className="flex items-center justify-between px-4 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-400 hover:text-white lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 block h-2 w-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile dropdown */}
              <div className="relative">
                <button className="flex items-center space-x-3 p-2 text-gray-300 hover:text-white transition-colors">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <User2 className="h-4 w-4" />
                  </div>
                  <span className="hidden md:block text-sm font-medium">John Doe</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout