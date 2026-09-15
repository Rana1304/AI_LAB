import { Link } from "react-router-dom";

function ModelCard({ model }) {
  return (
    <div className="model-card">
      <div className="model-image">
        <img src={model.image} alt={model.name} />
      </div>
      <div className="model-card-top">
        <span className="model-category">{model.category}</span>

        <span className="model-status">● {model.status}</span>
      </div>

      <h3>{model.name}</h3>

      <p>{model.description}</p>

      <div className="technology-list">
        {model.technology.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>

      <div className="model-actions">
        <Link to={`/model/${model.id}`} className="details-btn">
          View Details →
        </Link>

        <a
          href={model.github}
          className="code-btn"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ModelCard;
