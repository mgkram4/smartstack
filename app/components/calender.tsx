"use client"

import { addDays, format } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { BookingDetails } from '../types';

interface BookingCalendarProps {
  onBookingConfirmed?: (booking: BookingDetails) => void;
  selectedMeetingType?: string;
}

export default function BookingCalendar({ onBookingConfirmed, selectedMeetingType }: BookingCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [meetingDetails, setMeetingDetails] = useState<{ joinUrl: string; startUrl: string } | null>(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
  });

  const dates = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i));
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'
  ];

  const handleConfirm = async () => {
    if (!selectedDate || !selectedTime) return;

    setIsLoading(true);
    setError(null);

    try {
      const [hours, minutes] = selectedTime.split(':');
      const isPM = selectedTime.includes('PM');
      const hour24 = isPM ? 
        (parseInt(hours) === 12 ? 12 : parseInt(hours) + 12) : 
        (parseInt(hours) === 12 ? 0 : parseInt(hours));
      
      const dateTime = new Date(selectedDate);
      dateTime.setHours(hour24, parseInt(minutes), 0);

      // Schedule Zoom meeting
      const response = await fetch('/api/zoom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: `${selectedMeetingType || 'Consultation'} with ${bookingDetails.name}`,
          dateTime: dateTime.toISOString(),
          duration: 30,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to schedule meeting');
      }

      const meeting = await response.json();

      // Send confirmation email
      try {
        await fetch('/api/confirmation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: bookingDetails.name,
            email: bookingDetails.email,
            date: format(selectedDate, 'EEEE, MMMM d, yyyy'),
            time: selectedTime,
            meetingType: selectedMeetingType || 'Consultation',
            joinUrl: meeting.join_url
          }),
        });
      } catch (emailError) {
        console.error('Failed to send confirmation email:', emailError);
        // Continue with booking process even if email fails
      }
      
      setMeetingDetails({
        joinUrl: meeting.join_url,
        startUrl: meeting.start_url,
      });

      onBookingConfirmed?.({
        date: selectedDate,
        time: selectedTime,
        ...bookingDetails,
        zoomMeeting: {
          joinUrl: meeting.join_url,
          startUrl: meeting.start_url,
        },
      });

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 8000);
    } catch (err) {
      setError('Failed to schedule meeting. Please try again.');
      console.error('Booking error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto bg-slate-900 rounded-2xl p-8 shadow-xl relative"
    >
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: { type: "spring", stiffness: 300, damping: 25 }
            }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4 bg-black/50 backdrop-blur-sm"
          >
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-1 rounded-2xl shadow-2xl shadow-green-500/20">
              <div className="bg-slate-900 rounded-xl p-8 flex flex-col items-center text-center">
                <div className="bg-green-500 rounded-full p-3 mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
                <p className="text-green-400 mb-6">Your meeting has been scheduled successfully.</p>
                <div className="flex flex-col w-full gap-3">
                  <p className="text-slate-300 text-sm">
                    {format(selectedDate!, 'EEEE, MMMM d')} at {selectedTime}
                  </p>
                  {meetingDetails && (
                    <a
                      href={meetingDetails.joinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition-colors font-medium"
                    >
                      Join Meeting
                    </a>
                  )}
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <h2 className="text-3xl font-bold text-white mb-8">
        Book Your {selectedMeetingType || 'Session'}
      </h2>

      {/* Contact Information */}
      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={bookingDetails.name}
          onChange={(e) => setBookingDetails(prev => ({ ...prev, name: e.target.value }))}
          className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-blue-500 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={bookingDetails.email}
          onChange={(e) => setBookingDetails(prev => ({ ...prev, email: e.target.value }))}
          className="w-full p-3 rounded-xl bg-slate-800 text-white border border-slate-700 focus:border-blue-500 outline-none"
        />
      </div>

      {/* Date Selection */}
      <div className="grid grid-cols-7 gap-3 mb-8">
        {dates.map((date, i) => (
          <button
            key={i}
            onClick={() => setSelectedDate(date)}
            className={`
              p-4 rounded-xl transition-all duration-200
              ${selectedDate?.toDateString() === date.toDateString()
                ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }
            `}
          >
            <p className="text-xs opacity-75">{format(date, 'EEE')}</p>
            <p className="text-lg font-bold mt-1">{format(date, 'd')}</p>
          </button>
        ))}
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div className="grid grid-cols-4 gap-3 mb-8">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`
                p-3 rounded-xl text-sm font-medium transition-all duration-200
                ${selectedTime === time
                  ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                }
              `}
            >
              {time}
            </button>
          ))}
        </div>
      )}

      {/* Booking Summary */}
      {selectedDate && selectedTime && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            Confirm Your Booking
          </h3>
          <p className="text-slate-300 mb-4">
            {format(selectedDate, 'EEEE, MMMM d')} at {selectedTime}
          </p>
          {error && (
            <p className="text-red-400 mb-4 text-sm">{error}</p>
          )}
          <button
            onClick={handleConfirm}
            disabled={isLoading || !bookingDetails.name || !bookingDetails.email}
            className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 
              hover:from-blue-700 hover:to-indigo-700 text-white font-medium
              py-3 rounded-xl transition-all duration-200 shadow-lg
              hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isLoading ? 'Scheduling...' : 'Confirm Booking'}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}