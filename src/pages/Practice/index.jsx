import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock3,
  Code2,
  Flame,
  Search,
  Target,
  Zap,
} from 'lucide-react'

import {useMemo, useState} from 'react'

import './index.css'

const problems = [
  {
    id: 1,
    title: 'Find the Largest Number',
    description:
      'Find the largest number in an array, including cases where all numbers are negative.',
    skill: 'Arrays',
    difficulty: 'Easy',
    successRate: '84%',
    time: '15 min',
    reason: 'Boundary conditions',
    recommended: true,
    icon: Target,
  },
  {
    id: 2,
    title: 'Two Sum',
    description:
      'Find two numbers in an array that add up to a given target value.',
    skill: 'Arrays',
    difficulty: 'Easy',
    successRate: '91%',
    time: '20 min',
    reason: 'Array manipulation',
    recommended: true,
    icon: Code2,
  },
  {
    id: 3,
    title: 'Valid Parentheses',
    description:
      'Determine whether a string containing brackets is correctly balanced.',
    skill: 'Stack',
    difficulty: 'Medium',
    successRate: '72%',
    time: '25 min',
    reason: 'Logic patterns',
    recommended: true,
    icon: Brain,
  },
  {
    id: 4,
    title: 'Maximum Subarray',
    description:
      'Find the contiguous subarray with the largest possible sum.',
    skill: 'Algorithms',
    difficulty: 'Medium',
    successRate: '68%',
    time: '30 min',
    reason: 'Time complexity',
    recommended: false,
    icon: Zap,
  },
  {
    id: 5,
    title: 'Rotate an Array',
    description:
      'Rotate the elements of an array to the right by a specified number of positions.',
    skill: 'Arrays',
    difficulty: 'Medium',
    successRate: '64%',
    time: '25 min',
    reason: 'Edge cases',
    recommended: true,
    icon: Target,
  },
  {
    id: 6,
    title: 'Binary Search',
    description:
      'Implement binary search and correctly handle boundary conditions.',
    skill: 'Searching',
    difficulty: 'Medium',
    successRate: '76%',
    time: '20 min',
    reason: 'Boundary conditions',
    recommended: false,
    icon: Code2,
  },
  {
    id: 7,
    title: 'Longest Substring Without Repeating Characters',
    description:
      'Find the length of the longest substring without repeating characters.',
    skill: 'Strings',
    difficulty: 'Medium',
    successRate: '63%',
    time: '30 min',
    reason: 'Logic patterns',
    recommended: false,
    icon: Code2,
  },
  {
    id: 8,
    title: 'Merge Two Sorted Arrays',
    description:
      'Merge two sorted arrays into a single sorted array efficiently.',
    skill: 'Arrays',
    difficulty: 'Easy',
    successRate: '88%',
    time: '15 min',
    reason: 'Array manipulation',
    recommended: false,
    icon: Target,
  },
  {
    id: 9,
    title: 'Trapping Rain Water',
    description:
      'Calculate how much water can be trapped between bars after raining.',
    skill: 'Algorithms',
    difficulty: 'Hard',
    successRate: '42%',
    time: '40 min',
    reason: 'Optimization',
    recommended: false,
    icon: Zap,
  },
]

const Practice = () => {
  const [searchText, setSearchText] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProblems = useMemo(() => {
    const search = searchText.trim().toLowerCase()

    return problems.filter(problem => {
      const matchesSearch =
        search === '' ||
        problem.title.toLowerCase().includes(search) ||
        problem.description.toLowerCase().includes(search) ||
        problem.skill.toLowerCase().includes(search) ||
        problem.reason.toLowerCase().includes(search)

      const matchesFilter =
        activeFilter === 'All' ||
        (activeFilter === 'Recommended' && problem.recommended) ||
        problem.difficulty === activeFilter

      return matchesSearch && matchesFilter
    })
  }, [searchText, activeFilter])

  const handleFilterChange = filter => {
    setActiveFilter(filter)
  }

  return (
    <div className="practice-page">
      <div className="practice-container">
        {/* Header */}
        <section className="practice-header">
          <div>
            <div className="practice-eyebrow">
              <Flame size={15} />
              PERSONALIZED PRACTICE
            </div>

            <h1>
              Practice with
              <span> purpose.</span>
            </h1>

            <p>
              Problems selected based on your failure patterns, weak areas,
              and current learning progress.
            </p>
          </div>

          <div className="practice-progress-card">
            <div className="progress-icon">
              <Target size={20} />
            </div>

            <div>
              <span>Today's progress</span>
              <strong>4 / 6 problems</strong>
            </div>

            <div className="progress-ring">
              <span>67%</span>
            </div>
          </div>
        </section>

        {/* AI Recommendation */}
        <section className="practice-ai-card">
          <div className="practice-ai-icon">
            <Brain size={22} />
          </div>

          <div className="practice-ai-content">
            <span>AI RECOMMENDATION</span>

            <h3>Focus on boundary conditions today.</h3>

            <p>
              Your recent attempts show a recurring pattern around negative
              values, empty inputs, and array boundaries.
            </p>
          </div>

          <button type="button" className="practice-ai-button">
            View insight
            <ArrowRight size={16} />
          </button>
        </section>

        {/* Search + Filters */}
        <section className="practice-toolbar">
          <div className="practice-search">
            <Search size={18} />

            <input
              type="search"
              value={searchText}
              onChange={event => setSearchText(event.target.value)}
              placeholder="Search problems..."
            />

            {searchText && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearchText('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          <div className="practice-filters">
            {['All', 'Recommended', 'Easy', 'Medium', 'Hard'].map(
              filter => (
                <button
                  type="button"
                  key={filter}
                  className={`practice-filter ${
                    activeFilter === filter ? 'active' : ''
                  }`}
                  onClick={() => handleFilterChange(filter)}
                >
                  {filter}
                </button>
              ),
            )}
          </div>
        </section>

        {/* Problems */}
        <section className="recommended-section">
          <div className="section-heading">
            <div>
              <span>
                {activeFilter === 'Recommended'
                  ? 'AI CURATED'
                  : 'CURATED FOR YOU'}
              </span>

              <h2>
                {searchText
                  ? `Search results`
                  : activeFilter === 'All'
                    ? 'Recommended problems'
                    : `${activeFilter} problems`}
              </h2>
            </div>

            <p>
              {filteredProblems.length}{' '}
              {filteredProblems.length === 1 ? 'problem' : 'problems'} found
            </p>
          </div>

          {filteredProblems.length > 0 ? (
            <div className="problem-grid">
              {filteredProblems.map(problem => {
                const Icon = problem.icon

                return (
                  <article
                    className="problem-card"
                    key={problem.id}
                  >
                    <div className="problem-card-top">
                      <div className="problem-icon">
                        <Icon size={19} />
                      </div>

                      <span
                        className={`difficulty ${problem.difficulty.toLowerCase()}`}
                      >
                        {problem.difficulty}
                      </span>
                    </div>

                    <h3>{problem.title}</h3>

                    <p className="problem-description">
                      {problem.description}
                    </p>

                    <div className="problem-reason">
                      <Brain size={14} />

                      <span>
                        Recommended for{' '}
                        <strong>{problem.reason}</strong>
                      </span>
                    </div>

                    <div className="problem-meta">
                      <span>
                        <Code2 size={14} />
                        {problem.skill}
                      </span>

                      <span>
                        <Clock3 size={14} />
                        {problem.time}
                      </span>

                      <span>
                        <CheckCircle2 size={14} />
                        {problem.successRate}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="start-problem-button"
                    >
                      Start problem
                      <ArrowRight size={16} />
                    </button>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="no-problems">
              <div className="no-problems-icon">
                <Search size={25} />
              </div>

              <h3>No problems found</h3>

              <p>
                We couldn't find any problems matching
                {searchText ? ` "${searchText}"` : ' your selected filter'}.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchText('')
                  setActiveFilter('All')
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Practice