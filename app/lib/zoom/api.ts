import { format } from 'date-fns';
import { ZoomMeetingParams, ZoomMeetingResponse, ZoomTokenResponse } from './types';

export class ZoomAPIService {
  private baseUrl = 'https://api.zoom.us/v2';
  private accessToken: string | null = null;
  private tokenExpiration: number = 0;

  constructor(
    private readonly accountId: string,
    private readonly clientId: string,
    private readonly clientSecret: string
  ) {}

  private async getAccessToken(): Promise<string> {
    if (this.accessToken && Date.now() < this.tokenExpiration) {
      return this.accessToken;
    }

    const tokenEndpoint = 'https://zoom.us/oauth/token';
    const credentials = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64');

    try {
      const response = await fetch(tokenEndpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'grant_type': 'account_credentials',
          'account_id': this.accountId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get access token');
      }

      const data: ZoomTokenResponse = await response.json();
      this.accessToken = data.access_token;
      this.tokenExpiration = Date.now() + (data.expires_in - 300) * 1000;

      return this.accessToken;
    } catch (error) {
      console.error('Error getting Zoom access token:', error);
      throw error;
    }
  }

  async createMeeting(params: ZoomMeetingParams): Promise<ZoomMeetingResponse> {
    try {
      const accessToken = await this.getAccessToken();
      const response = await fetch(`${this.baseUrl}/users/me/meetings`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: params.topic,
          type: 2,
          start_time: format(new Date(params.dateTime), "yyyy-MM-dd'T'HH:mm:ss'Z'"),
          duration: params.duration,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          settings: {
            host_video: true,
            participant_video: true,
            join_before_host: false,
            mute_upon_entry: true,
            waiting_room: true,
            audio: 'both',
            auto_recording: 'none',
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create Zoom meeting');
      }

      return response.json();
    } catch (error) {
      console.error('Error creating Zoom meeting:', error);
      throw error;
    }
  }
}