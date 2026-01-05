import React from 'react';
import Hero from '../components/Hero';
import { Shield, Target, Users, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Hero />

      {/* Trusted By Section */}
      <section className="py-12 border-b border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-white/40 uppercase tracking-[0.3em] mb-10">
            Trusted by professionals from
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Mock Logos using Styled Text/Icons */}
            <div className="text-xl md:text-2xl font-black text-white/80 tracking-tighter flex items-center gap-2">
              <Shield className="h-6 w-6 text-red-500" />
              <span>NETSEC</span>
            </div>
            <div className="text-xl md:text-2xl font-black text-white/80 tracking-tighter flex items-center gap-2">
              <Target className="h-6 w-6 text-red-500" />
              <span>CYBERCORE</span>
            </div>
            <div className="text-xl md:text-2xl font-black text-white/80 tracking-tighter flex items-center gap-2">
              <Award className="h-6 w-6 text-red-500" />
              <span>VANGUARD</span>
            </div>
            <div className="text-xl md:text-2xl font-black text-white/80 tracking-tighter flex items-center gap-2">
              <Users className="h-6 w-6 text-red-500" />
              <span>DEFENDX</span>
            </div>
            <div className="text-xl md:text-2xl font-black text-white/80 tracking-tighter flex items-center gap-2">
              <Shield className="h-6 w-6 text-red-500" />
              <span>IRONCLAD</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">
              Why Choose CSCA?
            </h2>
            <p className="text-red-300 max-w-2xl mx-auto">
              We provide more than just theory. Our certification programs are designed to build real-world combat readiness for cyber defense roles.
            </p>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-red-400" />,
                title: 'Role-Based Training',
                desc: 'Curriculum designed around specific job roles like SOC Analyst, Penetration Tester, and Incident Responder.'
              },
              {
                icon: <Shield className="h-8 w-8 text-red-400" />,
                title: 'Red Team Focus',
                desc: 'Specialized intensive training for defensive security operations, threat hunting, and digital forensics.'
              },
              {
                icon: <Users className="h-8 w-8 text-red-400" />,
                title: 'Community Driven',
                desc: 'Join a global network of security professionals. Access exclusive resources, webinars, and mentorship.'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="relative p-8 rounded-xl cursor-pointer 
                     bg-gradient-to-r from-black/70 via-red-950/70 to-black/70
                     border border-red-900
                     shadow-lg hover:shadow-red-900/50
                     transform transition-all duration-300 hover:scale-105
                     overflow-hidden"
              >
                {/* Glowing overlay */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-800/30 via-red-900/50 to-red-800/30
                          opacity-0 hover:opacity-70 blur-xl transition-opacity duration-300 rounded-xl pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6
                            bg-red-900/30 hover:bg-red-800/50 transition-colors duration-300 shadow-md hover:shadow-red-900/50">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 hover:text-red-400">
                    {feature.title}
                  </h3>
                  <p className="text-red-300/80 leading-relaxed transition-colors duration-300 hover:text-red-400">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Featured Certifications */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-red-400">
                Featured Certifications
              </h2>
              <p className="text-red-300">
                Start your journey to becoming a certified expert.
              </p>
            </div>
            <Link
              to="/certifications"
              className="hidden md:inline-flex items-center text-red-400 font-semibold hover:text-red-500 mt-4 md:mt-0"
            >
              View All <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                level: 'Level 1',
                title: 'Certified Junior Analyst',
                desc: 'Entry-level certification for aspiring SOC analysts.'
              },
              {
                level: 'Level 2',
                title: 'Certified Cyber Defender',
                desc: 'Intermediate certification focusing on incident response.'
              },
              {
                level: 'Advanced',
                title: 'Advanced Threat Hunter',
                desc: 'Elite certification for senior security professionals.'
              }
            ].map((cert, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-xl cursor-pointer
                     bg-gradient-to-r from-black/60 via-red-950/80 to-black/60
                     border border-red-900
                     shadow-lg hover:shadow-red-900/50
                     transform transition-all duration-300 hover:scale-105
                     overflow-hidden"
              >
                {/* Neon Glow Overlay */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-800/30 via-red-900/50 to-red-800/30
                          opacity-0 hover:opacity-70 blur-xl transition-opacity duration-300 rounded-xl pointer-events-none"></div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6
                            bg-red-900/20 hover:bg-red-800/50 transition-colors duration-300 shadow-md hover:shadow-red-900/50">
                    <span className="text-red-400 font-bold">{idx + 1}</span>
                  </div>
                  <div className="text-xs font-bold text-red-300 uppercase tracking-wider mb-2">{cert.level}</div>
                  <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 hover:text-red-400">{cert.title}</h3>
                  <p className="text-red-300/80 leading-relaxed transition-colors duration-300 hover:text-red-400 mb-6">
                    {cert.desc}
                  </p>
                  <div className="flex items-center justify-between w-full mt-auto">
                    <span className="text-sm font-semibold text-red-400">Exam + Labs</span>
                    <Link
                      to={`/certification/${idx + 1}`}
                      className="text-red-400 font-medium text-sm hover:text-red-500 hover:underline transition-colors duration-300"
                    >
                      Details &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View Link */}
          <div className="mt-8 md:hidden text-center">
            <Link
              to="/certifications"
              className="text-red-400 font-semibold hover:text-red-500"
            >
              View All Certifications &rarr;
            </Link>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">
            Ready to advance your career?
          </h2>
          <p className="text-red-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have trusted CSCA for their cybersecurity training and certification.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Primary Button */}
            <Link
              to="/register"
              className="relative px-8 py-3 rounded-lg font-bold text-white 
                   bg-gradient-to-r from-black/60 via-red-950/90 to-black/60
                   hover:from-black/50 hover:via-red-800/90 hover:to-black/50
                   shadow-lg hover:shadow-red-900/50
                   transition-all duration-300
                   before:absolute before:-inset-1 before:blur-xl before:bg-gradient-to-r before:from-red-800/30 before:via-red-900/30 before:to-red-800/30 before:rounded-lg before:z-0
                   z-10"
            >
              Get Started Now
            </Link>

            {/* Secondary Button */}
            <Link
              to="/corporate-training"
              className="relative px-8 py-3 rounded-lg font-bold text-red-300
                   bg-gradient-to-r from-black/50 via-red-950/70 to-black/50
                   border border-red-700
                   hover:bg-gradient-to-r hover:from-black/50 hover:via-red-800/80 hover:to-black/50
                   hover:text-white hover:shadow-lg hover:shadow-red-900/40
                   transition-all duration-300
                   before:absolute before:-inset-1 before:blur-xl before:bg-gradient-to-r before:from-red-800/20 before:via-red-900/20 before:to-red-800/20 before:rounded-lg before:z-0
                   z-10"
            >
              For Teams
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
