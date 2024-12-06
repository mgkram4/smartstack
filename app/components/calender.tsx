import { addDays, format } from 'date-fns';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface BookingDetails {
    date: Date;
    time: string;
  }
  
  interface BookingCalendarProps {
    onBookingConfirmed?: (booking: BookingDetails) => void;
  }
  
        
  export default function BookingCalendar({ onBookingConfirmed }: BookingCalendarProps) {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>('');
  
    const dates = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i));
  
    const timeSlots = [
      '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
      '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
      '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'
    ];
  
    const handleConfirm = () => {
      if (selectedDate && selectedTime) {
        onBookingConfirmed?.({ date: selectedDate, time: selectedTime });
      }
    };
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-slate-900 rounded-2xl p-8 shadow-xl"
      >
        <h2 className="text-3xl font-bold text-white mb-8">
          Book Your Session
        </h2>
  
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
            <button
              onClick={handleConfirm}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 
                hover:from-blue-700 hover:to-indigo-700 text-white font-medium
                py-3 rounded-xl transition-all duration-200 shadow-lg
                hover:shadow-blue-500/25"
            >
              Confirm Booking
            </button>
          </motion.div>
        )}
      </motion.div>
    );
  }