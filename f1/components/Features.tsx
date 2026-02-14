"use client";

import { motion } from "framer-motion";
import { carData } from "@/data/carData";

// Inline SVG Icons for better performance and customization
const Icons = {
    Aerodynamics: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M2 12h20" />
            <path d="M19 12v-5c0-1.8-1.5-3.3-3.3-3.3H5" />
            <path d="M5 3.7c-1.8 0-3 1.5-3 3.3V12" />
            <path d="M16.5 12c.8 0 1.5.7 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5v-3C6 12.7 6.7 12 7.5 12" />
            <path d="M22 14h-2" />
        </svg>
    ),
    Hybrid: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
    ),
    Cooling: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M12 2v20" />
            <path d="M4.93 4.93l14.14 14.14" />
            <path d="M19.07 4.93L4.93 19.07" />
        </svg>
    ),
    Championship: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
    ),
};

const featureIcons = [
    Icons.Aerodynamics,
    Icons.Hybrid,
    Icons.Cooling,
    Icons.Championship,
];

export default function Features() {
    return (
        <section className="pt-16 md:pt-24 bg-[var(--color-pagani-black)] relative overflow-hidden" style={{ paddingBottom: '0rem' }}>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-20"
                >
                    <h2 className="font-[family-name:var(--font-orbitron)] text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white mb-6 md:mb-8 leading-tight">
                        Engineering Excellence
                    </h2>
                    <p className="font-[family-name:var(--font-rajdhani)] text-base md:text-lg text-red-200/60 tracking-[0.2em] uppercase">
                        Performance Through Innovation
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {carData.features.map((feature, index) => {
                        const Icon = featureIcons[index] || Icons.Aerodynamics;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group relative"
                            >
                                {/* Card Container */}
                                <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl transition-all duration-300 group-hover:border-red-500/50 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.2)] group-hover:bg-white/10 flex flex-col" style={{ padding: '2.5rem' }}>
                                    {/* Neon Corner Accent */}
                                    <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden rounded-tr-xl">
                                        <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-transparent group-hover:border-red-400 transition-colors duration-300" />
                                    </div>

                                    {/* Icon */}
                                    <div className="mb-5 md:mb-6 inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-lg bg-red-950/30 text-red-400 group-hover:text-red-300 group-hover:scale-110 transition-all duration-300">
                                        <Icon className="w-7 h-7 md:w-8 md:h-8" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-[family-name:var(--font-orbitron)] text-lg md:text-xl font-bold text-white group-hover:text-red-200 transition-colors leading-tight" style={{ marginBottom: '1.25rem' }}>
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="font-[family-name:var(--font-rajdhani)] text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow" style={{ lineHeight: '1.7' }}>
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
