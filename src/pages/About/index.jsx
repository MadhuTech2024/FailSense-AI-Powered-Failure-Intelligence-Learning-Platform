import {
  ArrowDown,
  ArrowUpRight,
  Brain,
  Check,
  CircleAlert,
  Eye,
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import './index.css'

const About = () => {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-grid-bg" />
        <div className="about-glow about-glow-one" />
        <div className="about-glow about-glow-two" />

        <div className="about-hero-container">
          <div className="about-hero-content">
            <div className="about-kicker">
              <span className="about-kicker-dot" />
              THE IDEA BEHIND FAILSENSE
            </div>

            <h1>
              Your mistakes
              <br />
              are <span>data.</span>
            </h1>

            <p>
              FailSense transforms failure from something you avoid
              into something you can understand, measure, and learn from.
            </p>

            <div className="about-hero-actions">
              <a href="#story" className="about-primary-btn">
                Discover the idea
                <ArrowDown size={17} />
              </a>

              <div className="about-hero-note">
                <Sparkles size={15} />
                Built for intentional learners
              </div>
            </div>
          </div>

          {/* Intelligence Visual */}
          <div className="about-hero-visual">
            <div className="about-orbit orbit-one" />
            <div className="about-orbit orbit-two" />
            <div className="about-orbit orbit-three" />

            <div className="about-core">
              <div className="about-core-glow" />
              <Brain size={42} strokeWidth={1.3} />
              <span>FAILSENSE</span>
              <small>LEARNING INTELLIGENCE</small>
            </div>

            <div className="about-floating-card card-failure">
              <CircleAlert size={16} />
              <div>
                <span>FAILURE</span>
                <strong>Detected</strong>
              </div>
            </div>

            <div className="about-floating-card card-pattern">
              <TrendingUp size={16} />
              <div>
                <span>PATTERN</span>
                <strong>Boundary conditions</strong>
              </div>
            </div>

            <div className="about-floating-card card-growth">
              <Target size={16} />
              <div>
                <span>NEXT ACTION</span>
                <strong>Practice edge cases</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="about-scroll">
          <span>SCROLL TO EXPLORE</span>
          <div />
        </div>
      </section>

      {/* STORY */}
      <section className="about-story" id="story">
        <div className="about-container">
          <div className="about-section-label">
            <span>01</span>
            WHY FAILSENSE
          </div>

          <div className="about-story-grid">
            <div>
              <h2>
                Most platforms tell you
                <span> what you got wrong.</span>
              </h2>
            </div>

            <div className="about-story-copy">
              <p>
                You solve a problem. You submit your answer. It fails.
                Then you try again.
              </p>

              <p>
                But the important question often remains unanswered:
                <strong> Why did I fail?</strong>
              </p>

              <p>
                FailSense was created around that question. Instead of
                treating every wrong answer as an isolated event, it
                studies the signals behind your mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OLD VS FAILSENSE */}
      <section className="about-comparison">
        <div className="about-container">
          <div className="about-section-heading">
            <div className="about-section-label">
              <span>02</span>
              A DIFFERENT APPROACH
            </div>

            <h2>
              From <span>failure</span>
              <br />
              to understanding.
            </h2>
          </div>

          <div className="comparison-grid">
            {/* Traditional */}
            <div className="comparison-card traditional">
              <div className="comparison-card-top">
                <span>TRADITIONAL LEARNING</span>
                <CircleAlert size={18} />
              </div>

              <div className="comparison-flow">
                <div className="flow-item">
                  <span>01</span>
                  Wrong answer
                </div>

                <div className="flow-line" />

                <div className="flow-item">
                  <span>02</span>
                  Try again
                </div>

                <div className="flow-line" />

                <div className="flow-item">
                  <span>03</span>
                  Move on
                </div>
              </div>

              <p>
                The result is measured, but the reason behind the
                failure is often forgotten.
              </p>
            </div>

            {/* FailSense */}
            <div className="comparison-card failsense">
              <div className="comparison-card-top">
                <span>FAILSENSE</span>
                <Sparkles size={18} />
              </div>

              <div className="comparison-flow">
                <div className="flow-item active">
                  <span>01</span>
                  Failure detected
                </div>

                <div className="flow-line active-line" />

                <div className="flow-item active">
                  <span>02</span>
                  Root cause
                </div>

                <div className="flow-line active-line" />

                <div className="flow-item active">
                  <span>03</span>
                  Pattern found
                </div>

                <div className="flow-line active-line" />

                <div className="flow-item active">
                  <span>04</span>
                  Practice
                </div>
              </div>

              <p>
                Every mistake becomes a signal that helps shape
                your next learning decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTELLIGENCE */}
      <section className="about-intelligence">
        <div className="about-container">
          <div className="about-intelligence-head">
            <div className="about-section-label light-label">
              <span>03</span>
              FAILURE INTELLIGENCE
            </div>

            <h2>
              We don't want to hide
              <br />
              your <span>failures.</span>
            </h2>

            <p>
              We want to make them useful.
            </p>
          </div>

          <div className="intelligence-grid">
            <div className="intelligence-main-card">
              <div className="intelligence-card-header">
                <span>FAILURE SIGNAL</span>
                <div className="signal-live">
                  <i />
                  ANALYZING
                </div>
              </div>

              <div className="signal-visual">
                <div className="signal-circle circle-one" />
                <div className="signal-circle circle-two" />
                <div className="signal-circle circle-three" />

                <div className="signal-core">
                  <Brain size={30} />
                </div>

                <div className="signal-node node-a">
                  <CircleAlert size={14} />
                </div>

                <div className="signal-node node-b">
                  <Target size={14} />
                </div>

                <div className="signal-node node-c">
                  <TrendingUp size={14} />
                </div>
              </div>

              <div className="signal-result">
                <span>DETECTED PATTERN</span>
                <strong>Boundary-condition weakness</strong>
              </div>
            </div>

            <div className="intelligence-side">
              <div className="intelligence-small-card">
                <Lightbulb size={21} />

                <span>ROOT CAUSE</span>

                <h3>
                  Understand the
                  <br />
                  reason behind it.
                </h3>

                <p>
                  Not just what went wrong, but the concept or
                  reasoning gap responsible for it.
                </p>
              </div>

              <div className="intelligence-small-card">
                <Eye size={21} />

                <span>SEE THE PATTERN</span>

                <h3>
                  Connect mistakes
                  <br />
                  across time.
                </h3>

                <p>
                  Individual failures can reveal a much larger
                  learning pattern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="about-principles">
        <div className="about-container">
          <div className="about-section-heading centered">
            <div className="about-section-label">
              <span>04</span>
              WHAT WE BELIEVE
            </div>

            <h2>
              Learning should become
              <br />
              <span>more personal.</span>
            </h2>
          </div>

          <div className="principles-grid">
            <article>
              <div className="principle-number">01</div>
              <Check size={18} />
              <h3>Failure is information.</h3>
              <p>
                A failed attempt contains useful information about
                your current understanding.
              </p>
            </article>

            <article>
              <div className="principle-number">02</div>
              <Check size={18} />
              <h3>Patterns matter more.</h3>
              <p>
                One mistake may be random. Repeated mistakes reveal
                something worth fixing.
              </p>
            </article>

            <article>
              <div className="principle-number">03</div>
              <Check size={18} />
              <h3>Practice should adapt.</h3>
              <p>
                Your next challenge should reflect what you actually
                need to improve.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="about-vision">
        <div className="about-vision-glow" />

        <div className="about-container">
          <div className="vision-label">
            <Sparkles size={15} />
            OUR VISION
          </div>

          <h2>
            Build a generation of learners
            <br />
            who are not afraid to <span>fail.</span>
          </h2>

          <p>
            Because when you understand your failures, they stop
            being setbacks and start becoming signals for growth.
          </p>

          <a href="#start" className="vision-button">
            Start with your next mistake
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  )
}

export default About