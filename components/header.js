import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNavBar"
          aria-controls="myNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="myNavBar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
               <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
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
