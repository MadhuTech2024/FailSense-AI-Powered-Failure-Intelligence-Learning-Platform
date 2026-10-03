import {useMemo, useState} from 'react'
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Brain,
  CheckCircle2,
  ChevronDown,
  CircleAlert,
  Flame,
  Lightbulb,
  Minus,
  RefreshCcw,
  Target,
  TrendingDown,
  TrendingUp,
  Zap,
} from 'lucide-react'
import './index.css'

const performanceData = {
  '7D': [
    {day: 'Mon', accuracy: 68, failures: 8},
    {day: 'Tue', accuracy: 71, failures: 7},
    {day: 'Wed', accuracy: 69, failures: 9},
    {day: 'Thu', accuracy: 75, failures: 6},
    {day: 'Fri', accuracy: 78, failures: 5},
    {day: 'Sat', accuracy: 81, failures: 4},
    {day: 'Sun', accuracy: 84, failures: 3},
  ],
  '30D': [
    {day: 'W1', accuracy: 61, failures: 18},
    {day: 'W2', accuracy: 68, failures: 14},
    {day: 'W3', accuracy: 74, failures: 10},
    {day: 'W4', accuracy: 84, failures: 6},
  ],
  '90D': [
    {day: 'Jan', accuracy: 54, failures: 31},
    {day: 'Feb', accuracy: 61, failures: 25},
    {day: 'Mar', accuracy: 67, failures: 21},
    {day: 'Apr', accuracy: 72, failures: 17},
    {day: 'May', accuracy: 76, failures: 12},
    {day: 'Jun', accuracy: 84, failures: 7},
  ],
}

const skillData = [
  {
    name: 'Arrays',
    score: 84,
    change: 12,
    status: 'Improving',
    icon: Activity,
  },
  {
    name: 'Strings',
    score: 78,
    change: 8,
    status: 'Improving',
    icon: Zap,
  },
  {
    name: 'Searching',
    score: 72,
    change: 5,
    status: 'Stable',
    icon: Target,
  },
  {
    name: 'Stack',
    score: 69,
    change: -2,
    status: 'Needs attention',
    icon: RefreshCcw,
  },
  {
    name: 'Algorithms',
    score: 61,
    change: -6,
    status: 'Needs attention',
    icon: Brain,
  },
]

const failureTypes = [
  {
    type: 'Edge Case',
    count: 18,
    percentage: 43,
    className: 'edge',
  },
  {
    type: 'Logic',
    count: 10,
    percentage: 24,
    className: 'logic',
  },
  {
    type: 'Conceptual',
    count: 7,
    percentage: 17,
    className: 'conceptual',
  },
  {
    type: 'Complexity',
    count: 4,
    percentage: 10,
    className: 'complexity',
  },
  {
    type: 'Syntax',
    count: 3,
    percentage: 6,
    className: 'syntax',
  },
]

const patterns = [
  {
    title: 'Boundary-condition weakness',
    description:
      'Negative values, empty arrays, and first/last positions are still responsible for most repeated failures.',
    occurrences: 8,
    trend: '+3',
    severity: 'High',
    icon: CircleAlert,
  },
  {
    title: 'Premature optimization',
    description:
      'You tend to optimize before confirming that the basic solution handles every required case.',
    occurrences: 5,
    trend: '-2',
    severity: 'Medium',
    icon: TrendingDown,
  },
  {
    title: 'Requirement misunderstanding',
    description:
      'Some failed submissions solve a slightly different problem than the one described.',
    occurrences: 3,
    trend: '-1',
    severity: 'Low',
    icon: Lightbulb,
  },
]

const Insights = () => {
  const [period, setPeriod] = useState('30D')
  const [showPeriodMenu, setShowPeriodMenu] = useState(false)

  const chartData = performanceData[period]

  const improvement = useMemo(() => {
    const first = chartData[0].accuracy
    const last = chartData[chartData.length - 1].accuracy

    return last - first
  }, [chartData])

  const maxAccuracy = Math.max(...chartData.map(item => item.accuracy))
  const minAccuracy = Math.min(...chartData.map(item => item.accuracy))

  const chartPoints = chartData
    .map((item, index) => {
      const x =
        chartData.length === 1
          ? 50
          : (index / (chartData.length - 1)) * 100

      const range = maxAccuracy - minAccuracy || 1
      const y = 86 - ((item.accuracy - minAccuracy) / range) * 58

      return `${x},${y}`
    })
    .join(' ')

  const areaPoints = `0,100 ${chartPoints} 100,100`

  return (
    <section className="insights-page">
      <div className="insights-container">
        {/* Header */}
        <header className="insights-header">
          <div>
            <div className="insights-eyebrow">
              <Brain size={15} />
              LEARNING INTELLIGENCE
            </div>

            <h1>
              See how you're
              <span> improving.</span>
            </h1>

            <p>
              FailSense connects your attempts, failures, and recurring
              patterns to reveal how you actually learn.
            </p>
          </div>

          <div className="insights-header-actions">
            <div className="intelligence-live">
              <span />
              Intelligence active
            </div>

            <div className="period-dropdown">
              <button
                type="button"
                className="period-button"
                onClick={() => setShowPeriodMenu(prev => !prev)}
              >
                Last {period === '7D' ? '7 days' : period === '30D' ? '30 days' : '90 days'}
                <ChevronDown size={15} />
              </button>

              {showPeriodMenu && (
                <div className="period-menu">
                  {['7D', '30D', '90D'].map(option => (
                    <button
                      type="button"
                      key={option}
                      className={period === option ? 'selected' : ''}
                      onClick={() => {
                        setPeriod(option)
                        setShowPeriodMenu(false)
                      }}
                    >
                      {option === '7D'
                        ? 'Last 7 days'
                        : option === '30D'
                          ? 'Last 30 days'
                          : 'Last 90 days'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Intelligence hero */}
        <section className="intelligence-hero">
          <div className="intelligence-hero-content">
            <div className="hero-ai-icon">
              <Brain size={22} />
            </div>

            <div>
              <span className="hero-label">AI LEARNING SIGNAL</span>

              <h2>
                You're getting better at solving problems.
              </h2>

              <p>
                Your accuracy has improved by{' '}
                <strong>{improvement}%</strong> during this period.
                The biggest improvement is coming from your array and
                string problem-solving skills.
              </p>
            </div>
          </div>

          <div className="hero-score">
            <div className="score-ring">
              <div>
                <strong>84</strong>
                <span>%</span>
              </div>
            </div>

            <span>Current accuracy</span>

            <div className="score-change">
              <ArrowUpRight size={13} />
              +18.2%
            </div>
          </div>
        </section>

        {/* Main metrics */}
        <section className="insight-metrics">
          <article className="insight-metric">
            <div className="metric-top">
              <span>Accuracy</span>
              <div className="metric-icon purple">
                <Target size={16} />
              </div>
            </div>

            <strong>84.2%</strong>

            <div className="metric-bottom positive">
              <ArrowUpRight size={12} />
              12.4% from last month
            </div>
          </article>

          <article className="insight-metric">
            <div className="metric-top">
              <span>Problems solved</span>
              <div className="metric-icon blue">
                <CheckCircle2 size={16} />
              </div>
            </div>

            <strong>128</strong>

            <div className="metric-bottom positive">
              <ArrowUpRight size={12} />
              24 this month
            </div>
          </article>

          <article className="insight-metric">
            <div className="metric-top">
              <span>Failure rate</span>
              <div className="metric-icon orange">
                <TrendingDown size={16} />
              </div>
            </div>

            <strong>15.8%</strong>

            <div className="metric-bottom positive">
              <ArrowDownRight size={12} />
              8.3% lower
            </div>
          </article>

          <article className="insight-metric">
            <div className="metric-top">
              <span>Learning streak</span>
              <div className="metric-icon green">
                <Flame size={16} />
              </div>
            </div>

            <strong>12 days</strong>

            <div className="metric-bottom neutral">
              <Minus size={12} />
              Same as last week
            </div>
          </article>
        </section>

        {/* Performance chart + failure distribution */}
        <section className="insights-grid-main">
          <article className="insight-panel performance-panel">
            <div className="panel-header">
              <div>
                <span className="panel-eyebrow">PERFORMANCE</span>
                <h2>Accuracy over time</h2>
                <p>Your problem-solving accuracy is trending upward.</p>
              </div>

              <div className="chart-legend">
                <span>
                  <i className="legend-dot accuracy-dot" />
                  Accuracy
                </span>

                <span>
                  <i className="legend-dot failure-dot" />
                  Failures
                </span>
              </div>
            </div>

            <div className="performance-chart">
              <div className="chart-y-axis">
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
              </div>

              <div className="chart-area">
                <div className="chart-grid-lines">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <svg
                  className="accuracy-svg"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="accuracyGradient"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#6366f1"
                        stopOpacity="0.24"
                      />
                      <stop
                        offset="100%"
                        stopColor="#6366f1"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <polygon
                    points={areaPoints}
                    fill="url(#accuracyGradient)"
                  />

                  <polyline
                    points={chartPoints}
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="2.2"
                    vectorEffect="non-scaling-stroke"
                  />

                  {chartData.map((item, index) => {
                    const x =
                      chartData.length === 1
                        ? 50
                        : (index / (chartData.length - 1)) * 100

                    const range = maxAccuracy - minAccuracy || 1
                    const y =
                      86 -
                      ((item.accuracy - minAccuracy) / range) * 58

                    return (
                      <circle
                        key={item.day}
                        cx={x}
                        cy={y}
                        r="1.8"
                        fill="#fff"
                        stroke="#6366f1"
                        strokeWidth="1.4"
                        vectorEffect="non-scaling-stroke"
                      />
                    )
                  })}
                </svg>

                <div className="chart-x-axis">
                  {chartData.map(item => (
                    <span key={item.day}>{item.day}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="insight-panel distribution-panel">
            <div className="panel-header">
              <div>
                <span className="panel-eyebrow">FAILURE PROFILE</span>
                <h2>What causes your failures?</h2>
                <p>Based on your analyzed attempts.</p>
              </div>
            </div>

            <div className="failure-donut-wrapper">
              <div className="failure-donut">
                <div className="donut-center">
                  <strong>42</strong>
                  <span>failures</span>
                </div>
              </div>
            </div>

            <div className="failure-type-list">
              {failureTypes.map(item => (
                <div className="failure-type-row" key={item.type}>
                  <div className="failure-type-name">
                    <i className={`type-dot ${item.className}`} />
                    <span>{item.type}</span>
                  </div>

                  <div className="failure-type-bar">
                    <span
                      style={{width: `${item.percentage}%`}}
                    />
                  </div>

                  <strong>{item.count}</strong>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* Skills */}
        <section className="skills-section">
          <div className="section-heading">
            <div>
              <span className="panel-eyebrow">SKILL INTELLIGENCE</span>
              <h2>Where your skills stand</h2>
            </div>

            <span>Based on recent attempts</span>
          </div>

          <div className="skills-grid">
            {skillData.map(skill => {
              const Icon = skill.icon
              const isImproving = skill.change > 0

              return (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-card-top">
                    <div className="skill-icon">
                      <Icon size={17} />
                    </div>

                    <span
                      className={
                        isImproving
                          ? 'skill-change positive'
                          : 'skill-change negative'
                      }
                    >
                      {isImproving ? (
                        <ArrowUpRight size={12} />
                      ) : (
                        <ArrowDownRight size={12} />
                      )}
                      {Math.abs(skill.change)}%
                    </span>
                  </div>

                  <div className="skill-name-row">
                    <h3>{skill.name}</h3>
                    <strong>{skill.score}%</strong>
                  </div>

                  <div className="skill-progress">
                    <span
                      style={{width: `${skill.score}%`}}
                    />
                  </div>

                  <div className="skill-status">
                    <span>{skill.status}</span>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* Patterns */}
        <section className="patterns-section">
          <div className="section-heading">
            <div>
              <span className="panel-eyebrow">RECURRING PATTERNS</span>
              <h2>What keeps showing up?</h2>
            </div>

            <button type="button" className="view-all-patterns">
              View all patterns
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="patterns-grid">
            {patterns.map(pattern => {
              const Icon = pattern.icon

              return (
                <article className="pattern-card" key={pattern.title}>
                  <div className="pattern-card-top">
                    <div className="pattern-icon">
                      <Icon size={18} />
                    </div>

                    <span
                      className={`pattern-severity ${pattern.severity.toLowerCase()}`}
                    >
                      {pattern.severity}
                    </span>
                  </div>

                  <h3>{pattern.title}</h3>

                  <p>{pattern.description}</p>

                  <div className="pattern-card-bottom">
                    <div>
                      <strong>{pattern.occurrences}×</strong>
                      <span>detected</span>
                    </div>

                    <span
                      className={
                        pattern.trend.startsWith('+')
                          ? 'pattern-trend up'
                          : 'pattern-trend down'
                      }
                    >
                      {pattern.trend.startsWith('+') ? (
                        <TrendingUp size={12} />
                      ) : (
                        <TrendingDown size={12} />
                      )}
                      {pattern.trend}
                    </span>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* AI recommendation */}
        <section className="insight-recommendation">
          <div className="recommendation-orb">
            <div className="orb-ring ring-one" />
            <div className="orb-ring ring-two" />
            <div className="orb-core">
              <Brain size={24} />
            </div>
          </div>

          <div className="recommendation-content">
            <span>FAILSENSE AI RECOMMENDATION</span>

            <h2>
              Your next improvement opportunity is
              <strong> boundary conditions.</strong>
            </h2>

            <p>
              You've improved your overall accuracy significantly. However,
              43% of your analyzed failures still come from edge cases.
              Before moving into harder algorithms, practice problems
              involving negative numbers, empty inputs, and boundary indexes.
            </p>
          </div>

          <button type="button" className="recommendation-button">
            Practice weakness
            <ArrowUpRight size={16} />
          </button>
        </section>

        {/* Bottom insight */}
        <div className="insights-footer-note">
          <div className="footer-note-icon">
            <Lightbulb size={17} />
          </div>

          <div>
            <strong>Remember:</strong>
            <span>
              Progress isn't just solving more problems. It's making fewer
              of the same mistakes.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Insights