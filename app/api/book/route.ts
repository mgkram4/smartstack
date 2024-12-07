// app/api/book/route.ts
import { ZoomAPIService } from '@/app/lib/zoom/api';
import { Booking, BookingResponse, CreateBookingDTO, MeetingType } from '@/app/types/booking';

import { NextResponse } from 'next/server';

const bookings: Booking[] = [];

export async function POST(req: Request) {
  try {
    const bookingData: CreateBookingDTO = await req.json();
    const { date, time, name, email } = bookingData;

    if (!date || !time || !name || !email) {
      return NextResponse.json<BookingResponse>(
        { 
          success: false, 
          error: 'Missing required fields' 
        },
        { status: 400 }
      );
    }

    // Check if slot is already booked
    const isBooked = bookings.some(
      booking => booking.date === date && booking.time === time
    );

    if (isBooked) {
      return NextResponse.json<BookingResponse>(
        { 
          success: false, 
          error: 'Time slot is no longer available' 
        },
        { status: 409 }
      );
    }

    let zoomMeeting = null;

    // Try to create Zoom meeting if credentials exist
    if (process.env.ZOOM_ACCOUNT_ID && 
        process.env.ZOOM_CLIENT_ID && 
        process.env.ZOOM_CLIENT_SECRET) {
      try {
        const zoomApi = new ZoomAPIService(
          process.env.ZOOM_ACCOUNT_ID,
          process.env.ZOOM_CLIENT_ID,
          process.env.ZOOM_CLIENT_SECRET
        );

        const dateTime = new Date(`${date} ${time}`);
        
        zoomMeeting = await zoomApi.createMeeting({
          topic: `Meeting with ${name}`,
          dateTime: dateTime.toISOString(),
          duration: 30
        });
      } catch (error) {
        console.error('Zoom meeting creation failed:', error);
      }
    }

    const meetingType: MeetingType = zoomMeeting ? 'ZOOM' : 'LOCAL';

    // Create booking
    const newBooking: Booking = {
      id: Date.now().toString(),
      date,
      time,
      name,
      email,
      meetingType,
      joinUrl: zoomMeeting?.join_url || null,
      startUrl: zoomMeeting?.start_url || null,
      createdAt: new Date().toISOString()
    };

    bookings.push(newBooking);

    return NextResponse.json<BookingResponse>({
      success: true,
      data: newBooking
    });

  } catch (error) {
    console.error('Booking creation error:', error);
    return NextResponse.json<BookingResponse>(
      { 
        success: false, 
        error: 'Failed to create booking'
      },
      { status: 500 }
    );
  }
}