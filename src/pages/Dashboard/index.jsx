import {
  ArrowUpRight,
  Brain,
  CircleAlert,
  Code2,
  Flame,
  Lightbulb,
  Target,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'

import {useAuth} from '../../context/AuthContext'

import './index.css'

const Dashboard = () => {
  const {user} = useAuth()

  return (
    <div className="dashboard-page">
      {/* Hero */}
      <section className="dashboard-welcome">
        <div>
          <span className="dashboard-overline">
            LEARNING INTELLIGENCE
          </span>

          <h1>
            Welcome back, {user?.name?.split(' ')[0] || 'Learner'}
            <span>.</span>
          </h1>

          <p>
            Your mistakes are becoming patterns. Here's what your
            learning data is telling you today.
          </p>
        </div>

        <button className="dashboard-practice-button">
          <Code2 size={16} />
          Practice now
          <ArrowUpRight size={15} />
        </button>
      </section>

      {/* Intelligence banner */}
      <section className="dashboard-ai-banner">
        <div className="dashboard-ai-banner-icon">
          <Brain size={21} />
        </div>

        <div className="dashboard-ai-banner-content">
          <span>AI INSIGHT</span>

          <h3>
            You're improving, but boundary conditions are still
            your biggest recurring weakness.
          </h3>

          <p>
            Your failure rate in edge-case problems has dropped
            18% this week. Keep practicing problems with unusual
            inputs.
          </p>
        </div>

        <button className="dashboard-insight-button">
          View insight
          <ArrowUpRight size={15} />
        </button>
      </section>

      {/* Stats */}
      <section className="dashboard-stats-grid">
        <div className="dashboard-stat-card">
          <div className="dashboard-stat-top">
            <span>PROBLEMS ATTEMPTED</span>

            <div className="dashboard-stat-icon purple">
              <Code2 size={17} />
            </div>
          </div>

          <div className="dashboard-stat-value">
            128
          </div>

          <div className="dashboard-stat-bottom">
            <span className="positive">
              <TrendingUp size={13} />
              +14.2%
            </span>

            <span>vs last month</span>
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="dashboard-stat-top">
            <span>ACCURACY</span>

            <div className="dashboard-stat-icon green">
              <Target size={17} />
            </div>
          </div>

          <div className="dashboard-stat-value">
            78.4<span>%</span>
          </div>

          <div className="dashboard-stat-bottom">
            <span className="positive">
              <TrendingUp size={13} />
              +8.6%
            </span>

            <span>improvement</span>
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="dashboard-stat-top">
            <span>FAILURES ANALYZED</span>

            <div className="dashboard-stat-icon red">
              <CircleAlert size={17} />
            </div>
          </div>

          <div className="dashboard-stat-value">
            42
          </div>

          <div className="dashboard-stat-bottom">
            <span className="neutral">
              6 this week
            </span>

            <span>patterns detected</span>
          </div>
        </div>

        <div className="dashboard-stat-card">
          <div className="dashboard-stat-top">
            <span>LEARNING STREAK</span>

            <div className="dashboard-stat-icon orange">
              <Flame size={17} />
            </div>
          </div>

          <div className="dashboard-stat-value">
            12<span>d</span>
          </div>

          <div className="dashboard-stat-bottom">
            <span className="positive">
              Active
            </span>

            <span>personal best: 18d</span>
          </div>
        </div>
      </section>

      {/* Main analytics */}
      <section className="dashboard-main-grid">
        {/* Performance chart */}
        <div className="dashboard-panel performance-panel">
          <div className="dashboard-panel-header">
            <div>
              <span className="dashboard-panel-label">
                PERFORMANCE
              </span>

              <h2>Accuracy over time</h2>
            </div>

            <select className="dashboard-period-select">
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>Last 90 days</option>
            </select>
          </div>

          <div className="dashboard-chart">
            <div className="chart-y-labels">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>

            <div className="chart-area">
              <div className="chart-grid-line" />
              <div className="chart-grid-line" />
              <div className="chart-grid-line" />
              <div className="chart-grid-line" />

              <svg
                viewBox="0 0 700 230"
                preserveAspectRatio="none"
                className="performance-svg"
              >
                <defs>
                  <linearGradient
                    id="performanceGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#6366f1"
                      stopOpacity="0.25"
                    />
                    <stop
                      offset="100%"
                      stopColor="#6366f1"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                <path
                  className="chart-fill"
                  d="M0,170 C70,160 80,145 140,150 C200,155 210,120 270,125 C330,130 350,95 400,105 C455,115 470,75 520,82 C570,90 610,45 700,40 L700,230 L0,230 Z"
                />

                <path
                  className="chart-line"
                  d="M0,170 C70,160 80,145 140,150 C200,155 210,120 270,125 C330,130 350,95 400,105 C455,115 470,75 520,82 C570,90 610,45 700,40"
                />

                <circle cx="700" cy="40" r="5" />
              </svg>

              <div className="chart-x-labels">
                <span>Sep 01</span>
                <span>Sep 08</span>
                <span>Sep 15</span>
                <span>Sep 22</span>
                <span>Sep 30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Weak areas */}
        <div className="dashboard-panel weak-panel">
          <div className="dashboard-panel-header">
            <div>
              <span className="dashboard-panel-label">
                FAILURE INTELLIGENCE
              </span>

              <h2>Weak areas</h2>
            </div>

            <button className="dashboard-icon-button">
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="weak-area-list">
            <div className="weak-area">
              <div className="weak-area-info">
                <div className="weak-area-title">
                  <span className="weak-dot critical" />
                  Boundary conditions
                </div>

                <span>12 failures</span>
              </div>

              <div className="weak-progress">
                <div
                  className="weak-progress-fill critical-fill"
                  style={{width: '82%'}}
                />
              </div>

              <span className="weak-percentage">82%</span>
            </div>

            <div className="weak-area">
              <div className="weak-area-info">
                <div className="weak-area-title">
                  <span className="weak-dot warning" />
                  Array manipulation
                </div>

                <span>8 failures</span>
              </div>

              <div className="weak-progress">
                <div
                  className="weak-progress-fill warning-fill"
                  style={{width: '61%'}}
                />
              </div>

              <span className="weak-percentage">61%</span>
            </div>

            <div className="weak-area">
              <div className="weak-area-info">
                <div className="weak-area-title">
                  <span className="weak-dot medium" />
                  Time complexity
                </div>

                <span>6 failures</span>
              </div>

              <div className="weak-progress">
                <div
                  className="weak-progress-fill medium-fill"
                  style={{width: '44%'}}
                />
              </div>

              <span className="weak-percentage">44%</span>
            </div>

            <div className="weak-area">
              <div className="weak-area-info">
                <div className="weak-area-title">
                  <span className="weak-dot low" />
                  Syntax errors
                </div>

                <span>3 failures</span>
              </div>

              <div className="weak-progress">
                <div
                  className="weak-progress-fill low-fill"
                  style={{width: '23%'}}
                />
              </div>

              <span className="weak-percentage">23%</span>
            </div>
          </div>

          <button className="weak-view-button">
            Explore all failure patterns
            <ArrowRightIcon />
          </button>
        </div>
      </section>

      {/* Bottom section */}
      <section className="dashboard-bottom-grid">
        {/* Recurring patterns */}
        <div className="dashboard-panel">
          <div className="dashboard-panel-header">
            <div>
              <span className="dashboard-panel-label">
                PATTERN DETECTION
              </span>

              <h2>Recurring patterns</h2>
            </div>

            <span className="pattern-count">
              3 detected
            </span>
          </div>

          <div className="pattern-list">
            <div className="pattern-item">
              <div className="pattern-number">01</div>

              <div className="pattern-content">
                <strong>Boundary-condition weakness</strong>
                <span>
                  Appeared across 8 different problems
                </span>
              </div>

              <span className="pattern-frequency">
                8×
              </span>
            </div>

            <div className="pattern-item">
              <div className="pattern-number">02</div>

              <div className="pattern-content">
                <strong>Premature optimization</strong>
                <span>
                  Appeared across 5 different problems
                </span>
              </div>

              <span className="pattern-frequency">
                5×
              </span>
            </div>

            <div className="pattern-item">
              <div className="pattern-number">03</div>

              <div className="pattern-content">
                <strong>Requirement misunderstanding</strong>
                <span>
                  Appeared across 3 different problems
                </span>
              </div>

              <span className="pattern-frequency">
                3×
              </span>
            </div>
          </div>
        </div>

        {/* AI recommendation */}
        <div className="dashboard-ai-card">
          <div className="dashboard-ai-card-glow" />

          <div className="dashboard-ai-card-top">
            <div className="dashboard-ai-icon">
              <Lightbulb size={19} />
            </div>

            <span>PERSONALIZED RECOMMENDATION</span>
          </div>

          <h2>
            Practice smarter,
            <br />
            not just harder.
          </h2>

          <p>
            We've identified a pattern in your recent failures.
            Spend your next 20 minutes practicing edge-case
            problems involving negative numbers and empty inputs.
          </p>

          <button className="dashboard-recommendation-button">
            Start recommended practice
            <ArrowUpRight size={15} />
          </button>

          <div className="dashboard-recommendation-meta">
            <span>
              <Target size={13} />
              5 problems
            </span>

            <span>
              <Flame size={13} />
              ~20 min
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

const ArrowRightIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

export default Dashboard