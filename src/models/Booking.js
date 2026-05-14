import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: [true, 'Please provide a booking ID.'],
    unique: true,
  },
  destinationName: {
    type: String,
    required: [true, 'Please provide a destination name.'],
  },
  location: {
    type: String,
    required: [true, 'Please provide a location.'],
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL.'],
  },
  startDate: {
    type: String,
    required: [true, 'Please provide a start date.'],
  },
  endDate: {
    type: String,
    required: [true, 'Please provide an end date.'],
  },
  totalAmount: {
    type: Number,
    required: [true, 'Please provide a total amount.'],
  },
  status: {
    type: String,
    enum: ['Confirmed', 'Pending Approval', 'Cancelled'],
    default: 'Pending Approval',
  }
}, {
  timestamps: true,
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
