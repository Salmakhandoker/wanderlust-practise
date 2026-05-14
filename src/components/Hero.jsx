import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[819px] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          alt="Aerial view of a tropical bay"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrqt3M4d678xD3kYUGuqN9QHQBChPmJwWzwUfd9-B_QU-kdh4j0X_K04oTcp3YFOUYmhcCbs9CODLjgeyMBE6V6zGFtCPTJekFRV9_0RlbcS5XbODTyEtE_PVjyjOxRSR2PxO885un5_omeLLky_h6NDw4AJi9Zz3bfibXF1c5bv1vaLtB2TQGmksPxm2swsqHhXaUqMI2Qdzw-Su_OY_XvsRgyE593WJrkgO07qeFGn1cK0ZECYfs_bbiOKnYG4hZ9HcZtnrHCttG"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 text-center px-grid-margin max-w-4xl">
        <h1 className="font-literata text-6xl text-white mb-6 leading-tight">Discover Your Next Adventure</h1>
        <p className="font-hanken text-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Explore breathtaking destinations and create unforgettable memories with our curated travel experiences designed for the refined explorer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary-container text-on-primary-container px-10 py-4 flex items-center justify-center gap-2 group transition-all duration-300">
            EXPLORE NOW
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 hover:bg-white/20 transition-all duration-300">
            VIEW DESTINATION
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-[1100px] px-grid-margin z-20">
        <div className="bg-white shadow-2xl flex flex-wrap md:flex-nowrap border border-outline-variant">
          <div className="flex-1 min-w-[200px] p-6 border-r border-outline-variant hover:bg-surface-container-low transition-colors group">
            <label className="block font-bold text-xs tracking-wider text-on-surface-variant mb-1 group-hover:text-primary">LOCATION</label>
            <input 
              className="w-full bg-transparent border-none p-0 focus:ring-0 font-hanken text-on-surface placeholder:text-outline" 
              placeholder="Address, City or Zip" 
              type="text"
            />
          </div>
          <div className="flex-1 min-w-[200px] p-6 border-r border-outline-variant hover:bg-surface-container-low transition-colors group">
            <label className="block font-bold text-xs tracking-wider text-on-surface-variant mb-1 group-hover:text-primary">DATE/DURATION</label>
            <input 
              className="w-full bg-transparent border-none p-0 focus:ring-0 font-hanken text-on-surface placeholder:text-outline" 
              placeholder="Anytime/3 Days" 
              type="text"
            />
          </div>
          <div className="flex-1 min-w-[200px] p-6 border-r border-outline-variant hover:bg-surface-container-low transition-colors group">
            <label className="block font-bold text-xs tracking-wider text-on-surface-variant mb-1 group-hover:text-primary">BUDGET</label>
            <input 
              className="w-full bg-transparent border-none p-0 focus:ring-0 font-hanken text-on-surface placeholder:text-outline" 
              placeholder="$0-$3000" 
              type="text"
            />
          </div>
          <div className="flex-1 min-w-[150px] p-6 hover:bg-surface-container-low transition-colors group">
            <label className="block font-bold text-xs tracking-wider text-on-surface-variant mb-1 group-hover:text-primary">PEOPLE</label>
            <input 
              className="w-full bg-transparent border-none p-0 focus:ring-0 font-hanken text-on-surface placeholder:text-outline" 
              placeholder="5-10" 
              type="text"
            />
          </div>
          <button className="bg-primary text-on-primary px-10 py-6 font-bold hover:bg-primary-container transition-all flex items-center justify-center gap-2">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
