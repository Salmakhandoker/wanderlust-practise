import dbConnect from '@/lib/mongodb';
import Destination from '@/models/Destination';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();

    // Basic validation
    if (!data.name || !data.location || !data.price) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create new destination
    const destination = await Destination.create({
      ...data,
      rating: 4.5, // Default rating for new packages
      featured: false,
      highlights: [], // Optional: can be added later
      gallery: [] // Optional: can be added later
    });
    
    return NextResponse.json({ message: 'Package added successfully', destination }, { status: 201 });
  } catch (error) {
    console.error('Admin add error:', error);
    return NextResponse.json({ error: 'Failed to add travel package' }, { status: 500 });
  }
}
