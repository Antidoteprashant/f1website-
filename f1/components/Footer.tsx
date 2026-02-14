'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Footer() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
        checkDesktop(); // Check initially
        window.addEventListener('resize', checkDesktop);

        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
            window.removeEventListener('resize', checkDesktop);
        };
    }, []);

    const links = [
        {
            title: "Instagram",
            handle: "@rb19racing",
            href: "https://instagram.com/rb19racing",
            icon: "→"
        },
        {
            title: "Twitter",
            handle: "@redbullracing",
            href: "https://twitter.com/redbullracing",
            icon: "→"
        },
        {
            title: "Contact",
            handle: "via email",
            href: "mailto:pm0780972@gmail.com",
            icon: "✉"
        },
    ];

    return (
        <footer className="bg-black text-white relative overflow-hidden border-t border-white/10" style={{ marginTop: '3rem' }}>
            <div className="max-w-[1400px] mx-auto" style={{ paddingLeft: '3rem', paddingRight: '3rem', paddingTop: '4rem', paddingBottom: '5rem' }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div>
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2"
                            style={{ marginBottom: '2rem' }}
                        >
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-gray-400 text-sm">Always Racing</span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-bold"
                            style={{ lineHeight: '1.2', marginBottom: '1.5rem' }}
                        >
                            Red Bull RB19
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg md:text-xl font-[family-name:var(--font-rajdhani)]"
                            style={{ lineHeight: '1.6', marginBottom: '1rem' }}
                        >
                            Championship Winning Formula 1 Car
                        </motion.p>

                        {/* Credit */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-600 text-sm"
                            style={{ lineHeight: '1.6', marginBottom: '3rem' }}
                        >
                            2023 FIA Formula One World Championship
                        </motion.p>

                        {/* Link Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {links.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * (index + 4) }}
                                    className="group relative bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between" style={{ marginBottom: '1rem' }}>
                                        <h3 className="font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors" style={{ lineHeight: '1.4' }}>
                                            {link.title}
                                        </h3>
                                        <span className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                                            {link.icon}
                                        </span>
                                    </div>
                                    <p className="text-white text-sm" style={{ lineHeight: '1.6' }}>
                                        {link.handle}
                                    </p>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Clock */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="relative"
                        >
                            {/* Clock Container */}
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center">
                                {/* Clock Face */}
                                <div className="relative w-56 h-56 md:w-72 md:h-72">
                                    {/* Hour Markers */}
                                    {[...Array(12)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute top-1/2 left-1/2 w-0.5 h-3 bg-white/30"
                                            style={{
                                                transformOrigin: 'center',
                                                transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-${28 * (isDesktop ? 1.2 : 1)}rem)`,
                                            }}
                                        />
                                    ))}

                                    {/* Hour Hand */}
                                    <div
                                        className="absolute top-1/2 left-1/2 w-1.5 bg-white rounded-full origin-bottom"
                                        style={{
                                            height: '25%',
                                            transform: `translate(-50%, -100%) rotate(${(currentTime.getHours() % 12) * 30 + currentTime.getMinutes() * 0.5}deg)`,
                                        }}
                                    />

                                    {/* Minute Hand */}
                                    <div
                                        className="absolute top-1/2 left-1/2 w-1 bg-green-500 rounded-full origin-bottom"
                                        style={{
                                            height: '35%',
                                            transform: `translate(-50%, -100%) rotate(${currentTime.getMinutes() * 6}deg)`,
                                        }}
                                    />

                                    {/* Second Hand */}
                                    <div
                                        className="absolute top-1/2 left-1/2 w-0.5 bg-red-500 rounded-full origin-bottom"
                                        style={{
                                            height: '40%',
                                            transform: `translate(-50%, -100%) rotate(${currentTime.getSeconds() * 6}deg)`,
                                        }}
                                    />

                                    {/* Center Dot */}
                                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-white/50" />
                                </div>
                            </div>

                            {/* Digital Time Display */}
                            <div className="mt-6 text-center">
                                <p className="font-[family-name:var(--font-orbitron)] text-2xl text-white/80">
                                    {currentTime.toLocaleTimeString('en-US', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: false
                                    })}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-20 pt-10 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                        <p style={{ lineHeight: '1.6' }}>© 2025 Red Bull Racing. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-white transition-colors" style={{ lineHeight: '1.6' }}>Privacy</a>
                            <a href="#" className="hover:text-white transition-colors" style={{ lineHeight: '1.6' }}>Terms</a>
                            <a href="#" className="hover:text-white transition-colors" style={{ lineHeight: '1.6' }}>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
