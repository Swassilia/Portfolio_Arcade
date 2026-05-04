import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { VideoTexture, SRGBColorSpace } from 'three';

function BorneArcade({ url }) {
    const { scene } = useGLTF('/models/Arcade.glb');
    const videoRef = useRef(null);

useEffect(() => {
        if (!url) return;

        const video = document.createElement('video');
        video.src = url;
        video.loop = true;
        video.muted = true;
        video.autoplay = true;
        video.playsInline = true;

        const texture = new VideoTexture(video);
        texture.colorSpace = SRGBColorSpace;
        // texture.rotation(90);

        const ecran = scene.getObjectByName('Ecran');
        if (ecran) {
            ecran.material = ecran.material.clone();
            ecran.material.map = texture;
            ecran.material.needsUpdate = true;
        }
        const handleCanPlay = () => {
            video.play().catch((err) => console.warn('Autoplay bloqué :', err));
        };

        video.addEventListener('canplaythrough', handleCanPlay);
        videoRef.current = video;

        return () => {
            video.removeEventListener('canplaythrough', handleCanPlay);
            video.pause();
            video.src = '';
            texture.dispose();
        };
    }, [scene, url]);

    return <primitive object={scene} />;
}

useGLTF.preload('/models/Arcade.glb');
export default BorneArcade;