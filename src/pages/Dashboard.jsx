import React from 'react';
import { Home, Book, Award, Settings, LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="hidden md:flex flex-col w-64 bg-slate-900 border-r border-slate-800">
                <div className="p-6">
                    <span className="text-xl font-bold text-white tracking-wider">CSCA ACADEMY</span>
                </div>
                <nav className="flex-1 px-4 space-y-2 mt-4">
                    <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-slate-300 bg-slate-800 rounded-lg">
                        <Home className="h-5 w-5" />
                        Dashboard
                    </Link>
                    <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <Book className="h-5 w-5" />
                        My Courses
                    </Link>
                    <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <Award className="h-5 w-5" />
                        Certifications
                    </Link>
                    <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                        <Settings className="h-5 w-5" />
                        Settings
                    </Link>
                </nav>
                <div className="p-4 border-t border-slate-800">
                    <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-white transition-colors">
                        <LogOut className="h-5 w-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
                <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8">
                    <h1 className="text-xl font-bold text-slate-800">Overview</h1>
                    <div className="flex items-center gap-4">
                        <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                            <User className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">John Doe</span>
                    </div>
                </header>

                <div className="p-8 max-w-7xl mx-auto">
                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="text-slate-500 text-sm font-medium uppercase mb-2">Progress</h3>
                            <p className="text-3xl font-bold text-slate-900">12%</p>
                            <div className="w-full bg-slate-100 rounded-full h-2 mt-4">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '12%' }}></div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="text-slate-500 text-sm font-medium uppercase mb-2">Enrolled Courses</h3>
                            <p className="text-3xl font-bold text-slate-900">1</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="text-slate-500 text-sm font-medium uppercase mb-2">Certifications</h3>
                            <p className="text-3xl font-bold text-slate-900">0</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center py-16">
                        <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Book className="h-8 w-8 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Pick up where you left off</h3>
                        <p className="text-slate-500 mb-6">No active sessions found. Start learning today!</p>
                        <Link to="/programs" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                            Browse Catalog
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
