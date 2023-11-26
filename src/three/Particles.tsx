import { useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { ISize } from "./Scene.tsx";

interface IProps {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  size: ISize;
}

function Particles(props: IProps) {
  //const canvasRef = useRef<HTMLCanvasElement>(null);
  const { renderer, scene, camera, size } = props;
  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  document.body.appendChild(renderer.domElement);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  useEffect(() => {
    // Particle
    const particlesGeometry = new THREE.SphereGeometry(1, 32, 32);
    const particlesMaterial = new THREE.PointsMaterial();
    particlesMaterial.size = 0.02;
    particlesMaterial.sizeAttenuation = true;
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Animación del cubo
      particles.rotation.x += 0.01;
      particles.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div></div>;
}

export default Particles;
