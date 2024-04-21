import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse fs-5" id="navbarNav">
          <ul className="navbar-nav">
            <div className="nav-item me-3">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </div>
            <div className="nav-item me-3">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </div>
            <div className="nav-item me-3">
              <Link className="nav-link" href="/resume">
                Resume
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
