import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dbConnect from '@/lib/mongodb';
import Booking from '@/models/Booking';

export default async function BookingsPage() {
  let bookings = [];
  try {
    await dbConnect();
    bookings = await Booking.find({}).lean();
  } catch (error) {
    console.warn('Note: MongoDB not detected. Using high-fidelity fallback data.');
    // Fallback data
    bookings = [
      {
        _id: '1',
        bookingId: 'WL-98234',
        destinationName: 'Bali Paradise Retreat',
        location: 'Uluwatu, Indonesia',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiacYBD00leAKBMzlFXkxLQduFuJDLyWYf0a1QacWVDfKyDA_g3vJeglgxi9jfP7QOvEXT6_qs6Gy9wtQ6IphspqVENk-N4qCQ2aH48a8vcidAG-QS3wzQdiNKz08ARSR3_1AQbSy3Hn5KQ8cXlQn1N6ZIV-PnA4UhHuotI0TZLb3UUqdjVQGB9qQqg6ekzIpaTvcsXZwczusqvJabibX3Ul7vcYV_pU6XeC_YV5mXI_H_14XuJ9mlmxqAqEJbjTQk-K6mlQXi6SM6',
        startDate: 'May 15, 2024',
        endDate: 'May 22, 2024',
        totalAmount: 1299.00,
        status: 'Confirmed'
      },
      {
        _id: '2',
        bookingId: 'WL-87112',
        destinationName: 'Venice & Italian Riviera',
        location: 'Venice, Italy',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAM4s5C8rUm0ebJX2lD4DEMmCTzDxnrE2rA9Fawg7tSLgdop_eLx9BUhcMbbXevXWMS0-FrgLIut4IQttzUbFeVCVVVH4Ns0mwSpcAU7totzLZgOfEe86QAyvmYyfnYs0L9mjXsOHQtkGMpso9yT9b8DQ2dXlbpbld649aCu0wNRJMuNZsQGZ3eUJmyM7mZwVLf18mr7XH2W3RQaEZY8czx2l2YZqVkGyEsWqO8yLrJsPn3EWKt02fSU5in0wBIanKtmpbr2bIUdIH5',
        startDate: 'June 10, 2024',
        endDate: 'June 20, 2024',
        totalAmount: 3450.00,
        status: 'Pending Approval'
      },
      {
        _id: '3',
        bookingId: 'WL-99045',
        destinationName: 'Swiss Alpine Escape',
        location: 'Zermatt, Switzerland',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD18zeevPLcVNG6gB-2_Zv73yES_uPBUWrdHjzNtLq1x-FuZuFVS8ybuPrO5zB037eQz1JhH178VLZcgHzWwD6JG8_WNrkkDZJEpS2cizi19w-iCeZ3KziLSJ1PIdRPJ9asEmLeDX3TmJJlUIo50gGhhVGHrAnRiT9le6c15S_J1LrFSv1eLp4PCO-hsTpyzperxn0EST3hMIjCNlotz_YKw88wOTCopGl44NOvmOl0kKwZyhi3l70HAy1PAHz9YS_zH_bbLySct6__',
        startDate: 'Sept 02, 2024',
        endDate: 'Sept 09, 2024',
        totalAmount: 2100.00,
        status: 'Confirmed'
      }
    ];
  }

  return (
    <div className="bg-background text-on-surface font-hanken min-h-screen">
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-grid-margin py-section-gap-desktop">
        {/* Dashboard Header */}
        <section className="mb-16">
          <h1 className="font-literata text-7xl text-primary mb-4">My Bookings</h1>
          <p className="font-hanken text-lg text-on-surface-variant max-w-2xl">
            Manage and view your upcoming travel plans. Keep track of your confirmations and prepare for your next adventure.
          </p>
        </section>

        {/* Bookings List */}
        <div className="space-y-8">
          {bookings.map((booking) => (
            <div key={booking._id.toString()} className="bg-surface-container-lowest border border-outline-variant p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start hover:shadow-lg transition-shadow duration-300">
              <div className="w-full md:w-1/3 aspect-[3/2] overflow-hidden">
                <img 
                  alt={booking.destinationName} 
                  className="w-full h-full object-cover" 
                  src={booking.image}
                />
              </div>
              <div className="flex-1 w-full space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 font-bold text-xs rounded-full ${
                    booking.status === 'Confirmed' 
                      ? 'bg-secondary-container text-on-secondary-container' 
                      : 'bg-tertiary-fixed text-on-tertiary-fixed'
                  }`}>
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {booking.status === 'Confirmed' ? 'check_circle' : 'pending'}
                    </span>
                    {booking.status}
                  </span>
                  <span className="font-bold text-xs text-on-surface-variant uppercase tracking-widest">Booking ID: {booking.bookingId}</span>
                </div>
                <div>
                  <h2 className="font-literata text-3xl text-on-surface mb-2">{booking.destinationName}</h2>
                  <div className="flex flex-wrap gap-x-8 gap-y-2 text-on-surface-variant font-hanken">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">calendar_today</span>
                      {booking.startDate} — {booking.endDate}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                      {booking.location}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-outline-variant">
                  <div>
                    <span className="font-bold text-xs text-on-surface-variant block uppercase mb-1">
                      {booking.status === 'Confirmed' ? 'Total Amount' : 'Estimated Total'}
                    </span>
                    <span className="font-literata text-2xl text-primary">${booking.totalAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="px-6 py-2 border border-outline text-primary font-bold text-xs uppercase tracking-widest hover:bg-surface-container-low transition-colors duration-200">
                      {booking.status === 'Confirmed' ? 'View Details' : 'View Request'}
                    </button>
                    <button className={`flex items-center gap-2 text-error font-bold text-xs uppercase tracking-widest hover:underline decoration-2 underline-offset-4`}>
                      <span className="material-symbols-outlined text-[18px]">
                        {booking.status === 'Confirmed' ? 'cancel' : 'delete'}
                      </span>
                      {booking.status === 'Confirmed' ? 'Cancel Trip' : 'Withdraw'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <section className="mt-section-gap-desktop bg-surface-container border border-outline-variant p-10 text-center max-w-4xl mx-auto">
          <h3 className="font-literata text-3xl text-on-surface mb-4">Need help with your bookings?</h3>
          <p className="font-hanken text-lg text-on-surface-variant mb-8">
            Our 24/7 concierge service is available to assist you with modifications, special requests, or travel insurance inquiries.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-on-primary px-8 py-3 font-bold text-xs uppercase tracking-widest hover:bg-primary-container transition-all flex items-center gap-2">
              Contact Concierge <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
