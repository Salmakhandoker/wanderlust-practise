import mongoose from 'mongoose';

const DestinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this destination.'],
  },
  location: {
    type: String,
    required: [true, 'Please provide a location.'],
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL.'],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  duration: {
    type: String,
    required: [true, 'Please provide the duration.'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide the price.'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    required: [true, 'Please provide a category.'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description.'],
  },
  highlights: {
    type: [String],
    default: [],
  },
  gallery: {
    type: [String],
    default: [],
  }
}, {
  timestamps: true,
});

export default mongoose.models.Destination || mongoose.model('Destination', DestinationSchema);
