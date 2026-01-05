import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Globe, Terminal } from 'lucide-react';
import RedGeometricBackground from './RedGeometricBackground';

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const certifications = [
        {
            title: "Certified Junior Detection Engineer",
            level: "Junior",
            icon: <ShieldCheck className="h-8 w-8 text-red-500" />,
            color: "red-500",
            glow: "from-red-500/20"
        },
        {
            title: "Blue Team Level 2 (BTL2)",
            level: "Intermediate",
            icon: <Terminal className="h-8 w-8 text-red-400" />,
            color: "red-400",
            glow: "from-red-600/30"
        },
        {
            title: "Certified Senior Security Analyst",
            level: "Advanced",
            icon: <Globe className="h-8 w-8 text-red-600" />,
            color: "red-600",
            glow: "from-red-400/20"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % certifications.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-[600px] border-b border-red-950 overflow-hidden">
            {/* Base Background Layer */}
            <div className="absolute inset-0 bg-black -z-20"></div>

            <RedGeometricBackground />

            {/* Background Gradient & Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a0000_1px,transparent_1px),linear-gradient(to_bottom,#1a0000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 -z-10"></div>
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-800 to-transparent z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 pb-20 md:pt-20 md:pb-40 overflow-visible">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="mb-12 lg:mb-0 flex flex-col items-start">
                        {/* Top Line */}
                        <div className="w-full h-0.5 bg-red-600/60 mb-8"></div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-8 uppercase">
                            Practical <br />
                            <span className="text-outline-red block my-1">
                                Cybersecurity Training
                            </span>
                            For Every Level.
                        </h1>

                        {/* Middle Line */}
                        <div className="w-full h-0.5 bg-red-600/60 mb-8"></div>

                        <p className="text-sm md:text-base text-white/60 mb-0 max-w-2xl leading-relaxed uppercase tracking-wider font-medium">
                            Our practical cyber defense training has developed the skills of thousands of aspiring or established security professionals around the world.
                        </p>
                    </div>

                    {/* Right Content - Shuffling Certification Cards */}
                    <div className="relative h-[450px] md:h-[500px] flex items-start justify-center lg:justify-end pt-32 lg:pt-48 lg:py-0 overflow-visible">
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-900/5 blur-[120px] rounded-full -z-10"></div>

                        <div className="relative w-full max-w-md h-full flex flex-col items-center">
                            {certifications.map((cert, index) => {
                                // Calculate position relative to active index
                                const position = (index - activeIndex + certifications.length) % certifications.length;

                                // Dynamic classes based on position
                                let classes = "";
                                if (position === 0) {
                                    // Active (Front & Large)
                                    classes = "z-30 opacity-100 scale-110 translate-y-0";
                                } else if (position === 1) {
                                    // Next (Behind & Smaller)
                                    classes = "z-20 opacity-70 scale-90 translate-y-36 md:translate-y-40";
                                } else {
                                    // Back (Furthest & Smallest)
                                    classes = "z-10 opacity-40 scale-80 translate-y-64 md:translate-y-72";
                                }

                                return (
                                    <div
                                        key={index}
                                        className={`absolute w-full transition-all duration-1000 ease-in-out transform ${classes}`}
                                    >
                                        <div className="group relative">
                                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.glow} to-transparent rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000`}></div>
                                            <div className={`relative bg-black/40 backdrop-blur-xl border-2 border-white/40 p-6 md:p-8 rounded-xl flex items-center justify-between shadow-2xl ring-2 ${position === 0 ? 'ring-red-500/70' : 'ring-red-800/40'}`}>
                                                <div className="flex items-center gap-5 md:gap-7">
                                                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-lg bg-red-950/40 border border-red-800/20 flex items-center justify-center transition-transform duration-700 ${position === 0 ? 'scale-110' : ''}`}>
                                                        {React.cloneElement(cert.icon, { className: 'h-8 w-8 md:h-10 md:w-10 text-red-500' })}
                                                    </div>
                                                    <div>
                                                        <span className={`inline-block px-2 py-0.5 rounded bg-red-900/40 text-red-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2`}>{cert.level}</span>
                                                        <h3 className="text-lg md:text-2xl font-bold text-white uppercase tracking-tighter leading-[1.1]">
                                                            {cert.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <ChevronRight className={`h-6 w-6 md:h-8 md:w-8 transition-colors ${position === 0 ? 'text-red-500' : 'text-red-900'}`} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
