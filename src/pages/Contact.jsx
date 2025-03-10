import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

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

const ContactCard = styled(motion.div)`
  background: ${({ darkMode }) =>
    darkMode ? "#1a1a1a" : "#ffffff"};
  color: ${({ darkMode }) => (darkMode ? "#f0f0f0" : "#333")};
  padding: 30px;
  border-radius: 12px;
  box-shadow: ${({ darkMode }) =>
    darkMode
      ? "0px 5px 15px rgba(0, 255, 128, 0.2)"
      : "0px 5px 15px rgba(0, 0, 0, 0.1)"};
  width: 60%;
  margin: auto;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid ${({ darkMode }) => (darkMode ? "#00e676" : "#ddd")};

  @media (max-width: 768px) {
    width: 90%;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ darkMode }) =>
      darkMode
        ? "0px 8px 20px rgba(0, 255, 128, 0.3)"
        : "0px 8px 20px rgba(0, 0, 0, 0.15)"};
  }

  a {
    color: ${({ darkMode }) => (darkMode ? "#00e676" : "#007BFF")};
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ darkMode }) => (darkMode ? "#1aff9c" : "#0056b3")};
    }
  }

  .contact-item {
    margin: 15px 0;
    font-size: 1.1rem;
  }

  .icon {
    font-size: 1.5rem;
  }
`;

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Container darkMode={darkMode}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>
      <ContactCard
        darkMode={darkMode}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="contact-item">
          <a href="mailto:divyeshsolanki2303@gmail.com">
            <FaEnvelope className="icon" /> divyeshsolanki2303@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <a
            href="https://www.linkedin.com/in/divyesh-solanki-01628a254/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" /> My LinkedIn
          </a>
        </div>
        <div className="contact-item">
          <a
            href="https://github.com/divyesh2303"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" /> My GitHub
          </a>
        </div>
      </ContactCard>
    </Container>
  );
};

export default Contact;
