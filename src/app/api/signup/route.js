import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await dbConnect();
    const { name, email, password } = await request.json();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    // Create new user
    const user = await User.create({ name, email, password });
    
    return NextResponse.json({ message: 'User created successfully', user: { id: user._id, name: user.name, email: user.email } }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    if (error.name === 'MongooseServerSelectionError') {
      return NextResponse.json({ error: 'Database connection failed. Is MongoDB running?' }, { status: 500 });
    }
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}
