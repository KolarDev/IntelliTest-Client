"use client";

import React, { useState } from 'react';

// Define the component's state type for clarity and type safety.
type AuthState = {
  view: 'login' | 'signup';
  email: string;
  password: string;
  userType: 'Student' | 'Teacher' | 'Parent' | '';
};

const AuthPage: React.FC = () => {
  // Use a single state object to manage the component's state.
  const [state, setState] = useState<AuthState>({
    view: 'signup', // Default view is signup as requested.
    email: '',
    password: '',
    userType: '',
  });

  // Handle input changes for all form fields.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle the login form submission. (Currently logs to console)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', {
      email: state.email,
      password: state.password,
    });
    // In a real application, you would call your authentication API here.
  };

  // Handle the signup form submission. (Currently logs to console)
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup attempt:', {
      email: state.email,
      password: state.password,
      userType: state.userType,
    });
    // In a real application, you would call your authentication API here.
  };

  // Switch between the login and signup forms.
  const toggleView = () => {
    setState((prevState) => ({
      ...prevState,
      view: prevState.view === 'login' ? 'signup' : 'login',
    }));
  };

  // The main container for the full auth page, now split into two columns.
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#ffff] text-white font-sans overflow-hidden p-4 md:p-8">
      {/* Left side: Purple banner with brand message and testimonial */}
      <div className="flex flex-col md:w-1/2 p-8 md:p-16 rounded-3xl bg-gradient-to-br from-[#4f31b6] to-[#6c48d4] text-white shadow-xl relative overflow-hidden">
        {/* Top-left brand name */}
        <div className="absolute top-8 left-8 text-2xl font-bold tracking-tight">
          IntelliTest
        </div>

        {/* Main message */}
        <div className="mt-20 md:mt-24">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Start your journey with us.
          </h1>
          <p className="mt-4 text-xl font-light text-purple-200">
            Discover a world of intelligent learning.
          </p>
        </div>

        {/* Testimonial section at the bottom */}
        <div className="mt-auto pt-16">
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <p className="text-lg font-normal italic leading-relaxed text-purple-100">
              &quot;This platform is amazing! It has made my learning experience so much better and more engaging.
            </p>
            <div className="flex items-center mt-6">
              <img
                src="https://placehold.co/48x48/6c48d4/ffffff?text=U"
                alt="User"
                className="w-12 h-12 rounded-full border-2 border-white/50"
              />
              <div className="ml-4">
                <p className="font-semibold text-lg text-white">A happy user</p>
                <p className="text-sm font-light text-purple-200">Student</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            <span className="w-2 h-2 bg-white rounded-full opacity-100"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
          </div>
        </div>
      </div>

      {/* Right side: Auth forms */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-4 md:p-12">
        <div className="w-full max-w-md p-2 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold rounded tracking-tight text-grey-300">
              {state.view === 'login' ? 'Log In' : 'Sign Up'}
            </h2>
            <p className="mt-2 text-gray-400">
              {state.view === 'login' ? (
                <>
                  Don&apos;t have an account?{' '}
                  <button onClick={toggleView} className="text-purple-400 hover:underline focus:outline-none">
                    Register
                  </button>
                </>
              ) : (
                <>
                  Have an account?{' '}
                  <button onClick={toggleView} className="text-purple-400 hover:underline focus:outline-none">
                    Log in
                  </button>
                </>
              )}
            </p>
          </div>

          {state.view === 'signup' ? (
            <form onSubmit={handleSignup} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-grey-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 bg-gray-700 text-white rounded-lg border-2 border-transparent focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-grey-300">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 bg-gray-700 text-white rounded-lg border-2 border-transparent focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="********"
                />
              </div>
              <div>
                <label htmlFor="userType" className="block text-sm font-medium text-grey-300">
                  Who are you?
                </label>
                <select
                  id="userType"
                  name="userType"
                  value={state.userType}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 bg-gray-700 text-gray-300 rounded-lg border-2 border-transparent focus:border-purple-500 focus:outline-none transition-colors appearance-none pr-8 cursor-pointer"
                >
                  <option value="" disabled>Select your role</option>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Parent">Parent</option>
                </select>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="py-3 px-6 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-900"
                >
                  Create account
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Login form */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 bg-gray-700 text-white rounded-lg border-2 border-transparent focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 bg-gray-700 text-white rounded-lg border-2 border-transparent focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="********"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-6 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-700 transition-all transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:ring-offset-gray-900"
                >
                  Log In
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;


// https://medium.com/@ntldr/google-authentication-using-django-and-djoser-b0ef5f61a50b#:%7E:text=Everytime%20you%20wanna%20login%20%2C%20you%20need%20to%20make%20a%20request%20to%20http%3A//127.0.0.1%3A8000/auth/o/google%2Doauth2/%3Fredirect_uri%3Dhttp%3A//localhost%3A3000/%20and%20then%20to%20http%3A//127.0.0.1%3A8000/auth/o/google%2Doauth2/%3Fstate%3D%27%27%26code%3D%27%27%20thus%20you%20will%20get%20the%20same%20state.