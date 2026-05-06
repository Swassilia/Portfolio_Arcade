import { useEffect, useRef, useState } from "react";

import { Projets } from '../constants';
import { Canvas } from '@react-three/fiber';
import BorneArcade from '../BorneArcade';
import { OrbitControls } from '@react-three/drei';


const nbProjets = Projets.length
function Projects() {
    const [selectedProject, setSelectedProjet] = useState(0);
    const currentProjet = Projets[selectedProject];

    const handleNavigation = (direction) => {
        setSelectedProjet((prevIndex) => {
            if (direction == 'previous') {
                return prevIndex == 0 ? nbProjets - 1 : prevIndex - 1;
            }
            else {
                return prevIndex == nbProjets - 1 ? 0 : prevIndex + 1;
            }
        })
    }

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
        <section className="projects-section">
            <div className="stars" ref={starsRef} />
            <h1 className="title-section">Projects</h1>

            <div className="projects-wrapper">

                <div className="projects-left">
                    <div className="projects-container">

                        <button className="nav-arrow" onClick={() => handleNavigation('previous')}>
                            ◀
                        </button>

                        <div className="projets-content">
                            <h2 className="projets-title">{currentProjet.titre}</h2>
                            <p className="projets-description">{currentProjet.description}</p>
                            {currentProjet.credits && currentProjet.credits.length > 0 && (
                                <div className="credits-container">
                                    <p className="projets-description">projet réalisé avec</p>
                                    {currentProjet.credits.map((credit) => (
                                        <p key={credit} className="projets-description">{credit}</p>
                                    ))}
                                </div>
                            )}
                            <div className="tags-container">{currentProjet.tags.map((tag) => (
                                <p key={tag} className="projects-tags"> {tag} </p>
                            ))

                            }</div>
                        </div>

                        <button className="nav-arrow" onClick={() => handleNavigation('next')}>
                            ▶
                        </button>

                    </div>
                </div>

                <div className="projects-right">
                    <div className="borne-arcade">
                        <Canvas camera={{ position: [2, 0, 0] }}>
                            <ambientLight intensity={1} />
                            <directionalLight position={[50, 0, 10]} />
                            <BorneArcade url={currentProjet.Video} />
                            <OrbitControls />
                        </Canvas>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default Projects;