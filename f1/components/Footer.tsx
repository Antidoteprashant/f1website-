"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-[var(--color-pagani-black)] border-t border-[var(--color-pagani-gold)]/20 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold tracking-wider text-gradient-gold mb-4">
                            RB19
                        </h3>
                        <p className="font-[family-name:var(--font-rajdhani)] text-sm text-gray-400 leading-relaxed">
                            Experience the pinnacle of Formula 1 engineering and aerodynamic excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-[family-name:var(--font-orbitron)] text-lg font-semibold uppercase tracking-wider text-[var(--color-pagani-gold)] mb-4">
                            Quick Links
                        </h4>
                        <ul className="font-[family-name:var(--font-rajdhani)] space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[var(--color-bright-gold)] transition-colors duration-300">
                                    Specifications
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[var(--color-bright-gold)] transition-colors duration-300">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[var(--color-bright-gold)] transition-colors duration-300">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[var(--color-bright-gold)] transition-colors duration-300">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-[family-name:var(--font-orbitron)] text-lg font-semibold uppercase tracking-wider text-[var(--color-pagani-gold)] mb-4">
                            Connect
                        </h4>
                        <ul className="font-[family-name:var(--font-rajdhani)] space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[var(--color-bright-gold)] transition-colors duration-300">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[var(--color-bright-gold)] transition-colors duration-300">
                                    Twitter / X
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[var(--color-bright-gold)] transition-colors duration-300">
                                    YouTube
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="pt-8 border-t border-[var(--color-pagani-gold)]/10 text-center"
                >
                    <p className="font-[family-name:var(--font-rajdhani)] text-sm text-gray-500">
                        © 2026 Red Bull Racing RB19. All rights reserved. For demonstration purposes only.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
