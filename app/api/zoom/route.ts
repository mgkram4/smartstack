import { createZoomMeeting } from '@/app/lib/zoom';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Check if Zoom is configured
  if (!process.env.ZOOM_JWT_TOKEN) {
    return NextResponse.json(
      { 
        error: 'Zoom is not configured. Meeting creation is currently unavailable.' 
      },
      { status: 503 }
    );
  }

  try {
    // Validate request body
    const body = await req.json();
    const { topic, dateTime, duration } = body;

    if (!topic || !dateTime || !duration) {
      return NextResponse.json(
        { 
          error: 'Missing required fields. Please provide topic, dateTime, and duration.' 
        },
        { status: 400 }
      );
    }

    // Validate datetime format
    const meetingDate = new Date(dateTime);
    if (isNaN(meetingDate.getTime())) {
      return NextResponse.json(
        { error: 'Invalid dateTime format' },
        { status: 400 }
      );
    }

    // Create meeting
    const meeting = await createZoomMeeting({
      topic,
      dateTime,
      duration: Number(duration),
    });

    return NextResponse.json(meeting);
    
  } catch (error) {
    console.error('Zoom meeting creation error:', error);
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to create Zoom meeting' 
      },
      { status: 500 }
    );
  }
}

// Optional: Add a health check endpoint
export async function GET() {
  return NextResponse.json({
    configured: !!process.env.ZOOM_JWT_TOKEN,
    ready: true
  });
}