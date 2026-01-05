import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Logo & Heading */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-black/60 via-red-950/90 to-black/60 p-3 rounded-lg shadow-lg hover:shadow-red-900/50 transition-shadow duration-300">
            <Shield className="h-8 w-8 text-red-400" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-red-400">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-red-300">
          Or{' '}
          <Link
            to="/register"
            className="font-medium text-red-400 hover:text-red-500 transition-colors duration-300"
          >
            start your 14-day free trial
          </Link>
        </p>
      </div>

      {/* Form Container */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="relative bg-gradient-to-r from-black/60 via-red-950/80 to-black/60 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          {/* Glow overlay */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-800/20 via-red-900/30 to-red-800/20 blur-xl opacity-0 hover:opacity-70 transition-opacity duration-300 rounded-lg pointer-events-none"></div>

          {/* Form */}
          <form className="space-y-6 relative z-10" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-red-300">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-red-700 rounded-md shadow-sm placeholder-red-400 text-white bg-black/50 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm transition-colors duration-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-red-300">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-red-700 rounded-md shadow-sm placeholder-red-400 text-white bg-black/50 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm transition-colors duration-300"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-red-500 focus:ring-red-500 border-red-700 rounded transition-colors duration-300"
                />
                <label htmlFor="remember-me" className="ml-2 block text-red-300">
                  Remember me
                </label>
              </div>

              <div>
                <a href="#" className="font-medium text-red-400 hover:text-red-500 transition-colors duration-300">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-lg
                           text-sm font-medium text-white
                           bg-gradient-to-r from-black/60 via-red-950/90 to-black/60
                           hover:from-black/50 hover:via-red-800/80 hover:to-black/50
                           transition-all duration-300
                           relative z-10
                           before:absolute before:-inset-1 before:blur-xl before:bg-gradient-to-r before:from-red-800/20 before:via-red-900/20 before:to-red-800/20 before:rounded-md before:z-0"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
