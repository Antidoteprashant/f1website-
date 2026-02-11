"use client";

import { motion } from "framer-motion";
import { carData } from "@/data/carData";

export default function Features() {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-[var(--color-carbon-gray)] to-[var(--color-pagani-black)]">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-[family-name:var(--font-orbitron)] text-3xl md:text-5xl font-bold uppercase tracking-wider text-center text-gradient-gold mb-4"
                >
                    Engineering Excellence
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center text-gray-400 mb-16 font-[family-name:var(--font-rajdhani)] tracking-wide"
                >
                    Pushing the Boundaries of Formula 1 Technology
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {carData.features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -8, scale: 1.01 }}
                            className="group relative h-full"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-pagani-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl" />

                            {/* Card Container - Full Height */}
                            <div className="relative h-full bg-gradient-to-br from-[var(--color-carbon-gray)] to-[#1f1f1f] border border-[var(--color-pagani-gold)]/20 rounded-lg p-8 overflow-hidden transition-all duration-500 group-hover:border-[var(--color-pagani-gold)]/60 group-hover:shadow-2xl group-hover:shadow-[var(--color-pagani-gold)]/20 flex flex-col">

                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-transparent via-[var(--color-pagani-gold)] to-transparent group-hover:w-full transition-all duration-700" />

                                {/* Icon */}
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold uppercase tracking-wide text-[var(--color-pagani-gold)] mb-4 group-hover:text-[var(--color-bright-gold)] transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                {/* Description - Grows to fill space */}
                                <p className="font-[family-name:var(--font-rajdhani)] text-lg leading-relaxed text-gray-300 flex-grow pb-2">
                                    {feature.description}
                                </p>

                                {/* Bottom corner accent */}
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[var(--color-pagani-gold)]/20 group-hover:border-[var(--color-pagani-gold)]/50 transition-colors duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
