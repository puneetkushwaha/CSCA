import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const AnnouncementBar = () => {
    return (
        <a
            href="/certifications"
            className="block bg-black border-b border-white/10 py-2.5 transition-colors duration-300 group relative z-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-2 text-center">
                    <p className="text-xs sm:text-sm font-medium text-white group-hover:text-red-500 transition-colors duration-300 flex items-center gap-2">
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-sm bg-white text-black text-[10px] font-bold uppercase tracking-tight group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                            New
                        </span>
                        New certification alert! Certified Junior Detection Engineer has arrived. Find out more.
                        <ArrowRight className="h-3 w-3 inline-block" />
                    </p>
                </div>
            </div>
        </a>
    );
};

export default AnnouncementBar;
