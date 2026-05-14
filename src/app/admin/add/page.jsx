'use client';

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function AdminAddPage() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    category: '',
    price: '',
    duration: '',
    image: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/admin/destinations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
          featured: false, // Default for new ones
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage({ type: 'success', text: 'Travel package added successfully!' });
        setFormData({
          name: '',
          location: '',
          category: '',
          price: '',
          duration: '',
          image: '',
          description: '',
        });
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to add package' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Connection failed' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-on-surface font-hanken min-h-screen">
      <Navbar />
      <main className="py-section-gap-desktop max-w-[1440px] mx-auto px-grid-margin">
        <div className="grid grid-cols-12 gap-grid-gutter">
          {/* Sidebar / Back Navigation */}
          <div className="col-span-12 mb-8">
            <Link className="inline-flex items-center gap-2 text-primary hover:underline group" href="/">
              <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
              <span className="font-bold text-xs uppercase tracking-widest">Back to Dashboard</span>
            </Link>
          </div>

          {/* Header Section */}
          <div className="col-span-12 md:col-span-8 mb-12">
            <h1 className="font-literata text-7xl mb-4 text-on-surface">Add New Travel Package</h1>
            <p className="font-hanken text-lg text-on-surface-variant max-w-2xl">
              Create a new premium travel experience for our clients. Ensure all details are accurate to maintain our high standards of elevated exploration.
            </p>
          </div>

          {/* Form Container */}
          <div className="col-span-12 lg:col-span-10">
            <div className="bg-surface-container-lowest p-12 border border-outline-variant shadow-sm rounded-lg">
              {message.text && (
                <div className={`mb-8 p-4 rounded-lg text-center font-bold ${
                  message.type === 'success' ? 'bg-secondary-container text-on-secondary-container' : 'bg-error-container text-on-error-container'
                }`}>
                  {message.text}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-grid-gutter gap-y-8">
                  {/* Destination Name */}
                  <div className="col-span-2">
                    <label className="block font-bold text-xs uppercase text-on-surface-variant mb-2 tracking-widest">Destination Name</label>
                    <input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white border border-outline-variant px-4 py-3 text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all" 
                      placeholder="Bali Paradise" 
                      type="text"
                    />
                  </div>
                  {/* Country */}
                  <div>
                    <label className="block font-bold text-xs uppercase text-on-surface-variant mb-2 tracking-widest">Country / Location</label>
                    <input 
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full bg-white border border-outline-variant px-4 py-3 text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all" 
                      placeholder="Indonesia" 
                      type="text"
                    />
                  </div>
                  {/* Category */}
                  <div>
                    <label className="block font-bold text-xs uppercase text-on-surface-variant mb-2 tracking-widest">Category</label>
                    <div className="relative">
                      <select 
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="w-full appearance-none bg-white border border-outline-variant px-4 py-3 text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all"
                      >
                        <option value="">Select Category</option>
                        <option value="Beach">Beach</option>
                        <option value="Mountain">Mountain</option>
                        <option value="Urban Retreat">Urban Retreat</option>
                        <option value="Safari">Safari</option>
                        <option value="Cultural">Cultural</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
                      </div>
                    </div>
                  </div>
                  {/* Price */}
                  <div>
                    <label className="block font-bold text-xs uppercase text-on-surface-variant mb-2 tracking-widest">Price (USD)</label>
                    <input 
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      className="w-full bg-white border border-outline-variant px-4 py-3 text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all" 
                      placeholder="e.g., 1299" 
                      type="number"
                    />
                  </div>
                  {/* Duration */}
                  <div>
                    <label className="block font-bold text-xs uppercase text-on-surface-variant mb-2 tracking-widest">Duration</label>
                    <input 
                      required
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                      className="w-full bg-white border border-outline-variant px-4 py-3 text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all" 
                      placeholder="e.g., 7 Days / 6 Nights" 
                      type="text"
                    />
                  </div>
                  {/* Image URL */}
                  <div className="col-span-2">
                    <label className="block font-bold text-xs uppercase text-on-surface-variant mb-2 tracking-widest">Image URL</label>
                    <input 
                      required
                      value={formData.image}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      className="w-full bg-white border border-outline-variant px-4 py-3 text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all" 
                      placeholder="https://example.com/image.jpg" 
                      type="text"
                    />
                  </div>
                  {/* Description */}
                  <div className="col-span-2">
                    <label className="block font-bold text-xs uppercase text-on-surface-variant mb-2 tracking-widest">Description</label>
                    <textarea 
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="w-full bg-white border border-outline-variant px-4 py-3 text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all resize-none" 
                      placeholder="Describe the travel experience..." 
                      rows="6"
                    ></textarea>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row justify-end gap-4 pt-6 border-t border-outline-variant">
                  <button 
                    type="button"
                    onClick={() => window.history.back()}
                    className="px-10 py-4 border border-outline-variant text-on-surface font-bold text-xs uppercase tracking-widest hover:bg-surface-container-low transition-all"
                  >
                    Cancel
                  </button>
                  <button 
                    disabled={loading}
                    className="px-10 py-4 bg-primary text-on-primary font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary-container transition-all group disabled:opacity-50" 
                    type="submit"
                  >
                    {loading ? 'Adding...' : 'Add Travel Package'}
                    {!loading && <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Tips Sidebar */}
          <div className="hidden lg:block lg:col-span-2 space-y-8">
            <div className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
              <h3 className="font-bold text-xs uppercase text-on-surface mb-2">Pro Tip</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">High-resolution photography (1920x1080px) increases conversion rates by up to 45%.</p>
            </div>
            <div className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <h3 className="font-bold text-xs uppercase text-on-surface mb-2">Quality Check</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Ensure descriptions are editorial and focus on unique sensory experiences.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
