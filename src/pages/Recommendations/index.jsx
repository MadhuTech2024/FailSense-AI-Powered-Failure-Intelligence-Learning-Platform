import {useMemo, useState} from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Flame,
  Lightbulb,
  LockKeyhole,
  Play,
  RefreshCcw,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'
import './index.css'

const recommendedProblems = [
  {
    id: 1,
    title: 'Handle Negative Numbers',
    skill: 'Arrays',
    difficulty: 'Easy',
    time: '12 min',
    reason: 'Targets your recurring boundary-condition weakness',
    pattern: 'Boundary conditions',
    progress: 0,
    priority: 'High',
  },
  {
    id: 2,
    title: 'Empty Array Edge Cases',
    skill: 'Arrays',
    difficulty: 'Easy',
    time: '10 min',
    reason: 'Builds confidence with empty and minimal inputs',
    pattern: 'Boundary conditions',
    progress: 0,
    priority: 'High',
  },
  {
    id: 3,
    title: 'First and Last Position',
    skill: 'Searching',
    difficulty: 'Medium',
    time: '18 min',
    reason: 'Strengthens index-boundary handling',
    pattern: 'Boundary conditions',
    progress: 0,
    priority: 'Medium',
  },
  {
    id: 4,
    title: 'Validate Before Optimizing',
    skill: 'Algorithms',
    difficulty: 'Medium',
    time: '20 min',
    reason: 'Addresses your premature-optimization pattern',
    pattern: 'Logic',
    progress: 0,
    priority: 'Medium',
  },
  {
    id: 5,
    title: 'Sliding Window Fundamentals',
    skill: 'Algorithms',
    difficulty: 'Medium',
    time: '24 min',
    reason: 'Improves algorithmic problem decomposition',
    pattern: 'Complexity',
    progress: 0,
    priority: 'Medium',
  },
  {
    id: 6,
    title: 'Boundary-Safe Binary Search',
    skill: 'Searching',
    difficulty: 'Hard',
    time: '28 min',
    reason: 'Combines multiple weaknesses into one challenge',
    pattern: 'Boundary conditions',
    progress: 0,
    priority: 'Low',
  },
]

const learningSteps = [
  {
    id: 1,
    title: 'Fix boundary conditions',
    description: 'Handle empty, negative, and extreme inputs.',
    status: 'current',
    duration: 'Today',
  },
  {
    id: 2,
    title: 'Strengthen logical reasoning',
    description: 'Validate the problem before optimizing the solution.',
    status: 'upcoming',
    duration: '2–3 days',
  },
  {
    id: 3,
    title: 'Improve algorithmic thinking',
    description: 'Recognize efficient patterns before coding.',
    status: 'locked',
    duration: 'Next',
  },
  {
    id: 4,
    title: 'Challenge yourself',
    description: 'Apply the improvements to harder problems.',
    status: 'locked',
    duration: 'Later',
  },
]

const Recommendations = () => {
  const [activeDifficulty, setActiveDifficulty] = useState('All')
  const [completedIds, setCompletedIds] = useState([])

  const filteredProblems = useMemo(() => {
    if (activeDifficulty === 'All') {
      return recommendedProblems
    }

    return recommendedProblems.filter(
      problem => problem.difficulty === activeDifficulty,
    )
  }, [activeDifficulty])

  const completedCount = completedIds.length
  const progress = Math.round(
    (completedCount / recommendedProblems.length) * 100,
  )

  const toggleComplete = id => {
    setCompletedIds(previous => {
      if (previous.includes(id)) {
        return previous.filter(item => item !== id)
      }

      return [...previous, id]
    })
  }

  return (
    <section className="recommendations-page">
      <div className="recommendations-container">
        {/* Header */}
        <header className="recommendations-header">
          <div>
            <div className="recommendations-eyebrow">
              <Sparkles size={15} />
              PERSONALIZED INTELLIGENCE
            </div>

            <h1>
              Your next step,
              <span> intelligently chosen.</span>
            </h1>

            <p>
              FailSense turns your failure patterns and performance data into
              a focused learning path designed specifically for you.
            </p>
          </div>

          <div className="recommendations-status">
            <span />
            AI recommendations updated
          </div>
        </header>

        {/* AI priority */}
        <section className="priority-card">
          <div className="priority-background-orb orb-left" />
          <div className="priority-background-orb orb-right" />

          <div className="priority-content">
            <div className="priority-icon">
              <Brain size={23} />
            </div>

            <div>
              <span className="priority-label">
                YOUR HIGHEST PRIORITY
              </span>

              <h2>Master boundary conditions</h2>

              <p>
                This is currently your most repeated failure pattern.
                You have encountered it <strong>8 times</strong>, but your
                recent attempts show that you're already improving.
              </p>

              <div className="priority-signals">
                <span>
                  <RefreshCcw size={13} />
                  8 recurring failures
                </span>

                <span>
                  <TrendingUp size={13} />
                  18.2% improvement
                </span>

                <span>
                  <Clock3 size={13} />
                  ~45 min focus
                </span>
              </div>
            </div>
          </div>

          <button type="button" className="priority-button">
            Start focus session
            <ArrowUpRight size={16} />
          </button>
        </section>

        {/* Today's focus */}
        <section className="focus-section">
          <div className="section-title-row">
            <div>
              <span className="recommendations-section-label">
                TODAY'S FOCUS
              </span>
              <h2>One weakness. Three targeted problems.</h2>
            </div>

            <div className="focus-time">
              <Clock3 size={14} />
              40–50 min
            </div>
          </div>

          <div className="focus-card">
            <div className="focus-card-number">01</div>

            <div className="focus-card-main">
              <div className="focus-card-heading">
                <div>
                  <span>BOUNDARY CONDITIONS</span>
                  <h3>Learn to test the extremes first.</h3>
                </div>

                <div className="focus-score">
                  <strong>82%</strong>
                  <span>weakness score</span>
                </div>
              </div>

              <p>
                Your failed attempts show a recurring issue with negative
                values, empty inputs, and first/last positions. Today's
                problems are selected specifically around these cases.
              </p>

              <div className="focus-progress">
                <div>
                  <span>Today's progress</span>
                  <strong>{completedCount}/3 completed</strong>
                </div>

                <div className="focus-progress-bar">
                  <span
                    style={{
                      width: `${Math.min(
                        (completedCount / 3) * 100,
                        100,
                      )}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="focus-target">
              <Target size={19} />
              <span>Target</span>
              <strong>90%</strong>
            </div>
          </div>
        </section>

        {/* Recommended problems */}
        <section className="problems-section">
          <div className="section-title-row">
            <div>
              <span className="recommendations-section-label">
                RECOMMENDED FOR YOU
              </span>
              <h2>Practice with a purpose.</h2>
            </div>

            <div className="difficulty-filters">
              {['All', 'Easy', 'Medium', 'Hard'].map(option => (
                <button
                  type="button"
                  key={option}
                  className={
                    activeDifficulty === option ? 'active' : ''
                  }
                  onClick={() => setActiveDifficulty(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="recommendation-list">
            {filteredProblems.map(problem => {
              const completed = completedIds.includes(problem.id)

              return (
                <article
                  className={`recommendation-card ${
                    completed ? 'completed' : ''
                  }`}
                  key={problem.id}
                >
                  <div className="recommendation-card-left">
                    <button
                      type="button"
                      className="completion-check"
                      onClick={() => toggleComplete(problem.id)}
                      aria-label={
                        completed
                          ? 'Mark as incomplete'
                          : 'Mark as complete'
                      }
                    >
                      {completed && <Check size={14} />}
                    </button>

                    <div className="recommendation-card-content">
                      <div className="recommendation-title-row">
                        <h3>{problem.title}</h3>

                        {problem.priority === 'High' && (
                          <span className="priority-badge">
                            <Zap size={10} />
                            Priority
                          </span>
                        )}
                      </div>

                      <div className="recommendation-meta">
                        <span>{problem.skill}</span>
                        <i />
                        <span>{problem.time}</span>
                        <i />
                        <span
                          className={`difficulty ${problem.difficulty.toLowerCase()}`}
                        >
                          {problem.difficulty}
                        </span>
                      </div>

                      <div className="recommendation-reason">
                        <Lightbulb size={13} />
                        <span>{problem.reason}</span>
                      </div>
                    </div>
                  </div>

                  <div className="recommendation-card-right">
                    <span className="pattern-tag">
                      {problem.pattern}
                    </span>

                    <button type="button" className="start-recommendation">
                      {completed ? 'Completed' : 'Start'}
                      {completed ? (
                        <CheckCircle2 size={14} />
                      ) : (
                        <ArrowRight size={14} />
                      )}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* Learning path */}
        <section className="learning-path-section">
          <div className="section-title-row">
            <div>
              <span className="recommendations-section-label">
                YOUR LEARNING PATH
              </span>
              <h2>From weakness to mastery.</h2>
            </div>

            <span className="path-progress">
              1 of 4 stages active
            </span>
          </div>

          <div className="learning-path">
            {learningSteps.map((step, index) => (
              <div className="learning-step-wrapper" key={step.id}>
                <article
                  className={`learning-step ${step.status}`}
                >
                  <div className="step-number">
                    {step.status === 'current' ? (
                      <Brain size={16} />
                    ) : step.status === 'locked' ? (
                      <LockKeyhole size={14} />
                    ) : (
                      <Check size={15} />
                    )}
                  </div>

                  <div className="step-content">
                    <div className="step-top">
                      <span>{step.duration}</span>

                      {step.status === 'current' && (
                        <b>ACTIVE</b>
                      )}
                    </div>

                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>

                {index < learningSteps.length - 1 && (
                  <div
                    className={`path-connector ${
                      step.status === 'current' ||
                      step.status === 'completed'
                        ? 'active'
                        : ''
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Why recommendations */}
        <section className="why-section">
          <div className="why-heading">
            <span className="recommendations-section-label">
              WHY THESE RECOMMENDATIONS?
            </span>

            <h2>
              Your learning plan is built from
              <span> your behavior.</span>
            </h2>

            <p>
              FailSense doesn't randomly select problems. Every
              recommendation is connected to a signal from your learning
              history.
            </p>
          </div>

          <div className="signal-cards">
            <article className="signal-card">
              <div className="signal-icon failure">
                <RefreshCcw size={18} />
              </div>

              <span>01</span>
              <h3>Recurring failures</h3>
              <p>
                Problems are selected around mistakes that appear repeatedly
                in your attempts.
              </p>

              <strong>8× boundary issues</strong>
            </article>

            <article className="signal-card">
              <div className="signal-icon performance">
                <TrendingUp size={18} />
              </div>

              <span>02</span>
              <h3>Performance trends</h3>
              <p>
                Your recent accuracy helps determine whether you need
                reinforcement or a harder challenge.
              </p>

              <strong>+18.2% improvement</strong>
            </article>

            <article className="signal-card">
              <div className="signal-icon behavior">
                <Brain size={18} />
              </div>

              <span>03</span>
              <h3>Learning behavior</h3>
              <p>
                Your solving patterns help identify how you approach
                unfamiliar problems.
              </p>

              <strong>Edge cases need focus</strong>
            </article>
          </div>
        </section>

        {/* Progress */}
        <section className="recommendation-progress">
          <div className="progress-visual">
            <div
              className="progress-circle"
              style={{
                '--progress': `${progress * 3.6}deg`,
              }}
            >
              <div>
                <strong>{progress}%</strong>
                <span>complete</span>
              </div>
            </div>
          </div>

          <div className="progress-content">
            <span className="recommendations-section-label">
              YOUR CURRENT PLAN
            </span>

            <h2>Small improvements compound.</h2>

            <p>
              Complete the recommended problems to reinforce your current
              weakness. As FailSense detects improvement, your
              recommendations will automatically become more challenging.
            </p>

            <div className="progress-stats">
              <div>
                <strong>{completedCount}</strong>
                <span>completed</span>
              </div>

              <div>
                <strong>{recommendedProblems.length - completedCount}</strong>
                <span>remaining</span>
              </div>

              <div>
                <strong>3</strong>
                <span>focus areas</span>
              </div>
            </div>
          </div>

          <button type="button" className="progress-action">
            Continue learning
            <ArrowRight size={15} />
          </button>
        </section>

        {/* Bottom message */}
        <div className="recommendations-note">
          <Sparkles size={15} />
          <span>
            FailSense adapts your recommendations after every meaningful
            attempt.
          </span>
        </div>
      </div>
    </section>
  )
}

export default Recommendations