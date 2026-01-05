import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-red-300 py-12 border-t border-red-900 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-red-700 p-1.5 rounded-lg">
                                <Shield className="h-5 w-5 text-white" />
                            </div>
                            <span className="font-bold text-lg text-red-400 tracking-tight">CSCA</span>
                        </div>
                        <p className="text-sm text-red-300">
                            Codevirus Security Certification Authority.
                            <br />
                            Empowering the next generation of cyber defenders.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-red-400 font-semibold mb-4 text-sm uppercase tracking-wider">Programs</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/certifications" className="hover:text-red-500 transition-colors">Certifications</Link></li>
                            <li><Link to="/corporate-training" className="hover:text-red-500 transition-colors">Corporate Training</Link></li>
                            <li><Link to="/programs" className="hover:text-red-500 transition-colors">All Courses</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-red-400 font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
                            <li><Link to="/resources" className="hover:text-red-500 transition-colors">Blog / Resources</Link></li>
                            <li><Link to="/pricing" className="hover:text-red-500 transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-red-400 font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-red-500 transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/faq" className="hover:text-red-500 transition-colors">FAQ</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-red-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-red-300">
                    <p>&copy; {new Date().getFullYear()} Codevirus Security Certification Authority. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
