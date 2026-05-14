'use client';

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();
      if (response.ok) {
        router.push('/'); // Redirect to home on success
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Connection failed');
    }
  };

  return (
    <div className="font-hanken text-body-md overflow-x-hidden bg-white">
      <Navbar />
      
      <main className="min-h-screen flex flex-col items-center justify-center py-section-gap-desktop bg-surface-container-low px-grid-margin">
        <div className="max-w-[1440px] w-full grid grid-cols-12 gap-grid-gutter items-center">
          {/* Branding/Image Side */}
          <div className="hidden lg:flex col-span-5 flex-col gap-8 pr-12">
            <h1 className="font-literata text-7xl text-primary leading-tight">Your journey begins here.</h1>
            <p className="font-hanken text-lg text-on-surface-variant">
              Join a community of elevated explorers seeking authentic experiences and refined comfort across the globe.
            </p>
            <div className="rounded-xl overflow-hidden shadow-xl aspect-[4/5] relative">
              <img 
                alt="Scenic mountain landscape" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEN0AAtRVdtkaFNpGEPrJtJ89BaPVtQbYFIeSSwHGX3SVMmnEBuNp6wEB83RXQXjjeZw4iksYdXj-u3OG8oRFWsLWn8ErGnBz-kOoMfNvlZbEoW7XZgjBmYTpHi_HaRE8362r8LLCy7UyS8gxQo7L4sSj5u2lIWK5n33XiGO250sNMhtGvJ33Rdm-0z-1VRkmRIk-IsjbV6zlRNE7CwxDAK_rwNOfP6_A9fRl6IinYySt5THWi0AtzevDDUlsyXbPyiCavNMa1M-xx"
              />
            </div>
          </div>

          {/* Form Side */}
          <div className="col-span-12 lg:col-span-7 flex justify-center">
            <div className="bg-surface-container-lowest p-10 md:p-14 rounded-xl shadow-2xl border border-outline-variant w-full max-w-[560px]">
              <div className="text-center mb-10">
                <h2 className="font-literata text-5xl text-on-surface mb-2">Create Account</h2>
                <p className="font-hanken text-on-surface-variant">Start your adventure with Wanderlast</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && <p className="text-error text-center text-sm font-bold bg-error-container p-3 rounded-lg">{error}</p>}
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="font-bold text-xs uppercase text-on-surface-variant tracking-wider">Full Name</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">person</span>
                    <input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 bg-white border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary-fixed-dim transition-all font-hanken" 
                      placeholder="Enter your name" 
                      type="text"
                    />
                  </div>
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label className="font-bold text-xs uppercase text-on-surface-variant tracking-wider">Email Address</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">mail</span>
                    <input 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 bg-white border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary-fixed-dim transition-all font-hanken" 
                      placeholder="Enter your email" 
                      type="email"
                    />
                  </div>
                </div>
                {/* Password */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-bold text-xs uppercase text-on-surface-variant tracking-wider">Password</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                      <input 
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary-fixed-dim transition-all font-hanken" 
                        placeholder="••••••••" 
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-xs uppercase text-on-surface-variant tracking-wider">Confirm Password</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                      <input 
                        required
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        className="w-full pl-12 pr-4 py-4 bg-white border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary-fixed-dim transition-all font-hanken" 
                        placeholder="••••••••" 
                        type="password"
                      />
                    </div>
                  </div>
                </div>
                {/* Primary Action */}
                <button className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold hover:bg-primary-container transition-all duration-200 flex items-center justify-center gap-2 group" type="submit">
                  Create Account
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                {/* Divider */}
                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-outline-variant"></div>
                  <span className="flex-shrink mx-4 text-outline font-bold text-xs uppercase tracking-widest">Or sign up with</span>
                  <div className="flex-grow border-t border-outline-variant"></div>
                </div>
                {/* SSO Action */}
                <button className="w-full border border-outline-variant bg-white text-on-surface-variant py-4 rounded-lg font-bold hover:bg-surface-container-high transition-all duration-200 flex items-center justify-center gap-3" type="button">
                  <img 
                    alt="Google" 
                    className="w-5 h-5" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdpGVPbwWmjKeHfbfDCYxvyeOEUg4INFFjB7THRa17KuUYpMOtw-gn9ts9QcW1L4jsYRyxPiy9CCEAZ9SBkEnGTppq4QemlFL2gclZA59x-VUZv0xp3hsBpei04TZlLj6rVqjwj9RVPkBYMeU1w6qqHuzF8lE8fyOWr8i2qkl7Z90IF0X1ICrgC0leFJiDrKTZKD49WUSiGK-inGwSrCDmzMHDnNBxCfbDpoBYYt86KpDOOaGwFx5svLBZz0VUFsW2fgcSTZJcEAUt"
                  />
                  Sign Up With Google
                </button>
                <p className="text-center text-on-surface-variant mt-8 font-hanken">
                  Already have an account? 
                  <Link className="text-primary font-bold hover:underline ml-1" href="#">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
