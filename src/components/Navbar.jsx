import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
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
        { name: 'Home', path: '/' },
        { name: 'Programs', path: '/programs' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Corporate Training', path: '/corporate-training' },
        { name: 'Resources', path: '/resources' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-black/20 backdrop-blur-xl border-b border-white/5 shadow-2xl'
                : 'bg-black border-b border-red-900/50'
            } font-sans`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/'}>
                        <div className="bg-red-700 p-2 rounded-lg">
                            <Shield className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl tracking-tight text-red-400 leading-none">CSCA</span>
                            <span className="text-[10px] uppercase font-semibold text-red-500 tracking-wider">Codevirus Security</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 lg:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-200 ${isActive(link.path)
                                    ? 'text-red-500'
                                    : 'text-red-300 hover:text-red-500'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Right Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login" className="text-sm font-semibold text-red-300 hover:text-red-500 px-3 py-2">
                            Login
                        </Link>
                        <Link to="/certifications" className="bg-red-700 hover:bg-red-800 text-white text-sm font-bold py-2.5 px-5 rounded-md transition-all shadow-md hover:shadow-lg">
                            Get Certified
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-red-300 hover:text-red-500 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/40 backdrop-blur-2xl border-b border-white/5 shadow-2xl">
                    <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                    ? 'bg-red-950 text-red-500'
                                    : 'text-red-300 hover:bg-red-950 hover:text-red-500'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-red-800 mt-2 flex flex-col gap-3">
                            <Link
                                to="/login"
                                onClick={() => setIsOpen(false)}
                                className="block text-center w-full px-4 py-2 border border-red-700 rounded-md text-red-300 font-semibold hover:bg-red-950 hover:text-red-500"
                            >
                                Login
                            </Link>
                            <Link
                                to="/certifications"
                                onClick={() => setIsOpen(false)}
                                className="block text-center w-full px-4 py-2 bg-red-700 rounded-md text-white font-bold hover:bg-red-800"
                            >
                                Get Certified
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
