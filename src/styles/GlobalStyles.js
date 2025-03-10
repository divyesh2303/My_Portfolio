import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => (theme.darkMode ? "#000000" : "#FFFFFF")};
    color: ${({ theme }) => (theme.darkMode ? "#28A745" : "#333333")}; /* Default text color to green in dark mode */
    font-family: "Arial", sans-serif;
    transition: all 0.3s ease-in-out;
    line-height: 1.6;
  }

  h1, h2, h3, p {
    text-align: center;
  }

  a {
    color: #28A745; /* Green accent for links */
    text-decoration: none;
    &:hover {
      color: #218838; /* Darker green on hover */
      text-decoration: underline;
    }
  }

  /* Override Bootstrap navbar background in dark mode */
  .navbar {
    background-color: ${({ theme }) => (theme.darkMode ? "#000000" : "#FFFFFF")} !important;
    border-bottom: 1px solid #28A745;
  }

  /* Ensure Bootstrap buttons and links use green in dark mode */
  .navbar-dark .nav-link,
  .navbar-dark .navbar-brand {
    color: #28A745 !important;
  }

  .navbar-dark .nav-link:hover,
  .navbar-dark .navbar-brand:hover {
    color: #218838 !important;
  }

  .btn-primary {
    background-color: #28A745;
    border-color: #28A745;
    &:hover {
      background-color: #218838;
      border-color: #218838;
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
`;