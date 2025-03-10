import styled from "styled-components";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Container = styled.div`
  padding: 60px 20px;
  text-align: center;
  background: ${({ darkMode }) =>
    darkMode
      ? "linear-gradient(135deg, #0d0d0d, #1a1a1a)"
      : "linear-gradient(135deg, #f9f9f9, #ffffff)"};
  min-height: 100vh;

  h2 {
    color: ${({ darkMode }) => (darkMode ? "#00e676" : "#333")};
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 40px;
    position: relative;
    display: inline-block;

    &:after {
      content: "";
      position: absolute;
      width: 50%;
      height: 3px;
      background: ${({ darkMode }) => (darkMode ? "#00e676" : "#007BFF")};
      bottom: -10px;
      left: 25%;
      border-radius: 2px;
    }
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ darkMode }) =>
    darkMode ? "#1a1a1a" : "#ffffff"};
  color: ${({ darkMode }) => (darkMode ? "#f0f0f0" : "#333")};
  padding: 25px;
  border-radius: 12px;
  box-shadow: ${({ darkMode }) =>
    darkMode
      ? "0px 5px 15px rgba(0, 255, 128, 0.2)"
      : "0px 5px 15px rgba(0, 0, 0, 0.1)"};
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid ${({ darkMode }) => (darkMode ? "#00e676" : "#ddd")};

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ darkMode }) =>
      darkMode
        ? "0px 8px 20px rgba(0, 255, 128, 0.3)"
        : "0px 8px 20px rgba(0, 0, 0, 0.15)"};
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 8px;
    color: ${({ darkMode }) => (darkMode ? "#00e676" : "#007BFF")};
  }

  p {
    font-size: 1rem;
    opacity: 0.9;
    margin-bottom: 12px;
  }

  .tech-stack {
    font-size: 0.9rem;
    font-weight: bold;
    color: ${({ darkMode }) => (darkMode ? "#9effc2" : "#555")};
    margin-bottom: 12px;
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;

    a {
      color: ${({ darkMode }) => (darkMode ? "#00e676" : "#007BFF")};
      font-size: 1.4rem;
      transition: color 0.3s ease;

      &:hover {
        color: ${({ darkMode }) => (darkMode ? "#1aff9c" : "#0056b3")};
      }
    }
  }
`;

const projects = [
  {
    name: "  Personal Portfolio Website",
    link: "divyesh230.netlify.app",
    github: "https://github.com/divyesh2303/My_Portfolio",
    description: " A sleek and responsive portfolio showcasing my skills, education, projects, contact details, and more.",
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
  },
  {
    name: "User Management CRUD App",
    link: "https://github.com/divyesh2303/MyUserCRUD",
    github: "https://github.com/divyesh2303/MyUserCRUD",
    description: "A responsive CRUD web app using React, Bootstrap, and Context API with user registration, table management, CSV export/import, and edit/delete functionality..",
    techStack: [ "HTML & CSS","Bootstrap","React","Context API"],
  },
  {
    name: "Music Player with Animated Album Covers",
    link: " https://divyesh2303.github.io/Music-/",
    github: "https://divyesh2303.github.io/Music-/",
    description: "An interactive 3D music player featuring animated album covers, smooth transitions, and immersive visual effects",
    techStack: ["HTML", "CSS", "JS"],
  },
  {
    name: "Starbuck Cafe",
    link: "https://github.com/divyesh2303/Starbuck-Cafe",
    github: "https://github.com/divyesh2303/Starbuck-Cafe",
    description: "A Starbucks-inspired website with animations.",
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
  },


];

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Container darkMode={darkMode}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      <ProjectGrid>
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            darkMode={darkMode}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <p className="tech-stack">Tech: {proj.techStack.join(", ")}</p>
            <div className="links">
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </a>
              <a href={proj.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Container>
  );
};

export default Projects;
