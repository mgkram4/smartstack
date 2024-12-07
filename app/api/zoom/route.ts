
import { ZoomAPIService } from '@/app/lib/zoom/api';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  if (!process.env.ZOOM_ACCOUNT_ID || !process.env.ZOOM_CLIENT_ID || !process.env.ZOOM_CLIENT_SECRET) {
    return NextResponse.json({ error: 'Zoom configuration missing' }, { status: 500 });
  }

  try {
    const { topic, dateTime, duration } = await req.json();
    const zoomApi = new ZoomAPIService(
      process.env.ZOOM_ACCOUNT_ID,
      process.env.ZOOM_CLIENT_ID,
      process.env.ZOOM_CLIENT_SECRET
    );
    
    const meeting = await zoomApi.createMeeting({
      topic,
      dateTime,
      duration
    });
    
    return NextResponse.json(meeting);
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Failed to create meeting' },
      { status: 500 }
    );
  }
}