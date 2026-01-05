import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      id: 'level-1',
      title: 'Certified Junior Analyst (CJA)',
      level: 'Level 1',
      description:
        'The starting point for a career in cyber defense. Covers basic networking, OS security, and log analysis.',
      price: '$299',
      features: ['20h Video Training', 'Standard Exam Voucher', 'Digital Badge'],
    },
    {
      id: 'level-2',
      title: 'Certified Cyber Defender (CCD)',
      level: 'Level 2',
      description:
        'Intermediate certification for SOC analysts. Deep dive into incident response, forensics, and threat intelligence.',
      price: '$499',
      features: ['40h Video Training', 'Pro Exam Voucher', 'Cloud Labs Access'],
    },
    {
      id: 'advanced',
      title: 'Advanced Threat Hunter (ATH)',
      level: 'Advanced',
      description:
        'Elite certification for senior operators. Focus on APTs, advanced malware analysis, and threat hunting.',
      price: '$799',
      features: ['60h Video Training', 'Expert Exam Voucher', 'Dedicated Mentor'],
    },
  ];

  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-red-400 mb-4">Certification Programs</h1>
          <p className="text-lg text-red-300 max-w-2xl mx-auto">
            Validate your skills with our industry-recognized certifications.
            Designed by experts, tested by pros.
          </p>
        </div>

        {/* Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="relative flex flex-col rounded-xl overflow-hidden bg-black/60 border border-red-900 shadow-lg transition-all duration-300 hover:shadow-red-800/60 hover:scale-105"
            >
              {/* Glow overlay */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-red-800/20 via-red-900/30 to-red-800/20 blur-xl opacity-0 hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>

              {/* Top Content */}
              <div className="p-6 relative z-10 border-b border-red-900/50">
                <div className="inline-block px-3 py-1 bg-red-900/30 text-red-400 text-xs font-bold uppercase rounded-full mb-4">
                  {cert.level}
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-2">{cert.title}</h3>
                <p className="text-red-300 text-sm">{cert.description}</p>
              </div>

              {/* Features */}
              <div className="p-6 relative z-10 flex-grow">
                <ul className="space-y-3 mb-6">
                  {cert.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-red-300">
                      <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Button */}
              <div className="p-6 relative z-10 border-t border-red-900/50 mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-red-400">{cert.price}</span>
                  <span className="text-xs text-red-500 font-medium uppercase">One-time payment</span>
                </div>
                <Link
                  to={`/certification/${cert.id}`}
                  className="relative block w-full text-center py-3 rounded-lg font-bold text-white
                             bg-gradient-to-r from-black/60 via-red-950/90 to-black/60
                             hover:from-black/50 hover:via-red-800/80 hover:to-black/50
                             transition-all duration-300
                             shadow-lg hover:shadow-red-900/50
                             before:absolute before:-inset-1 before:blur-xl before:bg-gradient-to-r before:from-red-800/20 before:via-red-900/20 before:to-red-800/20 before:rounded-lg before:z-0 z-10"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
