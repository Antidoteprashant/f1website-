"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 py-6 md:px-12 md:py-8 pointer-events-none"
        >
            <div className="w-full max-w-[1600px] flex items-center justify-between relative">
                {/* Left: Brand / Logo */}
                <div className="pointer-events-auto">
                    <div className="flex items-center group cursor-pointer" onClick={() => scrollToSection("home")} style={{ gap: '1rem' }}>
                        {/* Logo Icon */}
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all duration-300">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {/* Logo Text */}
                        <span className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-white tracking-wider group-hover:text-gray-300 transition-colors">
                            RB19
                        </span>
                    </div>
                </div>

                {/* Center: Navigation Pill */}
                <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 hidden md:block">
                    <div className="relative group">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Nav Container */}
                        <div className="relative flex items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50" style={{ gap: '2rem', padding: '0.5rem 0.5rem' }}>
                            {["Home", "Specs", "Features", "Contact"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase() === "specs" ? "specifications" : item.toLowerCase())}
                                    className="rounded-full text-sm font-[family-name:var(--font-rajdhani)] font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                                    style={{ padding: '0.75rem 2rem' }}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: CTA Button */}
                <div className="pointer-events-auto">
                    <button
                        onClick={() => scrollToSection("features")}
                        className="group relative rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
                        style={{ padding: '0.75rem 2rem' }}
                    >
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative font-[family-name:var(--font-rajdhani)] font-semibold text-white tracking-wide">
                            Get Yours
                        </span>
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
