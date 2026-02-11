"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    const navBackground = useTransform(
        scrollY,
        [0, 100],
        ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.85)"]
    );

    const borderOpacity = useTransform(
        scrollY,
        [0, 100],
        [0, 0.3]
    );

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
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

    const navItems = [
        { label: "Home", id: "home" },
        { label: "Specifications", id: "specifications" },
        { label: "Features", id: "features" },
    ];

    return (
        <motion.nav
            style={{ backgroundColor: navBackground }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "backdrop-blur-xl shadow-2xl shadow-black/50" : ""
                }`}
        >
            {/* Top border with gradient */}
            <motion.div
                style={{ opacity: borderOpacity }}
                className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-pagani-gold)] to-transparent"
            />

            {/* Bottom border with gradient */}
            <motion.div
                style={{ opacity: borderOpacity }}
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-pagani-gold)]/30 to-transparent"
            />

            <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? "py-3" : "py-6"
                }`}>
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => scrollToSection("home")}
                >
                    <div className="w-10 h-10 rounded-full border-2 border-[var(--color-pagani-gold)] flex items-center justify-center bg-[var(--color-pagani-gold)]/10 backdrop-blur-sm hover:bg-[var(--color-pagani-gold)]/20 transition-all duration-300">
                        <div className="w-3 h-3 rounded-full bg-[var(--color-pagani-gold)]" />
                    </div>
                    <span className="font-[family-name:var(--font-orbitron)] text-xl md:text-2xl font-bold tracking-wider text-gradient-gold">
                        RB19
                    </span>
                </motion.div>

                {/* Navigation Menu - Hidden on mobile */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden md:flex items-center gap-8"
                >
                    {navItems.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="relative group font-[family-name:var(--font-rajdhani)] text-sm uppercase tracking-widest text-gray-300 hover:text-[var(--color-pagani-gold)] transition-colors duration-300"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--color-pagani-gold)] to-transparent group-hover:w-full transition-all duration-500" />
                        </button>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group font-[family-name:var(--font-rajdhani)] px-6 py-2.5 text-sm md:text-base font-semibold uppercase tracking-widest overflow-hidden"
                >
                    {/* Button background */}
                    <div className="absolute inset-0 border border-[var(--color-pagani-gold)]/40 rounded-sm group-hover:border-[var(--color-pagani-gold)] transition-all duration-300" />

                    {/* Hover fill effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-pagani-gold)] to-[var(--color-bright-gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                    {/* Button text */}
                    <span className="relative z-10 text-[var(--color-pagani-gold)] group-hover:text-black transition-colors duration-300">
                        Inquire Now
                    </span>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[var(--color-pagani-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[var(--color-pagani-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
            </div>
        </motion.nav>
    );
}
