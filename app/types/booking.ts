export type MeetingType = 'ZOOM' | 'LOCAL';

export interface Booking {
  id: string;
  date: string;
  time: string;
  name: string;
  email: string;
  meetingType: MeetingType;
  joinUrl?: string | null;
  startUrl?: string | null;
  createdAt: string;
}

// For creating new bookings
export interface CreateBookingDTO {
  date: string;
  time: string;
  name: string;
  email: string;
  meetingType?: MeetingType;
  joinUrl?: string | null;
  startUrl?: string | null;
}

// For responses
export interface BookingResponse {
  success: boolean;
  data?: Booking;
  error?: string;
}