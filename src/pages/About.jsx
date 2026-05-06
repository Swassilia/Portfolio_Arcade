import React, { useEffect, useRef } from 'react';
import { Skills } from '../constants';


function Resume() {

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
        <section className="resume-section">
            <div className="stars" ref={starsRef} />
            <h1 className="title-section">About</h1>
            <div className="Resume-container">
                <div className="projects-right">
                    <div className="description-container">
                        <p className="resume-description">Étudiante en Licence 3 ATI, j'aime expérimenter à la frontière
                            entre le code et l'artistique. Mon objectif est de lier le développement
                            à la création 3D — du shader à l'animation en passant par la modélisation.
                            Créer des expériences immersives qui surprennent est ce qui me motive.
                        </p>

                        <h3 className="title-container">Contact</h3>
                        <p className="resume-description"> +33 6 34 60 57 45</p>
                        <p className="resume-description"> wassila.skarim@gmail.com</p>
                        <a href="https://www.linkedin.com/in/wassilaskarim/" className="resume-description">LinkedIn</a>
                        <br />
                        <br />
                        <a href="https://github.com/Swassilia/" className="resume-description">GitHub</a>
                    </div>
                    <div className="resume-tags-container">
                        <h3 className="title-container">Compétences</h3>

                        {Skills.map((tag) => (
                            <p key={tag} className="projects-tags">{tag}</p>
                        ))}
                    </div>
                </div>
            </div>


        </section>)
}
export default Resume;