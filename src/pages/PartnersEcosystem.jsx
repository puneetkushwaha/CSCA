import React, { useState } from "react";
import RedGeometricBackground from "../components/RedGeometricBackground";

const PartnersEcosystem = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabsData = {
    Overview: {
      title: (
        <>
          Harness the power of <span className="text-red-500">CSCA</span>
        </>
      ),
      text: "CSCA is the go-to organization for the global IT world, supporting 75 million pros with collaboration, education, certifications, and more.",
      highlights: [
        "Top-notch training and certifications for all skill levels to prep for tech jobs.",
        "Sales enablement to guide learners to career-boosting paths.",
        "Up-to-date tools for instructors to enhance curriculum.",
      ],
    },
    "Career Pathways": {
      title: (
        <>
          Build <span className="text-red-500">Career Pathways</span> with CSCA
        </>
      ),
      text: "CSCA's career pathways provide a comprehensive and structured approach to IT education, guiding students from foundational knowledge to advanced expertise.",
      highlights: [
        "Core, Infrastructure, Cybersecurity, Data & Analytics, and Professional tracks.",
        "Equips learners with skills for successful careers in tech.",
        "Ensures readiness for modern IT and cybersecurity demands.",
      ],
      image:
        "https://images.unsplash.com/photo-1603575448366-3a3b91c41b6e?auto=format&fit=crop&q=80&w=1000",
    },
    Solutions: {
      title: (
        <>
          Unlock the value of partnering with{" "}
          <span className="text-red-500">CSCA</span>
        </>
      ),
      text: "Discover how CSCA empowers instructors, improves learner success, and strengthens partnerships across industries.",
      highlights: [
        "Empower instructors with CertMaster tools.",
        "Value-driven authorized partner programs.",
        "Collaborate with government and enterprise sectors.",
      ],
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&q=80&w=1000",
    },
    Resources: {
      title: (
        <>
          Partner with <span className="text-red-500">CSCA</span> — Let’s Build
          Futures
        </>
      ),
      text: "Interested in becoming a CSCA Training Delivery Partner? Connect with our experienced team to learn how certifications and solutions can enhance your training portfolio.",
      highlights: [
        "Enhance your institutional portfolio with global recognition.",
        "Access exclusive resources for instructors and learners.",
        "Grow your impact in global IT and cyber education.",
      ],
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000",
    },
  };

  const current = tabsData[activeTab];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <RedGeometricBackground
          height={30}
          jaggednessScale={2.5}
          opacity={0.4}
          planeSize={[60, 40]}
          cameraPos={[0, 0, 15]}
          ashCount={200}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/80 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="text-sm font-mono text-red-500 mb-4 tracking-widest uppercase">
              Partners & Ecosystem
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
              CSCA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
                Partnership
              </span>
            </h1>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 border-b border-white/10 mb-16">
              {Object.keys(tabsData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden rounded-lg
                    ${
                      activeTab === tab
                        ? "bg-white/10 text-white"
                        : "text-gray-500 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Overview Section */}
          {activeTab === "Overview" ? (
            <>
              {/* Harness the Power Section */}
              <div
                key={activeTab}
                className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700"
              >
                {/* LEFT CONTENT */}
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {current.title}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                    {current.text}
                  </p>
                  <ul className="space-y-3 text-gray-400 mb-10">
                    {current.highlights.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-red-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT BOXES */}
                <div className="space-y-8">
                  <div className="bg-white/5 rounded-xl p-8 border border-white/10 shadow-lg">
                    <p className="text-[#ff4b4b] text-sm font-semibold mb-2 uppercase">
                      LET’S CONNECT
                    </p>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      Ready to take the next step?
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Let’s partner together to elevate your portfolio and
                      prepare your learners for roles in tech.
                    </p>
                    <button className="bg-[#d71f28] text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform">
                      Connect with us
                    </button>
                  </div>

                  <div className="bg-white/5 rounded-xl p-8 border border-white/10 shadow-lg">
                    <p className="text-[#ff4b4b] text-sm font-semibold mb-2 uppercase">
                      Offer Client Proctored Exams
                    </p>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      CompTIA Client Proctor Test Delivery System
                    </h3>
                    <p className="text-gray-400 mb-6">
                      The CompTIA Client Proctor Test Delivery System provides a
                      streamlined and convenient solution for delivering select
                      CompTIA certification exams.
                    </p>
                    <button className="bg-[#d71f28] text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>

              {/* Career Pathways Section */}
              <section className="bg-white/5 rounded-2xl border border-white/10 p-10 mt-12 mb-20">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="bg-gray-200/10 h-56 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                    Employee or student reviewing hardware
                  </div>
                  <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold mb-4 text-white">
                      Career Pathways
                    </h2>
                    <p className="text-gray-300 mb-4">
                      CompTIA's career pathways provide a comprehensive and
                      structured approach to IT education, guiding students from
                      foundational knowledge to advanced expertise.
                    </p>
                    <p className="text-gray-300 mb-6">
                      These pathways—Core, Infrastructure, Cybersecurity, Data &
                      Analytics, and Professional—equip learners with the skills
                      needed to excel in various technology fields, ensuring
                      they are well-prepared for successful and rewarding
                      careers in the tech industry.
                    </p>
                    <button className="bg-[#d71f28] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                      Learn more
                    </button>
                  </div>
                </div>
              </section>

              {/* Unlock the Value Section */}
              <section className="mt-16">
                <h2 className="text-4xl font-extrabold text-center mb-12">
                  Unlock the value of partnering with{" "}
                  <span className="text-red-500">CompTIA</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <div className="bg-white/5 rounded-xl border border-white/10 shadow p-6">
                    <img
                      src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&q=80&w=800"
                      alt="CertMaster"
                      className="w-full h-44 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2 text-white">
                      Empower Instructors, Improve Learner Success with CertMaster
                    </h3>
                    <span className="text-sm border rounded px-3 py-1 border-white/20 text-gray-300">
                      Partner
                    </span>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white/5 rounded-xl border border-white/10 shadow p-6">
                    <img
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
                      alt="Authorized Partners"
                      className="w-full h-44 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2 text-white">
                      The Value of CompTIA Authorized Partners
                    </h3>
                    <span className="text-sm border rounded px-3 py-1 border-white/20 text-gray-300">
                      Partner
                    </span>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white/5 rounded-xl border border-white/10 shadow p-6">
                    <img
                      src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
                      alt="DoD"
                      className="w-full h-44 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2 text-white">
                      What 8140 Means for Companies Working with DoD
                    </h3>
                    <div className="flex gap-2 mt-3">
                      <span className="text-sm border rounded px-3 py-1 border-white/20 text-gray-300">
                        Cyber
                      </span>
                      <span className="text-sm border rounded px-3 py-1 border-white/20 text-gray-300">
                        Government
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            // 🧩 OTHER TABS
            <div
              key={activeTab}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {current.title}
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  {current.text}
                </p>
                <ul className="space-y-3 text-gray-400 mb-10">
                  {current.highlights.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-red-500 mt-1">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMAGE */}
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-red-600/20 mix-blend-overlay z-10"></div>
                <img
                  src={current.image}
                  alt={activeTab}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div
            className="relative py-20 text-center text-white rounded-2xl overflow-hidden mt-20"
            style={{
              background:
                "linear-gradient(90deg, #d71f28 0%, #9b1f4d 50%, #6a2a9b 100%)",
            }}
          >
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-4xl font-bold mb-4">
                Partner with CSCA — Let’s Build IT Futures Together
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Interested in becoming a CSCA Training Delivery Partner? Connect
                with our experienced team to learn how CSCA certifications and
                solutions can enhance your training portfolio and help your
                learners succeed in IT careers.
              </p>
              <button className="bg-white text-[#9b1f4d] font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
                Contact Us
              </button>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-24 bg-gray-100/10 border-t border-white/10 rounded-lg p-10 text-gray-300">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
              <div>
                <h2 className="text-2xl font-bold text-red-500 mb-4">CSCA</h2>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    f
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    in
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    yt
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10 text-gray-400">
                <ul className="space-y-2">
                  <li>Shop</li>
                  <li>About Us</li>
                  <li>Careers at CSCA</li>
                  <li>Newsroom</li>
                </ul>
                <ul className="space-y-2">
                  <li>Help</li>
                  <li>Contact Us</li>
                  <li>Return Policy</li>
                  <li>Legal & Privacy</li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PartnersEcosystem;
