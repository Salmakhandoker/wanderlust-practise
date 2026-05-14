const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env.local
dotenv.config({ path: path.join(__dirname, '../../.env.local') });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/wanderlust';

const DestinationSchema = new mongoose.Schema({
  name: String,
  location: String,
  image: String,
  rating: Number,
  duration: String,
  price: Number,
  featured: Boolean,
  category: String,
  description: String,
  highlights: [String],
  gallery: [String]
});

const BookingSchema = new mongoose.Schema({
  bookingId: String,
  destinationName: String,
  location: String,
  image: String,
  startDate: String,
  endDate: String,
  totalAmount: Number,
  status: String
});

const Destination = mongoose.models.Destination || mongoose.model('Destination', DestinationSchema);
const Booking = mongoose.models.Booking || mongoose.model('Booking', BookingSchema);

const destinations = [
  {
    name: 'Bali Paradise',
    location: 'Bali, Indonesia',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqVfr278OUhvtwU6gNI-uTRjNipegweh97BdZC1qP7o26Kla7hL4u3WyhUUdxPpUba8XS-D9rRA1eErD46hGPTPqwE4NdxeWGoZFgg0zCQ2sEuJvDzSxGFvUOb-lzjI8zYQhac3YYyvGSOGIaZacCfNHZ2GvCmtXgvSBCBCuEKx9SFdl9eOodnfGA-ZLlqyeMc5SCk3nPmpCPCUqAGWorPL033RuvwORGP2qeOdpGAvSbqvX1U1B6YwaaVXPWgqN0z0i0cRQ3SSyDv',
    rating: 4.9,
    duration: '7 Days / 6 Nights',
    price: 1299,
    featured: true,
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-DQ82jIZGjC_Bq3n43dsxxuGYxcACBXJJgsFH9mbhBeCobkVao_hi2RaqLIINr-PqrmDIruaJs1TR4uxzsE_IbmrcQBnpiKNFSYfamOjfIP5s4ln5VAVQM24Q1ZW-enEx2RnDjRMFm8DeNnf6ff5VNJSLJ2TTlx0puRA_FMLPBqryVlsUGXbJR_PdsAuvxzyEOTyx-h1RBIsvxInBbla-Nq8APp6Wpt8Hi3ddlLr0nNt8FuM7FIOgAZ2_8GJotdu7PUe5Oq5Uf6Gb',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD8Ja9_J8WJPmXBVZkfNQPhv-h5kA7X-6TP_L19bBihPJ3rZ-m0sZVJWM0KIuCvPz0mZrcyvKwjQ6rwz_LNlj7d0XOS8YsEwiU7Sc2dQiRBWFoRvEHQBou2p6hwXkwf7D94rAUMV3kXO3bvDYvujxOXQACjAEkFalAdJfMHIQ-a_bZDlRj04lu2djEv0_ALRDXIY0DaRccIq113SFzj9MP6cywk7_aUMTprvvL_zS75jZEndC7XNksQGiy1j8DiHCxJ2YnhohdvbIPr',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCOTuLvjuUjIqjFuP3s-ChAakgcw9JfMzyFivKwFaR5SjcbB4V-eq8FmfdXBGOab7R3n2t-GO7ckJpEp9dODM8KYdwYi0WXzORthi5VleREm2S1_mYGrI2NHYyzq4EFkc8DCSulA4Ne_YG8REcmtVA_dXNEzreG46pB8MnUcdqDd7InHKkEiFgSebDPA9nqPswtxK0Y9jkUsNyIU8bfFHOMzlLDwc2G-1orDj_HLyXfZt8V4cY9HX9IvkGbtznwDwE5okTlMcBplIJq',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDBDoQEJwHLokORmtyTGCmyt44wUds7sGI3b_x1NtbHHra3tj_k0IVtonJMLYeiCpsamaJTiO5XDTUxl6YhOtCOqvYQPCr9i7FCRPq4qZPpW8DtDjD2bJvbOGWKNVPaBJAt6jSyhjEBFFgUxJxBnr4hdXgeNUpIFK7clav89y3amcMp0ux47rig_v90A9vneEOJ5-VPyQjN55xMFgNEYQdMp8OPjFV9WFUkuiSr8bsqFdNC6Py4gr0ERx5vc_3_AFHsZ1PSUUeH93WP'
    ]
  },
  {
    name: 'Maldives Retreat',
    location: 'Maldives',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW1L-gLjjEoh9n4jbpLrz2CCAt6_iQZKDt5zSdZCSTR8bHO8W9e6MngbRUe107inCfwKRDs2qgehK-NX0m8fL9JPBs3ios61PeOA6gq5N0ZyULA0YJul9wLiGbqCZYveLLd6A1yxkjqR-o4uazavlGlnURZC8aBnTZ1icLp8gqNIZBEZXtyS-Sb4L3LOM25_9DEhfsfv1r9YLGeUYNjxIkceAsGNSyCwsyIZuypLwc2hfoY-ViB3mYQjnQ26nPKgzg3GnRgSro3S7S',
    rating: 4.9,
    duration: '5 Days / 4 Nights',
    price: 4500,
    featured: true,
    category: 'Luxury',
    description: 'Escape to a world of crystal clear waters and overwater villas.',
    highlights: ['Overwater bungalow', 'Private reef snorkeling'],
    gallery: []
  },
  {
    name: 'Himalayan Peak',
    location: 'Nepal Highlands',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCslwPaYA9tHV1I5v406k1TeD-y9BuHkDHrKqLUkqjbKbrTAUmS6ZqHexwhcQXLK639lc2cyyUPFE3ZFVvlY7YCi6Xk0zYAL2PF6wFrQer2GhG-Hizo_BBi3u-W3SbEd-xtOKboziP7GiMRuTkKtMbfxzy3zejpbqoCh1Tvg-xy-7kJb_OVX8wXR2aAJUdjI3sJQvJxSH7Urkeol-Fj0OWBc5qAtdwFceXVTQjoT4obhWQpgfAQsYipbf3TsSi_m34dIRXgTa4Fy-IZ',
    rating: 4.7,
    duration: '10 Days / 9 Nights',
    price: 1850,
    featured: true,
    category: 'Adventure',
    description: 'Trek the majestic Himalayas and experience ancient culture.',
    highlights: ['Base camp visit', 'Local Sherpa guide'],
    gallery: []
  },
  {
    name: 'Machu Picchu',
    location: 'Peru',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEmbyzCJUP3Ypa6rh2BZFpLPYmhPxnquyJvEUvSirIJYmvWKAuJJ04iW-zSt8e7XicGxAvmMo2jCYk70-whUsBx31o_polRTf2HThiDc8itD3UUPuIJ4McIyGyJsanolxVD7PLYo91oQPk-eRtcq5tkDYqjpuIyGBt4BSFXEQuU4ZV9eKIpHZXErfNH2CLfrplu-NTIgFQbEUpQuvu-5YmsdL_WcahzJf8XyaG36OWcrIe2RNPhb6vBfqiB2qdJtk1Nmji517pxWzA',
    rating: 4.9,
    duration: '8 Days / 7 Nights',
    price: 3200,
    featured: false,
    category: 'Cultural',
    description: 'Explore the lost city of the Incas.',
    highlights: ['Inca Trail trek', 'Cusco city tour'],
    gallery: []
  },
  {
    name: 'Coastal Serenity',
    location: 'Seychelles',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTHrYKOKKglUp4T1Wo4CKExQreC5oD_PkU1FA9mf9r6vG3j58nRFj1hJmErasXSiWpcgO87Fg1pfKtUGuTt_aat96om9ZUCIoUpuC0ImWUVac_TCeNUOs_mQE0Vw-lkBg6roNSinHgF3SrSRmuzIcRxYlHwr_o7J1GABNDNO-AYBcGY5_MmJmAnKrxqBRDT6luMI2GcP4-Uokm-G2zC54dklfs9R5mR8VtbVPH8zQaHEKy1u1aDYsuCR2aHOv348H4KROBJWHyQwWf',
    rating: 4.6,
    duration: '6 Days / 5 Nights',
    price: 3800,
    featured: false,
    category: 'Beach',
    description: 'Experience untouched island beauty.',
    highlights: ['Private beach access', 'Island hopping tour'],
    gallery: []
  },
  {
    name: 'Desert Horizon',
    location: 'Arizona, USA',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkCO-E3agDMSEcAlI0iVo7eVrQOt4yAbmmP9Seywnuyn2ZsQodOx7oiHres1ntzzEM5EMcBgDf1YWpXxH4qYJjfKCDjY7l9wJ3naxl2CIMMs9YIgBOvclLyd0NL79_YHnP1f9Iap1zmv7h9JdgM72oZSywCIVDb09k05AEJHlSwIVwtOqmKM-Fh21G6eRTKpxsDtZfmdJL3E_uG6_13tsIFeAIYmgqD5OGosn4B0sYs6U9WE9XGdnvwpHLhM-UHJC-OObbrRKjSXoz',
    rating: 4.5,
    duration: '4 Days / 3 Nights',
    price: 1400,
    featured: false,
    category: 'Adventure',
    description: 'Witness the grandeur of the Grand Canyon.',
    highlights: ['Helicopter tour', 'Stargazing in Sedona'],
    gallery: []
  }
];

const bookings = [
  {
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

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');
    
    await Destination.deleteMany({});
    console.log('Cleared existing destinations.');
    await Destination.insertMany(destinations);
    console.log('Successfully seeded destinations.');

    await Booking.deleteMany({});
    console.log('Cleared existing bookings.');
    await Booking.insertMany(bookings);
    console.log('Successfully seeded bookings.');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();
