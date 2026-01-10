import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Shield,
  Eye,
  EyeOff,
  Mail,
  AlertTriangle,
  Loader2,
  Facebook,
  Linkedin,
} from 'lucide-react';
import RedGeometricBackground from '../components/RedGeometricBackground';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../config';

// Apple Icon
const Apple = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // 🔐 REAL JWT LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || 'Login failed');
        return;
      }

      // ✅ SAVE REAL JWT + USER
      login(data.user, data.access_token);
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Server error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen relative font-['Inter'] overflow-hidden flex flex-col">

      {/* Background */}
      <RedGeometricBackground
        height={30}
        jaggednessScale={2.5}
        opacity={0.4}
        planeSize={[60, 40]}
        cameraPos={[0, 0, 15]}
        ashCount={200}
        showPoints={false}
        wireframeOpacity={0.2}
      />

      <div className="relative z-10 w-full h-full overflow-y-auto p-6">
        <div className="min-h-full flex flex-col items-center justify-center py-10">

          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-2">
              <Shield className="w-10 h-10 text-red-600 fill-red-600/20" />
              <span className="text-3xl font-black text-white uppercase">
                CSCA <span className="text-red-600">Secure</span>
              </span>
            </div>
          </div>

          {/* Card */}
          <div className="w-full max-w-xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-red-900 via-red-600 to-red-900" />

            <div className="p-8 md:p-10">
              <h1 className="text-2xl font-black text-white mb-6 uppercase text-center">
                Log in
              </h1>

              {/* Alert */}
              <div className="mb-6">
                <div className="bg-red-900/10 border border-red-900/30 p-4 rounded-lg flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <p className="text-xs text-gray-400">
                    Use your official CSCA credentials to log in.
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">
                    Email
                  </label>
                  <div className="relative group">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 focus:bg-black transition-all placeholder:text-gray-700 font-bold"
                      placeholder="name@company.com"
                    />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-red-500 transition-colors" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">
                    Password
                  </label>
                  <div className="relative group">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 focus:bg-black transition-all placeholder:text-gray-700 pr-12 font-bold"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-900/40 hover:shadow-red-600/20 hover:-translate-y-0.5"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    'Authenticate'
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-black/50 text-gray-600 uppercase text-[10px] font-black tracking-widest backdrop-blur-sm">Or continue with</span>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-4 gap-3">
                <button className="flex items-center justify-center p-3 border border-white/10 rounded-lg hover:bg-white/5 hover:border-white/30 transition-all group">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                </button>
                <button className="flex items-center justify-center p-3 border border-white/10 rounded-lg hover:bg-[#1877F2]/10 hover:border-[#1877F2]/50 transition-all group">
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-[#1877F2] transition-colors" />
                </button>
                <button className="flex items-center justify-center p-3 border border-white/10 rounded-lg hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/50 transition-all group">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#0A66C2] transition-colors" />
                </button>
                <button className="flex items-center justify-center p-3 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all group">
                  <Apple className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </button>
              </div>

              {/* Footer */}
              <div className="pt-8 text-center border-t border-white/10 mt-8">
                <p className="text-xs text-gray-400">
                  Don't have an account?
                  <Link
                    to="/signup"
                    className="text-red-500 font-bold ml-2 hover:text-white transition-colors"
                  >
                    Create one
                  </Link>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
