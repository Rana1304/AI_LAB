import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <a href="/" className="navbar-logo">
        <span>◈</span>
        AI LAB
      </a>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>

        <a href="/" onClick={closeMenu}>
          Home
        </a>

        <a href="#models" onClick={closeMenu}>
          Models
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a
          href="https://github.com/Rana1304/AI_PYTHON"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          GitHub
        </a>

      </div>

      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
}

export default Navbar;