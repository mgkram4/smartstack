
import { Booking } from '@/app/types/booking';
import { NextResponse } from 'next/server';

interface ErrorResponse {
  error: string;
}

type AvailabilityResponse = Booking[] | ErrorResponse;

const bookings: Booking[] = [];

export async function GET(req: Request): Promise<NextResponse<AvailabilityResponse>> {
  try {
    const { searchParams } = new URL(req.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    if (!startDate || !endDate) {
      return NextResponse.json<ErrorResponse>(
        { error: 'Start date and end date are required' },
        { status: 400 }
      );
    }

    const filteredBookings = bookings.filter(booking => 
      booking.date >= startDate && booking.date <= endDate
    );

    return NextResponse.json<Booking[]>(filteredBookings);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch availability';
    return NextResponse.json<ErrorResponse>(
      { error: errorMessage },
      { status: 500 }
    );
  }
}