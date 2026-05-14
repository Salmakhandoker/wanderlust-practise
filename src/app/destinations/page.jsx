import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dbConnect from '@/lib/mongodb';
import Destination from '@/models/Destination';
import Link from 'next/link';

export default async function DestinationsPage() {
  let destinations = [];
  try {
    await dbConnect();
    destinations = await Destination.find({}).lean();
  } catch (error) {
    console.warn('Note: MongoDB not detected. Using high-fidelity fallback data.');
    // Fallback data
    destinations = [
      { _id: '1', name: 'Bali Paradise', location: 'Bali, Indonesia', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzWk6yxMuqaoVckaAS-MiBw9p99rGDaOd1RxIsPXTCr-ZxpXSM_cscrr9WvRMwd9UIgyh-bhYWJtY9UwzjzLEr6a_-LE1f-COmEDMX3drDMg13tBvbzGFVljclYQeE0RkmkLQ3CAWiNJY0oWTxVtkbS8Cx-44txNbERWm7LzJhFuMGmTPMf_Gb2mqoT-hSsm5azCFuRNbwCHg-9gBsKWVKeMDXeX7IJsYXK52sOVHz1xYPNgkeRSzriXpjEoZxCHhUwkzCC3lu8WFJ', rating: 4.8, duration: '7 Days / 6 Nights', price: 2700 },
      { _id: '2', name: 'Maldives Retreat', location: 'Maldives', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW1L-gLjjEoh9n4jbpLrz2CCAt6_iQZKDt5zSdZCSTR8bHO8W9e6MngbRUe107inCfwKRDs2qgehK-NX0m8fL9JPBs3ios61PeOA6gq5N0ZyULA0YJul9wLiGbqCZYveLLd6A1yxkjqR-o4uazavlGlnURZC8aBnTZ1icLp8gqNIZBEZXtyS-Sb4L3LOM25_9DEhfsfv1r9YLGeUYNjxIkceAsGNSyCwsyIZuypLwc2hfoY-ViB3mYQjnQ26nPKgzg3GnRgSro3S7S', rating: 4.9, duration: '5 Days / 4 Nights', price: 4500 },
      { _id: '3', name: 'Himalayan Peak', location: 'Nepal Highlands', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCslwPaYA9tHV1I5v406k1TeD-y9BuHkDHrKqLUkqjbKbrTAUmS6ZqHexwhcQXLK639lc2cyyUPFE3ZFVvlY7YCi6Xk0zYAL2PF6wFrQer2GhG-Hizo_BBi3u-W3SbEd-xtOKboziP7GiMRuTkKtMbfxzy3zejpbqoCh1Tvg-xy-7kJb_OVX8wXR2aAJUdjI3sJQvJxSH7Urkeol-Fj0OWBc5qAtdwFceXVTQjoT4obhWQpgfAQsYipbf3TsSi_m34dIRXgTa4Fy-IZ', rating: 4.7, duration: '10 Days / 9 Nights', price: 1850 },
      { _id: '4', name: 'Machu Picchu', location: 'Peru', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEmbyzCJUP3Ypa6rh2BZFpLPYmhPxnquyJvEUvSirIJYmvWKAuJJ04iW-zSt8e7XicGxAvmMo2jCYk70-whUsBx31o_polRTf2HThiDc8itD3UUPuIJ4McIyGyJsanolxVD7PLYo91oQPk-eRtcq5tkDYqjpuIyGBt4BSFXEQuU4ZV9eKIpHZXErfNH2CLfrplu-NTIgFQbEUpQuvu-5YmsdL_WcahzJf8XyaG36OWcrIe2RNPhb6vBfqiB2qdJtk1Nmji517pxWzA', rating: 4.9, duration: '8 Days / 7 Nights', price: 3200 },
      { _id: '5', name: 'Coastal Serenity', location: 'Seychelles', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTHrYKOKKglUp4T1Wo4CKExQreC5oD_PkU1FA9mf9r6vG3j58nRFj1hJmErasXSiWpcgO87Fg1pfKtUGuTt_aat96om9ZUCIoUpuC0ImWUVac_TCeNUOs_mQE0Vw-lkBg6roNSinHgF3SrSRmuzIcRxYlHwr_o7J1GABNDNO-AYBcGY5_MmJmAnKrxqBRDT6luMI2GcP4-Uokm-G2zC54dklfs9R5mR8VtbVPH8zQaHEKy1u1aDYsuCR2aHOv348H4KROBJWHyQwWf', rating: 4.6, duration: '6 Days / 5 Nights', price: 3800 },
      { _id: '6', name: 'Desert Horizon', location: 'Arizona, USA', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkCO-E3agDMSEcAlI0iVo7eVrQOt4yAbmmP9Seywnuyn2ZsQodOx7oiHres1ntzzEM5EMcBgDf1YWpXxH4qYJjfKCDjY7l9wJ3naxl2CIMMs9YIgBOvclLyd0NL79_YHnP1f9Iap1zmv7h9JdgM72oZSywCIVDb09k05AEJHlSwIVwtOqmKM-Fh21G6eRTKpxsDtZfmdJL3E_uG6_13tsIFeAIYmgqD5OGosn4B0sYs6U9WE9XGdnvwpHLhM-UHJC-OObbrRKjSXoz', rating: 4.5, duration: '4 Days / 3 Nights', price: 1400 }
    ];
  }

  return (
    <div className="bg-background text-on-surface font-hanken min-h-screen">
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-grid-margin py-section-gap-desktop">
        {/* Header */}
        <section className="mb-16">
          <h1 className="font-literata text-7xl text-primary mb-4">Explore All Destinations</h1>
          <p className="font-hanken text-lg text-on-surface-variant max-w-2xl">
            From serene beaches to majestic mountains, discover our handpicked selection of extraordinary travel experiences.
          </p>
        </section>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 py-6 border-y border-outline-variant">
          <div className="flex items-center gap-4">
            <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold">All</button>
            <button className="px-6 py-2 border border-outline-variant hover:bg-surface-container-low transition-colors">Beach</button>
            <button className="px-6 py-2 border border-outline-variant hover:bg-surface-container-low transition-colors">Mountain</button>
            <button className="px-6 py-2 border border-outline-variant hover:bg-surface-container-low transition-colors">Cultural</button>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-bold text-sm text-on-surface-variant">SORT BY:</span>
            <select className="bg-transparent border-none font-bold text-primary focus:ring-0 cursor-pointer">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Top Rated</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid-gutter">
          {destinations.map((dest) => (
            <div key={dest._id.toString()} className="group bg-surface-container-lowest border border-outline-variant hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={dest.name} src={dest.image} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 flex items-center gap-1">
                  <span className="font-bold text-on-surface">{dest.rating}</span>
                  <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-1 text-on-surface-variant mb-1">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      <span className="font-bold text-xs uppercase">{dest.location}</span>
                    </div>
                    <h3 className="font-literata text-2xl text-on-surface">{dest.name}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant mb-6">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    <span className="font-hanken text-sm">{dest.duration}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6 pt-6 border-t border-outline-variant">
                  <span className="font-literata text-2xl text-primary font-bold">${dest.price}</span>
                  <Link 
                    href={`/destinations/${dest._id.toString()}`}
                    className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold hover:bg-primary-container transition-colors"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
