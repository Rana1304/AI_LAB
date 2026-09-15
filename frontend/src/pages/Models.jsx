import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ModelCard from "../components/ModelCard";
import models from "../data/models";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section id="models" className="models-section">

        <div className="section-heading">
          <span>MY AI PROJECTS</span>

          <h2>
            Explore My <strong>AI Models</strong>
          </h2>

          <p>
            A collection of AI assistants, machine learning
            projects, and intelligent applications.
          </p>
        </div>

        <div className="models-grid">
          {models.map((model) => (
            <ModelCard
              key={model.id}
              model={model}
            />
          ))}
        </div>

      </section>

      <section id="about" className="about-section">

        <div className="section-heading">
          <span>ABOUT</span>

          <h2>
            Welcome to <strong>AI LAB</strong>
          </h2>

          <p>
            AI LAB is my personal collection of practical
            Artificial Intelligence, Machine Learning,
            and LLM projects built using Python.
          </p>
        </div>

      </section>
    </>
  );
}

export default Home;
