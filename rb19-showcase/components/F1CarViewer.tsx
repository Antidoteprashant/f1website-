"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment, PerspectiveCamera } from "@react-three/drei";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import F1CarModel from "./F1CarModel";

export default function F1CarViewer() {
    const [autoRotate, setAutoRotate] = useState(true);
    const [wireframe, setWireframe] = useState(false);
    const controlsRef = useRef<any>(null);

    const handleReset = () => {
        if (controlsRef.current) {
            controlsRef.current.reset();
        }
    };

    return (
        <section className="relative py-20 bg-gradient-to-b from-[var(--color-pagani-black)] to-[var(--color-carbon-gray)] overflow-hidden">
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 relative z-10"
            >
                <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-5xl font-bold uppercase tracking-widest text-gradient-gold">
                    RB19 — 3D Engineering View
                </h2>
                <p className="font-[family-name:var(--font-rajdhani)] text-base md:text-lg text-gray-400 mt-4 uppercase tracking-wide">
                    Interactive Car Model • Drag to Rotate • Scroll to Zoom
                </p>
            </motion.div>

            {/* 3D Canvas Container */}
            <div className="relative w-full h-[600px] md:h-[700px]">
                <Canvas
                    shadows
                    dpr={[1, 2]}
                    gl={{ antialias: true, alpha: true }}
                    className="bg-transparent"
                >
                    {/* Camera Setup */}
                    <PerspectiveCamera makeDefault position={[3, 1.5, 5]} fov={50} />

                    {/* Lighting */}
                    <ambientLight intensity={0.3} />

                    {/* Key Light (Front-Top) */}
                    <directionalLight
                        position={[5, 8, 5]}
                        intensity={1.2}
                        castShadow
                        shadow-mapSize={[1024, 1024]}
                    />

                    {/* Fill Light (Side) */}
                    <directionalLight position={[-5, 3, -5]} intensity={0.5} />

                    {/* Rim Light (Back) for edge highlights */}
                    <directionalLight position={[0, 2, -8]} intensity={0.8} color="#00BFFF" />

                    {/* Environment Lighting */}
                    <Environment preset="studio" />

                    {/* F1 Car Model */}
                    <F1CarModel wireframe={wireframe} />

                    {/* Ground Shadow */}
                    <ContactShadows
                        position={[0, 0, 0]}
                        opacity={0.5}
                        scale={10}
                        blur={2}
                        far={4}
                    />

                    {/* Orbit Controls */}
                    <OrbitControls
                        ref={controlsRef}
                        autoRotate={autoRotate}
                        autoRotateSpeed={0.5}
                        enableDamping
                        dampingFactor={0.05}
                        minDistance={3}
                        maxDistance={8}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI / 2}
                        target={[0, 0.3, 0]}
                    />
                </Canvas>

                {/* UI Controls Overlay */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setAutoRotate(!autoRotate)}
                        className={`font-[family-name:var(--font-rajdhani)] px-6 py-2.5 text-sm font-semibold uppercase tracking-widest hud-border glass-effect transition-all duration-300 ${autoRotate
                            ? "bg-[var(--color-pagani-gold)] text-[var(--color-pagani-black)]"
                            : "bg-transparent text-[var(--color-pagani-gold)] hover:shadow-[0_0_15px_rgba(245,196,0,0.4)]"
                            }`}
                    >
                        {autoRotate ? "⏸ Pause" : "▶ Rotate"}
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setWireframe(!wireframe)}
                        className={`font-[family-name:var(--font-rajdhani)] px-6 py-2.5 text-sm font-semibold uppercase tracking-widest hud-border glass-effect transition-all duration-300 ${wireframe
                            ? "bg-[var(--color-pagani-gold)] text-[var(--color-pagani-black)]"
                            : "bg-transparent text-[var(--color-pagani-gold)] hover:shadow-[0_0_15px_rgba(245,196,0,0.4)]"
                            }`}
                    >
                        {wireframe ? "● Solid" : "◇ Wireframe"}
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleReset}
                        className="font-[family-name:var(--font-rajdhani)] px-6 py-2.5 text-sm font-semibold uppercase tracking-widest hud-border bg-transparent text-[var(--color-pagani-gold)] hover:shadow-[0_0_15px_rgba(245,196,0,0.4)] glass-effect transition-all duration-300"
                    >
                        ↻ Reset
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
