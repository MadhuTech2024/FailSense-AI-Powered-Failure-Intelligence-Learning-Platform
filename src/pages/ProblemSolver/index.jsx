import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  Code2,
  Play,
  RotateCcw,
  Send,
  Terminal,
  XCircle,
} from 'lucide-react'

import {useState} from 'react'
import {useNavigate, useParams} from 'react-router'

import './index.css'

const problems = {
  1: {
    title: 'Find the Largest Number',
    difficulty: 'Easy',
    skill: 'Arrays',
    time: '15 min',
    description:
      'Given an array of integers, find and return the largest number in the array.',
    examples: [
      {
        input: '[-8, -3, -12]',
        output: '-3',
        explanation: '-3 is the largest number among all elements.',
      },
      {
        input: '[4, 9, 2, 7]',
        output: '9',
        explanation: '9 is the largest number in the array.',
      },
    ],
    constraints: [
      'The array contains at least one element.',
      'The array may contain negative numbers.',
      'The array contains integers.',
    ],
  },

  2: {
    title: 'Two Sum',
    difficulty: 'Easy',
    skill: 'Arrays',
    time: '20 min',
    description:
      'Given an array of integers and a target value, return the indices of two numbers that add up to the target.',
    examples: [
      {
        input: 'nums = [2, 7, 11, 15], target = 9',
        output: '[0, 1]',
        explanation: 'nums[0] + nums[1] = 2 + 7 = 9.',
      },
      {
        input: 'nums = [3, 2, 4], target = 6',
        output: '[1, 2]',
        explanation: 'nums[1] + nums[2] = 2 + 4 = 6.',
      },
    ],
    constraints: [
      'Each input has exactly one solution.',
      'You cannot use the same element twice.',
      'The array contains integers.',
    ],
  },

  3: {
    title: 'Valid Parentheses',
    difficulty: 'Medium',
    skill: 'Stack',
    time: '25 min',
    description:
      'Given a string containing brackets, determine whether the brackets are correctly balanced.',
    examples: [
      {
        input: '"()[]{}"',
        output: 'true',
        explanation: 'Every opening bracket has a matching closing bracket.',
      },
      {
        input: '"([)]"',
        output: 'false',
        explanation: 'The brackets are not correctly ordered.',
      },
    ],
    constraints: [
      'The string contains only parentheses, brackets and braces.',
      'The string length is between 1 and 10,000.',
    ],
  },

  4: {
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    skill: 'Algorithms',
    time: '30 min',
    description:
      'Find the contiguous subarray with the largest possible sum.',
    examples: [
      {
        input: '[-2,1,-3,4,-1,2,1,-5,4]',
        output: '6',
        explanation: '[4,-1,2,1] has the largest sum of 6.',
      },
    ],
    constraints: [
      'The array contains at least one integer.',
      'The array may contain negative numbers.',
    ],
  },

  5: {
    title: 'Rotate an Array',
    difficulty: 'Medium',
    skill: 'Arrays',
    time: '25 min',
    description:
      'Rotate an array to the right by k positions.',
    examples: [
      {
        input: 'nums = [1,2,3,4,5,6,7], k = 3',
        output: '[5,6,7,1,2,3,4]',
        explanation: 'The last three elements move to the beginning.',
      },
    ],
    constraints: [
      'The array may contain duplicate values.',
      'k can be larger than the array length.',
    ],
  },

  6: {
    title: 'Binary Search',
    difficulty: 'Medium',
    skill: 'Searching',
    time: '20 min',
    description:
      'Given a sorted array and a target value, return the index of the target using binary search.',
    examples: [
      {
        input: 'nums = [1,3,5,7,9], target = 7',
        output: '3',
        explanation: 'The target 7 exists at index 3.',
      },
    ],
    constraints: [
      'The array is sorted in ascending order.',
      'All elements are integers.',
    ],
  },
}

const ProblemSolver = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const problem = problems[id] || problems[1]

  const [language, setLanguage] = useState('JavaScript')

  const [code, setCode] = useState(
    `function solve(input) {\n  // Write your solution here\n\n  return result\n}`,
  )

  const [result, setResult] = useState(null)
  const [isRunning, setIsRunning] = useState(false)

  const runCode = () => {
    setIsRunning(true)
    setResult(null)

    setTimeout(() => {
      setIsRunning(false)

      setResult({
        type: 'success',
        title: 'Sample tests passed',
        message:
          'Your solution passed the available sample test cases.',
      })
    }, 1000)
  }

  const submitCode = () => {
    setIsRunning(true)
    setResult(null)

    setTimeout(() => {
      setIsRunning(false)

      setResult({
        type: 'success',
        title: 'Solution submitted',
        message:
          'Your solution has been submitted successfully. Failure intelligence analysis will be available after backend integration.',
      })
    }, 1200)
  }

  const resetCode = () => {
    setCode(
      `function solve(input) {\n  // Write your solution here\n\n  return result\n}`,
    )

    setResult(null)
  }

  return (
    <div className="solver-page">
      {/* TOP BAR */}

      <header className="solver-header">
        <button
          type="button"
          className="solver-back-button"
          onClick={() => navigate('/practice')}
        >
          <ArrowLeft size={17} />
          Back to Practice
        </button>

        <div className="solver-header-center">
          <Code2 size={17} />
          <span>Problem Solver</span>
        </div>

        <div className="solver-header-status">
          <span />
          Practice session active
        </div>
      </header>

      <main className="solver-layout">
        {/* LEFT SIDE */}

        <section className="problem-panel">
          <div className="problem-title-row">
            <div>
              <div className="solver-label">
                PROBLEM {id}
              </div>

              <h1>{problem.title}</h1>
            </div>

            <span
              className={`solver-difficulty ${problem.difficulty.toLowerCase()}`}
            >
              {problem.difficulty}
            </span>
          </div>

          <div className="problem-meta-row">
            <span>
              <Code2 size={14} />
              {problem.skill}
            </span>

            <span>
              <Clock3 size={14} />
              {problem.time}
            </span>
          </div>

          <div className="problem-divider" />

          <div className="problem-content">
            <h2>Description</h2>

            <p>{problem.description}</p>

            <h2>Examples</h2>

            {problem.examples.map((example, index) => (
              <div className="example-card" key={index}>
                <div className="example-row">
                  <span>Input</span>

                  <code>{example.input}</code>
                </div>

                <div className="example-row">
                  <span>Output</span>

                  <code>{example.output}</code>
                </div>

                <p>{example.explanation}</p>
              </div>
            ))}

            <h2>Constraints</h2>

            <ul className="constraint-list">
              {problem.constraints.map((constraint, index) => (
                <li key={index}>{constraint}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* RIGHT SIDE */}

        <section className="editor-panel">
          <div className="editor-toolbar">
            <div className="language-selector">
              <Code2 size={15} />

              <select
                value={language}
                onChange={event =>
                  setLanguage(event.target.value)
                }
              >
                <option>JavaScript</option>
                <option>Python</option>
                <option>Java</option>
              </select>
            </div>

            <button
              type="button"
              className="reset-button"
              onClick={resetCode}
            >
              <RotateCcw size={14} />
              Reset
            </button>
          </div>

          <div className="code-editor-wrapper">
            <div className="editor-top">
              <div className="editor-file">
                <span />
                solution.js
              </div>

              <span className="editor-language">
                {language}
              </span>
            </div>

            <div className="code-editor">
              <div className="line-numbers">
                {code.split('\n').map((_, index) => (
                  <span key={index}>{index + 1}</span>
                ))}
              </div>

              <textarea
                value={code}
                onChange={event => setCode(event.target.value)}
                spellCheck="false"
                aria-label="Code editor"
              />
            </div>
          </div>

          {/* RESULT */}

          {result && (
            <div
              className={`execution-result ${result.type}`}
            >
              <div className="result-icon">
                {result.type === 'success' ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <XCircle size={18} />
                )}
              </div>

              <div>
                <strong>{result.title}</strong>
                <p>{result.message}</p>
              </div>
            </div>
          )}

          {/* ACTIONS */}

          <div className="editor-actions">
            <button
              type="button"
              className="run-button"
              onClick={runCode}
              disabled={isRunning}
            >
              <Play size={15} />

              {isRunning ? 'Running...' : 'Run Code'}
            </button>

            <button
              type="button"
              className="submit-button"
              onClick={submitCode}
              disabled={isRunning}
            >
              <Send size={15} />

              {isRunning ? 'Submitting...' : 'Submit Solution'}
            </button>
          </div>

          {/* TEST CASE PANEL */}

          <div className="test-panel">
            <div className="test-panel-header">
              <div>
                <Terminal size={15} />
                Test Cases
              </div>

              <span>
                {result ? '1 / 1 passed' : 'Ready'}
              </span>
            </div>

            <div className="test-case">
              <div>
                <span className="test-number">1</span>

                <div>
                  <strong>Sample Test</strong>
                  <p>Uses the example input from the problem.</p>
                </div>
              </div>

              {result?.type === 'success' && (
                <CheckCircle2
                  size={17}
                  className="test-success"
                />
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProblemSolver