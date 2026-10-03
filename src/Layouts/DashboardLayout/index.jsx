import {NavLink, Outlet} from 'react-router'
import {
  BarChart3,
  Brain,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Code2,
  Home,
  Lightbulb,
  LogOut,
  Menu,
  Settings,
  Sparkles,
  Target,
  UserRound,
  X,
} from 'lucide-react'
import {useState} from 'react'

import {useAuth} from '../../context/AuthContext'

import './index.css'

const DashboardLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const {user, logout} = useAuth()

  const navItems = [
    {
      label: 'Overview',
      path: '/dashboard',
      icon: Home,
    },
    {
      label: 'Practice',
      path: '/practice',
      icon: Code2,
    },
    {
      label: 'Failures',
      path: '/failures',
      icon: CircleAlert,
    },
    {
      label: 'Insights',
      path: '/insights',
      icon: Brain,
    },
    {
      label: 'Recommendations',
      path: '/recommendations',
      icon: Target,
    },
  ]

  const accountItems = [
    {
      label: 'Profile',
      path: '/profile',
      icon: UserRound,
    },
  ]

  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false)
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <div
      className={`dashboard-layout ${
        sidebarCollapsed ? 'sidebar-is-collapsed' : ''
      } ${mobileSidebarOpen ? 'mobile-sidebar-open' : ''}`}
    >
      {/* Mobile overlay */}
      <div
        className="dashboard-mobile-overlay"
        onClick={closeMobileSidebar}
      />

      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="dashboard-sidebar-top">
          <div className="dashboard-brand">
            <span className="dashboard-brand-icon">
              <Brain size={19} />
            </span>

            {!sidebarCollapsed && (
              <span className="dashboard-brand-name">
                FailSense
              </span>
            )}
          </div>

          <button
            type="button"
            className="dashboard-mobile-close"
            onClick={closeMobileSidebar}
            aria-label="Close sidebar"
          >
            <X size={19} />
          </button>

          <button
            type="button"
            className="dashboard-collapse-button"
            onClick={() =>
              setSidebarCollapsed(prev => !prev)
            }
            aria-label={
              sidebarCollapsed
                ? 'Expand sidebar'
                : 'Collapse sidebar'
            }
          >
            {sidebarCollapsed ? (
              <ChevronRight size={16} />
            ) : (
              <ChevronLeft size={16} />
            )}
          </button>
        </div>

        {/* Intelligence status */}
        <div className="dashboard-intelligence-status">
          <div className="dashboard-status-icon">
            <Sparkles size={15} />
          </div>

          {!sidebarCollapsed && (
            <div className="dashboard-status-content">
              <span>AI INTELLIGENCE</span>
              <strong>
                <i />
                Learning engine active
              </strong>
            </div>
          )}
        </div>

        {/* Main navigation */}
        <nav className="dashboard-navigation">
          <span className="dashboard-nav-label">
            {!sidebarCollapsed && 'WORKSPACE'}
          </span>

          {navItems.map(item => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/dashboard'}
                onClick={closeMobileSidebar}
                className={({isActive}) =>
                  `dashboard-nav-link ${
                    isActive ? 'active' : ''
                  }`
                }
                title={sidebarCollapsed ? item.label : ''}
              >
                <Icon size={18} />

                {!sidebarCollapsed && (
                  <span>{item.label}</span>
                )}

                {!sidebarCollapsed &&
                  item.label === 'Insights' && (
                    <span className="dashboard-ai-badge">
                      AI
                    </span>
                  )}
              </NavLink>
            )
          })}

          <span className="dashboard-nav-label dashboard-account-label">
            {!sidebarCollapsed && 'ACCOUNT'}
          </span>

          {accountItems.map(item => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMobileSidebar}
                className={({isActive}) =>
                  `dashboard-nav-link ${
                    isActive ? 'active' : ''
                  }`
                }
                title={sidebarCollapsed ? item.label : ''}
              >
                <Icon size={18} />

                {!sidebarCollapsed && (
                  <span>{item.label}</span>
                )}
              </NavLink>
            )
          })}
        </nav>

        {/* Sidebar bottom */}
        <div className="dashboard-sidebar-bottom">
          {!sidebarCollapsed && (
            <div className="dashboard-sidebar-tip">
              <div className="dashboard-tip-icon">
                <Lightbulb size={15} />
              </div>

              <div>
                <strong>Learning tip</strong>
                <p>
                  Review your recurring mistakes before
                  starting a new problem.
                </p>
              </div>
            </div>
          )}

          <button
            type="button"
            className="dashboard-logout-button"
            onClick={handleLogout}
            title={sidebarCollapsed ? 'Logout' : ''}
          >
            <LogOut size={17} />

            {!sidebarCollapsed && <span>Log out</span>}
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="dashboard-main">
        {/* Top bar */}
        <header className="dashboard-header">
          <div className="dashboard-header-left">
            <button
              type="button"
              className="dashboard-mobile-menu"
              onClick={() => setMobileSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu size={20} />
            </button>

            <div className="dashboard-page-context">
              <span>FAILSENSE</span>
              <strong>Learning Intelligence</strong>
            </div>
          </div>

          <div className="dashboard-header-right">
            <div className="dashboard-header-ai">
              <span />
              AI engine online
            </div>

            <div className="dashboard-user">
              <div className="dashboard-user-avatar">
                {user?.name
                  ? user.name.charAt(0).toUpperCase()
                  : 'U'}
              </div>

              <div className="dashboard-user-info">
                <strong>{user?.name || 'User'}</strong>
                <span>{user?.email || 'user@example.com'}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout