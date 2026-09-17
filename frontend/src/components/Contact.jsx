function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="section-heading">
        <span>CONTACT</span>

        <h2>
          Let's Build Something <strong>Intelligent</strong>
        </h2>

        <p>
          Interested in AI, Machine Learning or building
          something together? Let's connect.
        </p>
      </div>

      <div className="contact-grid">

        <a
          href="https://github.com/Rana1304/AI_PYTHON"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          <span>◈</span>
          <div>
            <h3>GitHub</h3>
            <p>Explore my AI projects</p>
          </div>
        </a>

        <a
          href="#"
          className="contact-item"
        >
          <span>in</span>
          <div>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </div>
        </a>

        <a
          href="#"
          className="contact-item"
        >
          <span>⌨</span>
          <div>
            <h3>LeetCode</h3>
            <p>Check my coding journey</p>
          </div>
        </a>

      </div>

    </section>
  );
}

export default Contact;