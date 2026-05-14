import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-section-gap-desktop px-grid-margin max-w-[1440px] mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="font-literata text-5xl text-on-surface mb-2">What Travelers Say</h2>
          <p className="font-hanken text-lg text-on-surface-variant">Real experiences from our happy travelers</p>
        </div>
        <div className="flex gap-4">
          <button className="w-12 h-12 border border-outline-variant flex items-center justify-center rounded-full hover:bg-primary hover:text-on-primary transition-all">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="w-12 h-12 border border-outline-variant flex items-center justify-center rounded-full hover:bg-primary hover:text-on-primary transition-all">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
        <div className="bg-white p-10 border border-outline-variant flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <p className="font-literata text-2xl italic text-on-surface mb-6 leading-relaxed">
              <span className="text-primary text-4xl">“</span>The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.<span className="text-primary text-4xl">”</span>
            </p>
            <div>
              <span className="block text-primary font-bold">Michael Chen</span>
              <span className="text-on-surface-variant text-sm">Singapore</span>
            </div>
          </div>
          <div className="w-32 h-32 flex-shrink-0">
            <img 
              className="w-full h-full object-cover rounded-full" 
              alt="Michael Chen"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR2uvgaNy0OrGET3pL07a0XOFgnjb3HUkTLlcgvPfmPx-pWwK3TfG_VIX4GIcz-iA5vCmkJDjQCTS6rNgXHgwu7Nq3SIhFECQvDvroTJo3hZU51OBO3tO4K7d3ZjNs9hy7cXCaFNVFzTVP-YTfRA3KI0lru-8J5Awsqu2h-8IfQ8R6zcXpJfREiuMnFXm15GSle3vPHCOPMj8ipXAd32-qJV65_9SnVTGD6HZ659tSWCdLJgjP4eQEO37LFdbpud8t1K9HWqnRQ8SL"
            />
          </div>
        </div>
        <div className="bg-white p-10 border border-outline-variant flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <p className="font-literata text-2xl italic text-on-surface mb-6 leading-relaxed">
              <span className="text-primary text-4xl">“</span>Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!<span className="text-primary text-4xl">”</span>
            </p>
            <div>
              <span className="block text-primary font-bold">Sarah Johnson</span>
              <span className="text-on-surface-variant text-sm">New York, USA</span>
            </div>
          </div>
          <div className="w-32 h-32 flex-shrink-0">
            <img 
              className="w-full h-full object-cover rounded-full" 
              alt="Sarah Johnson"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfMzw8Ux1fqVKC14BtAcUsJebgZekVf2CXgZgH-t2QGsMvA1AS-3_GzZ3-RMPcXzPTm8d-lb2Voy0XzZ3Ts5UR6Vx6OeYIrkX2FC2hhUxoYHGJ5mYuhkNkqwQCyzoZq9on6_4dyLBdnpyBY7tUPXfeosyXEc6RlJPqNhwZcEwwYNumR8YVOADSq4TcXGvBvOkU1ON05xgvSSJBDoSLYfXNORPXczVby1y44cBU2ZLGR5vgnGM5iLEddaPo36MmNJeDCTFbmvvIYKgC"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
