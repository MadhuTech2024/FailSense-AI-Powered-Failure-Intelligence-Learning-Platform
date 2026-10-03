import {useMemo, useState} from 'react'
import {
  AlertCircle,
  ArrowUpRight,
  Brain,
  CheckCircle2,
  ChevronDown,
  CircleAlert,
  Clock3,
  Filter,
  Lightbulb,
  RefreshCcw,
  Search,
  Target,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react'
import './index.css'

const failuresData = [
  {
    id: 1,
    problem: 'Find the Largest Number',
    skill: 'Arrays',
    type: 'Edge Case',
    rootCause: 'Incorrect initialization',
    severity: 'High',
    occurrences: 8,
    date: 'Today',
    description:
      'The largest value was initialized with 0, causing negative-only arrays to produce an incorrect result.',
    insight:
      "You're not struggling with arrays. You're struggling with boundary conditions.",
    resolved: false,
  },
  {
    id: 2,
    problem: 'Two Sum',
    skill: 'Arrays',
    type: 'Logic',
    rootCause: 'Incorrect index handling',
    severity: 'Medium',
    occurrences: 5,
    date: 'Yesterday',
    description:
      'The solution found matching values but returned incorrect indexes when duplicate values were present.',
    insight:
      'Check how indexes change when the same value appears more than once.',
    resolved: false,
  },
  {
    id: 3,
    problem: 'Maximum Subarray',
    skill: 'Algorithms',
    type: 'Conceptual',
    rootCause: 'Algorithm misunderstanding',
    severity: 'High',
    occurrences: 4,
    date: '2 days ago',
    description:
      'The solution attempted a nested-loop approach instead of maintaining the best running subarray.',
    insight:
      'You may need more practice identifying when a problem can be solved using a running state.',
    resolved: false,
  },
  {
    id: 4,
    problem: 'Valid Parentheses',
    skill: 'Stack',
    type: 'Logic',
    rootCause: 'Incorrect stack condition',
    severity: 'Medium',
    occurrences: 3,
    date: '3 days ago',
    description:
      'The stack logic did not correctly handle closing brackets when the stack was empty.',
    insight:
      'Consider what should happen before accessing the top element of an empty stack.',
    resolved: true,
  },
  {
    id: 5,
    problem: 'Rotate an Array',
    skill: 'Arrays',
    type: 'Edge Case',
    rootCause: 'Missing modulo handling',
    severity: 'High',
    occurrences: 6,
    date: '4 days ago',
    description:
      'Large rotation values were not reduced using the array length.',
    insight:
      'Large input values often require normalization before processing.',
    resolved: false,
  },
  {
    id: 6,
    problem: 'Binary Search',
    skill: 'Searching',
    type: 'Edge Case',
    rootCause: 'Boundary condition',
    severity: 'Low',
    occurrences: 2,
    date: '5 days ago',
    description:
      'The search failed when the target was located at the first or last position.',
    insight:
      'Your boundary handling is improving, but extreme positions still need attention.',
    resolved: true,
  },
  {
    id: 7,
    problem: 'Longest Substring Without Repeating Characters',
    skill: 'Strings',
    type: 'Complexity',
    rootCause: 'Inefficient approach',
    severity: 'Medium',
    occurrences: 2,
    date: '6 days ago',
    description:
      'The solution used nested loops and resulted in unnecessary repeated scanning.',
    insight:
      'Look for ways to maintain information about the current window instead of restarting the scan.',
    resolved: false,
  },
  {
    id: 8,
    problem: 'Merge Two Sorted Arrays',
    skill: 'Arrays',
    type: 'Syntax',
    rootCause: 'Incorrect method usage',
    severity: 'Low',
    occurrences: 1,
    date: '1 week ago',
    description:
      'A JavaScript array method was called with incorrect arguments.',
    insight:
      'Review the method signature before using unfamiliar array methods.',
    resolved: true,
  },
]

const filterOptions = [
  'All',
  'Conceptual',
  'Logic',
  'Edge Case',
  'Syntax',
  'Complexity',
]

const severityOptions = ['All Severity', 'High', 'Medium', 'Low']

const Failures = () => {
  const [searchText, setSearchText] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')
  const [severityFilter, setSeverityFilter] = useState('All Severity')
  const [selectedFailure, setSelectedFailure] = useState(null)

  const stats = useMemo(() => {
    const total = failuresData.length
    const analyzed = failuresData.filter(item => item.insight).length
    const recurring = failuresData.filter(item => item.occurrences > 1).length
    const resolved = failuresData.filter(item => item.resolved).length

    return {
      total,
      analyzed,
      recurring,
      resolved,
    }
  }, [])

  const filteredFailures = useMemo(() => {
    const search = searchText.trim().toLowerCase()

    return failuresData.filter(failure => {
      const matchesSearch =
        search === '' ||
        failure.problem.toLowerCase().includes(search) ||
        failure.skill.toLowerCase().includes(search) ||
        failure.type.toLowerCase().includes(search) ||
        failure.rootCause.toLowerCase().includes(search)

      const matchesType =
        activeFilter === 'All' || failure.type === activeFilter

      const matchesSeverity =
        severityFilter === 'All Severity' ||
        failure.severity === severityFilter

      return matchesSearch && matchesType && matchesSeverity
    })
  }, [searchText, activeFilter, severityFilter])

  const clearFilters = () => {
    setSearchText('')
    setActiveFilter('All')
    setSeverityFilter('All Severity')
  }

  return (
    <section className="failures-page">
      <div className="failures-container">
        {/* Header */}
        <header className="failures-header">
          <div>
            <div className="failures-eyebrow">
              <Brain size={15} />
              FAILURE INTELLIGENCE
            </div>

            <h1>
              Your failures are
              <span> signals.</span>
            </h1>

            <p>
              Understand what went wrong, discover recurring patterns, and
              turn every mistake into a better learning strategy.
            </p>
          </div>

          <div className="failure-header-status">
            <div className="status-dot" />
            <span>AI analysis active</span>
          </div>
        </header>

        {/* Stats */}
        <div className="failure-stats">
          <div className="failure-stat-card">
            <div className="failure-stat-icon red">
              <CircleAlert size={19} />
            </div>

            <div>
              <span>Total failures</span>
              <strong>{stats.total}</strong>
            </div>

            <div className="stat-trend negative">
              <TrendingUp size={13} />
              <span>8 this week</span>
            </div>
          </div>

          <div className="failure-stat-card">
            <div className="failure-stat-icon purple">
              <Brain size={19} />
            </div>

            <div>
              <span>Analyzed</span>
              <strong>{stats.analyzed}</strong>
            </div>

            <div className="stat-trend positive">
              <CheckCircle2 size={13} />
              <span>100%</span>
            </div>
          </div>

          <div className="failure-stat-card">
            <div className="failure-stat-icon orange">
              <RefreshCcw size={19} />
            </div>

            <div>
              <span>Recurring</span>
              <strong>{stats.recurring}</strong>
            </div>

            <div className="stat-trend warning">
              <Zap size={13} />
              <span>Needs focus</span>
            </div>
          </div>

          <div className="failure-stat-card">
            <div className="failure-stat-icon green">
              <Target size={19} />
            </div>

            <div>
              <span>Resolved</span>
              <strong>{stats.resolved}</strong>
            </div>

            <div className="stat-trend positive">
              <TrendingUp size={13} />
              <span>Improving</span>
            </div>
          </div>
        </div>

        {/* Pattern insight */}
        <div className="failure-pattern-banner">
          <div className="pattern-banner-icon">
            <Lightbulb size={22} />
          </div>

          <div className="pattern-banner-content">
            <span className="pattern-label">RECURRING PATTERN DETECTED</span>

            <h2>Boundary-condition weakness</h2>

            <p>
              You've encountered boundary-condition issues <strong>8 times</strong>.
              Your recent attempts show improvement, but negative values and
              empty inputs are still causing failures.
            </p>
          </div>

          <div className="pattern-score">
            <strong>8×</strong>
            <span>detected</span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="failures-toolbar">
          <div className="failure-search">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search failures, problems, or root causes..."
              value={searchText}
              onChange={event => setSearchText(event.target.value)}
            />

            {searchText && (
              <button
                type="button"
                className="search-clear"
                onClick={() => setSearchText('')}
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>

          <div className="severity-select">
            <Filter size={15} />

            <select
              value={severityFilter}
              onChange={event => setSeverityFilter(event.target.value)}
            >
              {severityOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <ChevronDown size={15} />
          </div>
        </div>

        {/* Type filters */}
        <div className="failure-filters">
          {filterOptions.map(option => (
            <button
              type="button"
              key={option}
              className={`failure-filter ${
                activeFilter === option ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(option)}
            >
              {option}

              {option !== 'All' && (
                <span>
                  {
                    failuresData.filter(item => item.type === option).length
                  }
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Failure list */}
        <div className="failure-list-header">
          <div>
            <h2>Failure history</h2>
            <p>
              {filteredFailures.length} failure
              {filteredFailures.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <span className="failure-history-label">
            Most recent first
          </span>
        </div>

        {filteredFailures.length > 0 ? (
          <div className="failure-list">
            {filteredFailures.map(failure => (
              <article className="failure-card" key={failure.id}>
                <div className="failure-card-main">
                  <div className="failure-problem-icon">
                    <AlertCircle size={19} />
                  </div>

                  <div className="failure-card-content">
                    <div className="failure-card-title-row">
                      <h3>{failure.problem}</h3>

                      {failure.resolved && (
                        <span className="resolved-badge">
                          <CheckCircle2 size={12} />
                          Resolved
                        </span>
                      )}
                    </div>

                    <div className="failure-meta">
                      <span>{failure.skill}</span>
                      <span className="meta-dot" />
                      <span>{failure.date}</span>
                      <span className="meta-dot" />
                      <span>{failure.occurrences} occurrences</span>
                    </div>

                    <p className="failure-description">
                      {failure.description}
                    </p>
                  </div>
                </div>

                <div className="failure-card-side">
                  <span
                    className={`failure-type ${failure.type
                      .toLowerCase()
                      .replace(' ', '-')}`}
                  >
                    {failure.type}
                  </span>

                  <span
                    className={`severity-badge ${failure.severity.toLowerCase()}`}
                  >
                    {failure.severity}
                  </span>

                  <div className="root-cause">
                    <span>Root cause</span>
                    <strong>{failure.rootCause}</strong>
                  </div>

                  <button
                    type="button"
                    className="view-analysis-button"
                    onClick={() => setSelectedFailure(failure)}
                  >
                    View analysis
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="failures-empty">
            <div className="empty-icon">
              <Search size={25} />
            </div>

            <h3>No failures found</h3>

            <p>
              Try changing your search or filters to find what you're
              looking for.
            </p>

            <button type="button" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        )}

        {/* Bottom intelligence card */}
        <div className="failure-bottom-card">
          <div className="bottom-card-icon">
            <Brain size={21} />
          </div>

          <div>
            <span>FAILSENSE INTELLIGENCE</span>
            <h3>Every mistake leaves a signal.</h3>
            <p>
              The goal isn't to eliminate failure. It's to make sure the same
              failure doesn't happen twice.
            </p>
          </div>

          <div className="bottom-card-metric">
            <strong>18.2%</strong>
            <span>improvement</span>
            <div>
              <TrendingUp size={13} />
              since first analysis
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Modal */}
      {selectedFailure && (
        <div
          className="failure-modal-backdrop"
          onClick={() => setSelectedFailure(null)}
          role="presentation"
        >
          <div
            className="failure-modal"
            onClick={event => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Failure analysis"
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedFailure(null)}
              aria-label="Close analysis"
            >
              <X size={18} />
            </button>

            <div className="modal-eyebrow">
              <Brain size={14} />
              AI FAILURE ANALYSIS
            </div>

            <h2>{selectedFailure.problem}</h2>

            <p className="modal-description">
              {selectedFailure.description}
            </p>

            <div className="analysis-grid">
              <div className="analysis-item">
                <span>Failure type</span>
                <strong>{selectedFailure.type}</strong>
              </div>

              <div className="analysis-item">
                <span>Severity</span>
                <strong>{selectedFailure.severity}</strong>
              </div>

              <div className="analysis-item">
                <span>Root cause</span>
                <strong>{selectedFailure.rootCause}</strong>
              </div>

              <div className="analysis-item">
                <span>Occurrences</span>
                <strong>{selectedFailure.occurrences}×</strong>
              </div>
            </div>

            <div className="modal-insight">
              <div>
                <Lightbulb size={18} />
              </div>

              <div>
                <span>AI insight</span>
                <p>{selectedFailure.insight}</p>
              </div>
            </div>

            <div className="modal-recommendation">
              <Clock3 size={17} />

              <p>
                Practice 3 similar problems focused on{' '}
                <strong>{selectedFailure.rootCause.toLowerCase()}</strong>{' '}
                before moving to a harder difficulty.
              </p>
            </div>

            <button
              type="button"
              className="modal-practice-button"
              onClick={() => setSelectedFailure(null)}
            >
              Practice this weakness
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Failures