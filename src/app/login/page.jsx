'use client';

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // For now, this is a mock login. In a real app, you'd call an API.
    // We'll simulate a successful login to show the flow.
    setTimeout(() => {
      if (formData.email && formData.password) {
        router.push('/');
      } else {
        setError('Please enter your credentials');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-surface text-on-surface font-hanken min-h-screen">
      <Navbar />
      
      <main className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-section-gap-mobile md:py-section-gap-desktop px-4 bg-background">
        <div className="w-full max-w-[500px] text-center mb-12">
          <h1 className="font-literata text-7xl text-on-surface mb-2">Welcome Back</h1>
          <p className="font-hanken text-lg text-on-surface-variant">Resume your adventure with Wanderlast</p>
        </div>

        <div className="bg-surface-container-lowest shadow-2xl w-full max-w-[480px] p-8 md:p-12 border border-outline-variant">
          {error && <p className="mb-6 p-3 bg-error-container text-on-error-container text-sm font-bold text-center rounded">{error}</p>}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="font-bold text-xs text-on-surface uppercase tracking-widest" htmlFor="email">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">mail</span>
                <input 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 outline-none" 
                  id="email" 
                  placeholder="Enter your email" 
                  type="email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="font-bold text-xs text-on-surface uppercase tracking-widest" htmlFor="password">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">lock</span>
                <input 
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 outline-none" 
                  id="password" 
                  placeholder="Enter your password" 
                  type="password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input className="w-4 h-4 text-primary border-outline focus:ring-primary-fixed rounded-sm" type="checkbox"/>
                <span className="font-hanken text-on-surface-variant group-hover:text-on-surface transition-colors">Remember me</span>
              </label>
              <Link className="font-hanken text-primary font-bold hover:underline" href="#">Forgot password?</Link>
            </div>

            <button 
              disabled={loading}
              className="w-full bg-primary text-on-primary py-4 font-bold flex items-center justify-center gap-2 transition-all hover:bg-primary-container group disabled:opacity-50" 
              type="submit"
            >
              {loading ? 'Signing In...' : 'Sign In'}
              {!loading && <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>}
            </button>

            <div className="relative flex py-4 items-center">
              <div className="flex-grow border-t border-outline-variant"></div>
              <span className="flex-shrink mx-4 text-outline font-bold text-xs uppercase tracking-widest">Or continue with</span>
              <div className="flex-grow border-t border-outline-variant"></div>
            </div>

            <button className="w-full border border-outline-variant py-4 flex items-center justify-center gap-3 font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200" type="button">
              <img 
                alt="Google" 
                className="w-5 h-5" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdpGVPbwWmjKeHfbfDCYxvyeOEUg4INFFjB7THRa17KuUYpMOtw-gn9ts9QcW1L4jsYRyxPiy9CCEAZ9SBkEnGTppq4QemlFL2gclZA59x-VUZv0xp3hsBpei04TZlLj6rVqjwj9RVPkBYMeU1w6qqHuzF8lE8fyOWr8i2qkl7Z90IF0X1ICrgC0leFJiDrKTZKD49WUSiGK-inGwSrCDmzMHDnNBxCfbDpoBYYt86KpDOOaGwFx5svLBZz0VUFsW2fgcSTZJcEAUt"
              />
              Sign Up With Google
            </button>

            <p className="text-center font-hanken text-on-surface-variant">
              Don't have an account? <Link className="text-primary font-bold hover:underline" href="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
