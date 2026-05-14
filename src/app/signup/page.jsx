'use client';

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signUp } from '@/lib/auth-client';

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await signUp.email({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        callbackURL: "/profile"
      });

      if (error) {
        setError(error.message || 'Signup failed');
      } else {
        router.push('/profile');
      }
    } catch (err) {
      setError('Connection failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface text-on-surface font-hanken min-h-screen">
      <Navbar />
      
      <main className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-section-gap-mobile md:py-section-gap-desktop px-4 bg-background">
        <div className="w-full max-w-[500px] text-center mb-12">
          <h1 className="font-literata text-7xl text-on-surface mb-2">Join Wanderlast</h1>
          <p className="font-hanken text-lg text-on-surface-variant">Create your account to start your journey</p>
        </div>

        <div className="bg-surface-container-lowest shadow-2xl w-full max-w-[480px] p-8 md:p-12 border border-outline-variant">
          {error && <p className="mb-6 p-3 bg-error-container text-on-error-container text-sm font-bold text-center rounded">{error}</p>}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="font-bold text-xs text-on-surface uppercase tracking-widest" htmlFor="name">Full Name</label>
              <input 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 outline-none" 
                id="name" 
                placeholder="John Doe" 
                type="text"
              />
            </div>

            <div className="space-y-2">
              <label className="font-bold text-xs text-on-surface uppercase tracking-widest" htmlFor="email">Email Address</label>
              <input 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 outline-none" 
                id="email" 
                placeholder="email@example.com" 
                type="email"
              />
            </div>

            <div className="space-y-2">
              <label className="font-bold text-xs text-on-surface uppercase tracking-widest" htmlFor="password">Password</label>
              <input 
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 outline-none" 
                id="password" 
                placeholder="••••••••" 
                type="password"
              />
            </div>

            <div className="space-y-2">
              <label className="font-bold text-xs text-on-surface uppercase tracking-widest" htmlFor="confirmPassword">Confirm Password</label>
              <input 
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                className="w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 outline-none" 
                id="confirmPassword" 
                placeholder="••••••••" 
                type="password"
              />
            </div>

            <button 
              disabled={loading}
              className="w-full bg-primary text-on-primary py-4 font-bold flex items-center justify-center gap-2 transition-all hover:bg-primary-container group disabled:opacity-50" 
              type="submit"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
              {!loading && <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>}
            </button>

            <p className="text-center font-hanken text-on-surface-variant">
              Already have an account? <Link className="text-primary font-bold hover:underline" href="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
