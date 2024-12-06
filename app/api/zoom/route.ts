import { createZoomMeeting } from '@/app/lib/zoom';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
  try {
    const { topic, dateTime, duration } = await req.json();
    
    const meeting = await createZoomMeeting({
      topic,
      dateTime,
      duration,
    });

    return NextResponse.json(meeting);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}