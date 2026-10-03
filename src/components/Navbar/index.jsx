import {useEffect, useState} from 'react'
import {Menu, X, ArrowUpRight} from 'lucide-react'
import './index.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-icon">
            <span>F</span>
          </div>

          <span className="logo-text">
            Fail<span>Sense</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#features" className="nav-link">
            Features
          </a>

          <a href="#how-it-works" className="nav-link">
            How It Works
          </a>

          <a href="#insights" className="nav-link">
            Insights
          </a>

          <a href="#about" className="nav-link">
            About
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <a href="/login" className="login-link">
            Log in
          </a>

          <a href="/register" className="get-started-btn">
            <span>Get Started</span>
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
        <a href="#features" onClick={closeMenu}>
          Features
        </a>

        <a href="#how-it-works" onClick={closeMenu}>
          How It Works
        </a>

        <a href="#insights" onClick={closeMenu}>
          Insights
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <div className="mobile-actions">
          <a href="/login" className="mobile-login" onClick={closeMenu}>
            Log in
          </a>

          <a href="/register" className="mobile-get-started" onClick={closeMenu}>
            Get Started
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar