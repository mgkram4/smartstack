interface ZoomMeetingParams {
  topic: string;
  dateTime: string;
  duration: number;
}

interface ZoomMeetingResponse {
  id: string;
  join_url: string;
  start_url: string;
  // Add other fields as needed
}

export async function createZoomMeeting({
  topic,
  dateTime,
  duration,
}: ZoomMeetingParams): Promise<ZoomMeetingResponse> {
  if (!process.env.ZOOM_JWT_TOKEN) {
    throw new Error('Zoom JWT token is not configured');
  }

  try {
    const response = await fetch('https://api.zoom.us/v2/users/me/meetings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ZOOM_JWT_TOKEN}`,
      },
      body: JSON.stringify({
        topic,
        type: 2, // Scheduled meeting
        start_time: dateTime,
        duration,
        settings: {
          host_video: true,
          participant_video: true,
          join_before_host: false,
          mute_upon_entry: true,
          waiting_room: true,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create Zoom meeting');
    }

    return response.json();
  } catch (error) {
    console.error('Zoom API error:', error);
    throw error;
  }
}