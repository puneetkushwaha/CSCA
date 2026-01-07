import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import RedGeometricBackground from '../components/RedGeometricBackground';

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={toggle}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group transition-all duration-300"
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-red-500' : 'text-white group-hover:text-red-400'}`}>
          {question}
        </span>
        <div className={`mt-1 p-1 rounded-full border transition-all duration-300 ${isOpen ? 'border-red-500 bg-red-500/10 text-red-500 rotate-180' : 'border-white/20 text-white/50 group-hover:border-red-500/50 group-hover:text-red-400'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
      >
        <div className="overflow-hidden">
          <div className="text-gray-300 leading-relaxed text-sm md:text-base space-y-4 pr-8">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is CSCA?",
      answer: "Codevirus Security Certification Authority (CSCA) is an independent cybersecurity certification authority that provides skill-based, practical, and globally applicable certifications for students and professionals."
    },
    {
      question: "Are CSCA certifications global or international?",
      answer: (
        <>
          <p className="font-bold text-white mb-2">Yes.</p>
          <p>CSCA certifications are globally valid skill certifications designed to be:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400 mt-2">
            <li>Accepted for international job applications</li>
            <li>Useful for global freelancing platforms</li>
            <li>Relevant for remote cybersecurity roles</li>
            <li>Aligned with global cybersecurity job roles and frameworks</li>
          </ul>
          <p className="mt-2">CSCA focuses on skills and practical validation, which is globally valued across industries.</p>
        </>
      )
    },
    {
      question: "Who can apply for CSCA certifications?",
      answer: (
        <>
          <p>CSCA certifications are suitable for:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400 mt-2">
            <li>Students (BCA, BTech, MCA, Diploma, IT & CS background)</li>
            <li>Fresh graduates</li>
            <li>Working professionals</li>
            <li>Career switchers</li>
            <li>Freelancers and security enthusiasts</li>
          </ul>
          <p className="mt-2 text-red-400 font-medium">No prior certification is required for Level-1.</p>
        </>
      )
    },
    {
      question: "What certification levels does CSCA offer?",
      answer: (
        <>
          <p>CSCA follows a two-level international certification framework:</p>
          <div className="mt-4 space-y-4">
            <div className="bg-white/5 p-4 rounded-lg border-l-2 border-red-500">
              <h4 className="text-white font-bold mb-1">Level 1 – Foundation Certifications (Global Entry-Level)</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-400 text-sm">
                <li>Beginner-friendly</li>
                <li>Core cybersecurity concepts + skills</li>
                <li>Ideal for global profile building and LinkedIn visibility</li>
              </ul>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border-l-2 border-red-700">
              <h4 className="text-white font-bold mb-1">Level 2 – Professional Certifications (Advanced & Global)</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-400 text-sm">
                <li>Domain-specific and job-role oriented</li>
                <li>Practical exams, projects, and case studies</li>
                <li>Designed for corporate, consulting, and international roles</li>
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      question: "Are CSCA certifications free?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="text-white font-semibold">Level-1 certifications</span> may be available through limited global promotional or academic vouchers.</li>
          <li><span className="text-white font-semibold">Level-2 certifications</span> are paid, premium, and professionally evaluated.</li>
        </ul>
      )
    },
    {
      question: "Are CSCA certificates internationally recognized?",
      answer: (
        <>
          <p>CSCA certificates are:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400 mt-2">
            <li>Skill-focused (not country-restricted)</li>
            <li>Designed by active cybersecurity professionals</li>
            <li>Valid for global resumes, LinkedIn, GitHub, and portfolios</li>
            <li>Suitable for international companies, startups, and remote teams</li>
          </ul>
          <p className="mt-2">They demonstrate practical competency, which is globally valued more than theory-only certifications.</p>
        </>
      )
    },
    {
      question: "Is training mandatory to appear for CSCA exams?",
      answer: (
        <>
          <p className="font-bold text-white mb-2">No.</p>
          <p>CSCA follows an open and global certification model:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400 mt-2">
            <li>You can prepare through self-study or any institute worldwide</li>
            <li>Certification depends only on passing the CSCA assessment</li>
          </ul>
        </>
      )
    },
    {
      question: "How are CSCA exams conducted?",
      answer: (
        <>
          <p>Depending on the certification:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400 mt-2">
            <li>Online proctored exams</li>
            <li>MCQs + scenario-based questions</li>
            <li>Practical labs / assignments (Level-2)</li>
          </ul>
          <p className="mt-2 text-white">All exams are conducted via the official CSCA online examination system, accessible globally.</p>
        </>
      )
    },
    {
      question: "Is global certificate verification available?",
      answer: (
        <>
          <p className="font-bold text-white mb-2">Yes.</p>
          <p>Each CSCA certificate includes:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400 mt-2">
            <li>A unique global Certificate ID</li>
            <li>Online verification portal</li>
            <li>Candidate and certification details for international verification</li>
          </ul>
          <p className="mt-2">Employers worldwide can verify authenticity instantly.</p>
        </>
      )
    },
    {
      question: "Do CSCA certificates expire?",
      answer: (
        <ul className="space-y-2">
          <li className="flex items-center gap-2"><span className="text-red-500 font-bold">Level-1 certifications:</span> Lifetime validity</li>
          <li className="flex items-center gap-2"><span className="text-red-500 font-bold">Level-2 certifications:</span> Renewal may apply to keep skills aligned with global security updates</li>
        </ul>
      )
    },
    {
      question: "Can international institutes or companies partner with CSCA?",
      answer: (
        <>
          <p className="font-bold text-white mb-2">Yes.</p>
          <p>CSCA supports partnerships with:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400 mt-2">
            <li>Indian and international training institutes</li>
            <li>Corporates and startups</li>
            <li>Government, PSU, and global organizations</li>
          </ul>
          <p className="mt-2">All partnerships follow quality and compliance standards.</p>
        </>
      )
    },
    {
      question: "Does CSCA provide global job placement?",
      answer: (
        <>
          <p>CSCA is a certification authority, <span className="text-red-400">not a placement agency.</span></p>
          <p className="mt-2">However, CSCA certifications help candidates:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400 mt-2">
            <li>Improve global job eligibility</li>
            <li>Apply for remote and international roles</li>
            <li>Strengthen freelancing and consulting profiles</li>
          </ul>
        </>
      )
    },
    {
      question: "Why choose CSCA as a global certification?",
      answer: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {['Globally applicable skill validation', 'Practical and industry-driven exams', 'International verification system', 'Open learning model', 'Designed for modern cybersecurity careers'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white bg-white/5 p-2 rounded border border-white/10">
              <span className="text-red-500 font-bold">✔</span> {item}
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-red-500/30 overflow-hidden font-['Inter']">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <RedGeometricBackground
          height={40}
          jaggednessScale={2}
          opacity={0.3}
          planeSize={[60, 40]}
          cameraPos={[0, 0, 15]}
          ashCount={150}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center justify-center p-3 bg-red-600/10 rounded-2xl mb-6 ring-1 ring-red-500/20 backdrop-blur-sm">
            <HelpCircle className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Questions</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about CSCA certifications, global validity, and examination process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-10 shadow-[0_0_50px_rgba(220,38,38,0.1)] backdrop-blur-md">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>

        {/* Contact Strip */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">Still have questions?</p>
          <a href="/contact" className="inline-block mt-4 px-8 py-3 bg-white text-black font-black uppercase tracking-wider text-xs rounded-full hover:bg-red-600 hover:text-white transition-all duration-300">
            Contact Support
          </a>
        </div>

      </div>
    </div>
  );
};

export default FAQ;
