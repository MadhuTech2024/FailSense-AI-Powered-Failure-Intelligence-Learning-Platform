import {
  ArrowUpRight,
  Brain,
  Check,
  CircleDot,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import './index.css'

const CTA = () => {
  return (
    <section className="cta-section" id="get-started">
      <div className="cta-orb cta-orb-one" />
      <div className="cta-orb cta-orb-two" />

      <div className="cta-container">
        {/* Top label */}
        <div className="cta-label">
          <span className="cta-label-dot" />
          <span>START YOUR INTELLIGENCE JOURNEY</span>
        </div>

        {/* Main CTA */}
        <div className="cta-main">
          <div className="cta-content">
            <div className="cta-number">04</div>

            <h2>
              Your next
              <br />
              <span>breakthrough</span>
              <br />
              starts with a mistake.
            </h2>

            <p>
              Stop treating failure as the end of an attempt.
              Start using it as data to understand how you learn,
              what holds you back, and what to practice next.
            </p>

            <div className="cta-actions">
              <a href="#dashboard" className="cta-primary">
                Start analyzing
                <span>
                  <ArrowUpRight size={17} />
                </span>
              </a>

              <a href="#how-it-works" className="cta-secondary">
                See how it works
              </a>
            </div>

            <div className="cta-trust">
              <div className="cta-trust-item">
                <Check size={14} />
                <span>Track every attempt</span>
              </div>

              <div className="cta-trust-item">
                <Check size={14} />
                <span>Discover recurring patterns</span>
              </div>

              <div className="cta-trust-item">
                <Check size={14} />
                <span>Improve with purpose</span>
              </div>
            </div>
          </div>

          {/* Intelligence visual */}
          <div className="cta-visual">
            <div className="cta-visual-grid" />

            {/* Main intelligence card */}
            <div className="cta-intelligence">
              <div className="cta-intelligence-header">
                <div className="cta-brand">
                  <div className="cta-brand-icon">
                    <Sparkles size={14} />
                  </div>

                  <div>
                    <span>FAILSENSE</span>
                    <strong>Learning Intelligence</strong>
                  </div>
                </div>

                <div className="cta-live">
                  <span />
                  LIVE
                </div>
              </div>

              {/* Score */}
              <div className="cta-score">
                <div>
                  <span>IMPROVEMENT SCORE</span>
                  <strong>78.4</strong>
                </div>

                <div className="cta-score-growth">
                  <TrendingUp size={14} />
                  +18.2%
                </div>
              </div>

              {/* Intelligence graph */}
              <div className="cta-chart">
                <div className="cta-chart-lines">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <svg
                  viewBox="0 0 420 150"
                  preserveAspectRatio="none"
                  className="cta-chart-svg"
                >
                  <defs>
                    <linearGradient
                      id="ctaGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>

                    <linearGradient
                      id="ctaAreaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#6366f1"
                        stopOpacity="0.3"
                      />
                      <stop
                        offset="100%"
                        stopColor="#6366f1"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    className="cta-chart-area"
                    d="M0 130 C35 120 50 108 80 112 C110 116 120 95 150 100 C180 105 190 72 220 82 C250 92 265 62 290 66 C320 70 335 38 360 46 C385 54 395 25 420 18 L420 150 L0 150 Z"
                    fill="url(#ctaAreaGradient)"
                  />

                  <path
                    className="cta-chart-line"
                    d="M0 130 C35 120 50 108 80 112 C110 116 120 95 150 100 C180 105 190 72 220 82 C250 92 265 62 290 66 C320 70 335 38 360 46 C385 54 395 25 420 18"
                    fill="none"
                    stroke="url(#ctaGradient)"
                    strokeWidth="3"
                  />

                  <circle
                    className="cta-chart-point"
                    cx="420"
                    cy="18"
                    r="5"
                  />
                </svg>
              </div>

              {/* Insight */}
              <div className="cta-insight">
                <div className="cta-insight-icon">
                  <Brain size={17} />
                </div>

                <div className="cta-insight-content">
                  <span>AI INSIGHT</span>
                  <p>
                    Your edge-case mistakes are decreasing.
                  </p>
                </div>

                <TrendingUp size={15} />
              </div>

              {/* Bottom metrics */}
              <div className="cta-metrics">
                <div>
                  <span>ATTEMPTS</span>
                  <strong>126</strong>
                </div>

                <div>
                  <span>ANALYZED</span>
                  <strong>38</strong>
                </div>

                <div>
                  <span>PATTERNS</span>
                  <strong>07</strong>
                </div>
              </div>
            </div>

            {/* Floating AI card */}
            <div className="cta-floating cta-floating-top">
              <div className="cta-floating-icon">
                <Target size={14} />
              </div>

              <div>
                <span>WEAK AREA</span>
                <strong>Boundary Conditions</strong>
              </div>
            </div>

            {/* Floating improvement card */}
            <div className="cta-floating cta-floating-bottom">
              <CircleDot size={14} />
              <span>
                <strong>+24.8%</strong>
                <small>this month</small>
              </span>
            </div>

            {/* Decorative core */}
            <div className="cta-core">
              <div className="cta-core-ring ring-one" />
              <div className="cta-core-ring ring-two" />
              <div className="cta-core-center">
                <Sparkles size={17} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="cta-bottom">
          <div className="cta-bottom-line" />

          <p>
            Don't just solve more problems.
            <strong> Understand yourself better.</strong>
          </p>

          <div className="cta-bottom-mark">
            FAILSENSE
            <span>AI LEARNING INTELLIGENCE</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA