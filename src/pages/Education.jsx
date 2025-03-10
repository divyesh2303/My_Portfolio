import styled from "styled-components";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Container = styled.div`
  padding: 60px 20px;
  text-align: center;
  background: ${({ darkMode }) =>
    darkMode
      ? "linear-gradient(135deg, #000000, #1a1a1a)"
      : "linear-gradient(135deg, #ffffff, #f1f3f5)"};
  min-height: 100vh;

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
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled(motion.div)`
  background: ${({ darkMode }) => (darkMode ? "#1a1a1a" : "#ffffff")};
  color: ${({ darkMode }) => (darkMode ? "#28A745" : "#333333")};
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.6s, box-shadow 0.3s;
  text-align: left;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.3);
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    margin: 5px 0;
  }
`;

const educationData = [
  {
    school: "Krutika Vidhyalaya (SSC)",
    year: "2018 - 2019",
    percentage: "60.67%",
  },
  {
    school: "Krutika Vidhyalaya (HSC)",
    year: "2020 - 2021",
    percentage: "67.71%",
  },
  {
    school: "R B Institute Of Management Studies",
    year: "2021 - 2024",
    degree: "BCA",
    CGPA: "6.33",
  },
];

const Education = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Container darkMode={darkMode}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h2>
      <EducationGrid>
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            darkMode={darkMode}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{edu.school}</h3>
            <p>{edu.degree ? edu.degree : "High School"}</p>
            <p>{edu.year}</p>
            <p>
              {edu.percentage
                ? `Percentage: ${edu.percentage}`
                : `CGPA: ${edu.CGPA}`}
            </p>
          </EducationCard>
        ))}
      </EducationGrid>
    </Container>
  );
};

export default Education;
