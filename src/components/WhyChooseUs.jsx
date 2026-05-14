import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="bg-surface-container-low py-section-gap-desktop">
      <div className="px-grid-margin max-w-[1440px] mx-auto text-center mb-16">
        <h2 className="font-literata text-5xl text-on-surface mb-2">Why Choose Wanderlast</h2>
        <p className="font-hanken text-lg text-on-surface-variant">Your trusted partner for exceptional travel experiences</p>
      </div>
      <div className="px-grid-margin max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
        <div className="bg-white p-12 border border-outline-variant text-center hover:shadow-lg transition-all">
          <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-3xl text-primary">verified_user</span>
          </div>
          <h4 className="font-literata text-2xl text-on-surface mb-4">Safe & Secure</h4>
          <p className="font-hanken text-on-surface-variant">Your safety is our priority with comprehensive travel insurance and 24/7 support throughout your journey.</p>
        </div>
        <div className="bg-white p-12 border border-outline-variant text-center hover:shadow-lg transition-all">
          <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-3xl text-primary">map</span>
          </div>
          <h4 className="font-literata text-2xl text-on-surface mb-4">Expert Guides</h4>
          <p className="font-hanken text-on-surface-variant">Local experts who bring destinations to life with authentic cultural insights and hidden gem discoveries.</p>
        </div>
        <div className="bg-white p-12 border border-outline-variant text-center hover:shadow-lg transition-all">
          <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-3xl text-primary">support_agent</span>
          </div>
          <h4 className="font-literata text-2xl text-on-surface mb-4">24/7 Support</h4>
          <p className="font-hanken text-on-surface-variant">Round-the-clock customer service to assist you wherever your journey takes you, from booking to return.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
