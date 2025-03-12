import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { GlobalStyles } from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Loading from "./components/Loading"; // Import Loading Component

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { darkMode } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 1 seconds
    setTimeout(() => setLoading(false),1000);
  }, []);

  return (
    <Router>
      <GlobalStyles theme={{ darkMode }} />
      
      {loading ? (
        <Loading />
      ) : (
        <div className={`container-fluid p-0 min-vh-100 ${darkMode ? "bg-[#222] text-light" : "bg-light text-dark"}`}>
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
      )}
    </Router>
  );
}

export default App;
