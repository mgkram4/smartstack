export interface BookingDetails {
    date: Date;
    time: string;
    name?: string;
    email?: string;
    zoomMeeting?: {
      joinUrl: string;
      startUrl: string;
    };
  }
  
  export interface MeetingType {
    icon: React.ElementType;
    title: string;
    duration: string;
    description: string;
    price: string;
    includes: string[];
  }