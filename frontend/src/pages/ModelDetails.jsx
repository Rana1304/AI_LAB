import { Link, useParams } from "react-router-dom";
import models from "../data/models";
import { Fragment } from "react";

function ModelDetails() {
  const { id } = useParams();

  const model = models.find((item) => item.id === Number(id));

  if (!model) {
    return (
      <div className="not-found">
        <h1>Project Not Found</h1>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <section className="model-details">
      <Link to="/" className="back-link">
        ← Back to AI LAB
      </Link>

      <div className="details-content">
        <div className="details-header">
          <span className="model-category">{model.category}</span>

          <span className="model-status">● {model.status}</span>
        </div>

        <h1>{model.name}</h1>

        <p className="details-description">{model.description}</p>

        {/* Technologies */}

        <div className="details-section">
          <h3>Technologies</h3>

          <div className="technology-list">
            {model.technology.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Features */}

        <div className="details-section">
          <h3>Key Features</h3>

          <div className="features-grid">
            {model.features.map((feature, index) => (
              <div className="feature-box" key={index}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <h4>{feature}</h4>

                <p>Built as part of the AI LAB project collection.</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}

        <div className="details-section">
          <h3>How It Works</h3>

          <div className="workflow">
            {model.workflow.map((step, index) => (
              <Fragment key={index}>
                <div>
                  <strong>{String(index + 1).padStart(2, "0")}</strong>

                  <p>{step}</p>
                </div>

                {index < model.workflow.length - 1 && (
                  <div className="workflow-arrow">→</div>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Actions */}

        <div className="details-actions">
          <a
            href={model.github}
            target="_blank"
            rel="noreferrer"
            className="code-btn"
          >
            View GitHub
          </a>

          <a
            href={model.demo}
            target="_blank"
            rel="noreferrer"
            className="demo-btn"
          >
            Live Demo →
          </a>
        </div>
      </div>
    </section>
  );
}

export default ModelDetails;
