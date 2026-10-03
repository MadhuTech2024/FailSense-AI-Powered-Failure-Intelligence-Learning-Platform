import {Navigate, Outlet, useLocation} from 'react-router'
import {useAuth} from '../../context/AuthContext'
import './index.css'

const ProtectedRoute = () => {
  const {isAuthenticated, isLoading} = useAuth()
  const location = useLocation()

  // Wait until AuthContext checks localStorage
  if (isLoading) {
    return (
      <div className="protected-loading">
        <div className="protected-spinner" />
        <p>Loading your learning intelligence...</p>
      </div>
    )
  }

  // User is not logged in
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{from: location}}
      />
    )
  }

  // User is authenticated
  return <Outlet />
}

export default ProtectedRoute