"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnter = () => {
      if (cursor) {
        cursor.style.transform = "scale(1.5)";
        cursor.style.opacity = "0.8";
        cursor.style.background = "radial-gradient(circle, #feca57, #ff6b6b, #54a0ff, #5f27cd, #1dd1a1)";
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.style.transform = "scale(1)";
        cursor.style.opacity = "1";
        cursor.style.background = "radial-gradient(circle, #ff6b6b, #feca57, #1dd1a1, #5f27cd, #54a0ff)";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("a, button, .hover-target").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a, button, .hover-target").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
}
