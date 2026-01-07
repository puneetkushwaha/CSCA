import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Search, ChevronRight, Award, Lock, BookOpen, Clock, CheckCircle } from 'lucide-react';
import RedGeometricBackground from '../components/RedGeometricBackground';

const Certifications = () => {
    const certifications = [
        {
            id: 'btl1',
            title: 'Certified Junior Analyst',
            code: 'BTL1',
            level: 'Level 1',
            description: "The industry standard for entry-level security operations. Master the core skills needed to defend networks: Phishing Analysis, Digital Forensics, SIEM, and Incident Response.",
            price: '£399',
            features: [
                '20h+ Video Training',
                '100h+ Virtual Labs',
                '24h Practical Exam',
                'Digital Badge & Physical Coin'
            ],
            icon: <Search className="w-8 h-8 text-white" />,
            color: 'from-red-600 to-red-900'
        },
        {
            id: 'btl2',
            title: 'Certified Cyber Defender',
            code: 'BTL2',
            level: 'Level 2',
            description: "Advanced blue team operations. Take your skills to the next level with deep-dives into Malware Analysis, Threat Hunting, Vulnerability Management, and Advanced SIEM.",
            price: '£1999',
            features: [
                '40h+ Video Training',
                'Advanced Cloud Labs',
                '48h Practical Exam',
                'Gold Coin & Certificate'
            ],
            icon: <Shield className="w-8 h-8 text-white" />,
            color: 'from-red-700 to-red-950'
        },
        {
            id: 'ath',
            title: 'Advanced Threat Hunter',
            code: 'ATH',
            level: 'Advanced',
            description: "Elite status for senior operators. Focus on APT simulation, advanced malware reverse engineering, and proactive threat hunting methodologies.",
            price: '£2500',
            features: [
                '60h+ Specialized Training',
                'Custom APT Labs',
                '72h Practical Exam',
                'Elite Black Badge'
            ],
            icon: <Target className="w-8 h-8 text-white" />,
            color: 'from-red-800 to-black'
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-['Inter'] relative selection:bg-red-500/30 overflow-hidden">
            {/* Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <RedGeometricBackground
                    height={30} // Taller peaks for drama
                    jaggednessScale={2.5}
                    opacity={0.4}
                    planeSize={[60, 40]}
                    cameraPos={[0, 0, 15]}
                    ashCount={200}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

                {/* Header */}
                <div className="text-center mb-24 cursor-default">
                    <div className="inline-flex items-center gap-3 mb-4 animate-in fade-in slide-in-from-top-4 duration-1000">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600"></div>
                        <span className="text-xs font-black text-red-500 uppercase tracking-[0.4em]">Global Standard</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600"></div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase mb-6">
                        Certification <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Pathways</span>
                    </h1>
                    <p className="text-lg text-white/40 max-w-2xl mx-auto font-medium leading-relaxed">
                        From entry-level analyst to elite threat hunter.
                        Validate your expertise with practical, hands-on examinations.
                    </p>
                </div>

                {/* Certification Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="group relative bg-[#050505] border border-white/10 rounded-3xl overflow-hidden hover:border-red-600/50 transition-all duration-500 flex flex-col hover:shadow-[0_0_50px_rgba(220,38,38,0.2)]"
                        >
                            {/* Card Header Background */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Level Tag */}
                            <div className="absolute top-6 right-6">
                                <span className={`px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-black uppercase tracking-[0.2em] group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-500 text-white/30`}>
                                    {cert.level}
                                </span>
                            </div>

                            {/* Main Content */}
                            <div className="p-8 pt-12 flex-grow relative z-10">
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-red-500/50 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-500">
                                    {cert.icon}
                                </div>

                                <div className="space-y-2 mb-6">
                                    <div className="text-4xl font-black text-white/10 group-hover:text-red-600/20 transition-colors duration-500 absolute top-8 left-8 select-none pointer-events-none">
                                        {cert.code}
                                    </div>
                                    <h2 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-red-500 transition-colors relative z-10">
                                        {cert.title}
                                    </h2>
                                </div>

                                <p className="text-sm text-white/40 leading-relaxed font-medium mb-8 border-l-2 border-white/10 pl-4 group-hover:border-red-600 transition-colors">
                                    {cert.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {cert.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-xs font-bold text-white/60 uppercase tracking-wide">
                                            <CheckCircle className="w-3.5 h-3.5 text-red-600/50 group-hover:text-red-500 transition-colors" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Footer Action */}
                            <div className="p-6 border-t border-white/5 bg-white/[0.01] relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <span className="block text-[10px] uppercase tracking-widest text-white/20 font-bold mb-1">One-time Cost</span>
                                        <span className="text-2xl font-black text-white group-hover:text-red-500 transition-colors">{cert.price}</span>
                                    </div>
                                </div>

                                <Link
                                    to={`/certification/${cert.id}`}
                                    className="block w-full"
                                >
                                    <button className="w-full py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-red-900/50 flex items-center justify-center gap-2 group/btn">
                                        View Syllabus
                                        <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Corporate Strip */}
                <div className="mt-24 p-8 rounded-3xl border border-white/5 bg-gradient-to-r from-red-950/20 to-transparent relative overflow-hidden group">
                    {/* Animated shine effect */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full group-hover:bg-red-600/20 transition-colors duration-700"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">Training a Team?</h3>
                            <p className="text-sm text-white/50 max-w-md">Get enterprise-grade reporting, bulk discounts, and dedicated support for your SOC team.</p>
                        </div>

                        <button className="px-8 py-3 bg-transparent border border-white/20 text-white font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-white hover:text-black transition-all duration-300">
                            Enterprise Solutions
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Certifications;
