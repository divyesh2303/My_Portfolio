import { motion } from "framer-motion";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// Styled component with explicit theme handling and name highlighting
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;

  h1 {
    color: ${({ darkMode }) => (darkMode ? "#28A745" : "#333333")}; /* Green in dark mode, dark gray in light mode */
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 1rem;
  }

  h1 .name-highlight {
    color: ${({ darkMode }) => (darkMode ? "#28A745" : "#333333")}; /* Explicitly set name to green in dark mode */
  }

  p {
    color: ${({ darkMode }) => (darkMode ? "#28A745" : "#666666")}; /* Green in dark mode for consistency */
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    max-width: 600px;
  }

  /* Debug: Ensure specificity is high enough */
  h1 > .name-highlight {
    color: ${({ darkMode }) => (darkMode ? "#28A745" : "#333333")} !important;
  }

  @media (max-width: 768px) {
    padding: 10px;
    h1 {
      font-size: clamp(1.5rem, 5vw, 2.5rem);
    }
    p {
      font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    }
  }
`;

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  console.log("Dark Mode:", darkMode); // Debug: Check if darkMode is toggling

  return (
    <Container darkMode={darkMode}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm <span className="name-highlight">Divyesh Solanki</span> 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A Passionate Web Developer 🚀
      </motion.p>
     
    </Container>
  );
};

export default Home;

