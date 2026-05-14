import dbConnect from '@/lib/mongodb';
import Destination from '@/models/Destination';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const { id } = await params;
    const destination = await Destination.findById(id).lean();
    if (!destination) {
      return NextResponse.json({ error: 'Destination not found' }, { status: 404 });
    }
    return NextResponse.json(destination);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch destination' }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  try {
    await dbConnect();
    const { id } = await params;
    const data = await request.json();
    
    const destination = await Destination.findByIdAndUpdate(id, data, { new: true });
    if (!destination) {
      return NextResponse.json({ error: 'Destination not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Updated successfully', destination });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update destination' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const { id } = await params;
    await Destination.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete destination' }, { status: 500 });
  }
}
