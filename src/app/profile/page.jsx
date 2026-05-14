'use client';

import React, { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';
import { useSession } from '@/lib/auth-client';

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (session?.user) {
      setUser({
        name: session.user.name,
        email: session.user.email,
        image: session.user.image || 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy2_WDgfHcejgwr5OJhLBF6JcN6cmHuQGy4y--Ud-bAcqxm4SJAkEHktnXV2HJp0L5WDpevYG6p5_GdFjIGf3vfsQFPztO_-cHNtn7zb1g6OQxErQFmeW62sBRlTmKBTNlQGzwmmpppwymOi9QgTLybTOBN2cuBxyEFRmkJiTRjashhjdzZZO1K5ZOBfJTV5duN9Wkd3swpCk9TkCIVOIz5cZ6Y-7UpWTRiOc3kfqiuoSyJWlTJLXf0XriMUkf4M0g_ut7zvkA5I99',
        location: 'United States',
        memberSince: 'Mar 2024',
        nationality: 'United States',
        stats: {
          bookings: 12,
          countries: 18,
          upcoming: 2,
          spent: 15750
        },
        activities: [
          {
            id: 1,
            title: 'Paris, France Retreat',
            status: 'Completed',
            description: 'A 5-day luxurious stay at Hotel Plaza Athénée with exclusive river cruise.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChrUXyzPZtSECZhsHwC5jFtEqTmghtKxxX5TLSClzbQP-kpP-AcJI7KB35chAdm--X4kQJm2mf8gStJ5mOTvdBPPQu0TN3SNG3AFbeo-hQCqD5WlyzBtJx7-9AXMwiiQAT0vBdZZ7H_QOWNP1EFBfSuGVtU2VtkKH5bl9rCD2yJvADJ0ZojqHpNnI06EOHpX-tjujZbYn0hrFOJ8HRAWP4x4BlQrgclqnJ4xtHkJkYADUkUH6dA8Q1xBJwWly7HHYvUsjRIT3S78CI'
          },
          {
            id: 2,
            title: 'Ubud, Bali Wellness Week',
            status: 'Confirmed',
            description: 'Wellness and yoga retreat focused on mindfulness and luxury spa experiences.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApk1UEml3ZcwB7gjbZHYpsHgXmGdrvlhjx7XROUZWe3gRtKgP3nmyItmL4NGXtFxajN3AmvH9x82j081MrzyQ_0Ad-EeJgpEXlkXu533mToipWel8PsuPc_Vumcb0xDhFQu4hgz-MBcnCAzVE0REhjECAzw_H2c08pDAgIMiI7k3JNJ5fCqb2vCW5OfDUfKQbgGOzvqJUtB2QpYuUCxqNHFajNRVPV4QWuk4oN5iS9rHNQNMC4vAFmRl02hjaYNpT7NgeM6W2SUS2R'
          }
        ]
      });
    }
  }, [session]);

  if (isPending) return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="font-literata text-4xl text-primary animate-pulse">Verifying Session...</div>
    </div>
  );

  if (!session) return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center gap-6">
      <h1 className="font-literata text-4xl text-on-surface">Secure Access Required</h1>
      <p className="text-on-surface-variant font-hanken">Please sign in to view your travel dashboard.</p>
      <Link href="/login" className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold hover:bg-primary-container transition-all">Sign In to Wanderlast</Link>
    </div>
  );

  if (!user) return null;

  return (
    <div className="bg-surface text-on-surface font-hanken min-h-screen antialiased">
      <Navbar />
      
      <main>
        {/* Header Section */}
        <section className="max-w-[1440px] mx-auto px-grid-margin pt-16 pb-8">
          <h1 className="font-literata text-7xl text-on-surface mb-2">Welcome, {user.name?.split(' ')[0]}</h1>
          <p className="font-hanken text-lg text-on-surface-variant max-w-2xl">Manage your account settings and travel preferences.</p>
        </section>

        {/* Profile Content Grid */}
        <section className="max-w-[1440px] mx-auto px-grid-margin mb-section-gap-desktop">
          <div className="grid grid-cols-12 gap-grid-gutter">
            {/* Profile Identity Card */}
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-surface-container-low border border-outline-variant p-10 rounded-xl sticky top-28">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <img 
                      alt={user.name} 
                      className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-sm" 
                      src={user.image}
                    />
                    <button className="absolute bottom-2 right-2 bg-primary text-on-primary p-2 rounded-full shadow-md hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-sm">photo_camera</span>
                    </button>
                  </div>
                  <h2 className="font-literata text-4xl text-on-surface mb-1">{user.name}</h2>
                  <div className="flex items-center gap-1 text-on-surface-variant mb-8">
                    <span className="material-symbols-outlined text-base">location_on</span>
                    <span className="font-bold text-xs uppercase tracking-widest">{user.location}</span>
                  </div>
                  <div className="w-full space-y-4 mb-8">
                    <div className="flex justify-between items-center py-3 border-b border-outline-variant">
                      <span className="text-on-surface-variant font-bold text-xs uppercase">Member since</span>
                      <span className="font-bold">{user.memberSince}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-outline-variant">
                      <span className="text-on-surface-variant font-bold text-xs uppercase">Nationality</span>
                      <span className="font-bold">{user.nationality}</span>
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-4 px-6 rounded-lg font-bold hover:bg-primary-container transition-all group">
                    <span className="material-symbols-outlined">edit</span>
                    <span>Edit Profile</span>
                    <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">arrow_right_alt</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Statistics & Dashboard */}
            <div className="col-span-12 lg:col-span-8">
              <h3 className="font-literata text-3xl text-on-surface mb-8">Travel Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <StatCard label="Total Bookings" value={user.stats.bookings} icon="flight_takeoff" color="bg-secondary-container" />
                <StatCard label="Countries Visited" value={user.stats.countries} icon="public" color="bg-tertiary-fixed" />
                <StatCard label="Upcoming Trips" value={user.stats.upcoming} icon="calendar_month" color="bg-primary-fixed" />
                <StatCard label="Total Spent" value={`$${user.stats.spent.toLocaleString()}`} icon="payments" color="bg-error-container" />
              </div>

              {/* Recent Activity Section */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
                <div className="px-8 py-6 border-b border-outline-variant flex justify-between items-center">
                  <h4 className="font-literata text-2xl font-bold text-on-surface">Recent Activity</h4>
                  <a className="text-primary font-bold text-xs uppercase tracking-widest hover:underline" href="#">View All</a>
                </div>
                <div className="divide-y divide-outline-variant">
                  {user.activities.map(activity => (
                    <div key={activity.id} className="p-8 flex gap-6 items-start hover:bg-surface transition-colors">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img className="w-full h-full object-cover" alt={activity.title} src={activity.image} />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-1">
                          <h5 className="font-bold">{activity.title}</h5>
                          <span className={`font-bold text-xs uppercase px-2 py-1 rounded ${
                            activity.status === 'Confirmed' ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-surface-container-high text-on-surface-variant'
                          }`}>
                            {activity.status}
                          </span>
                        </div>
                        <p className="text-on-surface-variant text-sm mb-4">{activity.description}</p>
                        <div className="flex gap-4">
                          <Link href="/destinations" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                            {activity.status === 'Completed' ? 'Rebook' : 'View Details'} 
                            <span className="material-symbols-outlined text-xs">
                              {activity.status === 'Completed' ? 'refresh' : 'arrow_outward'}
                            </span>
                          </Link>
                          {activity.status === 'Completed' && (
                            <button className="text-on-surface-variant font-bold text-sm flex items-center gap-1 hover:underline">
                              Receipt <span className="material-symbols-outlined text-xs">download</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function StatCard({ label, value, icon, color }) {
  return (
    <div className="bg-white border border-outline-variant p-8 rounded-xl flex items-center justify-between hover:shadow-lg hover:shadow-primary/5 transition-all">
      <div>
        <p className="text-on-surface-variant font-bold text-xs uppercase mb-2 tracking-widest">{label}</p>
        <p className="font-literata text-4xl text-on-surface font-bold">{value}</p>
      </div>
      <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center text-primary shadow-sm`}>
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
    </div>
  );
}
