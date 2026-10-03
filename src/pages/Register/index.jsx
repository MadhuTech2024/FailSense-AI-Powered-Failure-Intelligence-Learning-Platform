import {useState} from 'react'
import {
  ArrowRight,
  Brain,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  User,
} from 'lucide-react'

import {FcGoogle} from 'react-icons/fc'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

import './index.css'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const onChangeInput = event => {
    const {name, value} = event.target

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmit = event => {
    event.preventDefault()

    console.log(formData)
  }

  return (
    <main className="register-page">
      <section className="register-showcase">
        <div className="register-showcase-content">
          <a href="/" className="register-brand">
            <span className="register-brand-icon">
              <Brain size={20} />
            </span>

            <span>FailSense</span>
          </a>

          <div className="register-showcase-copy">
            <span className="register-eyebrow">
              <span className="register-eyebrow-dot" />
              LEARNING INTELLIGENCE
            </span>

            <h1>
              Every mistake
              <br />
              <span>has something</span>
              <br />
              to teach you.
            </h1>

            <p>
              Build an intelligent learning profile that understands your
              mistakes, discovers recurring patterns, and helps you improve
              with purpose.
            </p>
          </div>

          <div className="register-intelligence-card">
            <div className="register-card-header">
              <div>
                <span className="register-card-label">
                  YOUR LEARNING SIGNAL
                </span>
                <h3>Failure Intelligence</h3>
              </div>

              <span className="register-card-status">
                <span />
                ACTIVE
              </span>
            </div>

            <div className="register-card-body">
              <div className="register-signal-item">
                <div className="register-signal-icon purple">
                  <Brain size={17} />
                </div>

                <div className="register-signal-info">
                  <span>Top weakness</span>
                  <strong>Edge cases</strong>
                </div>

                <span className="register-signal-value">8×</span>
              </div>

              <div className="register-signal-item">
                <div className="register-signal-icon green">
                  <Check size={17} />
                </div>

                <div className="register-signal-info">
                  <span>Improvement</span>
                  <strong>Boundary conditions</strong>
                </div>

                <span className="register-signal-growth">
                  +24.8%
                </span>
              </div>
            </div>

            <div className="register-card-footer">
              <span>Personalized insight</span>
              <strong>
                You're improving where it matters.
              </strong>
            </div>
          </div>
        </div>

        <div className="register-showcase-glow register-glow-one" />
        <div className="register-showcase-glow register-glow-two" />
      </section>

      <section className="register-form-section">
        <div className="register-form-wrapper">
          <div className="register-mobile-brand">
            <span className="register-brand-icon">
              <Brain size={20} />
            </span>
            <span>FailSense</span>
          </div>

          <div className="register-heading">
            <span className="register-small-label">
              CREATE YOUR ACCOUNT
            </span>

            <h2>Start learning from your mistakes.</h2>

            <p>
              Create your FailSense account and turn every failed attempt
              into useful learning intelligence.
            </p>
          </div>

          <form className="register-form" onSubmit={onSubmit}>
            <div className="register-input-group">
              <label htmlFor="name">Full name</label>

              <div className="register-input-wrapper">
                <User size={17} />

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={onChangeInput}
                  required
                />
              </div>
            </div>

            <div className="register-input-group">
              <label htmlFor="email">Email address</label>

              <div className="register-input-wrapper">
                <Mail size={17} />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={onChangeInput}
                  required
                />
              </div>
            </div>

            <div className="register-input-group">
              <label htmlFor="password">Password</label>

              <div className="register-input-wrapper">
                <LockKeyhole size={17} />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={onChangeInput}
                  required
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() => setShowPassword(prev => !prev)}
                  aria-label={
                    showPassword ? 'Hide password' : 'Show password'
                  }
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
            </div>

            <div className="register-input-group">
              <label htmlFor="confirmPassword">
                Confirm password
              </label>

              <div className="register-input-wrapper">
                <LockKeyhole size={17} />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={onChangeInput}
                  required
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(prev => !prev)
                  }
                  aria-label={
                    showConfirmPassword
                      ? 'Hide password'
                      : 'Show password'
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
            </div>

            <label className="register-terms">
              <input type="checkbox" required />
              <span>
                I agree to the{' '}
                <a href="/terms">Terms of Service</a> and{' '}
                <a href="/privacy">Privacy Policy</a>.
              </span>
            </label>

            <button type="submit" className="register-submit">
              <span>Create account</span>
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="register-divider">
            <span>OR CONTINUE WITH</span>
          </div>

          <div className="register-social-buttons">
            <button type="button" className="register-social-button">
              <FcGoogle size={19} />
              <span>Google</span>
            </button>

            <button type="button" className="register-social-button">
              <FaGithub size={18} />
              <span>GitHub</span>
            </button>

            <button type="button" className="register-social-button">
              <FaLinkedinIn size={18} />
              <span>LinkedIn</span>
            </button>
          </div>

          <p className="register-login-text">
            Already have an account?
            <a href="/login"> Sign in</a>
          </p>

          <div className="register-security">
            <LockKeyhole size={14} />
            <span>Your learning data is securely protected.</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Register