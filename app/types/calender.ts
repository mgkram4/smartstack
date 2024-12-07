export interface BookingDetails {
    date: Date;
    time: string;
    name: string;
    email: string;
    meetingType?: string;
    joinUrl?: string;
  }
  
  export interface BookingCalendarProps {
    selectedMeetingType?: string;
    onBookingConfirmed: (booking: BookingDetails) => void;
  }
  