import {
  ArrowRight,
  Brain,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Sparkles,
} from 'lucide-react'

import {FcGoogle} from 'react-icons/fc'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

import {useState} from 'react'

import './index.css'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = event => {
    event.preventDefault()

    console.log({
      email,
      password,
    })
  }

  return (
    <main className="login-page">
      <div className="login-background-grid" />
      <div className="login-glow login-glow-one" />
      <div className="login-glow login-glow-two" />

      <div className="login-container">
        {/* LEFT SIDE */}
        <section className="login-showcase">
          <div className="login-brand">
            <div className="login-brand-icon">
              <Sparkles size={18} />
            </div>

            <span>FailSense</span>
          </div>

          <div className="login-showcase-content">
            <div className="login-kicker">
              <span />
              LEARNING INTELLIGENCE
            </div>

            <h1>
              Don't just
              <br />
              <span>solve problems.</span>
              <br />
              Understand yourself.
            </h1>

            <p>
              Track your failures, discover recurring patterns,
              and turn every mistake into your next improvement.
            </p>
          </div>

          {/* Intelligence Preview */}
          <div className="login-preview">
            <div className="login-preview-header">
              <div>
                <span>FAILURE INTELLIGENCE</span>
                <strong>Personal learning signal</strong>
              </div>

              <div className="preview-live">
                <i />
                LIVE
              </div>
            </div>

            <div className="login-preview-body">
              <div className="preview-brain">
                <div className="preview-ring ring-a" />
                <div className="preview-ring ring-b" />
                <div className="preview-core">
                  <Brain size={21} />
                </div>
              </div>

              <div className="preview-insights">
                <div className="preview-insight">
                  <span>TOP WEAKNESS</span>
                  <strong>Edge cases</strong>
                  <div className="preview-progress">
                    <span />
                  </div>
                </div>

                <div className="preview-insight">
                  <span>IMPROVEMENT</span>
                  <strong>+24.8%</strong>
                  <div className="preview-progress improvement">
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="login-trust">
            <Check size={14} />
            Your learning journey stays focused on you.
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="login-form-section">
          <div className="login-form-card">
            <div className="login-form-heading">
              <div className="login-mobile-logo">
                <Sparkles size={17} />
              </div>

              <span className="login-form-label">
                WELCOME BACK
              </span>

              <h2>Continue learning.</h2>

              <p>
                Sign in to access your personal learning intelligence.
              </p>
            </div>

            <form onSubmit={onSubmit}>
              {/* Email */}
              <div className="login-input-group">
                <label htmlFor="email">Email address</label>

                <div className="login-input-wrapper">
                  <Mail size={17} />

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="login-input-group">
                <div className="login-password-label">
                  <label htmlFor="password">Password</label>

                  <a href="#forgot-password">
                    Forgot password?
                  </a>
                </div>

                <div className="login-input-wrapper">
                  <LockKeyhole size={17} />

                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword(previous => !previous)
                    }
                    aria-label={
                      showPassword
                        ? 'Hide password'
                        : 'Show password'
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

              {/* Remember */}
              <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
              </div>

              {/* Submit */}
              <button type="submit" className="login-submit">
                <span>Sign in to FailSense</span>
                <ArrowRight size={17} />
              </button>
            </form>

            {/* Divider */}
            <div className="login-divider">
              <span />
              <p>OR</p>
              <span />
            </div>

            {/* Demo */}
           <div className="login-social-buttons">
  <button type="button" className="login-social-button">
    <FcGoogle size={19} />
    <span>Continue with Google</span>
  </button>

  <button type="button" className="login-social-button">
    <FaGithub size={18} />
    <span>Continue with GitHub</span>
  </button>

  <button type="button" className="login-social-button">
    <FaLinkedinIn size={18} />
    <span>Continue with LinkedIn</span>
  </button>
</div>

<button
  type="button"
  className="login-demo-button"
  onClick={() => {
    setEmail('demo@failsense.ai')
    setPassword('Demo@12345')
  }}
>
  <Sparkles size={16} />
  Continue with demo account
</button>

            <p className="login-register">
              Don't have an account?
              <a href="#register">Create one</a>
            </p>
          </div>

          <div className="login-footer-note">
            <span>SECURE LEARNING ENVIRONMENT</span>
            <div>
              <LockKeyhole size={11} />
              Protected
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Login