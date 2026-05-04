import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


function Home() {
  const navigate = useNavigate();
  const starsRef = useRef(null);

  useEffect(() => {
    const container = starsRef.current;
    if (!container) return;
    for (let i = 0; i < 60; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        --d: ${2 + Math.random() * 4}s;
        --delay: ${Math.random() * 4}s;
        opacity: ${Math.random() * 0.5};
      `;
      container.appendChild(star);
    }
  }, []);

  return (
    <section className="home">
      <div className="grid-bg" />
      <div className="scanlines" />
      <div className="stars" ref={starsRef} />


      <h1 className="hero-title">
        WASSILA SAID KARIM
      </h1>

      {/* <p className="hero-sub">FULLSTACK · R3F · CREATIVE</p> */}

      <p className="typewriter">&gt; Bienvenue dans mon arcade_</p>

<div>
    <button
        className="cta-btn"
        onClick={() => navigate("/projects")}
      >
        ▶ PRESS START
      </button>
      <button
        className="cta-btn"
        onClick={() => navigate("/resume")}
      >
        ▶ PRESS TO LEARN
      </button>
      <button
        className="cta-btn"
        onClick={() => navigate("/arcade")}
      >
        ▶ PRESS TO PLAY
      </button>
</div>
      
    </section>
  );
}

export default Home;