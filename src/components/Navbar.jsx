import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Theme Toggle Button
const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ darkMode }) => (darkMode ? "#28A745" : "#333")};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #218838;
  }
`;

// Mobile Menu Styling
const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-100%")};
  width: 75%;
  height: 100vh;
  background: ${({ darkMode }) => (darkMode ? "#121212" : "#fff")}; 
  color: ${({ darkMode }) => (darkMode ? "#28A745" : "#333")}; 
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.3);
  transition: right 0.3s ease-in-out;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;

  a {
    color: ${({ darkMode }) => (darkMode ? "#28A745" : "#333")};
    font-size: 1.3rem;
    padding: 12px 20px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  a:hover {
    color: ${({ darkMode }) => (darkMode ? "#fff" : "#000")};
  }

  .close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 1.8rem;
    color: ${({ darkMode }) => (darkMode ? "#28A745" : "#333")};
    cursor: pointer;
  }
`;

// Navbar Container
const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background: ${({ darkMode }) => (darkMode ? "#222" : "#fff")};
  color: ${({ darkMode }) => (darkMode ? "#28A745" : "#333")};
  padding: 0.8rem 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <NavbarContainer darkMode={darkMode} className="d-flex justify-content-between align-items-center">
        {/* Brand Logo */}
        <Link className="navbar-brand fs-2 fw-bold" to="/" style={{ color: darkMode ? "#28A745" : "#333" }}>
          DIVYESH
        </Link>

        {/* Desktop Links */}
        <div className="d-none d-lg-flex gap-4">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/skills">Skills</Link>
          <Link className="nav-link" to="/experience">Experience</Link>
          <Link className="nav-link" to="/education">Education</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </div>

        {/* Theme Toggle Button */}
        <ToggleButton onClick={toggleTheme} darkMode={darkMode} aria-label="Toggle theme">
          {darkMode ? <FaSun /> : <FaMoon />}
        </ToggleButton>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="d-lg-none"
          onClick={() => setMenuOpen(true)}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.8rem",
            color: darkMode ? "#28A745" : "#333",
            cursor: "pointer"
          }}
          aria-label="Open Menu"
        >
          <FaBars />
        </button>
      </NavbarContainer>

      {/* Mobile Menu */}
      <MobileMenu open={menuOpen} darkMode={darkMode}>
        <FaTimes className="close-btn" onClick={() => setMenuOpen(false)} />
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link>
        <Link to="/education" onClick={() => setMenuOpen(false)}>Education</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </MobileMenu>
    </>
  );
};

export default Navbar;
