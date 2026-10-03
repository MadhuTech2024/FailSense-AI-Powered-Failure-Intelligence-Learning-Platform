import {
  ArrowUpRight,
  Brain,
  Check,
  CircleAlert,
  Code2,
  RefreshCcw,
  Sparkles,
  Target,
} from 'lucide-react'
import './index.css'

const FailureIntelligence = () => {
  return (
    <section className="fi-section" id="insights">
      <div className="fi-background-grid" />
      <div className="fi-glow fi-glow-left" />
      <div className="fi-glow fi-glow-right" />

      <div className="fi-container">
        {/* Section intro */}

        <div className="fi-intro">
          <div className="fi-kicker">
            <span className="fi-kicker-dot" />
            FAILURE INTELLIGENCE
          </div>

          <h2>
            Don't just know
            <br />
            <span>that you failed.</span>
          </h2>

          <p>
            Understand why.
          </p>
        </div>

        {/* Main visual */}

        <div className="fi-stage">
          {/* Top label */}

          <div className="fi-stage-top">
            <div className="fi-stage-title">
              <div className="fi-stage-logo">
                <Sparkles size={16} />
              </div>

              <div>
                <span>FAILSENSE</span>
                <strong>Failure Intelligence</strong>
              </div>
            </div>

            <div className="fi-stage-status">
              <span />
              AI ANALYSIS
            </div>
          </div>

          {/* Main transformation */}

          <div className="fi-transformation">
            {/* Failed attempt */}

            <div className="fi-attempt">
              <div className="fi-small-label">
                <CircleAlert size={13} />
                FAILED ATTEMPT
              </div>

              <div className="fi-code-card">
                <div className="fi-code-header">
                  <div>
                    <span />
                    <span />
                    <span />
                  </div>

                  <small>solution.js</small>
                </div>

                <div className="fi-code-content">
                  <div>
                    <i>01</i>
                    <span>
                      const largest = <b>0</b>
                    </span>
                  </div>

                  <div className="fi-code-error">
                    <i>02</i>
                    <span>for (const num of nums) {'{'}</span>
                  </div>

                  <div>
                    <i>03</i>
                    <span>
                      &nbsp;&nbsp;if (num &gt; largest)
                    </span>
                  </div>

                  <div>
                    <i>04</i>
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;largest = num
                    </span>
                  </div>

                  <div>
                    <i>05</i>
                    <span>{'}'}</span>
                  </div>
                </div>

                <div className="fi-test">
                  <CircleAlert size={13} />

                  <div>
                    <span>Test failed</span>
                    <strong>[-8, -3, -12]</strong>
                  </div>

                  <b>0</b>
                </div>
              </div>
            </div>

            {/* Intelligence connector */}

            <div className="fi-center">
              <div className="fi-center-line" />

              <div className="fi-brain">
                <div className="fi-brain-ring ring-one" />
                <div className="fi-brain-ring ring-two" />
                <Brain size={24} />
              </div>

              <span>UNDERSTAND</span>
            </div>

            {/* Intelligence result */}

            <div className="fi-result">
              <div className="fi-small-label">
                <Sparkles size={13} />
                INTELLIGENCE FOUND
              </div>

              <div className="fi-result-main">
                <div className="fi-result-icon">
                  <Target size={18} />
                </div>

                <div>
                  <span>ROOT CAUSE</span>
                  <h3>Incorrect initialization</h3>
                </div>
              </div>

              <p>
                Starting with <code>0</code> fails when every
                number in the input is negative.
              </p>

              <div className="fi-result-divider" />

              <div className="fi-pattern">
                <div className="fi-pattern-icon">
                  <RefreshCcw size={14} />
                </div>

                <div>
                  <span>RECURRING PATTERN</span>
                  <strong>Boundary conditions</strong>
                </div>

                <b>8×</b>
              </div>
            </div>
          </div>

          {/* AI insight bar */}

          <div className="fi-insight">
            <div className="fi-insight-mark">
              <Sparkles size={17} />
            </div>

            <div className="fi-insight-text">
              <span>AI INSIGHT</span>

              <p>
                You're not struggling with arrays.
                <strong>
                  {' '}
                  You're struggling with boundary conditions.
                </strong>
              </p>
            </div>

            <div className="fi-insight-action">
              <span>Next action</span>

              <strong>Practice edge cases</strong>

              <ArrowUpRight size={16} />
            </div>
          </div>

          {/* Stage footer */}

          <div className="fi-stage-footer">
            <div>
              <Check size={13} />
              Failure classified
            </div>

            <div>
              <Check size={13} />
              Root cause identified
            </div>

            <div>
              <Check size={13} />
              Pattern detected
            </div>

            <div>
              <Check size={13} />
              Action generated
            </div>
          </div>
        </div>

        {/* Bottom message */}

        <div className="fi-bottom">
          <div className="fi-bottom-number">
            01
          </div>

          <div className="fi-bottom-heading">
            <span>THE IDEA</span>

            <h3>
              Every mistake
              <br />
              <strong>leaves a signal.</strong>
            </h3>
          </div>

          <div className="fi-bottom-copy">
            <p>
              FailSense connects those signals over time.
              What looks like four unrelated mistakes can reveal
              one underlying weakness.
            </p>

            <a href="#how-it-works">
              See how it works
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FailureIntelligence