import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, ChevronDown, ArrowRight, ShieldCheck, Globe, Terminal, Briefcase } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Certifications', path: '/certifications', hasDropdown: true },
        { name: 'Career', path: '/career-opportunities', hasDropdown: true },
        { name: 'Company', path: '/about', hasDropdown: true },
        { name: 'Support', path: '/contact', hasDropdown: true },
    ];

    const isActive = (path) => location.pathname === path;

    const trainingData = {
        certifications: [
            {
                title: "LEVEL 1 (ENTRY)",
                desc: "Viral Cybersecurity Certifications.",
                icon: <ShieldCheck className="h-5 w-5 text-red-500" />,
                path: "/certification/btl1"
            },
            {
                title: "LEVEL 2 (PREMIUM)",
                desc: "Advanced Security Operations.",
                icon: <Briefcase className="h-5 w-5 text-red-600" />,
                path: "/certification/btl2"
            }
        ],
        pathway: [
            { title: "CERTIFICATION PATHWAY", desc: "Beginner to Expert Roadmap", path: "/certification-pathway" },
            { title: "EXAM SYSTEM", desc: "How our practical exams work", path: "/exam-system" },
            { title: "VERIFY CREDENTIAL", desc: "Validate a CSCA Certificate", path: "/certificate-verification" },
            { title: "DIGITAL BADGES", desc: "Shareable LinkedIn Credentials", path: "/digital-badges" }
        ],
        career: [
            { title: "CAREER OPPORTUNITIES", desc: "Job roles mapped to Certs", path: "/career-opportunities" },
            { title: "HIRING PARTNERS", desc: "Corporate recruitment network", path: "/partners-ecosystem" },
            { title: "INTERNSHIPS", desc: "Apprenticeship linkage", path: "/career-opportunities" }
        ],
        company: [
            { title: "ABOUT CSCA", path: "/about" },
            { title: "PARTNERS & ECOSYSTEM", path: "/partners-ecosystem" },
            { title: "ACCREDITATION", path: "/accreditation" }
        ],
        support: [
            { title: "FAQS", path: "/faq" },
            { title: "CONTACT US", path: "/contact" },
            { title: "POLICIES", path: "/privacy" }
        ]
    };

    return (
        <nav
            className={`fixed inset-x-0 z-50 transition-all duration-700 px-4 md:px-8 py-4 ${isScrolled ? 'top-0' : 'top-9'}`}
            onMouseLeave={() => setActiveDropdown(null)}
        >
            <div className={`max-w-7xl mx-auto relative transition-all duration-500`}>
                {/* Border Beam Effect */}
                <div className={`absolute -inset-[1px] rounded-[2rem] bg-gradient-to-right from-transparent via-red-500/50 to-transparent animate-beam opacity-0 transition-opacity duration-1000 ${isScrolled ? 'opacity-100' : 'opacity-20'}`}></div>

                <div className={`relative px-6 md:px-10 h-16 md:h-18 rounded-[2rem] border transition-all duration-500 flex justify-between items-center
                    ${isScrolled
                        ? 'bg-black/60 backdrop-blur-3xl border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)]'
                        : 'bg-black/80 backdrop-blur-2xl border-white/5'
                    }`}>

                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group/logo" onClick={() => window.location.href = '/'}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-600 blur-md opacity-20 group-hover/logo:opacity-50 transition-opacity animate-pulse"></div>
                            <div className="relative bg-red-700 p-2.5 rounded-xl shadow-lg shadow-red-900/40 group-hover/logo:scale-110 group-hover/logo:rotate-3 transition-transform duration-500">
                                <Shield className="h-6 w-6 text-white" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-black text-2xl tracking-tighter text-white leading-none group-hover/logo:text-red-500 transition-colors">CSCA</span>
                            <span className="text-[8px] uppercase font-black text-red-600 tracking-[0.3em] mt-1">Codevirus Security</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-2 h-full items-center">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative h-full flex items-center group px-1"
                                onMouseEnter={() => link.hasDropdown ? setActiveDropdown(link.name) : setActiveDropdown(null)}
                            >
                                <Link
                                    to={link.path}
                                    className={`relative z-10 flex items-center gap-2 px-4 py-2 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 ${isActive(link.path) || activeDropdown === link.name
                                        ? 'text-white'
                                        : 'text-white/40 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180 text-red-500' : 'opacity-20'}`} />
                                    )}
                                </Link>

                                {/* Pill Hover Effect */}
                                <div className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 bg-white/5 border border-white/10 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 -z-0 ${activeDropdown === link.name || isActive(link.path) ? 'opacity-100 scale-100 bg-red-500/5 border-red-500/20' : ''}`}></div>

                                {/* Certifications Mega Menu */}
                                {link.name === 'Certifications' && activeDropdown === 'Certifications' && (
                                    <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[600px] bg-black border border-white/10 rounded-2xl shadow-[0_45px_100px_-20px_rgba(0,0,0,1)] overflow-hidden transition-all duration-500 animate-in fade-in slide-in-from-top-6 p-10 z-50">
                                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-right from-transparent via-red-600 to-transparent"></div>
                                        <div className="grid grid-cols-2 gap-12 text-left">
                                            {/* Column 1: Programs */}
                                            <div>
                                                <h4 className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-3">Programs</h4>
                                                <div className="space-y-6">
                                                    {trainingData.certifications.map((cert) => (
                                                        <Link key={cert.path} to={cert.path} className="flex gap-4 group/item">
                                                            <div className="flex-shrink-0 w-10 h-10 bg-white/[0.03] border border-white/10 rounded-lg flex items-center justify-center group-hover/item:border-red-500/40 group-hover/item:bg-red-500/10 transition-all duration-500 shadow-2xl">
                                                                {cert.icon}
                                                            </div>
                                                            <div className="pt-0.5">
                                                                <div className="text-[10px] font-black text-white group-hover/item:text-red-500 transition-colors uppercase tracking-[0.1em]">{cert.title}</div>
                                                                <div className="text-[8px] text-white/30 font-bold leading-relaxed mt-1 uppercase tracking-wide">{cert.desc}</div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Column 2: Ecosystem */}
                                            <div>
                                                <h4 className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-3">Ecosystem</h4>
                                                <div className="space-y-4">
                                                    {trainingData.pathway.map((item) => (
                                                        <Link key={item.title} to={item.path} className="block group/item">
                                                            <div className="flex items-center gap-2 text-[10px] font-black text-white group-hover/item:text-red-500 transition-colors uppercase tracking-[0.1em]">
                                                                {item.title}
                                                                <ArrowRight className="h-3 w-3 -rotate-45 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                            </div>
                                                            <div className="text-[8px] text-white/30 font-bold leading-relaxed mt-1 uppercase tracking-wide">{item.desc}</div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Career Mega Menu */}
                                {link.name === 'Career' && activeDropdown === 'Career' && (
                                    <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[400px] bg-black border border-white/10 rounded-2xl shadow-[0_45px_100px_-20px_rgba(0,0,0,1)] overflow-hidden transition-all duration-500 animate-in fade-in slide-in-from-top-6 p-8 z-50">
                                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-right from-transparent via-red-600 to-transparent"></div>
                                        <div>
                                            <h4 className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-3">Growth</h4>
                                            <div className="space-y-6">
                                                {trainingData.career.map((item) => (
                                                    <Link key={item.title} to={item.path} className="block group/item">
                                                        <div className="flex items-center gap-2 text-[11px] font-black text-white group-hover/item:text-red-500 transition-colors uppercase tracking-[0.15em]">
                                                            {item.title}
                                                            <ArrowRight className="h-3 w-3 -rotate-45 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                        </div>
                                                        <div className="text-[8px] text-white/30 font-bold leading-relaxed mt-1 uppercase tracking-wide">{item.desc}</div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Company & Support Dropdowns */}
                                {(link.name === 'Company' || link.name === 'Support') && activeDropdown === link.name && (
                                    <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[250px] bg-black border border-white/10 rounded-2xl shadow-[0_45px_100px_-20px_rgba(0,0,0,1)] overflow-hidden transition-all duration-500 animate-in fade-in slide-in-from-top-6 p-6 z-50">
                                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-right from-transparent via-red-600 to-transparent"></div>
                                        <div className="space-y-4">
                                            {(link.name === 'Company' ? trainingData.company : trainingData.support).map((item) => (
                                                <Link key={item.title} to={item.path} className="block text-[10px] font-black text-white hover:text-red-500 transition-colors uppercase tracking-[0.2em]">
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
                        <Link to="/login" className="relative group px-6 py-2 rounded-full border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden">
                            <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative z-10 flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
                                <span className="text-[10px] font-black text-white/50 group-hover:text-white uppercase tracking-[0.25em] transition-all">Login</span>
                            </div>
                        </Link>

                        <Link to="/register" className="relative group overflow-hidden">
                            <div className="px-8 py-3 bg-white hover:bg-black rounded-full transition-all duration-500 flex items-center gap-3">
                                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                                <span className="relative z-10 text-[10px] font-black text-black group-hover:text-white uppercase tracking-[0.25em] transition-colors">Register</span>
                                <ArrowRight className="h-3 w-3 text-black group-hover:text-red-500 transition-colors group-hover:translate-x-1 duration-300" />
                            </div>
                            <div className="absolute inset-0 rounded-full border border-black/5 group-hover:border-red-500/50 transition-colors duration-500"></div>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center">
                        <button onClick={toggleMenu} className="text-white hover:text-red-500 focus:outline-none">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 bg-black/95 backdrop-blur-2xl border border-white/5 rounded-3xl shadow-2xl overflow-y-auto max-h-[80vh] p-6">
                    <div className="space-y-1 text-center">
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className={`block px-3 py-4 text-sm font-black uppercase tracking-[0.2em] ${isActive(link.path) ? 'text-red-500' : 'text-white hover:text-red-500'}`}>
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-8 border-t border-white/10 mt-4 flex flex-col gap-4">
                            <Link to="/login" onClick={() => setIsOpen(false)} className="block text-center w-full px-4 py-3 border border-white/20 rounded-xl text-white font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">Login</Link>
                            <Link to="/register" onClick={() => setIsOpen(false)} className="block text-center w-full px-4 py-3 bg-red-600 rounded-xl text-white font-black uppercase tracking-[0.2em] hover:bg-red-700 shadow-lg shadow-red-900/20">Register</Link>
                        </div>
                    </div>
                </div>
            )}

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes beam {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                .animate-beam {
                    background-size: 200% 100%;
                    animation: beam 4s linear infinite;
                }
            ` }} />
        </nav>
    );
};

export default Navbar;
