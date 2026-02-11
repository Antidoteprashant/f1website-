"use client";

import { MotionValue, motion, useTransform } from "framer-motion";
import { carData } from "@/data/carData";

interface ZondaExperienceProps {
    scrollYProgress: MotionValue<number>;
}

export default function ZondaExperience({ scrollYProgress }: ZondaExperienceProps) {
    // Define scroll phases
    // 0% - 33% = HERO
    // 33% - 66% = DESIGN
    // 66% - 100% = ENGINE

    const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
    const designOpacity = useTransform(scrollYProgress, [0.28, 0.33, 0.6, 0.66], [0, 1, 1, 0]);
    const engineOpacity = useTransform(scrollYProgress, [0.61, 0.66, 1], [0, 1, 1]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none">
            {/* HERO SECTION (0% - 33%) */}
            <motion.div
                style={{ opacity: heroOpacity }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <div className="max-w-4xl px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-[family-name:var(--font-orbitron)] text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider mb-6"
                    >
                        <span className="text-gradient-gold">{carData.hero.title}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-[family-name:var(--font-rajdhani)] text-lg md:text-xl lg:text-2xl uppercase tracking-widest text-gray-300 mb-8"
                    >
                        {carData.hero.price}
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="font-[family-name:var(--font-rajdhani)] px-8 py-3 text-base md:text-lg font-semibold uppercase tracking-widest hud-border bg-[var(--color-pagani-gold)] text-[var(--color-pagani-black)] hover:bg-transparent hover:text-[var(--color-pagani-gold)] transition-all duration-300 pointer-events-auto"
                    >
                        {carData.hero.cta}
                    </motion.button>
                </div>
            </motion.div>

            {/* DESIGN SECTION (33% - 66%) */}
            <motion.div
                style={{ opacity: designOpacity }}
                className="absolute inset-0 flex items-center justify-start px-6 md:px-12 lg:px-20"
            >
                <div className="max-w-2xl hud-border glass-effect p-8 md:p-10">
                    <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-5xl font-bold uppercase tracking-wider text-gradient-gold mb-6">
                        {carData.design.title}
                    </h2>

                    <p className="font-[family-name:var(--font-rajdhani)] text-base md:text-lg leading-relaxed text-gray-200">
                        {carData.design.description}
                    </p>
                </div>
            </motion.div>

            {/* ENGINE SECTION (66% - 100%) */}
            <motion.div
                style={{ opacity: engineOpacity }}
                className="absolute inset-0 flex items-center justify-end px-6 md:px-12 lg:px-20"
            >
                <div className="max-w-2xl hud-border glass-effect p-8 md:p-10 text-right">
                    <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-5xl font-bold uppercase tracking-wider text-gradient-gold mb-6">
                        {carData.engine.title}
                    </h2>

                    <div className="space-y-4">
                        {carData.engine.specs.map((spec, index) => (
                            <div key={index} className="font-[family-name:var(--font-rajdhani)]">
                                <div className="text-sm md:text-base uppercase tracking-widest text-[var(--color-pagani-gold)] mb-1">
                                    {spec.label}
                                </div>
                                <div className="text-base md:text-lg text-gray-200">
                                    {spec.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
