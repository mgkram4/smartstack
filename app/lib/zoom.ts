interface ZoomMeetingConfig {
  topic: string;
  dateTime: string;
  duration: number;
}

export async function createZoomMeeting({ topic, dateTime, duration }: ZoomMeetingConfig) {
  if (!process.env.ZOOM_JWT_TOKEN) {
    throw new Error('Missing ZOOM_JWT_TOKEN');
  }

  const response = await fetch('https://api.zoom.us/v2/users/me/meetings', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.ZOOM_JWT_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      topic,
      type: 2,
      start_time: dateTime,
      duration,
      settings: {
        host_video: true,
        participant_video: true,
        waiting_room: true,
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to create Zoom meeting');
  }

  return response.json();
}