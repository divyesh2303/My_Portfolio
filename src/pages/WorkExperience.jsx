import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ExperienceContainer = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => (theme.darkMode ? "#00e676" : "#333")};
  margin-top: 20px;

    p {
    color: ${({ darkMode }) => (darkMode ? "#28A745" : "#666666")};
    font-size: clamp(1rem, 1vw, 1 rem);
    max-width: 600px;
  }
`;

const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const today = new Date();

  let years = today.getFullYear() - start.getFullYear();
  let months = today.getMonth() - start.getMonth();
  let days = today.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
};

const WorkExperience = () => {
  const startDate = "2024-05-15"; // Change this to your actual start date
  const [experience, setExperience] = useState(calculateExperience(startDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setExperience(calculateExperience(startDate));
    }, 86400000); // Updates every 24 hours (1 day)

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <ExperienceContainer >
        <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >

      {experience.years} Years, {experience.months} Months, {experience.days} Days
      </motion.p>
      <br />
      {/* <small>(Including Internship: 5 Months)</small> */}
    </ExperienceContainer>
  );
};

export default WorkExperience;
