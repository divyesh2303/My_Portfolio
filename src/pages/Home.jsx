import { motion } from "framer-motion";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import WorkExperience from "./WorkExperience";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;

  h1 {
    color: ${({ darkMode }) => (darkMode ? "#28A745" : "#333333")};
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 1rem;
  }

  h1 .name-highlight {
    color: ${({ darkMode }) => (darkMode ? "#28A745" : "#333333")};
  }

  p {
    color: ${({ darkMode }) => (darkMode ? "#28A745" : "#666666")};
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    max-width: 600px;
  }

  .download-btn {
    padding: 14px 30px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    text-decoration: none;
    display: inline-block;
  }

  .download-btn:hover {
    background: linear-gradient(135deg, #2575fc, #6a11cb);
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    padding: 10px;
    h1 {
      font-size: clamp(1.5rem, 5vw, 2.5rem);
    }
    p {
      font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    }
    .download-btn {
      padding: 12px 25px;
      font-size: 1rem;
    }
  }
`;

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  console.log("Dark Mode:", darkMode);

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
        <WorkExperience  />
      </motion.p>
    
      <motion.a
        href="https://drive.google.com/uc?export=download&id=1WKjKJfrSq4YtcM1kqFKePVI8_V1gPwN3"
        download
        className="download-btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        📄 Download CV
      </motion.a>
    </Container>
  );
};

export default Home;