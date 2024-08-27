"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener("mousemove", mouseMove);

    // Attach event listeners to all elements that require hover interaction
    const hoverElements = document.querySelectorAll("div,h2, p, span");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <motion.div
      className={`custom-cursor`}
      style={{
        x: mousePosition.x - 10, // Adjust x and y for centering
        y: mousePosition.y - 10,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        scale: isHovered ? 3 : 1,
        backgroundColor: isHovered ? "#ffffff" : "rgba(255, 107, 107, 1)",
      }}
      transition={{ duration: 0.2 }}
    />
  );
};

export default CustomCursor;
