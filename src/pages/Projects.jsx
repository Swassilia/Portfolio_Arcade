import React, { useState } from 'react';
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



    return (<section className="projects-section">
        <h1 className="title-section">Projects</h1>
        <div className="projects-container">
            <div className="projets-content">
                <button className="cta-btn" onClick={() => handleNavigation('previous')}>left</button>
                <p className="projets-title">
                    {currentProjet.titre}
                </p>
                <p className="projets-description">
                    {currentProjet.description}
                </p>

                {/* <img src={currentProjet.Video} alt="" /> */}
                <button className="cta-btn" onClick={() => handleNavigation('next')}>right</button>
            </div>
            <div className="borne-arcade">
                <Canvas camera={{ position: [0, 2, 6] }}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 5]} />
                    <BorneArcade url = {currentProjet.Video}/>
                    <OrbitControls />
                </Canvas>
            </div>
        </div>


    </section>)
}
export default Projects;