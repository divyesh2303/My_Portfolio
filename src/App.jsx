import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { GlobalStyles } from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Import Bootstrap CSS (if not already imported in main.jsx or index.css)
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Router>
      {/* Global styles with theme */}
      <GlobalStyles theme={{ darkMode }} />

      {/* Main container for responsive layout */}
      <div className="container-fluid p-0 min-vh-100">
        <Navbar />
        <main className="container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;