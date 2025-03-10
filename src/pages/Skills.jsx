  import styled from "styled-components";
  import { motion } from "framer-motion";
  import { useContext } from "react";
  import { ThemeContext } from "../context/ThemeContext";
  import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPhp, FaDatabase } from "react-icons/fa";

  const Container = styled.div`
    padding: 40px;
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
      margin-bottom: 3rem;
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
      padding: 20px;
    }
  `;

  const SkillGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 30px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  `;

  const SkillCard = styled(motion.div)`
    background: ${({ darkMode }) => (darkMode ? "#1a1a1a" : "#ffffff")};
    color: ${({ darkMode }) => (darkMode ? "#28A745" : "#333333")};
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    /* Shine effect on hover */
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
      box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.3);
      transform: translateY(-5px);
    }

    svg {
      font-size: 2rem;
      color: ${({ darkMode }) => (darkMode ? "#28A745" : "#333333")};
      filter: ${({ darkMode }) => (darkMode ? "drop-shadow(0 0 8px #28A745)" : "none")};
    }

    .skill-name {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 10px 0;
    }
  `;

  const CircularProgress = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    margin: 10px auto;

    svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
    }

    circle {
      fill: none;
      stroke-width: 8;
      stroke-linecap: round;
    }

    circle:nth-child(1) {
      stroke: ${({ darkMode }) => (darkMode ? "#333333" : "#dee2e6")};
    }

    circle:nth-child(2) {
      stroke: #28A745;
      stroke-dasharray: 188; /* Circumference of the circle (2 * π * r, where r = 30) */
      stroke-dashoffset: ${({ level }) => 188 - (188 * level) / 100};
      transition: stroke-dashoffset 1s ease-in-out;
    }

    .progress-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.9rem;
      color: ${({ darkMode }) => (darkMode ? "#28A745" : "#333333")};
    }
  `;

  // Skill data with proficiency levels and icons
  const skills = [
    { name: "HTML5", level: 90, icon: <FaHtml5 /> },
    { name: "CSS3", level: 85, icon: <FaCss3Alt /> },
    { name: "JavaScript", level: 80, icon: <FaJs /> },
    { name: "React.js", level: 75, icon: <FaReact /> },
    { name: "Bootstrap", level: 70, icon: <FaBootstrap /> },
    { name: "PHP", level: 65, icon: <FaPhp /> },
    { name: "MySQL", level: 60, icon: <FaDatabase /> },
  ];

  const Skills = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
      <Container darkMode={darkMode}>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h2>
        <SkillGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              darkMode={darkMode}
              whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill.icon}
              <div className="skill-name">{skill.name}</div>
              <CircularProgress darkMode={darkMode} level={skill.level}>
                <svg>
                  <circle cx="30" cy="30" r="30" />
                  <circle cx="30" cy="30" r="30" />
                </svg>
                <div className="progress-text">{skill.level}%</div>
              </CircularProgress>
            </SkillCard>
          ))}
        </SkillGrid>
      </Container>
    );
  };

  export default Skills;
