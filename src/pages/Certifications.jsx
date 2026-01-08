import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, Cpu, Lock, Database, Terminal, Server, BarChart, ChevronRight, Cloud, ClipboardCheck, Zap, Briefcase, Laptop, Skull, FileSpreadsheet, FileText, Monitor, ClipboardList, ShieldCheck, Award, Users, Target, BookOpen } from 'lucide-react';
import RedGeometricBackground from '../components/RedGeometricBackground';

const Certifications = () => {
    const [activeCategory, setActiveCategory] = useState('Overview');

    const categories = [
        'Overview', 'All', 'AI', 'Cloud', 'Cyber', 'Data', 'Digital Skills', 'Network', 'Tech Support'
    ];

    const certifications = [
        {
            id: 'security-plus',
            title: 'Security+',
            code: 'SEC+',
            level: 'Security Analyst',
            description: "CompTIA Security+ is the most trusted entry into cybersecurity, proving you have real-world, hands-on skills to protect networks, apps, and data. It’s vendor-neutral, globally recognized, and built to help you launch and grow a lasting security career.",
            category: 'Cyber',
            icon: <Shield className="w-8 h-8 text-white" />,
            color: 'from-red-600 to-red-900',
            popular: true
        },
        {
            id: 'network-plus',
            title: 'Network+',
            code: 'NET+',
            level: 'Core',
            description: "CompTIA Network+ gives you the confidence to connect, configure, and secure networks of any size. Recognized worldwide, it opens doors to roles in support, operations, and administration, helping you build a flexible tech career across technologies and platforms.",
            category: 'Network',
            icon: <Globe className="w-8 h-8 text-white" />,
            color: 'from-blue-600 to-blue-900',
            popular: true
        },
        {
            id: 'a-plus',
            title: 'a+ Cyber',
            code: 'A+',
            level: 'Security Analyst',
            description: "CompTIA A+ is the starting point for your IT career. Covering hardware, software, networking, troubleshooting, and basic security skills required for cybersecurity roles.",
            category: 'Cyber',
            icon: <Cpu className="w-8 h-8 text-white" />,
            color: 'from-orange-600 to-orange-900'
        },
        {
            id: 'cysa',
            title: 'CySA+',
            code: 'CySA+',
            level: 'Security Analyst',
            description: "CompTIA CySA+ proves you can detect, analyze, and stop threats in real time. From vulnerability management to incident response, it builds the skills SOCs rely on daily, making you the bridge between security tools, data, and actionable defense.",
            category: 'Cyber',
            icon: <Lock className="w-8 h-8 text-white" />,
            color: 'from-purple-600 to-purple-900'
        },
        {
            id: 'linux-plus',
            title: 'Linux+',
            code: 'LIN+',
            level: 'Intermediate',
            description: "CompTIA Linux+ proves you can manage, secure, and troubleshoot Linux systems across cloud and hybrid environments. With skills in automation, containers, and orchestration, Linux+ prepares you for in-demand roles that keep critical business platforms running.",
            category: 'Cloud',
            icon: <Terminal className="w-8 h-8 text-white" />,
            color: 'from-yellow-600 to-yellow-900'
        },
        {
            id: 'data-plus',
            title: 'Data+',
            code: 'DATA+',
            level: 'Core',
            description: "CompTIA Data+ shows employers you can translate data into decisions. By proving your ability to analyze, visualize, and communicate insights, Data+ positions you for early-career analytics roles where turning information into action drives real business impact.",
            category: 'Data',
            icon: <BarChart className="w-8 h-8 text-white" />,
            color: 'from-green-600 to-green-900'
        },
        {
            id: 'tech-plus',
            title: 'Tech+',
            code: 'TECH+',
            level: 'Entry',
            description: "CompTIA Tech+ is the starting point for exploring technology. You’ll build foundational skills in computing, networks, software, data, and security, helping you discover your interests before pursuing a specialized, job-role-based certification.",
            category: 'Digital Skills',
            icon: <Database className="w-8 h-8 text-white" />,
            color: 'from-teal-600 to-teal-900'
        },
        {
            id: 'pentest-plus',
            title: 'PenTest+',
            code: 'PEN+',
            level: 'Penetration & Vulnerability Testers & Analyst',
            description: "CompTIA PenTest+ proves you can think like an attacker to strengthen defenses. Covering cloud, web apps, APIs, and IoT, it validates hands-on skills across the full penetration testing process, preparing you to uncover risks and deliver actionable security insights.",
            category: 'Cyber',
            icon: <Server className="w-8 h-8 text-white" />,
            color: 'from-red-700 to-red-950'
        },
        {
            id: 'cloud-plus',
            title: 'Cloud+',
            code: 'CLD+',
            level: 'Intermediate',
            description: "CompTIA Cloud+ proves you can design, secure, and optimize multi-cloud environments. Covering architecture, deployment, DevOps, and troubleshooting, it sets you apart as the certification built for professionals managing the complexity of modern cloud operations.",
            category: 'Cloud',
            icon: <Cloud className="w-8 h-8 text-white" />,
            color: 'from-sky-600 to-sky-900'
        },
        {
            id: 'project-plus',
            title: 'Project+',
            code: 'PRO+',
            level: 'Pro',
            description: "CompTIA Project+ proves you can manage IT projects from start to finish and deliver results. It validates skills in team leadership, scheduling, documentation, and governance, fully preparing you to solve challenges and succeed in today’s fast-paced technology environments.",
            category: 'Digital Skills',
            icon: <ClipboardCheck className="w-8 h-8 text-white" />,
            color: 'from-indigo-600 to-indigo-900'
        },
        {
            id: 'ai-essentials',
            title: 'AI Essentials',
            code: 'AIE',
            level: 'Career Builder',
            description: "Master the fundamentals of Artificial Intelligence. Learn how AI works, its impact on business, and how to use AI tools effectively to boost productivity and innovation.",
            category: 'AI',
            icon: <Cpu className="w-8 h-8 text-white" />,
            color: 'from-blue-500 to-indigo-600'
        },
        {
            id: 'ai-marketing',
            title: 'AI for Marketing Essentials',
            code: 'AIM',
            level: 'Career Builder',
            description: "Leverage AI to revolutionize your marketing strategies. Learn to generate content, analyze customer data, and optimize campaigns using cutting-edge AI tools.",
            category: 'AI',
            icon: <BarChart className="w-8 h-8 text-white" />,
            color: 'from-pink-500 to-rose-600'
        },
        {
            id: 'ai-sales',
            title: 'AI for Sales Essentials',
            code: 'AIS',
            level: 'Career Builder',
            description: "Transform your sales process with AI. specific techniques for lead scoring, personalized outreach, and automated follow-ups that drive revenue growth.",
            category: 'AI',
            icon: <Target className="w-8 h-8 text-white" />,
            color: 'from-green-500 to-emerald-600'
        },
        {
            id: 'ai-prompting',
            title: 'AI Prompting Essentials',
            code: 'AIP',
            level: 'Career Builder',
            description: "Become a power user of Generative AI. Learn the art and science of prompt engineering to get the best results from tools like ChatGPT, Claude, and Midjourney.",
            category: 'AI',
            icon: <Terminal className="w-8 h-8 text-white" />,
            color: 'from-purple-500 to-violet-600'
        },
        {
            id: 'autoops-plus',
            title: 'AutoOps+',
            code: 'AOP+',
            level: 'Intermediate',
            description: "Automate IT operations with confidence. Validate your skills in scripting, infrastructure as code, and automated remediation for modern systems.",
            category: 'Cloud',
            icon: <Zap className="w-8 h-8 text-white" />,
            color: 'from-yellow-500 to-orange-600'
        },
        {
            id: 'business-essentials',
            title: 'Business Essentials',
            code: 'BUS',
            level: 'Entry',
            description: "Understand the language of business. Gain foundational knowledge in finance, marketing, operations, and management to succeed in any corporate environment.",
            category: 'Digital Skills',
            icon: <Briefcase className="w-8 h-8 text-white" />,
            color: 'from-slate-500 to-slate-700'
        },
        {
            id: 'cisco-networking-pro',
            title: 'Cisco Networking Pro',
            code: 'CNP',
            level: 'Pro',
            description: "Advanced networking skills for Cisco environments. Configure, troubleshoot, and manage enterprise-grade Cisco network infrastructure.",
            category: 'Network',
            icon: <Globe className="w-8 h-8 text-white" />,
            color: 'from-blue-600 to-cyan-600'
        },
        {
            id: 'cloud-essentials',
            title: 'Cloud Essentials',
            code: 'CLDE',
            level: 'Entry',
            description: "Start your cloud journey here. Understand cloud concepts, business value, and security basics perfect for non-technical professionals and beginners.",
            category: 'Cloud',
            icon: <Cloud className="w-8 h-8 text-white" />,
            color: 'from-sky-400 to-blue-500'
        },
        {
            id: 'cloudnetx',
            title: 'CloudNetX',
            code: 'CNX',
            level: 'Expert',
            description: "The intersection of Cloud and Networking. Master the design and implementation of complex cloud network architectures across multi-cloud environments.",
            category: 'Cloud',
            icon: <Server className="w-8 h-8 text-white" />,
            color: 'from-indigo-600 to-purple-700'
        },
        {
            id: 'cyberdefense-pro',
            title: 'CyberDefense Pro',
            code: 'CDP',
            level: 'Security Analyst',
            description: "Advanced defensive tactical skills. Go beyond theory with hands-on labs in blue teaming, SOC operations, and active defense strategies.",
            category: 'Cyber',
            icon: <Shield className="w-8 h-8 text-white" />,
            color: 'from-red-600 to-red-900'
        },
        {
            id: 'data-analysis-essentials',
            title: 'Data Analysis',
            code: 'DAE',
            level: 'Entry',
            description: "Essentials for making sense of data. Learn spreadsheet basics, data cleaning, and simple visualization techniques to support decision making.",
            category: 'Data',
            icon: <BarChart className="w-8 h-8 text-white" />,
            color: 'from-green-500 to-teal-600'
        },
        {
            id: 'datasys-plus',
            title: 'DataSys+',
            code: 'DS+',
            level: 'Intermediate',
            description: "Database administration for the modern era. Validate skills in database deployment, management, security, and troubleshooting.",
            category: 'Data',
            icon: <Database className="w-8 h-8 text-white" />,
            color: 'from-teal-600 to-cyan-700'
        },
        {
            id: 'datax',
            title: 'DataX',
            code: 'DX',
            level: 'Expert',
            description: "Advanced Data Science certification. Validate expertise in unified data management, advanced analytics, and machine learning pipeline integration.",
            category: 'Data',
            icon: <Cpu className="w-8 h-8 text-white" />,
            color: 'from-violet-600 to-fuchsia-700'
        },
        {
            id: 'digital-literacy-pro',
            title: 'Digital Literacy Pro',
            code: 'DLP',
            level: 'Entry',
            description: "Essential computer skills for the modern workplace. Cover OS basics, internet safety, and productivity tools to ensure workplace readiness.",
            category: 'Digital Skills',
            icon: <Laptop className="w-8 h-8 text-white" />,
            color: 'from-gray-500 to-gray-700'
        },
        {
            id: 'ethical-hacker-pro',
            title: 'Ethical Hacker Pro',
            code: 'EHP',
            level: 'Cybersecurity Manager',
            description: "Practical offensive security skills. Master the tools and techniques used by white hat hackers to test and secure systems.",
            category: 'Cyber',
            icon: <Skull className="w-8 h-8 text-white" />,
            color: 'from-red-700 to-orange-800'
        },
        {
            id: 'hybrid-server-pro-1',
            title: 'Hybrid Server Pro I',
            code: 'HSP1',
            level: 'Pro',
            description: "Core server management skills. Deployment, storage, and compute management in hybrid Windows Server environments.",
            category: 'Network',
            icon: <Server className="w-8 h-8 text-white" />,
            color: 'from-blue-700 to-indigo-800'
        },
        {
            id: 'hybrid-server-pro-2',
            title: 'Hybrid Server Pro II',
            code: 'HSP2',
            level: 'Adv',
            description: "Advanced hybrid infrastructure. High availability, disaster recovery, and advanced monitoring for enterprise server estates.",
            category: 'Network',
            icon: <Server className="w-8 h-8 text-white" />,
            color: 'from-indigo-800 to-violet-900'
        },
        {
            id: 'it-fundamentals-pro',
            title: 'IT Fundamentals Pro',
            code: 'ITFP',
            level: 'Entry',
            description: "Comprehensive introduction to IT. A robust starting point covering hardware, software, networking, and security concepts in depth.",
            category: 'Tech Support',
            icon: <Cpu className="w-8 h-8 text-white" />,
            color: 'from-cyan-500 to-blue-600'
        },
        {
            id: 'linux-pro',
            title: 'Linux Pro',
            code: 'LXP',
            level: 'Pro',
            description: "Advanced Linux system administration. Deep dive into automation, kernel tuning, and secure system configuration.",
            category: 'Cloud',
            icon: <Terminal className="w-8 h-8 text-white" />,
            color: 'from-yellow-600 to-amber-700'
        },
        {
            id: 'excel-pro',
            title: 'Microsoft Excel Pro',
            code: 'MSP-E',
            level: 'Skill',
            description: "Master spreadsheets. Advanced formulas, pivot tables, and data modeling for power users and analysts.",
            category: 'Digital Skills',
            icon: <FileSpreadsheet className="w-8 h-8 text-white" />,
            color: 'from-green-600 to-emerald-700'
        },
        {
            id: 'word-pro',
            title: 'Microsoft Word Pro',
            code: 'MSP-W',
            level: 'Skill',
            description: "Professional document creation. Advanced formatting, references, and collaboration tools for business reports.",
            category: 'Digital Skills',
            icon: <FileText className="w-8 h-8 text-white" />,
            color: 'from-blue-600 to-indigo-700'
        },
        {
            id: 'office-pro',
            title: 'Microsoft Office Pro',
            code: 'MSP-O',
            level: 'Skill',
            description: "Complete productivity suite mastery. Integrate Word, Excel, PowerPoint, and Outlook for seamless workflow.",
            category: 'Digital Skills',
            icon: <Briefcase className="w-8 h-8 text-white" />,
            color: 'from-orange-500 to-red-600'
        },
        {
            id: 'pc-pro',
            title: 'PC Pro',
            code: 'PCP',
            level: 'Entry',
            description: "Hardware and OS internals. Build, configure, and troubleshoot personal computers and workstations.",
            category: 'Tech Support',
            icon: <Monitor className="w-8 h-8 text-white" />,
            color: 'from-slate-600 to-zinc-700'
        },
        {
            id: 'project-management-essentials',
            title: 'PM Essentials',
            code: 'PME',
            level: 'Entry',
            description: "Foundational project management. Methodologies, lifecycles, and basic tools for organizing work.",
            category: 'Digital Skills',
            icon: <ClipboardList className="w-8 h-8 text-white" />,
            color: 'from-indigo-500 to-blue-600'
        },
        {
            id: 'secai-plus',
            title: 'SecAI+ (Pre-Order Now)',
            code: 'SAI+',
            level: 'Security Engineer',
            description: "Securing Artificial Intelligence. Protecting AI models, data pipelines, and infrastructure from adversarial attacks.",
            category: 'Cyber',
            icon: <ShieldCheck className="w-8 h-8 text-white" />,
            color: 'from-red-600 to-pink-600'
        },
        {
            id: 'secot-plus',
            title: 'SecOT+ (Coming Nov 2026)',
            code: 'SOT+',
            level: 'Security Engineer',
            description: "Operational Technology Security. Securing industrial control systems, SCADA, and IoT environments.",
            category: 'Cyber',
            icon: <Lock className="w-8 h-8 text-white" />,
            color: 'from-amber-600 to-orange-700'
        },
        {
            id: 'security-pro',
            title: 'Security Pro',
            code: 'SPRO',
            level: 'Security Analyst',
            description: "Advanced security practitioner skills. Comprehensive coverage of defensive and offensive security principles.",
            category: 'Cyber',
            icon: <Shield className="w-8 h-8 text-white" />,
            color: 'from-red-800 to-rose-900'
        },
        {
            id: 'securityx',
            title: 'SecurityX',
            code: 'SX',
            level: 'Security Architect',
            description: "The pinnacle of security certification. Advanced architecture, strategy, and leadership for C-suite and lead architects.",
            category: 'Cyber',
            icon: <Award className="w-8 h-8 text-white" />,
            color: 'from-red-500 to-red-950'
        },
        {
            id: 'server-plus',
            title: 'Server+',
            code: 'S+',
            level: 'Intermediate',
            description: "CompTIA Server+ validates the hands-on skills of IT professionals who install, manage and troubleshoot servers in data centers as well as on-premise and hybrid environments.",
            category: 'Network',
            icon: <Server className="w-8 h-8 text-white" />,
            color: 'from-blue-600 to-cyan-500'
        },
        {
            id: 'soft-skills-essentials',
            title: 'Soft Skills',
            code: 'SSE',
            level: 'Entry',
            description: "Professional workplace skills. Communication, critical thinking, and collaboration for career success.",
            category: 'Digital Skills',
            icon: <Users className="w-8 h-8 text-white" />,
            color: 'from-teal-500 to-emerald-600'
        },
        {
            id: 'windows-client-pro',
            title: 'Windows Client Pro',
            code: 'WCP',
            level: 'Pro',
            description: "Managing Windows at scale. Deployment, configuration, and security for enterprise Windows Client environments.",
            category: 'Tech Support',
            icon: <Laptop className="w-8 h-8 text-white" />,
            color: 'from-blue-500 to-blue-700'
        },
        {
            id: 'certification-kit',
            title: 'Certification Kit',
            code: 'KIT',
            level: 'Certification-Related Job Roles',
            description: "Official CompTIA Certification Kits provide you with the learning resources you need to prepare for exams.",
            category: 'Cyber',
            icon: <Briefcase className="w-8 h-8 text-white" />,
            color: 'from-slate-600 to-slate-900'
        },
        {
            id: 'ce-program',
            title: 'Continuing Education',
            code: 'CE',
            level: 'Certification-Related Job Roles',
            description: "Keep your certification up to date with CompTIA's Continuing Education (CE) program.",
            category: 'Cyber',
            icon: <BookOpen className="w-8 h-8 text-white" />,
            color: 'from-blue-800 to-blue-950'
        }
    ];

    const filteredCertifications = activeCategory === 'All'
        ? certifications
        : activeCategory === 'Overview'
            ? []
            : certifications.filter(cert => cert.category === activeCategory);

    return (
        <div className="min-h-screen bg-black text-white font-['Inter'] relative selection:bg-red-500/30 overflow-hidden">
            {/* Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <RedGeometricBackground
                    height={30}
                    jaggednessScale={2.5}
                    opacity={0.4}
                    planeSize={[60, 40]}
                    cameraPos={[0, 0, 15]}
                    ashCount={200}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

                {/* Header */}
                <div className="text-center mb-20 cursor-default">
                    <div className="inline-flex items-center gap-3 mb-4 animate-in fade-in slide-in-from-top-4 duration-1000">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600"></div>
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-white">Global Standard</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600"></div>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-8">
                        Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Certifications</span>
                    </h1>
                    {activeCategory === 'Overview' ? null : (
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-2">
                            Build the skills employers need and showcase your ability to excel in high-demand roles.
                        </p>
                    )}
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border backdrop-blur-sm
                                ${activeCategory === category
                                    ? 'bg-red-600 text-white border-red-500 shadow-[0_0_25px_rgba(220,38,38,0.5)] scale-105'
                                    : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/30'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="min-h-[600px]">
                    {activeCategory === 'Overview' ? (
                        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                            {/* Overview Layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                                {/* Left Content */}
                                <div className="space-y-10">
                                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[0.9]">
                                        Take your next step with <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">certifications</span> and <br />
                                        skills-based training.
                                    </h2>
                                    <div className="space-y-6 text-lg text-gray-400 font-medium leading-relaxed">
                                        <p>
                                            From entry level to advanced, unlock new career opportunities with industry-leading certifications in IT support, cybersecurity, networking, cloud, and data.
                                        </p>
                                        <p>
                                            Build in-demand skills fast with flexible courses in artificial intelligence, soft skills, and more. Whether you're learning on your own or seeking training for your organization, we're here to support your goals.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setActiveCategory('All')}
                                        className="group mt-4 px-10 py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-red-600 hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] flex items-center gap-3"
                                    >
                                        Browse all credentials
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                                {/* Right Sidebar - Explore Products */}
                                <div className="lg:pl-16 lg:border-l border-white/10">
                                    <h3 className="text-sm font-black text-red-500 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                                        <div className="w-8 h-px bg-red-500"></div>
                                        Explore by Skill
                                    </h3>
                                    <ul className="grid gap-4">
                                        {['AI', 'Cloud', 'Cyber', 'Data', 'Digital Skills', 'Network', 'Tech Support'].map((skill) => (
                                            <li key={skill}>
                                                <button
                                                    onClick={() => setActiveCategory(skill)}
                                                    className="group flex items-center justify-between w-full p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                                >
                                                    <span className="text-sm font-bold uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors">{skill}</span>
                                                    <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Certifications Grid (Overview - Top 10) */}
                            <div className="mb-24">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">Accelerate your career</h2>
                                    <p className="text-gray-400">Discover our top 10 most popular certifications</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                                    {certifications.slice(0, 10).map((cert) => (
                                        <div
                                            key={cert.id}
                                            className="group relative bg-[#050505] border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                            <div className="p-8 md:p-12 flex flex-col h-full relative z-10">
                                                {/* Header & Title Combined */}
                                                <div className="flex items-start gap-6 mb-8">
                                                    {/* Colored Icon Badge */}
                                                    <div className={`shrink-0 w-20 h-20 rounded-full bg-gradient-to-br ${cert.color} p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-500`}>
                                                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center border border-white/10 group-hover:border-transparent transition-colors">
                                                            {cert.icon}
                                                        </div>
                                                    </div>

                                                    {/* Title & Meta */}
                                                    <div className="flex-grow pt-1">
                                                        <div className="flex justify-between items-start mb-1">
                                                            <div>
                                                                <div className="flex items-center gap-2 mb-1 opacity-50 text-[10px] font-bold uppercase tracking-widest">
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                                                                    CompTIA
                                                                </div>
                                                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter group-hover:text-red-500 transition-colors duration-300">
                                                                    {cert.title}
                                                                </h3>
                                                            </div>
                                                            <span className="shrink-0 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 text-gray-400 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                                                                {cert.level}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-sm text-gray-400 leading-relaxed font-medium mb-6 border-l-2 border-white/5 pl-6 group-hover:border-red-600 transition-colors duration-500">
                                                    {cert.description}
                                                </p>

                                                {/* Action Button */}
                                                <div className="mt-auto">
                                                    <Link to={`/certification/${cert.id}`}>
                                                        <button className="w-fit px-8 py-3 bg-white/5 border border-white/5 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-lg hover:bg-red-600 hover:border-red-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:shadow-lg hover:shadow-red-900/40">
                                                            Shop {cert.title} Products
                                                            <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Filtered Grid */
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
                            {filteredCertifications.length > 0 ? (
                                filteredCertifications.map((cert) => (
                                    <div
                                        key={cert.id}
                                        className="group relative bg-[#050505] border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                        <div className="p-8 md:p-12 flex flex-col h-full relative z-10">
                                            {/* Header & Title Combined */}
                                            <div className="flex items-start gap-6 mb-8">
                                                <div className={`shrink-0 w-20 h-20 rounded-full bg-gradient-to-br ${cert.color} p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-500`}>
                                                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center border border-white/10 group-hover:border-transparent transition-colors">
                                                        {cert.icon}
                                                    </div>
                                                </div>

                                                <div className="flex-grow pt-1">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-1 opacity-50 text-[10px] font-bold uppercase tracking-widest">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                                                                CompTIA
                                                            </div>
                                                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter group-hover:text-red-500 transition-colors duration-300">
                                                                {cert.title}
                                                            </h3>
                                                        </div>
                                                        <span className="shrink-0 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 text-gray-400 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                                                            {cert.level}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-sm text-gray-400 leading-relaxed font-medium mb-6 border-l-2 border-white/5 pl-6 group-hover:border-red-600 transition-colors duration-500">
                                                {cert.description}
                                            </p>

                                            <div className="mt-auto">
                                                <Link to={`/certification/${cert.id}`}>
                                                    <button className="w-fit px-8 py-3 bg-white/5 border border-white/5 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-lg hover:bg-red-600 hover:border-red-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:shadow-lg hover:shadow-red-900/40">
                                                        Shop {cert.title} Products
                                                        <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full py-32 flex flex-col items-center justify-center text-center border border-dashed border-white/10 rounded-[2rem] bg-white/5">
                                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                        <Database className="w-8 h-8 text-gray-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Content Coming Soon</h3>
                                    <p className="text-gray-500 max-w-md">The curriculum and certification details for <span className="text-red-500">{activeCategory}</span> are currently being updated.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Bottom CTA */}
                <div className="mt-32 p-1 rounded-[2.5rem] bg-gradient-to-r from-red-600/20 to-transparent">
                    <div className="p-12 md:p-16 rounded-[2.4rem] bg-black border border-white/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full group-hover:bg-red-600/20 transition-colors duration-700"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="text-center md:text-left">
                                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">Training a Team?</h3>
                                <p className="text-base text-gray-400 max-w-lg">Get enterprise-grade reporting, bulk discounts, and dedicated support for your SOC or IT team.</p>
                            </div>
                            <button className="px-10 py-4 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-red-900/30">
                                See Enterprise Solutions
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Certifications;
