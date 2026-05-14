import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dbConnect from '@/lib/mongodb';
import Destination from '@/models/Destination';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import DestinationActions from '@/components/DestinationActions';

export default async function DestinationDetailPage({ params }) {
  const { id } = await params;
  
  let destination = null;
  try {
    await dbConnect();
    destination = await Destination.findById(id).lean();
  } catch (error) {
    console.warn('Note: MongoDB not detected or invalid ID. Using fallback data for Bali.');
    // Fallback data for demonstration if DB is off or ID is "bali-paradise" (placeholder)
    destination = {
      _id: 'bali-paradise',
      name: 'Bali Paradise',
      location: 'Bali, Indonesia',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqVfr278OUhvtwU6gNI-uTRjNipegweh97BdZC1qP7o26Kla7hL4u3WyhUUdxPpUba8XS-D9rRA1eErD46hGPTPqwE4NdxeWGoZFgg0zCQ2sEuJvDzSxGFvUOb-lzjI8zYQhac3YYyvGSOGIaZacCfNHZ2GvCmtXgvSBCBCuEKx9SFdl9eOodnfGA-ZLlqyeMc5SCk3nPmpCPCUqAGWorPL033RuvwORGP2qeOdpGAvSbqvX1U1B6YwaaVXPWgqN0z0i0cRQ3SSyDv',
      rating: 4.9,
      duration: '7 Days / 6 Nights',
      price: 1299,
      category: 'Beach',
      description: 'Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. This curated journey takes you through the heart of the Island of the Gods, combining luxury resort experiences with authentic local immersions.',
      highlights: [
        'Luxury beachfront accommodation at Uluwatu',
        'Private sunset visit to Uluwatu Temple',
        'Traditional Balinese spa treatment for two',
        'Private beach dinner experience under the stars',
        'Guided sunrise trek to Mount Batur summit',
        'VIP airport transfer and 24/7 concierge'
      ],
      gallery: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD-DQ82jIZGjC_Bq3n43dsxxuGYxcACBXJJgsFH9mbhBeCobkVao_hi2RaqLIINr-PqrmDIruaJs1TR4uxzsE_IbmrcQBnpiKNFSYfamOjfIP5s4ln5VAVQM24Q1ZW-enEx2RnDjRMFm8DeNnf6ff5VNJSLJ2TTlocally-accessible-1.jpg',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD8Ja9_J8WJPmXBVZkfNQPhv-h5kA7X-6TP_L19bBihPJ3rZ-m0sZVJWM0KIuCvPz0mZrcyvKwjQ6rwz_LNlj7d0XOS8YsEwiU7Sc2dQiRBWFoRvEHQBou2p6hwXkwf7D94rAUMV3kXO3bvDYvujxOXQACjAEkFalAdJfMHIQ-a_bZDlRj04lu2djEv0_ALRDXIY0DaRccIq113SFzj9MP6cywk7_aUMTprvvL_zS75jZEndC7XNksQGiy1j8DiHCxJ2YnhohdvbIPr',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCOTuLvjuUjIqjFuP3s-ChAakgcw9JfMzyFivKwFaR5SjcbB4V-eq8FmfdXBGOab7R3n2t-GO7ckJpEp9dODM8KYdwYi0WXzORthi5VleREm2S1_mYGrI2NHYyzq4EFkc8DCSulA4Ne_YG8REcmtVA_dXNEzreG46pB8MnUcdqDd7InHKkEiFgSebDPA9nqPswtxK0Y9jkUsNyIU8bfFHOMzlLDwc2G-1orDj_HLyXfZt8V4cY9HX9IvkGbtznwDwE5okTlMcBplIJq',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDBDoQEJwHLokORmtyTGCmyt44wUds7sGI3b_x1NtbHHra3tj_k0IVtonJMLYeiCpsamaJTiO5XDTUxl6YhOtCOqvYQPCr9i7FCRPq4qZPpW8DtDjD2bJvbOGWKNVPaBJAt6jSyhjEBFFgUxJxBnr4hdXgeNUpIFK7clav89y3amcMp0ux47rig_v90A9vneEOJ5-VPyQjN55xMFgNEYQdMp8OPjFV9WFUkuiSr8bsqFdNC6Py4gr0ERx5vc_3_AFHsZ1PSUUeH93WP'
      ]
    };
  }

  if (!destination) {
    notFound();
  }

  return (
    <div className="bg-surface text-on-surface font-hanken antialiased min-h-screen">
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-grid-margin py-base">
        {/* Breadcrumbs & Navigation Actions */}
        <div className="flex justify-between items-center py-8">
          <Link className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-hanken" href="/destinations">
            <span className="material-symbols-outlined text-[1.2rem]">arrow_back</span>
            Back to Destinations
          </Link>
          
          <DestinationActions 
            destinationId={destination._id.toString()} 
            destinationName={destination.name} 
          />
        </div>

        {/* Hero Section */}
        <section className="mb-section-gap-desktop">
          <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden shadow-lg group">
            <img 
              alt={destination.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src={destination.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-grid-gutter">
          {/* Main Content (Left) */}
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-12">
              <div className="flex items-center gap-2 text-primary font-bold text-xs mb-4 uppercase">
                <span className="material-symbols-outlined text-[1.1rem]">location_on</span>
                {destination.location}
              </div>
              <h1 className="font-literata text-7xl mb-4">{destination.name}</h1>
              <div className="flex items-center gap-6 text-on-surface-variant font-hanken">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-secondary fill-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold text-on-surface">{destination.rating}</span>
                  <span>(234 reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined">calendar_today</span>
                  <span>{destination.duration}</span>
                </div>
              </div>
            </div>

            <div className="space-y-section-gap-desktop">
              {/* Overview */}
              <section>
                <h2 className="font-literata text-4xl mb-6">Overview</h2>
                <p className="text-on-surface-variant font-hanken text-lg max-w-2xl leading-relaxed">
                  {destination.description}
                </p>
              </section>

              {/* Highlights */}
              <section>
                <h2 className="font-literata text-4xl mb-8">Highlights</h2>
                <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
                  {destination.highlights?.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <span className="font-hanken text-on-surface-variant">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Image Gallery Bento */}
              {destination.gallery?.length > 0 && (
                <section className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px]">
                  <div className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-sm">
                    <img alt="Gallery 1" className="w-full h-full object-cover" src={destination.gallery[0]} />
                  </div>
                  {destination.gallery[1] && (
                    <div className="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-sm">
                      <img alt="Gallery 2" className="w-full h-full object-cover" src={destination.gallery[1]} />
                    </div>
                  )}
                  {destination.gallery[2] && (
                    <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-sm">
                      <img alt="Gallery 3" className="w-full h-full object-cover" src={destination.gallery[2]} />
                    </div>
                  )}
                  {destination.gallery[3] && (
                    <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-sm">
                      <img alt="Gallery 4" className="w-full h-full object-cover" src={destination.gallery[3]} />
                    </div>
                  )}
                </section>
              )}
            </div>
          </div>

          {/* Sidebar (Right) */}
          <aside className="col-span-12 lg:col-span-4 lg:sticky lg:top-24 h-fit">
            <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-xl shadow-2xl">
              <div className="flex items-end gap-1 mb-8">
                <span className="font-literata text-4xl text-primary font-bold leading-none">${destination.price}</span>
                <span className="text-on-surface-variant font-hanken mb-1">/ per person</span>
              </div>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="font-bold text-xs text-on-surface-variant uppercase">SELECT DATE</label>
                  <div className="relative">
                    <input 
                      className="w-full h-12 px-4 border border-outline-variant rounded-lg bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                      type="date" 
                      defaultValue="2026-05-15"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-xs text-on-surface-variant uppercase">TRAVELERS</label>
                  <select className="w-full h-12 px-4 border border-outline-variant rounded-lg bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none">
                    <option>2 Travelers</option>
                    <option>1 Traveler</option>
                    <option>3 Travelers</option>
                    <option>4+ Travelers</option>
                  </select>
                </div>
                <button className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold flex justify-center items-center gap-2 hover:bg-primary-container transition-colors group" type="button">
                  Book Now
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
              </form>
              <div className="mt-8 space-y-4 pt-8 border-t border-outline-variant">
                <div className="flex items-center gap-3 text-on-surface-variant font-hanken">
                  <span className="material-symbols-outlined text-primary text-[1.2rem]">verified</span>
                  <span>Free cancellation up to 7 days</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant font-hanken">
                  <span className="material-symbols-outlined text-primary text-[1.2rem]">verified</span>
                  <span>Travel insurance included</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant font-hanken">
                  <span className="material-symbols-outlined text-primary text-[1.2rem]">verified</span>
                  <span>24/7 customer support</span>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-primary-container/10 p-6 rounded-xl border border-primary-container/20">
              <h4 className="font-bold text-primary mb-2">Need help?</h4>
              <p className="text-on-surface-variant font-hanken text-body-md mb-4">Our travel experts are available to help you plan your perfect {destination.name} escape.</p>
              <a className="text-primary font-bold flex items-center gap-1 hover:underline" href="#">
                Talk to an Agent
                <span className="material-symbols-outlined text-[1rem]">open_in_new</span>
              </a>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
