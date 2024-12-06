import { stripe } from '@/app/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Check if stripe is properly initialized
  if (!stripe) {
    return NextResponse.json(
      { 
        error: 'Stripe is not configured. Payment processing is currently unavailable.' 
      },
      { status: 503 }
    );
  }

  try {
    // Validate request body
    const body = await req.json();
    const { amount } = body;

    if (!amount || typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount provided' },
        { status: 400 }
      );
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents and ensure integer
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({ 
      clientSecret: paymentIntent.client_secret 
    });

  } catch (error) {
    console.error('Stripe error:', error);
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'An unexpected error occurred' 
      },
      { status: 500 }
    );
  }
}

// Optional: Add a health check endpoint
export async function GET() {
  return NextResponse.json({
    configured: !!stripe,
    ready: true
  });
}