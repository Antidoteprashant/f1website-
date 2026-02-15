"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment, PerspectiveCamera, Sparkles, Stars, Float } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette, Noise } from "@react-three/postprocessing";
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
        <section className="relative bg-[var(--color-pagani-black)] overflow-hidden" style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-[var(--color-carbon-gray)]/30 to-[var(--color-pagani-black)] z-0 pointer-events-none" />

            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 relative z-10"
            >
                <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest text-gradient-gold leading-tight drop-shadow-[0_0_15px_rgba(245,196,0,0.3)]">
                    RB19 — Experience
                </h2>
                <div className="w-24 h-1 bg-[var(--color-pagani-gold)] mx-auto mt-4 rounded-full shadow-[0_0_10px_var(--color-pagani-gold)]" />
                <p className="font-[family-name:var(--font-rajdhani)] text-base md:text-lg text-gray-400 mt-6 uppercase tracking-wide">
                    Interactive • Immersive • Engineering
                </p>
            </motion.div>

            {/* 3D Canvas Container */}
            <div className="relative w-full h-[600px] md:h-[700px] z-10">
                <Canvas
                    shadows
                    dpr={[1, 2]}
                    gl={{ antialias: false, alpha: false, stencil: false, depth: true }} // Optimized settings for post-processing
                    camera={{ position: [3, 2, 5], fov: 45 }}
                    className="bg-transparent"
                >
                    {/* Dark Background Color */}
                    <color attach="background" args={['#050505']} />

                    {/* Camera Control */}
                    <PerspectiveCamera makeDefault position={[4, 2, 5]} fov={50} />

                    {/* --- Lighting Setup for Dramatic Reveal --- */}
                    <ambientLight intensity={0.2} />

                    {/* Key Light - Cool Blue/White */}
                    <spotLight
                        position={[5, 8, 5]}
                        angle={0.5}
                        penumbra={0.5}
                        intensity={2}
                        castShadow
                        shadow-bias={-0.0001}
                        color="#ffffff"
                    />

                    {/* Rim Light - Warm/Gold to highlight edges */}
                    <spotLight
                        position={[-5, 2, -5]}
                        angle={0.5}
                        penumbra={1}
                        intensity={2}
                        color="#fcd303"
                    />

                    {/* Underglow - Blueish */}
                    <pointLight position={[0, -0.5, 0]} intensity={1} color="#0044ff" distance={5} />


                    {/* --- Environment & Fill --- */}
                    <Environment preset="city" blur={0.8} background={false} />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.5} noise={0.2} color="#fcd303" />

                    {/* --- Content --- */}

                    {/* Floating Animation Wrapper */}
                    <Float
                        speed={2} // Animation speed
                        rotationIntensity={0.2} // XYZ rotation intensity
                        floatIntensity={0.5} // Up/down float intensity
                        floatingRange={[-0.1, 0.1]} // Range of y-axis values
                    >
                        <F1CarModel wireframe={wireframe} rotation={[0, -Math.PI / 8, 0]} />
                    </Float>

                    {/* Ground Reflections/Shadows */}
                    <ContactShadows
                        position={[0, -0.05, 0]}
                        opacity={0.7}
                        scale={15}
                        blur={2.5}
                        far={2}
                        color="#000000"
                    />

                    {/* --- Post Processing --- */}
                    <EffectComposer disableNormalPass>
                        {/* Bloom for glowing lights and highlights */}
                        <Bloom
                            luminanceThreshold={1}
                            mipmapBlur
                            intensity={1.5}
                            radius={0.6}
                        />
                        {/* Vignette to focus center */}
                        <Vignette eskil={false} offset={0.1} darkness={0.9} />
                        {/* Subtle Noise for realism */}
                        <Noise opacity={0.02} />
                    </EffectComposer>


                    {/* Orbit Controls */}
                    <OrbitControls
                        ref={controlsRef}
                        autoRotate={autoRotate}
                        autoRotateSpeed={0.8}
                        enableDamping
                        dampingFactor={0.05}
                        minDistance={3}
                        maxDistance={9}
                        minPolarAngle={0}
                        maxPolarAngle={Math.PI / 2 - 0.1} // Prevent going below ground
                        target={[0, 0.2, 0]}
                    />
                </Canvas>

                {/* UI Controls Overlay */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20 w-max max-w-full px-4 overflow-x-auto no-scrollbar">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setAutoRotate(!autoRotate)}
                        className={`font-[family-name:var(--font-rajdhani)] px-6 py-2.5 text-sm font-semibold uppercase tracking-widest hud-border glass-effect whitespace-nowrap transition-all duration-300 ${autoRotate
                            ? "bg-[var(--color-pagani-gold)] text-[var(--color-pagani-black)] shadow-[0_0_15px_rgba(245,196,0,0.5)]"
                            : "bg-transparent text-[var(--color-pagani-gold)] hover:shadow-[0_0_15px_rgba(245,196,0,0.4)]"
                            }`}
                    >
                        {autoRotate ? "⏸ Auto-Spin" : "▶ Auto-Spin"}
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setWireframe(!wireframe)}
                        className={`font-[family-name:var(--font-rajdhani)] px-6 py-2.5 text-sm font-semibold uppercase tracking-widest hud-border glass-effect whitespace-nowrap transition-all duration-300 ${wireframe
                            ? "bg-[var(--color-pagani-gold)] text-[var(--color-pagani-black)] shadow-[0_0_15px_rgba(245,196,0,0.5)]"
                            : "bg-transparent text-[var(--color-pagani-gold)] hover:shadow-[0_0_15px_rgba(245,196,0,0.4)]"
                            }`}
                    >
                        {wireframe ? "● Solid View" : "◇ Wireframe"}
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleReset}
                        className="font-[family-name:var(--font-rajdhani)] px-6 py-2.5 text-sm font-semibold uppercase tracking-widest hud-border bg-transparent text-[var(--color-pagani-gold)] hover:shadow-[0_0_15px_rgba(245,196,0,0.4)] glass-effect whitespace-nowrap transition-all duration-300"
                    >
                        ↻ Reset Cam
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
