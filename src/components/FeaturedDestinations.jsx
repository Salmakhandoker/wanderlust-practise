import React from 'react';
import Link from 'next/link';
import dbConnect from '@/lib/mongodb';
import Destination from '@/models/Destination';

const FeaturedDestinations = async () => {
  let destinations = [];
  try {
    await dbConnect();
    destinations = await Destination.find({ featured: true }).lean();
  } catch (error) {
    console.warn('Note: MongoDB not detected. Using high-fidelity fallback data.');
    // Fallback static data
    destinations = [
      {
        _id: 'fallback-1',
        name: 'Bali Paradise',
        location: 'Bali, Indonesia',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByNDez-Fr6ffI7n_la-vA79r3cAR1_a5rPdsfBgOSo44Hi-XBgQxF7RCswz_ESwTGeAXwwrHsjRV8jNnf2Lmja97i50YhARvPj8S5fPGal3_56OodR2ZAdr3QXOLHX3UYe4zmefv2f5jdXiwYLTyif0SHFDP30HyksHhf7XA4bohwxUYFZcf52AW18H2adCga_h6G3h7qbZsYvjNQLLXUT5BI2y6yA7_ah6uYTePz2e3Bry9wk_GRicCRldxIdTptO4xHi5cNteooG',
        rating: 4.5,
        duration: '7 Days/6 Nights',
        price: 2700
      },
      {
        _id: 'fallback-2',
        name: 'Himalayan Peak',
        location: 'Kathmandu, Nepal',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1vrVijI4lXGlJx-yTQIHtMMyGNwtXklRUp76RnHUeHE8mpRFq_5dQq4Xd7cWRQ-KA-BoukAyuNLn5iIwZGRBCVifMbXKHdP5LhMLf42j-5agvOcF3ahoEaj77BmI5hBRZ7F-_u8ImyUWEVHuXYybIIEw6oZhQduaO6OD2g8DaJCAGOiHCzVj3Cexyg_UpraeZmKBwLqAeNnFfolB5KGtepkZIGWZ0k8JxfQRvpo9x-6NBQOchTXZ2_s6gGLczbpFAO5nFap7JZJVZ',
        rating: 4.8,
        duration: '10 Days/9 Nights',
        price: 3200
      },
      {
        _id: 'fallback-3',
        name: 'Venice Canal',
        location: 'Venice, Italy',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlgpO0EUgXA3Ix0t_fYCPgv5IsHXGzPlSJlOiFMXXKlvWrByQiG35ghZf583AP9bqhCepYW1R7YUPw-76XLVJIX3dhmKEzmY4HPa6GjFqLSL0tHtM7vhdWnFk9zpo6n7zhyPaQ-zb83ncVa-yAOSMFEfJfqVc0K4UgU-vdNY5d9gKE1mQoa4vuD-HosrhAoiA5X9rgQhfmEsGv8UO9X3x1PREwgRfadQ9veII9zTgg_nHHL8pxSad3NFVvfRNhQJKKJEPvTROlfvTj',
        rating: 4.7,
        duration: '5 Days/4 Nights',
        price: 2100
      }
    ];
  }

  return (
    <section className="py-section-gap-desktop px-grid-margin max-w-[1440px] mx-auto mt-20">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-literata text-5xl text-on-surface mb-2">Featured Destinations</h2>
          <p className="font-hanken text-lg text-on-surface-variant">Handpicked travel experiences for the adventure seekers</p>
        </div>
        <a className="text-primary font-bold flex items-center gap-2 group border-b border-transparent hover:border-primary transition-all" href="#">
          ALL DESTINATIONS
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid-gutter">
        {destinations.map((destination) => (
          <div key={destination._id.toString()} className="group bg-surface-container-lowest border border-outline-variant hover:shadow-xl transition-all duration-500 overflow-hidden">
            <div className="relative aspect-[3/2] overflow-hidden">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                alt={destination.name}
                src={destination.image}
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 flex items-center gap-1">
                <span className="font-bold text-on-surface">{destination.rating}</span>
                <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-1 text-on-surface-variant mb-2">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span className="font-bold text-xs tracking-wider uppercase">{destination.location}</span>
              </div>
              <h3 className="font-literata text-2xl text-on-surface mb-4">{destination.name}</h3>
              <div className="flex justify-between items-center text-on-surface-variant mb-6 pb-6 border-b border-outline-variant">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  <span className="font-hanken">{destination.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-literata text-2xl text-primary font-bold">${destination.price}</span>
                  <Link 
                    href={`/destinations/${destination._id.toString()}`}
                    className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold hover:bg-primary-container transition-colors ml-4"
                  >
                    Explore
                  </Link>
                </div>
              </div>
              <a className="text-primary font-bold flex items-center gap-1 group/link" href="#">
                BOOK NOW <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">north_east</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinations;
