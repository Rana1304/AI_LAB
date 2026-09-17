function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <div className="hero-badge">
          ✦ AI • MACHINE LEARNING • LLMs
        </div>

        <h1>
          BUILD
          <span>EXPLORE</span>
          INNOVATE
        </h1>

        <h2>
          Artificial Intelligence
          <br />
          Machine Learning
          <br />
          LLM Applications
        </h2>

        <p>
          Welcome to AI LAB — a collection of practical
          AI projects, intelligent assistants and
          machine learning experiments built with Python.
        </p>

        <div className="hero-buttons">

          <a
            href="#models"
            className="primary-btn"
          >
            Explore Models →
          </a>

          <a
            href="https://github.com/Rana1304/AI_PYTHON"
            className="secondary-btn"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>

        </div>

        <div className="hero-stats">

          <div className="stat">
            <strong>04+</strong>
            <span>AI Projects</span>
          </div>

          <div className="stat">
            <strong>03+</strong>
            <span>AI Assistants</span>
          </div>

          <div className="stat">
            <strong>Python</strong>
            <span>Core Technology</span>
          </div>

        </div>

      </div>

      <div className="hero-visual">

        <div className="ai-orb">

          <div className="orb-core">
            <span>AI</span>
          </div>

          <div className="orb-ring ring-one"></div>
          <div className="orb-ring ring-two"></div>
          <div className="orb-ring ring-three"></div>

        </div>

        <div className="floating-card card-one">
          <span>◈</span>
          <div>
            <strong>LLM</strong>
            <small>Intelligence</small>
          </div>
        </div>

        <div className="floating-card card-two">
          <span>⌘</span>
          <div>
            <strong>Python</strong>
            <small>AI Development</small>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;