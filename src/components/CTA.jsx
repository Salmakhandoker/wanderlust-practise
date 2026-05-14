import React from 'react';

const CTA = () => {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          alt="Aerial view of tropical islands"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5Ael2WZoTAGszb3qbpjAO1x22loPoeNwvqqa225hjl-wTBcZ6cBHxAzn13rCdoBjYEcwyOvtHtQKHm2pFVPIBBMzQvy6l68LFqtBpwvylAoecFudKw5gd80xEsv0GVLMdfJB7fEa7lfhUYim_1x8JcXndnneRphwQLnurwC8SAgcbpFZCqQGFJkk6RoRqy-EUOm0GS7HEMyX7Vldu8DhlUhg2CdBhAQjO4BKLpYTM13pvCjA24wo0caQxSS8WvSVLtY7wzZ7q-H4"
        />
        <div className="absolute inset-0 bg-on-surface/60 backdrop-blur-[2px]"></div>
      </div>
      <div className="relative z-10 text-center px-grid-margin">
        <h2 className="font-literata text-5xl text-white mb-4">Ready To Start Your Journey?</h2>
        <p className="font-hanken text-lg text-white/80 mb-8 max-w-xl mx-auto">Join thousands of travelers who have discovered the world with us.</p>
        <button className="bg-white text-on-surface px-10 py-4 font-bold hover:bg-surface-variant transition-all flex items-center gap-2 mx-auto group">
          BOOK YOUR TRIP TODAY
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
    </section>
  );
};

export default CTA;
