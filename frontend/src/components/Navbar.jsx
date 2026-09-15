function Navbar() {
  return (
    <nav className="navbar">

      <a href="/" className="navbar-logo">
        <span>◈</span>
        AI LAB
      </a>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#models">Models</a>
        <a href="#about">About</a>

        <a
          href="https://github.com/Rana1304/AI_PYTHON"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>

    </nav>
  );
}

export default Navbar;
