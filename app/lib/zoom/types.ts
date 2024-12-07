export interface ZoomMeetingParams {
    topic: string;
    dateTime: string;
    duration: number;
  }
  
  export interface ZoomMeetingResponse {
    id: string;
    join_url: string;
    start_url: string;
    host_email: string;
    topic: string;
    start_time: string;
    duration: number;
  }
  
  export interface ZoomTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
  }