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
        { name: 'Training', path: '/programs', hasDropdown: true },
        { name: 'Community', path: '/resources', hasDropdown: true },
        { name: 'Company', path: '/about', hasDropdown: true },
        { name: 'Corporate Training', path: '/corporate-training' },
    ];

    const isActive = (path) => location.pathname === path;

    const trainingData = {
        certifications: [
            {
                title: "BLUE TEAM LEVEL 1",
                desc: "Junior Security Operations certification.",
                icon: <ShieldCheck className="h-5 w-5 text-red-500" />,
                id: "BTL1"
            },
            {
                title: "BLUE TEAM LEVEL 2",
                desc: "Advanced Security Operations certification.",
                icon: <Globe className="h-5 w-5 text-red-600" />,
                id: "BTL2"
            },
            {
                title: "SECOPS MANAGER",
                desc: "Technical and strategic Security Operations management certification.",
                icon: <Briefcase className="h-5 w-5 text-red-700" />,
                id: "CSOM"
            },
            {
                title: "CJDE",
                desc: "Junior Detection Engineer certification.",
                icon: <Terminal className="h-5 w-5 text-red-400" />,
                id: "CJDE"
            }
        ],
        freeCourses: [
            { title: "BLUE TEAM JUNIOR ANALYST", desc: "Beginner learning pathway." },
            { title: "MENTAL HEALTH IN CYBERSECURITY", desc: "Well-being for professionals." },
            { title: "INTRODUCTION TO VIRTUAL MACHINES", desc: "Core concepts simplified." },
            { title: "INTRODUCTION TO PYTHON", desc: "Scripting for security." }
        ],
        training: [
            { title: "CORPORATE TRAINING", path: "/corporate-training" },
            { title: "SUCCESS STORIES", path: "/success-stories" },
            { title: "ACADEMIC BOARD", path: "/academic-board" }
        ],
        community: {
            learn: [
                { title: "BLOG", path: "/blog" },
                { title: "SUPPORT CENTRE", path: "https://support.csca.com", external: true }
            ],
            connect: [
                { title: "REDDIT", path: "https://reddit.com", external: true },
                { title: "X (TWITTER)", path: "https://x.com", external: true },
                { title: "LINKEDIN", path: "https://linkedin.com", external: true },
                { title: "INSTAGRAM", path: "https://instagram.com", external: true }
            ]
        },
        company: {
            info: [
                { title: "ABOUT US", path: "/about" },
                { title: "PARTNERSHIPS", path: "/partnerships" },
                { title: "CONTACT US", path: "/contact" },
                { title: "JOBS", path: "https://jobs.csca.com", external: true }
            ],
            products: {
                title: "BLUE TEAM LABS ONLINE",
                desc: "Our gamified blue team training platform. New challenges biweekly.",
                path: "https://blueteamlabs.online",
                external: true
            }
        }
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

                                {/* Mega Menus Implementation */}
                                {link.name === 'Training' && activeDropdown === 'Training' && (
                                    <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[850px] bg-black border border-white/10 rounded-2xl shadow-[0_45px_100px_-20px_rgba(0,0,0,1)] overflow-hidden transition-all duration-500 animate-in fade-in slide-in-from-top-6 p-10 z-50">
                                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-right from-transparent via-red-600 to-transparent"></div>
                                        <div className="grid grid-cols-3 gap-16 text-left">
                                            {/* Column 1: Certifications */}
                                            <div>
                                                <h4 className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-3">Certifications</h4>
                                                <div className="space-y-8">
                                                    {trainingData.certifications.map((cert) => (
                                                        <Link key={cert.id} to={`/certification/${cert.id.toLowerCase()}`} className="flex gap-5 group/item">
                                                            <div className="flex-shrink-0 w-14 h-14 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center group-hover/item:border-red-500/40 group-hover/item:bg-red-500/10 transition-all duration-500 shadow-2xl">
                                                                {cert.icon}
                                                            </div>
                                                            <div className="pt-1">
                                                                <div className="text-xs font-black text-white group-hover/item:text-red-500 transition-colors uppercase tracking-[0.1em]">{cert.title}</div>
                                                                <div className="text-[9px] text-white/30 font-bold leading-relaxed mt-2 uppercase tracking-wide max-w-[180px]">{cert.desc}</div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                                <Link to="/certifications" className="inline-flex items-center gap-3 mt-10 text-[10px] font-black text-red-500 uppercase tracking-[0.3em] hover:gap-5 transition-all group/view">
                                                    View All Courses
                                                    <ArrowRight className="h-4 w-4" />
                                                </Link>
                                            </div>
                                            {/* Column 2: Free Courses */}
                                            <div>
                                                <h4 className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-3">Free Courses</h4>
                                                <div className="space-y-8">
                                                    {trainingData.freeCourses.map((course) => (
                                                        <Link key={course.title} to="#" className="block group/item">
                                                            <div className="text-xs font-black text-white group-hover/item:text-red-500 transition-colors uppercase tracking-[0.1em]">{course.title}</div>
                                                            <div className="text-[9px] text-white/30 font-bold leading-relaxed mt-2 uppercase tracking-wide">{course.desc}</div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Column 3: Resources */}
                                            <div>
                                                <h4 className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-3">Resources</h4>
                                                <div className="space-y-6">
                                                    {trainingData.training.map((item) => (
                                                        <Link key={item.title} to={item.path} className="block text-xs font-black text-white hover:text-red-500 transition-colors uppercase tracking-[0.2em]">{item.title}</Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {link.name === 'Community' && activeDropdown === 'Community' && (
                                    <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[600px] bg-black border border-white/10 rounded-2xl shadow-[0_45px_100px_-20px_rgba(0,0,0,1)] overflow-hidden transition-all duration-500 animate-in fade-in slide-in-from-top-6 p-10 z-50">
                                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-right from-transparent via-red-600 to-transparent"></div>
                                        <div className="grid grid-cols-2 gap-16 text-left">
                                            <div>
                                                <h4 className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-3">Learn</h4>
                                                <div className="space-y-8">
                                                    {trainingData.community.learn.map((item) => (
                                                        <Link key={item.title} to={item.path} className="flex items-center gap-3 text-xs font-black text-white hover:text-red-500 transition-colors uppercase tracking-[0.15em] group/comm">
                                                            {item.title}
                                                            {item.external && <ArrowRight className="h-4 w-4 -rotate-45 opacity-10 group-hover/comm:opacity-100 group-hover/comm:text-red-500 transition-all" />}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <h4 className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-3">Connect</h4>
                                                <div className="space-y-5">
                                                    {trainingData.community.connect.map((item) => (
                                                        <Link key={item.title} to={item.path} className="flex items-center gap-3 text-xs font-black text-white hover:text-red-500 transition-colors uppercase tracking-[0.15em] group/comm">
                                                            {item.title}
                                                            {item.external && <ArrowRight className="h-4 w-4 -rotate-45 opacity-10 group-hover/comm:opacity-100 group-hover/comm:text-red-500 transition-all" />}
                                                        </Link>
                                                    ))}
                                                </div>
                                                <div className="mt-10 p-5 bg-[#5865F2]/5 border border-white/5 rounded-2xl group/discord hover:border-[#5865F2]/30 hover:bg-[#5865F2]/10 transition-all duration-500 cursor-pointer relative overflow-hidden">
                                                    <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-[#5865F2]/10 blur-3xl rounded-full"></div>
                                                    <div className="flex items-center justify-between relative z-10">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-10 h-10 bg-[#5865F2] rounded-xl flex items-center justify-center shadow-xl shadow-[#5865F2]/40 group-hover/discord:scale-110 transition-transform"><svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg></div>
                                                            <div className="text-[10px] font-black text-white uppercase tracking-[0.25em]">Join Discord</div>
                                                        </div>
                                                        <ArrowRight className="h-4 w-4 text-white/20 group-hover/discord:translate-x-2 group-hover/discord:text-white transition-all duration-500" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {link.name === 'Company' && activeDropdown === 'Company' && (
                                    <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[700px] bg-black border border-white/10 rounded-2xl shadow-[0_45px_100px_-20px_rgba(0,0,0,1)] overflow-hidden transition-all duration-500 animate-in fade-in slide-in-from-top-6 p-10 z-50">
                                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-right from-transparent via-red-600 to-transparent"></div>
                                        <div className="grid grid-cols-2 gap-16 text-left">
                                            <div>
                                                <h4 className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-3">CSCA</h4>
                                                <div className="space-y-8">
                                                    {trainingData.company.info.map((item) => (
                                                        <Link key={item.title} to={item.path} className="flex items-center gap-3 text-xs font-black text-white hover:text-red-500 transition-colors uppercase tracking-[0.15em] group/comm">
                                                            {item.title}
                                                            {item.external && <ArrowRight className="h-4 w-4 -rotate-45 opacity-10 group-hover/comm:opacity-100 group-hover/comm:text-red-500 transition-all font-bold" />}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-3">Products</h4>
                                                <Link to={trainingData.company.products.path} className="flex gap-5 group/prod p-4 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-red-500/30 hover:bg-white/[0.05] transition-all duration-500 shadow-2xl">
                                                    <div className="flex-shrink-0 w-16 h-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover/prod:border-red-500/20 group-hover/prod:scale-110 transition-all overflow-hidden shadow-inner"><img src="https://blueteamlabs.online/favicon.ico" alt="BTL" className="w-10 h-10 opacity-30 group-hover/prod:opacity-100 transition-opacity" /></div>
                                                    <div className="pt-1">
                                                        <div className="flex items-center gap-2 text-xs font-black text-white group-hover/prod:text-red-500 transition-colors uppercase tracking-wider">{trainingData.company.products.title}<ArrowRight className="h-3 w-3 -rotate-45 opacity-10 group-hover/prod:opacity-100 transition-all" /></div>
                                                        <div className="text-[9px] text-white/30 font-bold leading-relaxed mt-2 uppercase tracking-wide">{trainingData.company.products.desc}</div>
                                                    </div>
                                                </Link>
                                            </div>
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
