import {
  ArrowUpRight,
  Brain,
  Check,
  CircleAlert,
  Code2,
  Lightbulb,
  RefreshCcw,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import './index.css'

const features = [
  {
    icon: CircleAlert,
    title: 'Understand the failure',
    description:
      'See exactly what went wrong instead of receiving only a failed result.',
  },
  {
    icon: Brain,
    title: 'Find the root cause',
    description:
      'Identify the underlying concept, logic, or reasoning gap behind the mistake.',
  },
  {
    icon: RefreshCcw,
    title: 'Detect recurring patterns',
    description:
      'Connect similar mistakes across different problems and discover your weak patterns.',
  },
  {
    icon: Target,
    title: 'Practice with purpose',
    description:
      'Get recommendations based on what you actually need to improve.',
  },
]

const Features = () => {
  return (
    <section className="features-section" id="features">
      <div className="features-bg">
        <div className="features-bg-grid" />
        <div className="features-bg-glow features-bg-glow-one" />
        <div className="features-bg-glow features-bg-glow-two" />
      </div>

      <div className="features-container">
        {/* HEADER */}

        <div className="features-heading">
          <div className="features-eyebrow">
            <Sparkles size={14} />
            <span>THE FAILSENSE INTELLIGENCE ENGINE</span>
          </div>

          <h2>
            Your failure is not the
            <br />
            <span>end of the attempt.</span>
          </h2>

          <p>
            It is the beginning of understanding. FailSense transforms every
            failed attempt into structured learning intelligence.
          </p>
        </div>

        {/* MAIN INTELLIGENCE SHOWCASE */}

        <div className="intelligence-card">
          <div className="intelligence-content">
            <div className="intelligence-label">
              <span className="live-dot" />
              FAILURE INTELLIGENCE
            </div>

            <h3>
              From <span>“Wrong”</span> to
              <br />
              <strong>“Now I understand why.”</strong>
            </h3>

            <p>
              Instead of simply telling you that your solution failed,
              FailSense breaks down the failure, identifies the cause, and
              connects it to your learning history.
            </p>

            <div className="intelligence-points">
              <div>
                <span className="point-check">
                  <Check size={13} />
                </span>
                <span>Analyze the failed attempt</span>
              </div>

              <div>
                <span className="point-check">
                  <Check size={13} />
                </span>
                <span>Identify the root cause</span>
              </div>

              <div>
                <span className="point-check">
                  <Check size={13} />
                </span>
                <span>Connect recurring patterns</span>
              </div>
            </div>

            <button className="intelligence-button">
              Explore intelligence
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* ANALYSIS VISUAL */}

          <div className="analysis-visual">
            <div className="analysis-glow" />

            <div className="analysis-window">
              <div className="analysis-top">
                <div className="analysis-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="analysis-title">
                  <Brain size={13} />
                  Failure Analysis
                </div>

                <span className="analysis-status">ANALYZED</span>
              </div>

              <div className="analysis-body">
                <div className="problem-header">
                  <div>
                    <span>PROBLEM</span>
                    <strong>Find the largest element</strong>
                  </div>

                  <div className="failed-pill">
                    <CircleAlert size={12} />
                    Failed
                  </div>
                </div>

                <div className="code-preview">
                  <div className="code-line">
                    <span>01</span>
                    <code>
                      <i>let</i> largest = <b>0</b>
                    </code>
                  </div>

                  <div className="code-line">
                    <span>02</span>
                    <code>
                      <i>for</i> (<b>const</b> num <i>of</i> numbers)
                    </code>
                  </div>

                  <div className="code-line error-line">
                    <span>03</span>
                    <code>
                      largest = Math.max(largest, num)
                    </code>
                    <CircleAlert size={13} />
                  </div>
                </div>

                <div className="root-cause">
                  <div className="root-icon">
                    <Lightbulb size={15} />
                  </div>

                  <div>
                    <span>ROOT CAUSE DETECTED</span>
                    <strong>Incorrect initial value</strong>
                    <p>
                      Fails when every value in the array is negative.
                    </p>
                  </div>
                </div>

                <div className="pattern-detected">
                  <div className="pattern-icon">
                    <RefreshCcw size={14} />
                  </div>

                  <div>
                    <span>RECURRING PATTERN</span>
                    <strong>Boundary condition weakness</strong>
                  </div>

                  <div className="pattern-count">
                    <b>8</b>
                    <small>times</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating AI badge */}

            <div className="ai-floating-card">
              <div className="ai-floating-icon">
                <Sparkles size={15} />
              </div>

              <div>
                <span>AI INSIGHT</span>
                <strong>Pattern recognized</strong>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE INTRO */}

        <div className="feature-intro">
          <div>
            <span>WHAT YOU GET</span>
            <h3>
              Intelligence behind
              <br />
              every attempt.
            </h3>
          </div>

          <p>
            FailSense doesn't just store your failures. It turns them into
            actionable information that helps you learn differently.
          </p>
        </div>

        {/* FEATURE CARDS */}

        <div className="feature-list">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <article className="modern-feature" key={feature.title}>
                <div className="modern-feature-top">
                  <div className="modern-feature-icon">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <span>0{index + 1}</span>
                </div>

                <div className="modern-feature-body">
                  <h4>{feature.title}</h4>

                  <p>{feature.description}</p>
                </div>

                <div className="modern-feature-arrow">
                  <ArrowUpRight size={16} />
                </div>
              </article>
            )
          })}
        </div>

        {/* BOTTOM METRICS */}

        <div className="feature-metrics">
          <div className="metric">
            <div className="metric-icon">
              <Code2 size={17} />
            </div>

            <div>
              <strong>Every attempt</strong>
              <span>becomes learning data</span>
            </div>
          </div>

          <div className="metric-divider" />

          <div className="metric">
            <div className="metric-icon purple">
              <TrendingUp size={17} />
            </div>

            <div>
              <strong>Every pattern</strong>
              <span>reveals where to improve</span>
            </div>
          </div>

          <div className="metric-divider" />

          <div className="metric">
            <div className="metric-icon green">
              <Target size={17} />
            </div>

            <div>
              <strong>Every insight</strong>
              <span>moves you forward</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features