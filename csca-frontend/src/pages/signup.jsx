import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Eye, EyeOff, Mail, Loader2, Facebook, Linkedin, Search, ChevronDown, Check, User } from 'lucide-react';
import RedGeometricBackground from '../components/RedGeometricBackground';

import { useAuth } from '../context/AuthContext';
import { API_URL } from '../config';

const Apple = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.05 20.28c-.96.78-2.1 1.24-3.89 1.24-2.13 0-3.32-1.3-5.26-1.3-1.93 0-3.5 1.3-5.3 1.3-1.54 0-2.67-.37-3.7-1.15V9.48c1.03-.78 2.16-1.15 3.7-1.15 1.8 0 3.37 1.3 5.3 1.3 1.94 0 3.38-1.3 5.26-1.3 1.79 0 2.93.46 3.89 1.24v10.8z" />
    </svg>
);

const Signup = () => {
    const { login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Country Selector Logic
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [countrySearch, setCountrySearch] = useState('');
    const countryRef = useRef(null);

    const countries = [
        { code: 'AFG', name: 'Afghanistan', flag: 'af' }, { code: 'ALB', name: 'Albania', flag: 'al' }, { code: 'DZA', name: 'Algeria', flag: 'dz' },
        { code: 'AND', name: 'Andorra', flag: 'ad' }, { code: 'AGO', name: 'Angola', flag: 'ao' }, { code: 'ARG', name: 'Argentina', flag: 'ar' },
        { code: 'ARM', name: 'Armenia', flag: 'am' }, { code: 'AUS', name: 'Australia', flag: 'au' }, { code: 'AUT', name: 'Austria', flag: 'at' },
        { code: 'AZE', name: 'Azerbaijan', flag: 'az' }, { code: 'BHS', name: 'Bahamas', flag: 'bs' }, { code: 'BHR', name: 'Bahrain', flag: 'bh' },
        { code: 'BGD', name: 'Bangladesh', flag: 'bd' }, { code: 'BRB', name: 'Barbados', flag: 'bb' }, { code: 'BLR', name: 'Belarus', flag: 'by' },
        { code: 'BEL', name: 'Belgium', flag: 'be' }, { code: 'BLZ', name: 'Belize', flag: 'bz' }, { code: 'BEN', name: 'Benin', flag: 'bj' },
        { code: 'BTN', name: 'Bhutan', flag: 'bt' }, { code: 'BOL', name: 'Bolivia', flag: 'bo' }, { code: 'BIH', name: 'Bosnia and Herzegovina', flag: 'ba' },
        { code: 'BWA', name: 'Botswana', flag: 'bw' }, { code: 'BRA', name: 'Brazil', flag: 'br' }, { code: 'BRN', name: 'Brunei', flag: 'bn' },
        { code: 'BGR', name: 'Bulgaria', flag: 'bg' }, { code: 'BFA', name: 'Burkina Faso', flag: 'bf' }, { code: 'BDI', name: 'Burundi', flag: 'bi' },
        { code: 'CPV', name: 'Cabo Verde', flag: 'cv' }, { code: 'KHM', name: 'Cambodia', flag: 'kh' }, { code: 'CMR', name: 'Cameroon', flag: 'cm' },
        { code: 'CAN', name: 'Canada', flag: 'ca' }, { code: 'CAF', name: 'Central African Republic', flag: 'cf' }, { code: 'TCD', name: 'Chad', flag: 'td' },
        { code: 'CHL', name: 'Chile', flag: 'cl' }, { code: 'CHN', name: 'China', flag: 'cn' }, { code: 'COL', name: 'Colombia', flag: 'co' },
        { code: 'COM', name: 'Comoros', flag: 'km' }, { code: 'COG', name: 'Congo', flag: 'cg' }, { code: 'CRI', name: 'Costa Rica', flag: 'cr' },
        { code: 'HRV', name: 'Croatia', flag: 'hr' }, { code: 'CUB', name: 'Cuba', flag: 'cu' }, { code: 'CYP', name: 'Cyprus', flag: 'cy' },
        { code: 'CZE', name: 'Czech Republic', flag: 'cz' }, { code: 'DNK', name: 'Denmark', flag: 'dk' }, { code: 'DJI', name: 'Djibouti', flag: 'dj' },
        { code: 'DOM', name: 'Dominican Republic', flag: 'do' }, { code: 'ECU', name: 'Ecuador', flag: 'ec' }, { code: 'EGY', name: 'Egypt', flag: 'eg' },
        { code: 'SLV', name: 'El Salvador', flag: 'sv' }, { code: 'GNQ', name: 'Equatorial Guinea', flag: 'gq' }, { code: 'ERI', name: 'Eritrea', flag: 'er' },
        { code: 'EST', name: 'Estonia', flag: 'ee' }, { code: 'ETH', name: 'Ethiopia', flag: 'et' }, { code: 'FJI', name: 'Fiji', flag: 'fj' },
        { code: 'FIN', name: 'Finland', flag: 'fi' }, { code: 'FRA', name: 'France', flag: 'fr' }, { code: 'GAB', name: 'Gabon', flag: 'ga' },
        { code: 'GMB', name: 'Gambia', flag: 'gm' }, { code: 'GEO', name: 'Georgia', flag: 'ge' }, { code: 'DEU', name: 'Germany', flag: 'de' },
        { code: 'GHA', name: 'Ghana', flag: 'gh' }, { code: 'GRC', name: 'Greece', flag: 'gr' }, { code: 'GRD', name: 'Grenada', flag: 'gd' },
        { code: 'GTM', name: 'Guatemala', flag: 'gt' }, { code: 'GIN', name: 'Guinea', flag: 'gn' }, { code: 'GUY', name: 'Guyana', flag: 'gy' },
        { code: 'HTI', name: 'Haiti', flag: 'ht' }, { code: 'HND', name: 'Honduras', flag: 'hn' }, { code: 'HUN', name: 'Hungary', flag: 'hu' },
        { code: 'ISL', name: 'Iceland', flag: 'is' }, { code: 'IND', name: 'India', flag: 'in' }, { code: 'IDN', name: 'Indonesia', flag: 'id' },
        { code: 'IRN', name: 'Iran', flag: 'ir' }, { code: 'IRQ', name: 'Iraq', flag: 'iq' }, { code: 'IRL', name: 'Ireland', flag: 'ie' },
        { code: 'ISR', name: 'Israel', flag: 'il' }, { code: 'ITA', name: 'Italy', flag: 'it' }, { code: 'JAM', name: 'Jamaica', flag: 'jm' },
        { code: 'JPN', name: 'Japan', flag: 'jp' }, { code: 'JOR', name: 'Jordan', flag: 'jo' }, { code: 'KAZ', name: 'Kazakhstan', flag: 'kz' },
        { code: 'KEN', name: 'Kenya', flag: 'ke' }, { code: 'KIR', name: 'Kiribati', flag: 'ki' }, { code: 'KWT', name: 'Kuwait', flag: 'kw' },
        { code: 'KGZ', name: 'Kyrgyzstan', flag: 'kg' }, { code: 'LAO', name: 'Laos', flag: 'la' }, { code: 'LVA', name: 'Latvia', flag: 'lv' },
        { code: 'LBN', name: 'Lebanon', flag: 'lb' }, { code: 'LSO', name: 'Lesotho', flag: 'ls' }, { code: 'LBR', name: 'Liberia', flag: 'lr' },
        { code: 'LBY', name: 'Libya', flag: 'ly' }, { code: 'LIE', name: 'Liechtenstein', flag: 'li' }, { code: 'LTU', name: 'Lithuania', flag: 'lt' },
        { code: 'LUX', name: 'Luxembourg', flag: 'lu' }, { code: 'MDG', name: 'Madagascar', flag: 'mg' }, { code: 'MWI', name: 'Malawi', flag: 'mw' },
        { code: 'MYS', name: 'Malaysia', flag: 'my' }, { code: 'MDV', name: 'Maldives', flag: 'mv' }, { code: 'MLI', name: 'Mali', flag: 'ml' },
        { code: 'MLT', name: 'Malta', flag: 'mt' }, { code: 'MHL', name: 'Marshall Islands', flag: 'mh' }, { code: 'MRT', name: 'Mauritania', flag: 'mr' },
        { code: 'MUS', name: 'Mauritius', flag: 'mu' }, { code: 'MEX', name: 'Mexico', flag: 'mx' }, { code: 'FSM', name: 'Micronesia', flag: 'fm' },
        { code: 'MDA', name: 'Moldova', flag: 'md' }, { code: 'MCO', name: 'Monaco', flag: 'mc' }, { code: 'MNG', name: 'Mongolia', flag: 'mn' },
        { code: 'MNE', name: 'Montenegro', flag: 'me' }, { code: 'MAR', name: 'Morocco', flag: 'ma' }, { code: 'MOZ', name: 'Mozambique', flag: 'mz' },
        { code: 'MMR', name: 'Myanmar', flag: 'mm' }, { code: 'NAM', name: 'Namibia', flag: 'na' }, { code: 'NRU', name: 'Nauru', flag: 'nr' },
        { code: 'NPL', name: 'Nepal', flag: 'np' }, { code: 'NLD', name: 'Netherlands', flag: 'nl' }, { code: 'NZL', name: 'New Zealand', flag: 'nz' },
        { code: 'NIC', name: 'Nicaragua', flag: 'ni' }, { code: 'NER', name: 'Niger', flag: 'ne' }, { code: 'NGA', name: 'Nigeria', flag: 'ng' },
        { code: 'NOR', name: 'Norway', flag: 'no' }, { code: 'OMN', name: 'Oman', flag: 'om' }, { code: 'PAK', name: 'Pakistan', flag: 'pk' },
        { code: 'PLW', name: 'Palau', flag: 'pw' }, { code: 'PAN', name: 'Panama', flag: 'pa' }, { code: 'PNG', name: 'Papua New Guinea', flag: 'pg' },
        { code: 'PRY', name: 'Paraguay', flag: 'py' }, { code: 'PER', name: 'Peru', flag: 'pe' }, { code: 'PHL', name: 'Philippines', flag: 'ph' },
        { code: 'POL', name: 'Poland', flag: 'pl' }, { code: 'PRT', name: 'Portugal', flag: 'pt' }, { code: 'QAT', name: 'Qatar', flag: 'qa' },
        { code: 'ROU', name: 'Romania', flag: 'ro' }, { code: 'RUS', name: 'Russia', flag: 'ru' }, { code: 'RWA', name: 'Rwanda', flag: 'rw' },
        { code: 'KNA', name: 'Saint Kitts and Nevis', flag: 'kn' }, { code: 'LCA', name: 'Saint Lucia', flag: 'lc' }, { code: 'VCT', name: 'Saint Vincent', flag: 'vc' },
        { code: 'WSM', name: 'Samoa', flag: 'ws' }, { code: 'SMR', name: 'San Marino', flag: 'sm' }, { code: 'STP', name: 'Sao Tome', flag: 'st' },
        { code: 'SAU', name: 'Saudi Arabia', flag: 'sa' }, { code: 'SEN', name: 'Senegal', flag: 'sn' }, { code: 'SRB', name: 'Serbia', flag: 'rs' },
        { code: 'SYC', name: 'Seychelles', flag: 'sc' }, { code: 'SLE', name: 'Sierra Leone', flag: 'sl' }, { code: 'SGP', name: 'Singapore', flag: 'sg' },
        { code: 'SVK', name: 'Slovakia', flag: 'sk' }, { code: 'SVN', name: 'Slovenia', flag: 'si' }, { code: 'SLB', name: 'Solomon Islands', flag: 'sb' },
        { code: 'SOM', name: 'Somalia', flag: 'so' }, { code: 'ZAF', name: 'South Africa', flag: 'za' }, { code: 'KOR', name: 'South Korea', flag: 'kr' },
        { code: 'ESP', name: 'Spain', flag: 'es' }, { code: 'LKA', name: 'Sri Lanka', flag: 'lk' }, { code: 'SDN', name: 'Sudan', flag: 'sd' },
        { code: 'SUR', name: 'Suriname', flag: 'sr' }, { code: 'SWE', name: 'Sweden', flag: 'se' }, { code: 'CHE', name: 'Switzerland', flag: 'ch' },
        { code: 'SYR', name: 'Syria', flag: 'sy' }, { code: 'TWN', name: 'Taiwan', flag: 'tw' }, { code: 'TJK', name: 'Tajikistan', flag: 'tj' },
        { code: 'TZA', name: 'Tanzania', flag: 'tz' }, { code: 'THA', name: 'Thailand', flag: 'th' }, { code: 'TLS', name: 'Timor-Leste', flag: 'tl' },
        { code: 'TGO', name: 'Togo', flag: 'tg' }, { code: 'TON', name: 'Tonga', flag: 'to' }, { code: 'TTO', name: 'Trinidad and Tobago', flag: 'tt' },
        { code: 'TUN', name: 'Tunisia', flag: 'tn' }, { code: 'TUR', name: 'Turkey', flag: 'tr' }, { code: 'TKM', name: 'Turkmenistan', flag: 'tm' },
        { code: 'TUV', name: 'Tuvalu', flag: 'tv' }, { code: 'UGA', name: 'Uganda', flag: 'ug' }, { code: 'UKR', name: 'Ukraine', flag: 'ua' },
        { code: 'ARE', name: 'United Arab Emirates', flag: 'ae' }, { code: 'GBR', name: 'United Kingdom', flag: 'gb' }, { code: 'USA', name: 'United States', flag: 'us' },
        { code: 'URY', name: 'Uruguay', flag: 'uy' }, { code: 'UZB', name: 'Uzbekistan', flag: 'uz' }, { code: 'VUT', name: 'Vanuatu', flag: 'vu' },
        { code: 'VEN', name: 'Venezuela', flag: 've' }, { code: 'VNM', name: 'Vietnam', flag: 'vn' }, { code: 'YEM', name: 'Yemen', flag: 'ye' },
        { code: 'ZMB', name: 'Zambia', flag: 'zm' }, { code: 'ZWE', name: 'Zimbabwe', flag: 'zw' }
    ];

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
        country.code.toLowerCase().includes(countrySearch.toLowerCase())
    );

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (countryRef.current && !countryRef.current.contains(event.target)) {
                setIsCountryOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        country: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        setIsLoading(true);

        try {
            const res = await fetch(`${API_URL}/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const err = await res.json();
                alert(err.message || "Signup failed");
                return;
            }

            alert("Account created. Please login.");
            navigate("/login");
        } catch (err) {
            console.error(err);
            alert("Server error");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        // Fixed Viewport Wrapper
        <div className="h-screen w-screen relative font-['Inter'] overflow-hidden flex flex-col bg-black">

            {/* Background Layer */}
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

            {/* Main Scrollable Area */}
            <div className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden p-6">

                <div className="min-h-full flex flex-col items-center justify-center py-10">

                    {/* Logo / Header */}
                    <div className="text-center mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
                        <div className="inline-flex items-center gap-3 mb-2">
                            <Shield className="w-10 h-10 text-red-600 fill-red-600/20" />
                            <span className="text-3xl font-black text-white tracking-tight uppercase">CSCA <span className="text-red-600">Secure</span></span>
                        </div>
                    </div>

                    {/* Card */}
                    <div className="w-full max-w-xl bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_80px_-20px_rgba(220,38,38,0.4)] overflow-hidden animate-in zoom-in-95 duration-500">

                        {/* Red Accent Line */}
                        <div className="h-1 w-full bg-gradient-to-r from-red-900 via-red-500 to-red-900"></div>

                        <div className="p-8 md:p-10">

                            {/* Heading */}
                            <div className="text-center mb-10">
                                <h1 className="text-2xl font-black text-white mb-2 uppercase tracking-wider">Create Account</h1>
                                <p className="text-xs text-gray-400 font-bold tracking-[0.2em] uppercase opacity-70">Please register your account below.</p>
                            </div>

                            {/* Main Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Name Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">First Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 focus:bg-black transition-all placeholder:text-gray-700 font-bold"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Last Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 focus:bg-black transition-all placeholder:text-gray-700 font-bold"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                {/* Display Name */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Display Name</label>
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            required
                                            value={formData.displayName}
                                            onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 focus:bg-black transition-all placeholder:text-gray-700 font-bold"
                                            placeholder="johndoe1337"
                                        />
                                        <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-red-500 transition-colors" />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Email Address</label>
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 focus:bg-black transition-all placeholder:text-gray-700 font-bold"
                                            placeholder="john@example.com"
                                        />
                                        <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-red-500 transition-colors" />
                                    </div>
                                </div>

                                {/* Password Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Password</label>
                                        <div className="relative group">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                required
                                                value={formData.password}
                                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 focus:bg-black transition-all placeholder:text-gray-700 pr-12 font-bold"
                                                placeholder="••••••••"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors"
                                            >
                                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Confirm Access</label>
                                        <div className="relative group">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                required
                                                value={formData.confirmPassword}
                                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 focus:bg-black transition-all placeholder:text-gray-700 pr-12 font-bold"
                                                placeholder="••••••••"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors"
                                            >
                                                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Country Selection */}
                                <div className="space-y-1.5 relative" ref={countryRef}>
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">Operational Region</label>
                                    <button
                                        type="button"
                                        onClick={() => setIsCountryOpen(!isCountryOpen)}
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 focus:bg-black transition-all flex items-center justify-between font-bold"
                                    >
                                        <div className="flex items-center gap-3">
                                            {formData.country ? (
                                                <>
                                                    <img
                                                        src={`https://flagcdn.com/w40/${countries.find(c => c.name === formData.country)?.flag}.png`}
                                                        alt=""
                                                        className="w-5 h-3.5 object-cover rounded-[1px] shadow-sm shadow-black"
                                                    />
                                                    <span>{formData.country}</span>
                                                </>
                                            ) : (
                                                <span className="text-gray-700">Select Region...</span>
                                            )}
                                        </div>
                                        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isCountryOpen ? 'rotate-180 text-red-500' : ''}`} />
                                    </button>

                                    {/* Custom Dropdown */}
                                    {isCountryOpen && (
                                        <div className="absolute left-0 right-0 bottom-full mb-3 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_-20px_80px_rgba(0,0,0,0.9)] overflow-hidden z-[100] animate-in fade-in slide-in-from-bottom-2 duration-300">
                                            <div className="p-4 border-b border-white/10 bg-white/5">
                                                <div className="relative group">
                                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 group-focus-within:text-red-500 transition-colors" />
                                                    <input
                                                        type="text"
                                                        placeholder="Search region..."
                                                        value={countrySearch}
                                                        onChange={(e) => setCountrySearch(e.target.value)}
                                                        className="w-full bg-black/50 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-red-500 transition-all placeholder:text-gray-600 font-bold"
                                                        autoFocus
                                                    />
                                                </div>
                                            </div>
                                            <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-red-600/20 scrollbar-track-transparent p-1.5 lg:p-2 space-y-1">
                                                {filteredCountries.map((country) => (
                                                    <button
                                                        key={country.code}
                                                        type="button"
                                                        onClick={() => {
                                                            setFormData({ ...formData, country: country.name });
                                                            setIsCountryOpen(false);
                                                        }}
                                                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-xs font-bold rounded-xl transition-all group
                                                            ${formData.country === country.name ? 'bg-red-600 text-white shadow-lg shadow-red-900/40' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                                    >
                                                        <img
                                                            src={`https://flagcdn.com/w40/${country.flag}.png`}
                                                            alt={country.name}
                                                            className="w-5 h-3.5 object-cover rounded-[1px] shadow-sm shadow-black opacity-80 group-hover:opacity-100 transition-opacity"
                                                        />
                                                        <span className="tracking-wide">{country.name}</span>
                                                        {formData.country === country.name && <Check className="ml-auto w-3.5 h-3.5 text-white" />}
                                                    </button>
                                                ))}
                                                {filteredCountries.length === 0 && (
                                                    <div className="p-8 text-center text-xs text-gray-500 font-bold uppercase tracking-widest opacity-50">No regions detected</div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Terms */}
                                <div className="flex items-start gap-4 pt-2 bg-red-900/5 p-4 rounded-2xl border border-red-900/10">
                                    <div className="relative flex items-center h-5 mt-0.5">
                                        <input
                                            type="checkbox"
                                            required
                                            className="w-4 h-4 rounded bg-white/[0.05] border-white/10 checked:bg-red-600 checked:border-red-600 transition-all focus:ring-0 focus:ring-offset-0 cursor-pointer appearance-none border-2 checked:after:content-['✓'] after:text-white after:text-[10px] after:flex after:justify-center after:items-center"
                                        />
                                    </div>
                                    <p className="text-[10px] text-gray-400 font-bold leading-relaxed uppercase tracking-wider">
                                        I confirm my identity and agree to the <Link to="/terms" className="text-white hover:text-red-500 transition-all underline underline-offset-4 font-black">Terms of Protocol</Link> and <Link to="/privacy" className="text-white hover:text-red-500 transition-all underline underline-offset-4 font-black">Privacy Protection</Link>.
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4.5 rounded-xl uppercase tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_50px_rgba(220,38,38,0.3)] hover:shadow-red-600/50 hover:-translate-y-1 active:scale-[0.98] mt-2"
                                >
                                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Initiate Authorization <Shield className="w-4 h-4" /></>}
                                </button>
                            </form>

                            {/* Divider */}
                            <div className="relative my-10">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-white/5"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-5 bg-[#0a0a0a] text-gray-600 uppercase text-[10px] font-black tracking-[0.4em] backdrop-blur-sm">External Access</span>
                                </div>
                            </div>

                            {/* Social Buttons */}
                            <div className="grid grid-cols-4 gap-3">
                                <button className="flex items-center justify-center p-3.5 border border-white/10 rounded-xl hover:bg-white/5 transition-all group">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                                </button>
                                <button className="flex items-center justify-center p-3.5 border border-white/10 rounded-xl hover:bg-[#1877F2]/10 transition-all group">
                                    <Facebook className="w-5 h-5 text-gray-500 group-hover:text-[#1877F2]" />
                                </button>
                                <button className="flex items-center justify-center p-3.5 border border-white/10 rounded-xl hover:bg-[#0A66C2]/10 transition-all group">
                                    <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-[#0A66C2]" />
                                </button>
                                <button className="flex items-center justify-center p-3.5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                                    <Apple className="w-5 h-5 text-gray-500 group-hover:text-white" />
                                </button>
                            </div>

                            {/* Login Link */}
                            <div className="mt-10 text-center pt-8 border-t border-white/5">
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                                    Secure account exists? <Link to="/login" className="text-white hover:text-red-500 transition-colors ml-2 font-black border-b border-red-600/30 pb-0.5">Log In</Link>
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40 hover:opacity-100 transition-opacity">
                        <Link to="/partners" className="text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-red-500 transition-colors">Partners</Link>
                        <Link to="/legal" className="text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-red-500 transition-colors">Legal</Link>
                        <Link to="/contact" className="text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-red-500 transition-colors">Contact</Link>
                        <Link to="/privacy" className="text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-red-500 transition-colors">Privacy</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Signup;