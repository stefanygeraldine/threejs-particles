import {useEffect, useRef} from 'react'
import './App.css'

import * as THREE from 'three';

function App() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // Configuración de la escena
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });

        // Configuración del cubo
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);

        // Agrega el cubo a la escena
        scene.add(cube);

        // Configuración de la cámara y el renderizado
        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);

            // Animación del cubo
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();
    }, []);

    return <canvas ref={canvasRef}></canvas>;
}

export default App
