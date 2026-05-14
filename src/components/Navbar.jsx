'use client';

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from '@/lib/auth-client';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-surface-container-lowest dark:bg-on-surface docked full-width top-0 sticky z-50 border-b border-outline-variant dark:border-on-surface-variant shadow-sm">
      <nav className="flex justify-between items-center px-grid-margin py-4 w-full max-w-[1440px] mx-auto">
        <Link href="/" className="font-literata text-2xl font-bold text-primary dark:text-primary-fixed-dim cursor-pointer">Wanderlast</Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className="font-hanken text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" href="/">Home</Link>
          <Link className="font-hanken text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" href="/destinations">Destinations</Link>
          <Link className="font-hanken text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" href="/bookings">My Bookings</Link>
          <Link className="font-hanken text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200" href="/admin/add">Admin</Link>
        </div>
        <div className="flex items-center gap-6">
          {!session ? (
            <>
              <Link href="/login" className="font-hanken text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-200">Login</Link>
              <Link href="/signup" className="bg-primary text-on-primary px-6 py-2 font-hanken hover:bg-primary-container transition-colors duration-200">Sign Up</Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
               <Link href="/profile" className="flex items-center text-primary dark:text-primary-fixed-dim hover:text-primary-container transition-colors duration-200 cursor-pointer">
                {session.user.image ? (
                  <img src={session.user.image} alt={session.user.name} className="w-8 h-8 rounded-full mr-2 border border-primary" />
                ) : (
                  <span className="material-symbols-outlined mr-2">account_circle</span>
                )}
                <span className="font-hanken font-bold">{session.user.name?.split(' ')[0]}</span>
              </Link>
              <button 
                onClick={() => signOut()}
                className="text-on-surface-variant hover:text-error transition-colors font-bold text-xs uppercase tracking-widest"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
