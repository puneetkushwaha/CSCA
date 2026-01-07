import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Mail, ArrowRight, Loader2, Eye, EyeOff } from 'lucide-react';
import RedGeometricBackground from '../components/RedGeometricBackground';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative flex items-center justify-center bg-black font-['Inter']">

      {/* 3D Background - Aggressive Mode */}
      <div className="absolute inset-0 z-0">
        <RedGeometricBackground
          height={6}
          jaggednessScale={2.5}
          opacity={0.8}
          ashCount={60}
          ashSize={0.05}
        />
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80 pointer-events-none"></div>
      </div>

      {/* Main Container - High Contrast Armor Card */}
      <div className="relative z-10 w-full max-w-md p-6 animate-in fade-in slide-in-from-bottom-8 duration-700">

        {/* Logo Header */}
        <div className="text-center mb-8 relative group cursor-pointer">
          <div className="absolute inset-0 bg-red-600/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black border border-white/10 mb-6 shadow-2xl shadow-red-900/20 group-hover:scale-110 group-hover:border-red-500 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform"></div>
            <Shield className="w-8 h-8 text-white group-hover:text-red-500 transition-colors relative z-10" />
          </div>
          <h2 className="text-2xl font-black text-white tracking-tighter uppercase mb-2 drop-shadow-lg">
            Welcome Back
          </h2>
          <div className="flex justify-center">
            <p className="text-red-500 text-[9px] font-bold uppercase tracking-[0.3em] opacity-80 overflow-hidden border-r-2 border-red-500 animate-[typing_3s_steps(30,end),blink_1s_step-end_infinite] whitespace-nowrap">
              Secure Access Terminal
            </p>
          </div>
        </div>

        {/* Login Card - Solid High Contrast */}
        <div className="relative bg-black/80 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] shadow-[0_0_60px_-15px_rgba(220,38,38,0.3)] overflow-hidden group/card hover:border-white/20 transition-all duration-500">

          {/* Top Detail Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-red-500"></div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

            {/* Email Input */}
            <div className="space-y-2 group">
              <label className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] group-focus-within:text-white transition-colors duration-300 ml-1">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-11 py-3.5 text-sm text-white focus:outline-none focus:border-white focus:bg-black transition-all duration-300 placeholder:text-white/40 relative z-10 font-bold tracking-wide"
                  placeholder="name@company.com"
                />
                <Mail className="absolute left-4 top-4 w-4 h-4 text-white/50 group-focus-within:text-red-500 transition-all duration-300 z-10" />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2 group">
              <label className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] group-focus-within:text-white transition-colors duration-300 ml-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-11 py-3.5 text-sm text-white focus:outline-none focus:border-white focus:bg-black transition-all duration-300 placeholder:text-white/40 relative z-10 font-bold tracking-wide"
                  placeholder="••••••••"
                />
                <Lock className="absolute left-4 top-4 w-4 h-4 text-white/50 group-focus-within:text-red-500 transition-all duration-300 z-10" />

                {/* Password Toggle */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 z-20 text-white/50 hover:text-white transition-colors focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Extras */}
            <div className="flex items-center justify-between text-[11px] pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-3.5 h-3.5 rounded bg-white/10 border-white/20 checked:bg-red-600 checked:border-red-600 transition-all focus:ring-0 focus:ring-offset-0" />
                <span className="text-white/70 font-bold tracking-wider group-hover:text-white transition-colors uppercase">Remember Me</span>
              </label>
              <Link to="/forgot-password" className="text-white/70 hover:text-white font-bold tracking-wider transition-colors uppercase">Forgot password?</Link>
            </div>

            {/* Submit Button - Flashbang White (Navbar Style) */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full relative group overflow-hidden rounded-full mt-4"
            >
              <div className="px-8 py-4 bg-white hover:bg-black transition-all duration-500 flex items-center justify-center gap-3">
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>

                {isLoading ? (
                  <Loader2 className="w-5 h-5 text-black group-hover:text-white animate-spin relative z-10" />
                ) : (
                  <>
                    <span className="relative z-10 text-[11px] font-black text-black group-hover:text-white uppercase tracking-[0.25em] transition-colors">Sign In To Console</span>
                    <ArrowRight className="h-3 w-3 text-black group-hover:text-red-500 transition-colors group-hover:translate-x-1 duration-300 relative z-10" />
                  </>
                )}
              </div>
              <div className="absolute inset-0 rounded-full border border-black/5 group-hover:border-red-500/50 transition-colors duration-500 pointer-events-none"></div>
            </button>

          </form>

          {/* Footer */}
          <div className="mt-8 text-center relative z-10">
            <p className="text-white/50 text-[10px] uppercase tracking-wider font-bold">
              Needs Access?{' '}
              <Link to="/register" className="text-white font-black hover:text-red-500 transition-colors inline-flex items-center gap-1 group ml-1">
                Request Clearance <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </p>
          </div>

        </div>

        <style jsx>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink {
          50% { border-color: transparent }
        }
        @keyframes scan {
            0% { top: -10%; opacity: 0; }
            50% { opacity: 0.5; }
            100% { top: 110%; opacity: 0; }
        }
      `}</style>

        {/* Security Badge */}
        <div className="mt-8 flex justify-center opacity-30">
          <div className="flex items-center gap-2 text-[10px] text-white uppercase tracking-widest font-black">
            <Shield className="w-3 h-3" />
            Secured by CSCA Protocol
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
