import {
  ArrowDown,
  ArrowUpRight,
  Brain,
  Check,
  CircleAlert,
  Code2,
  Crosshair,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react'
import './index.css'

const stages = [
  {
    number: '01',
    label: 'CAPTURE',
    title: 'Your failure',
    description: 'Every failed attempt becomes a signal.',
    icon: CircleAlert,
  },
  {
    number: '02',
    label: 'ANALYZE',
    title: 'AI finds why',
    description: 'The system breaks down what actually went wrong.',
    icon: Brain,
  },
  {
    number: '03',
    label: 'CONNECT',
    title: 'Patterns emerge',
    description: 'Similar mistakes are connected across attempts.',
    icon: Crosshair,
  },
  {
    number: '04',
    label: 'IMPROVE',
    title: 'Your next move',
    description: 'You receive targeted actions to improve.',
    icon: Target,
  },
]

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-grid-bg" />

      <div className="how-container">
        {/* Header */}

        <div className="how-heading">
          <div className="how-label">
            <span />
            THE FAILSENSE ENGINE
          </div>

          <h2>
            A failure goes in.
            <br />
            <span>Intelligence comes out.</span>
          </h2>

          <p>
            FailSense transforms every wrong answer into structured learning
            intelligence — so you don't just solve the next problem.
            You understand the mistake behind the last one.
          </p>
        </div>

        {/* Main Intelligence Visual */}

        <div className="engine">
          <div className="engine-glow" />

          {/* Top bar */}

          <div className="engine-top">
            <div className="engine-brand">
              <div className="engine-brand-icon">
                <Sparkles size={15} />
              </div>

              <span>FAILSENSE / INTELLIGENCE ENGINE</span>
            </div>

            <div className="engine-live">
              <span />
              LIVE ANALYSIS
            </div>
          </div>

          {/* Pipeline */}

          <div className="pipeline">
            <div className="pipeline-line">
              <div className="pipeline-progress" />
            </div>

            {stages.map((stage, index) => {
              const Icon = stage.icon

              return (
                <div
                  className={`pipeline-stage stage-${index + 1}`}
                  key={stage.number}
                >
                  <div className="stage-node">
                    <Icon size={19} />
                  </div>

                  <div className="stage-number">{stage.number}</div>

                  <div className="stage-content">
                    <span>{stage.label}</span>

                    <h3>{stage.title}</h3>

                    <p>{stage.description}</p>
                  </div>

                  {index < stages.length - 1 && (
                    <div className="stage-arrow">
                      <ArrowDown size={15} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Floating data cards */}

          <div className="data-card data-card-one">
            <div className="data-card-icon error">
              <CircleAlert size={14} />
            </div>

            <div>
              <span>FAILURE TYPE</span>
              <strong>Edge Case</strong>
            </div>
          </div>

          <div className="data-card data-card-two">
            <div className="data-card-icon ai">
              <Brain size={14} />
            </div>

            <div>
              <span>ROOT CAUSE</span>
              <strong>Initialization</strong>
            </div>

            <Check size={14} className="data-check" />
          </div>

          <div className="data-card data-card-three">
            <div className="mini-progress">
              <div />
            </div>

            <div>
              <span>RECURRING PATTERN</span>
              <strong>8 occurrences</strong>
            </div>
          </div>
        </div>

        {/* Lower explanation */}

        <div className="how-bottom">
          <div className="bottom-copy">
            <div className="bottom-icon">
              <Zap size={19} />
            </div>

            <div>
              <span>THE DIFFERENCE</span>

              <h3>
                We don't just tell you
                <br />
                <strong>what went wrong.</strong>
              </h3>
            </div>
          </div>

          <div className="bottom-description">
            <p>
              Traditional platforms stop at <b>Wrong Answer.</b>
              FailSense keeps going — connecting your mistakes,
              discovering patterns, and turning them into your
              next learning action.
            </p>

            <button type="button">
              Explore the intelligence
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>

        {/* Mini metrics */}

        <div className="how-metrics">
          <div>
            <strong>01</strong>
            <span>Failure captured</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Cause identified</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Pattern connected</span>
          </div>

          <div>
            <strong>04</strong>
            <span>Action generated</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks