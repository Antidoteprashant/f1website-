"use client";

import { motion } from "framer-motion";
import { carData } from "@/data/carData";

export default function SpecsGrid() {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-[var(--color-pagani-black)] to-[var(--color-carbon-gray)]">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-[family-name:var(--font-orbitron)] text-3xl md:text-5xl font-bold uppercase tracking-wider text-center text-gradient-gold mb-4"
                >
                    Technical Specifications
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center text-gray-400 mb-16 font-[family-name:var(--font-rajdhani)] tracking-wide"
                >
                    Championship-Winning Engineering Excellence
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {carData.specifications.map((spec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Card Background with Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-pagani-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl" />

                            {/* Card Container */}
                            <div className="relative bg-gradient-to-br from-[var(--color-carbon-gray)] to-[#1f1f1f] border border-[var(--color-pagani-gold)]/20 rounded-lg p-8 overflow-hidden transition-all duration-500 group-hover:border-[var(--color-pagani-gold)]/60 group-hover:shadow-2xl group-hover:shadow-[var(--color-pagani-gold)]/20">

                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-transparent via-[var(--color-pagani-gold)] to-transparent group-hover:w-full transition-all duration-700" />

                                {/* Icon Circle */}
                                <div className="w-12 h-12 rounded-full bg-[var(--color-pagani-gold)]/10 border border-[var(--color-pagani-gold)]/30 flex items-center justify-center mb-6 group-hover:bg-[var(--color-pagani-gold)]/20 group-hover:border-[var(--color-pagani-gold)]/60 group-hover:scale-110 transition-all duration-500">
                                    <div className="w-2 h-2 rounded-full bg-[var(--color-pagani-gold)] group-hover:shadow-lg group-hover:shadow-[var(--color-pagani-gold)]" />
                                </div>

                                {/* Label */}
                                <div className="font-[family-name:var(--font-rajdhani)] text-xs uppercase tracking-[0.2em] text-[var(--color-pagani-gold)]/70 mb-3 group-hover:text-[var(--color-pagani-gold)] transition-colors duration-300">
                                    {spec.label}
                                </div>

                                {/* Value */}
                                <div className="font-[family-name:var(--font-rajdhani)] text-2xl font-bold text-white leading-tight pb-4">
                                    {spec.value}
                                </div>

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
