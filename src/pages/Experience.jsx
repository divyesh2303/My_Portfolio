import styled from "styled-components";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaBriefcase, FaClock, FaUserTie } from "react-icons/fa";
import Particles from "react-tsparticles";
import { Modal, Button } from "react-bootstrap"; // Import Bootstrap Modal and Button

// Styled components with modal styling
const Container = styled.div`
  padding: 60px 20px;
  text-align: center;
  background: ${({ darkMode }) =>
    darkMode
      ? "linear-gradient(135deg, #000000, #1a1a1a)"
      : "linear-gradient(135deg, #ffffff, #f1f3f5)"};
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  h2 {
    color: ${({ darkMode }) => (darkMode ? "#28A745" : "#333333")};
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 40px;
    position: relative;
    display: inline-block;

    &:after {
      content: "";
      position: absolute;
      width: 50%;
      height: 3px;
      background: #28A745;
      bottom: -10px;
      left: 25%;
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;

const ParticleBackground = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background: ${({ darkMode }) => (darkMode ? "#28A745" : "#dee2e6")};
    transform: translateX(-50%);
    box-shadow: ${({ darkMode }) =>
    darkMode ? "0 0 15px #28A745, 0 0 5px #28A745" : "none"};
    animation: pulse 2s infinite alternate;

    @keyframes pulse {
      from {
        box-shadow: ${({ darkMode }) =>
    darkMode ? "0 0 10px #28A745" : "none"};
      }
      to {
        box-shadow: ${({ darkMode }) =>
    darkMode ? "0 0 20px #28A745, 0 0 10px #28A745" : "none"};
      }
    }
  }

  > div {
    margin-bottom: 60px;
    position: relative;
  }

  @media (max-width: 768px) {
    &:before {
      left: 20px;
    }
  }
`;

const ExperienceCard = styled(motion.div)`
  background: ${({ darkMode }) => (darkMode ? "#1a1a1a" : "#ffffff")};
  color: ${({ darkMode }) => (darkMode ? "#28A745" : "#333333")};
  padding: 20px;
  border-radius: 15px;
  width: 45%;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  transition: transform 0.6s, box-shadow 0.3s;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover:before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-5px) rotateX(10deg) rotateY(10deg);
    box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.3);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    margin: 5px 0;
  }

  svg {
    margin-right: 10px;
    font-size: 1.2rem;
  }

  &:nth-child(even) {
    margin-left: 55%;
  }

  &:nth-child(odd) {
    margin-right: 55%;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto !important;
  }
`;

const TimelineDot = styled.div`
  width: 15px;
  height: 15px;
  background: #28A745;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  box-shadow: ${({ darkMode }) => (darkMode ? "0 0 10px #28A745" : "none")};

  @media (max-width: 768px) {
    left: 20px;
  }
`;

// Experience data with additional details
const experiences = [
  {
    company: "BrainyBeam Technologies",
    duration: "May - June",
    role: "Web Developer Intern",
    details: "Developed responsive websites using HTML, CSS, and JavaScript.",
  },
  {
    company: "MeghRaj TechnoSoft",
    duration: "July - Sep",
    role: "Web Developer",
    details: "Built dynamic web applications with React and Bootstrap.",
  },
  {
    company: "Brilworks",
    duration: "Oct - Mar",
    role: "Web Developer",
    details: "I am working on a full-stack AI application that leverages API integration and modern technologies.",
  },
];

const Experience = () => {
  const { darkMode } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleShow = (exp) => {
    setSelectedExperience(exp);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedExperience(null);
  };

  return (
    <Container darkMode={darkMode}>
      <ParticleBackground
        id="particles"
        options={{
          background: {
            color: { value: "transparent" },
          },
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: darkMode ? "#28A745" : "#333333" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100 } },
          },
        }}
      />
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Work Experience
      </motion.h2>
      <Timeline darkMode={darkMode}>
        {experiences.map((exp, index) => (
          <div key={index}>
            <TimelineDot darkMode={darkMode} />
            <ExperienceCard
              darkMode={darkMode}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <FaBriefcase />
                <h3>{exp.company}</h3>
                <FaClock />
                <p>{exp.duration}</p>
                <FaUserTie />
                <p>{exp.role}</p>
                <Button
                  variant={darkMode ? "outline-success" : "outline-primary"}
                  onClick={() => handleShow(exp)}
                  className="mt-3"
                >
                  View Details
                </Button>
              </div>
            </ExperienceCard>
          </div>
        ))}
      </Timeline>

      {/* Modal for showing experience details */}
      {selectedExperience && (
        <Modal
          show={showModal}
          onHide={handleClose}
          centered
          animation={true}
          backdrop="static"
          dialogClassName={darkMode ? "modal-dark" : "modal-light"}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Modal.Header
              style={{
                background: darkMode ? "#1a1a1a" : "#ffffff",
                color: darkMode ? "#28A745" : "#333333",
                borderBottom: `1px solid ${darkMode ? "#28A745" : "#dee2e6"}`,
              }}
            >
              <Modal.Title>{selectedExperience.company}</Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                background: darkMode ? "#1a1a1a" : "#ffffff",
                color: darkMode ? "#28A745" : "#333333",
              }}
            >
              <p>
                <strong>Duration:</strong> {selectedExperience.duration}
              </p>
              <p>
                <strong>Role:</strong> {selectedExperience.role}
              </p>
              <p>
                <strong>Description:</strong> {selectedExperience.details}
              </p>
            </Modal.Body>
            <Modal.Footer
              style={{
                background: darkMode ? "#1a1a1a" : "#ffffff",
                borderTop: `1px solid ${darkMode ? "#28A745" : "#dee2e6"}`,
              }}
            >
              <Button
                variant={darkMode ? "outline-success" : "outline-secondary"}
                onClick={handleClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </motion.div>
        </Modal>
      )}
    </Container>
  );
};

export default Experience;