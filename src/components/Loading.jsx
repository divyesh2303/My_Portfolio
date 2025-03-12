import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Loading = () => {
  const { darkMode } = useContext(ThemeContext);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`loading-screen ${fadeOut ? "fade-out" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: darkMode ? "#000" : "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 9999,
        transition: "opacity 0.5s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Logo Container */}
      <div style={{ position: "relative", textAlign: "center" }}>
        {/* Background Name (Divyesh Solanki) */}
        <h1
          style={{
            fontSize: "clamp(2rem, 8vw, 5rem)", // Responsive font size
            fontWeight: "bold",
            color: darkMode ? "#222" : "#ddd", // Faded color for the background text
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            whiteSpace: "nowrap",
          }}
        >
          Divyesh Solanki
        </h1>

        {/* Foreground Logo (DS) */}
        <h2
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)", // Responsive font size
            fontWeight: "bold",
            color: darkMode ? "#28A745" : "#333",
            position: "relative",
            zIndex: 2,
          }}
        >
          DS
        </h2>
      </div>

      {/* Loading Bar (Left to Right) */}
   {/* Loading Bar (Left to Right) */}
<div
  style={{
    width: "clamp(100px, 20vw, 150px)", // Responsive width
    height: "4px",
    background: darkMode ? "#222" : "#ccc",
    marginTop: "30px",
    overflow: "hidden",
    position: "relative",
    borderRadius: "2px", // Soft rounded edges
  }}
>
  <div
    style={{
      width: "0%",
      height: "100%",
      background: darkMode ? "#4caf50" : "#007bff",
      position: "absolute",
      left: 0,
      animation: "loadingBar 1s linear forwards, loadingBarGlow 1s infinite ease-in-out",
      boxShadow: `0 0 10px ${darkMode ? "#4caf50" : "#007bff"}`, // Soft glow
      filter: `drop-shadow(0px 0px 10px ${darkMode ? "#4caf50" : "#007bff"})`, // Extra lighting effect
      borderRadius: "2px", // Match the outer container
    }}
  />
</div>

{/* Keyframes Animation */}
<style>
  {`
    @keyframes loadingBar {
      0% { width: 0%; }
      100% { width: 100%; }
    }

    @keyframes loadingBarGlow {
      0% { box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); }
      50% { box-shadow: 0 0 15px rgba(0, 123, 255, 1); }
      100% { box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); }
    }
  `}
</style>

    </div>
  );
};

export default Loading;
