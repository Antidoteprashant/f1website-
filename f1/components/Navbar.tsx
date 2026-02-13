"use client";

import { motion } from "framer-motion";

export default function Navbar() {
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
            className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 px-4"
        >
            {/* Floating Capsule Container */}
            <div className="relative">
                {/* Subtle Background Glow */}
                <div className="absolute inset-0 bg-red-500/10 rounded-full blur-2xl" />

                {/* Main Navbar Capsule */}
                <div className="relative flex items-center gap-5 bg-black/80 backdrop-blur-2xl rounded-full px-8 py-6 border border-white/20 shadow-2xl shadow-black/50">
                    {/* Work Button */}
                    <button
                        onClick={() => scrollToSection("specifications")}
                        className="px-16 py-4.5 text-xl font-[family-name:var(--font-rajdhani)] font-semibold text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300"
                    >
                        Work
                    </button>

                    {/* Resources Button */}
                    <button
                        onClick={() => scrollToSection("features")}
                        className="px-16 py-4.5 text-xl font-[family-name:var(--font-rajdhani)] font-semibold text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300"
                    >
                        Resources
                    </button>

                    {/* Say Hello Button with Gradient Border */}
                    <div className="relative group">
                        {/* Gradient Border Ring */}
                        <div className="absolute -inset-[2px] bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Button */}
                        <button
                            onClick={() => scrollToSection("home")}
                            className="relative px-18 py-4.5 text-xl font-[family-name:var(--font-rajdhani)] font-semibold text-white bg-black rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95"
                        >
                            Say Hello
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
