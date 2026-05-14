'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function AdminEditPage() {
  const router = useRouter();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    category: '',
    price: '',
    duration: '',
    image: '',
    description: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await fetch(`/api/admin/destinations/${id}`);
        const data = await response.json();
        if (response.ok) {
          setFormData({
            name: data.name,
            location: data.location,
            category: data.category,
            price: data.price,
            duration: data.duration,
            image: data.image,
            description: data.description,
          });
        } else {
          setError(data.error || 'Failed to load data');
        }
      } catch (err) {
        setError('Connection failed');
      } finally {
        setLoading(false);
      }
    };
    fetchDestination();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      const response = await fetch(`/api/admin/destinations/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price)
        }),
      });

      if (response.ok) {
        router.push(`/destinations/${id}`);
      } else {
        const data = await response.json();
        setError(data.error || 'Update failed');
      }
    } catch (err) {
      setError('Connection failed');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl font-bold text-primary">Loading Details...</div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center z-50 p-4 font-hanken">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-8 pt-8 pb-4 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-literata font-semibold text-gray-900">Update Travel Package</h2>
            <p className="text-sm text-gray-500 mt-1">Make changes to the travel package details below</p>
          </div>
          <button onClick={() => router.back()} className="text-gray-400 hover:text-gray-600 transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-4 overflow-y-auto">
          {error && <p className="mb-4 text-error text-sm font-bold bg-error-container p-3 rounded-lg text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6" id="update-package-form">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider" htmlFor="name">Package Name</label>
              <input 
                required
                className="w-full px-4 py-3 bg-gray-50 border-transparent rounded-lg focus:bg-white focus:border-primary transition-all text-gray-800" 
                id="name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Package Name" 
                type="text" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider" htmlFor="location">Country / Location</label>
                <input 
                  required
                  className="w-full px-4 py-2 bg-gray-50 border-transparent rounded-lg focus:bg-white focus:border-primary text-gray-800" 
                  id="location" 
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="e.g., Indonesia" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider" htmlFor="category">Category</label>
                <select 
                  required
                  className="w-full px-4 py-2 bg-gray-50 border-transparent rounded-lg focus:bg-white focus:border-primary text-gray-800 appearance-none" 
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option value="Beach">Beach</option>
                  <option value="Mountain">Mountain</option>
                  <option value="Urban Retreat">Urban Retreat</option>
                  <option value="Safari">Safari</option>
                  <option value="Cultural">Cultural</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider" htmlFor="price">Price (USD)</label>
                <input 
                  required
                  className="w-full px-4 py-2 bg-gray-50 border-transparent rounded-lg focus:bg-white focus:border-primary text-gray-800" 
                  id="price" 
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  placeholder="e.g., 1299" 
                  type="number" 
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider" htmlFor="duration">Duration</label>
                <input 
                  required
                  className="w-full px-4 py-2 bg-gray-50 border-transparent rounded-lg focus:bg-white focus:border-primary text-gray-800" 
                  id="duration" 
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  placeholder="e.g., 7 Days/6 Nights" 
                  type="text" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider" htmlFor="image">Image URL</label>
              <input 
                required
                className="w-full px-4 py-2 bg-gray-50 border-transparent rounded-lg focus:bg-white focus:border-primary text-gray-800" 
                id="image" 
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
                placeholder="https://example.com/image.jpg" 
                type="url" 
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider" htmlFor="description">Description</label>
              <textarea 
                required
                className="w-full px-4 py-2 bg-gray-50 border-transparent rounded-lg focus:bg-white focus:border-primary text-gray-800 resize-none" 
                id="description" 
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Describe the travel experience..." 
                rows="5"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-gray-100 flex flex-col sm:flex-row justify-end gap-4 mt-auto">
          <button 
            onClick={() => router.back()} 
            className="flex items-center justify-center gap-2 px-6 py-2.5 border border-outline-variant text-gray-600 hover:bg-gray-50 rounded-lg font-bold transition-colors"
          >
            Cancel
          </button>
          <button 
            disabled={saving}
            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-on-primary hover:bg-primary-container rounded-lg font-bold transition-colors shadow-sm disabled:opacity-50" 
            form="update-package-form" 
            type="submit"
          >
            {saving ? 'Saving...' : 'Save Changes'}
            {!saving && <span className="material-symbols-outlined text-sm">save</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
