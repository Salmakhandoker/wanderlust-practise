"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-on-surface dark:bg-surface-container-lowest full-width py-section-gap-desktop">
      <div className="grid grid-cols-12 gap-grid-gutter px-grid-margin max-w-[1440px] mx-auto">
        <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
          <div className="font-literata text-4xl text-surface-container-lowest dark:text-on-surface mb-4 block">Wanderlast</div>
          <p className="font-hanken text-surface-variant dark:text-on-surface-variant max-w-sm">Your gateway to extraordinary travel experiences around the world. We curate the best for the sophisticated explorer.</p>
          <div className="mt-8 flex gap-4">
            <a className="text-surface-container-lowest dark:text-on-surface hover:text-primary-fixed dark:hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">brand_family</span></a>
            <a className="text-surface-container-lowest dark:text-on-surface hover:text-primary-fixed dark:hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
            <a className="text-surface-container-lowest dark:text-on-surface hover:text-primary-fixed dark:hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-4 lg:col-span-2">
          <h5 className="font-bold text-xs tracking-wider text-surface-container-lowest dark:text-on-surface mb-6 uppercase">Quick Links</h5>
          <ul className="space-y-4">
            <li><a className="font-hanken text-surface-variant dark:text-on-surface-variant hover:text-primary-fixed dark:hover:text-primary transition-colors" href="#">Home</a></li>
            <li><a className="font-hanken text-surface-variant dark:text-on-surface-variant hover:text-primary-fixed dark:hover:text-primary transition-colors" href="#">Destinations</a></li>
            <li><a className="font-hanken text-surface-variant dark:text-on-surface-variant hover:text-primary-fixed dark:hover:text-primary transition-colors" href="#">My Bookings</a></li>
            <li><a className="font-hanken text-surface-variant dark:text-on-surface-variant hover:text-primary-fixed dark:hover:text-primary transition-colors" href="#">My Profile</a></li>
          </ul>
        </div>
        <div className="col-span-12 sm:col-span-4 lg:col-span-2">
          <h5 className="font-bold text-xs tracking-wider text-surface-container-lowest dark:text-on-surface mb-6 uppercase">Support</h5>
          <ul className="space-y-4">
            <li><a className="font-hanken text-surface-variant dark:text-on-surface-variant hover:text-primary-fixed dark:hover:text-primary transition-colors" href="#">Help Center</a></li>
            <li><a className="font-hanken text-surface-variant dark:text-on-surface-variant hover:text-primary-fixed dark:hover:text-primary transition-colors" href="#">Terms of Service</a></li>
            <li><a className="font-hanken text-surface-variant dark:text-on-surface-variant hover:text-primary-fixed dark:hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="col-span-12 sm:col-span-4 lg:col-span-4">
          <h5 className="font-bold text-xs tracking-wider text-surface-container-lowest dark:text-on-surface mb-6 uppercase">Newsletter</h5>
          <p className="font-hanken text-surface-variant dark:text-on-surface-variant mb-4">Subscribe for exclusive travel deals and inspiration.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="flex-1 bg-surface-container-highest/10 border border-outline-variant/30 text-white p-3 focus:ring-1 focus:ring-primary-container outline-none" 
              placeholder="Enter email" 
              type="email"
            />
            <button className="bg-primary text-on-primary px-4 py-2 hover:bg-primary-container transition-all">
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
        <div className="col-span-12 pt-12 mt-12 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-hanken text-surface-variant dark:text-on-surface-variant">© 2024 Wanderlast. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="font-hanken text-surface-variant dark:text-on-surface-variant">English (US)</span>
            <span className="font-hanken text-surface-variant dark:text-on-surface-variant">USD ($)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
