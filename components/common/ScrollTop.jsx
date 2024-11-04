"use client";

import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener on mount
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {scrollY > 400 ? (
        <button
          onClick={scrollToTop}
          className="scroltop style3"
          type="button"
          style={{ display: "inline-block" }}
        >
          <i className="fas fa-arrow-up" />
        </button>
      ) : (
        ""
      )}{" "}
    </>
  );
}
