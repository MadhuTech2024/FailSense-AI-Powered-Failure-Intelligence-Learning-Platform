import {createContext, useContext, useEffect, useState} from 'react'

const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Restore login after refreshing the page
  useEffect(() => {
    const storedUser = localStorage.getItem('failsense_user')

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)

        setUser(parsedUser)
        setIsAuthenticated(true)
      } catch (error) {
        localStorage.removeItem('failsense_user')
      }
    }

    setIsLoading(false)
  }, [])

  // Temporary login function
  // Later this will call our Node.js API
  const login = userData => {
    const loggedInUser = {
      id: userData.id || Date.now(),
      name: userData.name || 'FailSense User',
      email: userData.email,
    }

    setUser(loggedInUser)
    setIsAuthenticated(true)

    localStorage.setItem(
      'failsense_user',
      JSON.stringify(loggedInUser),
    )
  }

  // Register user
  // Later this will call the backend registration API
  const register = userData => {
    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
    }

    setUser(newUser)
    setIsAuthenticated(true)

    localStorage.setItem(
      'failsense_user',
      JSON.stringify(newUser),
    )
  }

  // Logout
  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)

    localStorage.removeItem('failsense_user')
    localStorage.removeItem('failsense_token')
  }

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}

export default AuthProvider