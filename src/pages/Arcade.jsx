import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function StarField() {
  return (
    <div className="stars" id="stars" />
  );
}

function Arcade() {
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
    <section className="Home">
      <div className="grid-bg" />
      <div className="scanlines" />
      <div className="stars" ref={starsRef} />

      <h1 className="hero-title">
        WASSILA SAID KARIM<br />
      </h1>

      <p className="hero-sub">FULLSTACK · R3F · CREATIVE</p>

      <p className="typewriter">&gt; Bienvenue dans mon arcade_</p>
      <div className="r3f-placeholder">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#00f5ff" intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#b400ff" intensity={0.5} />
          <OrbitControls autoRotate enableZoom={false} />
        </Canvas>
      </div>

      <button
        className="cta-btn"
        onClick={() => navigate("/projects")}
      >
        ▶ PRESS START
      </button>

      <p className="scroll-hint">▼ SCROLL DOWN ▼</p>
    </section>
  );
}

export default Arcade;