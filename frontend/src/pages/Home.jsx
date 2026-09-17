import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ModelCard from "../components/ModelCard";
import models from "../data/models";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "AI Assistant", "Machine Learning"];

  const filteredModels = models.filter((model) => {
    const matchesSearch =
      model.name.toLowerCase().includes(search.toLowerCase()) ||
      model.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "All" || model.category === category;

    return matchesSearch && matchesCategory;
  });

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
            Discover AI assistants, machine learning projects, and intelligent
            applications.
          </p>
        </div>

        {/* SEARCH */}

        <div className="model-controls">
          <input
            type="text"
            placeholder="Search AI projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="category-buttons">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={
                  category === item ? "category-btn active" : "category-btn"
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS */}

        <div className="models-grid">
          {filteredModels.length > 0 ? (
            filteredModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))
          ) : (
            <div className="no-results">
              <h3>No projects found</h3>
              <p>Try another project name or category.</p>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-heading">
          <span>ABOUT AI LAB</span>

          <h2>
            Building with <strong>AI & Python</strong>
          </h2>

          <p>
            AI LAB is a collection of practical Artificial Intelligence, Machine
            Learning and LLM projects built while exploring modern AI
            technologies.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Turning ideas into intelligent applications.</h3>

            <p>
              I work with Python, Large Language Models, APIs and interactive
              frameworks to build practical AI solutions.
            </p>

            <p>
              From AI assistants and document-based applications to machine
              learning experiments, AI LAB showcases my learning journey and
              hands-on projects.
            </p>
          </div>

          <div className="tech-stack">
            <h3>Tech Stack</h3>

            <div className="tech-grid">
              <div className="tech-item">
                <span>🐍</span>
                <p>Python</p>
              </div>

              <div className="tech-item">
                <span>🧠</span>
                <p>LLMs</p>
              </div>

              <div className="tech-item">
                <span>🤖</span>
                <p>AI</p>
              </div>

              <div className="tech-item">
                <span>📊</span>
                <p>Machine Learning</p>
              </div>

              <div className="tech-item">
                <span>⚡</span>
                <p>Gradio</p>
              </div>

              <div className="tech-item">
                <span>🔗</span>
                <p>APIs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
