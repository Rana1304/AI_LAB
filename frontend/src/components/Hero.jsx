function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-badge">
          ✦ AI • MACHINE LEARNING • LLMs
        </div>

        <h1>
          Explore the World of
          <span>Artificial Intelligence</span>
        </h1>

        <p>
          Welcome to AI LAB — a centralized hub for exploring
          AI assistants, machine learning projects, LLM
          applications, and experimental models.
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

          <div>
            <strong>04+</strong>
            <span>AI Projects</span>
          </div>

          <div>
            <strong>03+</strong>
            <span>AI Assistants</span>
          </div>

          <div>
            <strong>Python</strong>
            <span>Core Technology</span>
          </div>

        </div>

      </div>

      <div className="hero-visual">

        <div className="ai-orb">

          <div className="orb-core">
            AI
          </div>

          <div className="orb-ring ring-one"></div>
          <div className="orb-ring ring-two"></div>
          <div className="orb-ring ring-three"></div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
