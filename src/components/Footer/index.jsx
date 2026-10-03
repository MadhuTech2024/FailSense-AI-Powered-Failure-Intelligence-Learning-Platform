import {ArrowUpRight, Mail, Sparkles} from 'lucide-react'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import './index.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="footer-container">
        {/* Top Brand Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Sparkles size={18} />
              </div>

              <span>FailSense</span>
            </div>

            <h2>
              Turn every failure
              <br />
              <span>into intelligence.</span>
            </h2>

            <p>
              An AI-powered learning platform that helps you understand
              your mistakes, discover patterns, and improve intelligently.
            </p>

            <a href="#start" className="footer-main-link">
              Start your journey
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* System Card */}
          <div className="footer-system-card">
            <div className="system-card-header">
              <div className="system-status">
                <span className="status-dot" />
                SYSTEM ONLINE
              </div>

              <Sparkles size={18} />
            </div>

            <div className="system-card-content">
              <span>LEARNING INTELLIGENCE</span>

              <h3>
                Your mistakes
                <br />
                <strong>have a signal.</strong>
              </h3>

              <div className="system-bars">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="system-card-footer">
              <span>Analysis engine</span>
              <strong>ACTIVE</strong>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Links */}
        <div className="footer-links-section">
          <div className="footer-links-brand">
            <span>FAILSENSE</span>
            <p>Failure → Insight → Growth</p>
          </div>

          <div className="footer-column">
            <h4>Product</h4>

            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#insights">Failure intelligence</a>
            <a href="#recommendations">Recommendations</a>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>

            <a href="#about">About us</a>
            <a href="#practice">Practice</a>
            <a href="#dashboard">Dashboard</a>
            <a href="#community">Community</a>
          </div>

          <div className="footer-column">
            <h4>Resources</h4>

            <a href="#docs">Documentation</a>
            <a href="#blog">Learning blog</a>
            <a href="#faq">FAQ</a>
            <a href="#support">Support</a>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>

            <a href="mailto:hello@failsense.ai">
              <Mail size={15} />
              hello@failsense.ai
            </a>

            <div className="footer-socials">
              <a href="#github" aria-label="GitHub">
                <FaGithub size={16} />
              </a>

              <a href="#linkedin" aria-label="LinkedIn">
                <FaLinkedinIn size={16} />
              </a>

              <a href="#twitter" aria-label="X">
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-signal">
          <div className="signal-content">
            <div className="signal-icon">
              <Sparkles size={18} />
            </div>

            <div>
              <span>THE FAILSENSE SIGNAL</span>
              <p>
                Insights about learning, failure, and getting better.
              </p>
            </div>
          </div>

          <form className="signal-form">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
            />

            <button type="submit">
              Subscribe
              <ArrowUpRight size={16} />
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© 2026 FailSense. Built for better learning.</p>

          <div className="footer-bottom-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#security">Security</a>
          </div>

          <div className="footer-built">
            <span>Built with</span>
            <Sparkles size={13} />
            <strong>intelligence</strong>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer