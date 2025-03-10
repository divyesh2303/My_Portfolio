import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled component for the toggle button with explicit green in dark mode
const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => (theme.darkMode ? "#28A745" : "#333333")}; /* Green in dark mode */
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #218838; /* Darker green on hover */
  }
`;

// Custom CSS to override Bootstrap styles for links in dark mode
const CustomNavStyles = `
  .navbar-dark .nav-link,
  .navbar-dark .navbar-brand {
    color: #28A745 !important; /* Green for links and brand in dark mode */
  }

  .navbar-dark .nav-link:hover,
  .navbar-dark .navbar-brand:hover {
    color: #218838 !important; /* Darker green on hover */
  }
`;

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Inject custom styles to override Bootstrap defaults */}
      <style>{CustomNavStyles}</style>

      <nav
        className={`navbar navbar-expand-lg sticky-top ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} shadow-sm`}
      >
        <div className="container-fluid">
          {/* Brand/Logo */}
          <Link className="navbar-brand fs-1" to="/">
            DIVYESH
          </Link>

          {/* Hamburger toggle for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-controls="navbarNav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className={`collapse navbar-collapse fs-5 ${menuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills" onClick={() => setMenuOpen(false)}>
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/experience" onClick={() => setMenuOpen(false)}>
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/education" onClick={() => setMenuOpen(false)}>
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>

            {/* Theme toggle button */}
            <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
              {darkMode ? <FaSun /> : <FaMoon />}
            </ToggleButton>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;