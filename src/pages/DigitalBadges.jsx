import React from 'react';
import RedGeometricBackground from '../components/RedGeometricBackground';
import { Share2, Linkedin, CheckCircle, Shield, Hexagon } from 'lucide-react';

const DigitalBadges = () => {
    return (
        <div className="min-h-screen bg-black text-white font-['Inter'] relative overflow-hidden">

            {/* Background - kept simple and consistent */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <RedGeometricBackground
                    height={2}
                    jaggednessScale={1.5}
                    opacity={0.3}
                    planeSize={[80, 60]}
                    cameraPos={[0, 0, 15]}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">

                {/* Standard Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Digital Badges
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Verify and share your achievements with the world.
                    </p>
                </div>

                {/* Standard Clean Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">

                    {/* Badge 1 */}
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 hover:border-red-600/50 transition-colors duration-300">
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 bg-red-900/10 rounded-full flex items-center justify-center border border-red-500/20">
                                <Shield className="w-10 h-10 text-red-500" />
                            </div>
                        </div>
                        <div className="text-center md:text-left flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-2">Junior Analyst</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Awarded for demonstrating core competency in defensive security operations and incident handling.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-mono text-gray-500 mb-6">
                                <span>ID: BTL1</span>
                                <span>•</span>
                                <span>Score: 70%+</span>
                            </div>
                            <div className="flex gap-3 justify-center md:justify-start">
                                <button className="px-4 py-2 bg-white text-black text-sm font-bold rounded hover:bg-gray-200 transition-colors">
                                    Verify Badge
                                </button>
                                <button className="p-2 border border-white/10 rounded hover:bg-white/5 transition-colors text-gray-400 hover:text-white">
                                    <Linkedin className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Badge 2 */}
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 hover:border-blue-600/50 transition-colors duration-300">
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 bg-blue-900/10 rounded-full flex items-center justify-center border border-blue-500/20">
                                <Hexagon className="w-10 h-10 text-blue-500" />
                            </div>
                        </div>
                        <div className="text-center md:text-left flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-2">Cyber Defender</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Awarded for advanced proficiency in threat hunting, digital forensics, and blue team leadership.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-mono text-gray-500 mb-6">
                                <span>ID: BTL2</span>
                                <span>•</span>
                                <span>Score: 80%+</span>
                            </div>
                            <div className="flex gap-3 justify-center md:justify-start">
                                <button className="px-4 py-2 bg-white text-black text-sm font-bold rounded hover:bg-gray-200 transition-colors">
                                    Verify Badge
                                </button>
                                <button className="p-2 border border-white/10 rounded hover:bg-white/5 transition-colors text-gray-400 hover:text-white">
                                    <Linkedin className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Simple Integration Text */}
                <div className="text-center border-t border-white/10 pt-10">
                    <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">Trusted Integration Partners</p>
                    <div className="flex justify-center gap-8 opacity-60">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-gray-400" />
                            <span className="font-bold text-white">Credly</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Linkedin className="w-5 h-5 text-gray-400" />
                            <span className="font-bold text-white">LinkedIn</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DigitalBadges;
