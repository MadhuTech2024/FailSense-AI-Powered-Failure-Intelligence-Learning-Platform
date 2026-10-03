import {
  ArrowUpRight,
  Brain,
  Check,
  ChevronRight,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import './index.css'

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-background">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
      </div>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <section className="hero-content">
          <div className="hero-eyebrow">
            <Sparkles size={15} />
            <span>AI-POWERED LEARNING INTELLIGENCE</span>
          </div>

          <h1 className="hero-title">
            Your mistakes
            <br />
            are trying to
            <br />
            <span>tell you something.</span>
          </h1>

          <p className="hero-description">
            FailSense goes beyond right and wrong. It analyzes your failures,
            finds recurring patterns, and shows you exactly what you need to
            improve.
          </p>

          <div className="hero-actions">
            <button className="hero-primary-btn">
              Start analyzing
              <ArrowUpRight size={18} />
            </button>

            <button className="hero-secondary-btn">
              Explore platform
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="hero-trust">
            <div className="trust-icon">
              <Check size={14} />
            </div>

            <span>Turn every failed attempt into your next breakthrough.</span>
          </div>
        </section>

        {/* RIGHT PRODUCT PREVIEW */}
        <section className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="product-window">
            <div className="window-topbar">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="window-title">
                <Brain size={14} />
                Failure Intelligence
              </div>

              <div className="window-status">
                <span />
                Live
              </div>
            </div>

            <div className="dashboard-preview">
              <div className="preview-header">
                <div>
                  <p>Improvement score</p>
                  <h3>78.4%</h3>
                </div>

                <div className="score-growth">
                  <TrendingUp size={15} />
                  +18.2%
                </div>
              </div>

              <div className="chart-container">
                <div className="chart-labels">
                  <span>100</span>
                  <span>75</span>
                  <span>50</span>
                  <span>25</span>
                  <span>0</span>
                </div>

                <svg
                  className="hero-chart"
                  viewBox="0 0 500 180"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopOpacity="0.3" />
                      <stop offset="100%" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <path
                    className="chart-area"
                    d="M0 145 C45 135 55 120 90 125 C130 130 135 95 175 105 C215 115 220 80 260 88 C300 95 315 60 350 68 C390 75 405 35 440 45 C465 52 480 25 500 30 L500 180 L0 180 Z"
                  />

                  <path
                    className="chart-line"
                    d="M0 145 C45 135 55 120 90 125 C130 130 135 95 175 105 C215 115 220 80 260 88 C300 95 315 60 350 68 C390 75 405 35 440 45 C465 52 480 25 500 30"
                  />

                  <circle cx="500" cy="30" r="5" className="chart-point" />
                </svg>
              </div>

              <div className="pattern-section">
                <div className="pattern-heading">
                  <span>Recurring patterns</span>
                  <span>Last 30 days</span>
                </div>

                <div className="pattern">
                  <div className="pattern-info">
                    <span className="pattern-icon">
                      <Target size={15} />
                    </span>

                    <div>
                      <strong>Edge cases</strong>
                      <small>Boundary conditions</small>
                    </div>
                  </div>

                  <div className="pattern-value">
                    <span>42%</span>
                    <div className="progress">
                      <div style={{width: '42%'}} />
                    </div>
                  </div>
                </div>

                <div className="pattern">
                  <div className="pattern-info">
                    <span className="pattern-icon purple">
                      <Brain size={15} />
                    </span>

                    <div>
                      <strong>Logic errors</strong>
                      <small>Problem solving</small>
                    </div>
                  </div>

                  <div className="pattern-value">
                    <span>31%</span>
                    <div className="progress">
                      <div style={{width: '31%'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ai-insight">
              <div className="ai-icon">
                <Sparkles size={16} />
              </div>

              <div>
                <span>AI Insight</span>
                <strong>You're improving</strong>
                <p>Edge-case mistakes dropped by 24%.</p>
              </div>
            </div>
          </div>

          <div className="floating-score">
            <div className="floating-score-icon">
              <TrendingUp size={16} />
            </div>

            <div>
              <span>THIS WEEK</span>
              <strong>+24.8%</strong>
            </div>
          </div>

          <div className="floating-badge">
            <Check size={14} />
            Pattern detected
          </div>
        </section>
      </div>
    </main>
  )
}

export default Hero