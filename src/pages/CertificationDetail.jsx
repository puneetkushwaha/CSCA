import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Clock, ShieldCheck, CheckCircle } from 'lucide-react';

const CertificationDetail = () => {
    const { id } = useParams();

    // Mock Data Dictionary - In real app, fetch from API
    const certDetails = {
        'level-1': { title: 'Certified Junior Analyst', level: 'Level 1', price: '$299' },
        'level-2': { title: 'Certified Cyber Defender', level: 'Level 2', price: '$499' },
        'advanced': { title: 'Advanced Threat Hunter', level: 'Level 3', price: '$799' },
        'default': { title: 'Certification Program', level: 'Professional', price: '$399' }
    };

    const cert = certDetails[id] || certDetails['default'];

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-slate-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-block px-3 py-1 bg-blue-900 border border-blue-700 text-blue-300 text-xs font-bold uppercase rounded-full mb-6">
                        {cert.level} Certification
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{cert.title}</h1>
                    <div className="flex flex-wrap gap-6 text-slate-300">
                        <div className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-blue-400" />
                            <span>40 Hours Content</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-blue-400" />
                            <span>12 Modules</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5 text-blue-400" />
                            <span>Practical Exam</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Info */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">About This Certification</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            This certification is designed to validate your skills in real-world scenarios.
                            Unlike multiple-choice exams, our assessment requires you to solve practical challenges
                            in a simulated environment. You will demonstrate your ability to identify, analyze,
                            and mitigate security threats effectively.
                        </p>

                        <h3 className="text-xl font-bold text-slate-900 mb-4">What You Will Learn</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            {['Network Security Fundamentals', 'Incident Response Procedures', 'Log Analysis & SIEM', 'Malware Analysis Basics', 'Threat Intelligence', 'Reporting & Documentation'].map((item, i) => (
                                <div key={i} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                    <span className="text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-4">Exam Information</h3>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex justify-between">
                                    <span className="font-medium">Format:</span>
                                    <span>24-Hour Practical Exam</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="font-medium">Passing Score:</span>
                                    <span>70%</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="font-medium">Retakes:</span>
                                    <span>1 Free Retake Included</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-6 sticky top-24">
                            <div className="mb-6">
                                <span className="text-3xl font-bold text-slate-900">{cert.price}</span>
                                <span className="text-slate-500 text-sm ml-2">USD</span>
                            </div>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg mb-4 transition-colors">
                                Enroll Now
                            </button>
                            <button className="w-full bg-white border border-slate-300 text-slate-700 font-bold py-3 rounded-lg hover:bg-slate-50 transition-colors">
                                Download Syllabus
                            </button>

                            <div className="mt-6 pt-6 border-t border-slate-100">
                                <h4 className="font-semibold text-slate-900 mb-3">Includes:</h4>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" /> Lifetime Access</li>
                                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" /> Lab Environment</li>
                                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-blue-500 mr-2" /> Community Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CertificationDetail;
