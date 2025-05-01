'use client';

import * as React from 'react';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const mountRef = React.useRef<HTMLDivElement>(null);
  const rendererRef = React.useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = React.useRef<THREE.Scene | null>(null);
  const cameraRef = React.useRef<THREE.PerspectiveCamera | null>(null);
  const pointsRef = React.useRef<THREE.Points | null>(null);

  React.useEffect(() => {
    // Avoid running Three.js code on the server
    if (typeof window === 'undefined') return;

    const currentMount = mountRef.current;
    if (!currentMount) return;

    // --- Three.js Setup ---
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true for transparent background
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Adjust for high-DPI screens
    renderer.setClearColor(0x000000, 0); // Transparent clear color
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Particle System ---
    const particleCount = 5000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10; // Spread particles
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff, // White particles
      size: 0.015,
      transparent: true,
      opacity: 0.7,
    });

    const points = new THREE.Points(particles, particleMaterial);
    scene.add(points);
    pointsRef.current = points;

    // --- Animation ---
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      // Ensure renderer exists before calling requestAnimationFrame
      if (!rendererRef.current) return;

      requestAnimationFrame(animate);

      // Particle animation (subtle movement)
      if (pointsRef.current) {
        pointsRef.current.rotation.y += 0.0001;
        pointsRef.current.rotation.x += 0.00005;
      }

      // Camera movement based on mouse
      if (cameraRef.current && sceneRef.current) {
          cameraRef.current.position.x += (mouseX * 0.5 - cameraRef.current.position.x) * 0.02;
          cameraRef.current.position.y += (mouseY * 0.5 - cameraRef.current.position.y) * 0.02;
          cameraRef.current.lookAt(sceneRef.current.position); // Keep looking at the center
      }


      renderer.render(scene, camera);
    };
    animate();

    // --- Resize Handling ---
    const handleResize = () => {
      if (!currentMount || !rendererRef.current || !cameraRef.current) return;
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      rendererRef.current.setSize(width, height);
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      // Check if renderer and mount exist before cleanup
      if (rendererRef.current && currentMount && rendererRef.current.domElement) {
         // Check if domElement is still a child before removing
         if (currentMount.contains(rendererRef.current.domElement)) {
            currentMount.removeChild(rendererRef.current.domElement);
         }
      }
      // Dispose Three.js objects if necessary (geometry, material, textures)
      if (pointsRef.current) {
        pointsRef.current.geometry.dispose();
        if(Array.isArray(pointsRef.current.material)) {
           pointsRef.current.material.forEach(m => m.dispose());
        } else {
           pointsRef.current.material.dispose();
        }
        sceneRef.current?.remove(pointsRef.current); // Remove from scene
        pointsRef.current = null;
      }
      rendererRef.current?.dispose();
      rendererRef.current = null; // Nullify ref
      cameraRef.current = null;
      sceneRef.current = null;
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section
      id="hero"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* 3D Background Container */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center text-foreground px-4">
        {/* Animated Text Effect */}
        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-4 animate-fadeInUp">
          <span className="text-primary">A</span>
          <span className="text-secondary-foreground">R</span>
          <span className="text-primary">Q</span>
        </h1>
        <p className="font-sans text-lg md:text-xl max-w-2xl mb-8 animate-fadeInUp delay-200">
          The Data Science Club of Rajalakshmi Engineering College.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="animate-fadeInUp delay-400 font-semibold"
          onClick={() => {
            const aboutSection = document.getElementById('about');
            aboutSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore More <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};


export default HeroSection;
