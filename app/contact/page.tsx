"use client"

import { motion } from 'framer-motion';
import { Calendar, Clock, Sparkles, Users, Video } from 'lucide-react';
import BookingCalendar from '../components/calender';

interface MeetingType {
  icon: React.ElementType;
  title: string;
  duration: string;
  description: string;
  price: string;
  includes: string[];
}

// interface BookingCalendarProps {
//   onBookingConfirmed: (booking: {
//     date: Date;
//     time: string;
//   }) => void;
// }

const meetingTypes: MeetingType[] = [
  {
    icon: Video,
    title: "Discovery Call",
    duration: "30 minutes",
    description: "Let's discuss your vision and how we can bring it to life",
    price: "Free",
    includes: [
      "Project requirements analysis",
      "Technical feasibility assessment",
      "Budget estimation",
      "Development timeline planning"
    ]
  },
  {
    icon: Users,
    title: "Technical Deep Dive",
    duration: "1 hour",
    description: "Detailed technical consultation for your project",
    price: "$150",
    includes: [
      "Architecture design review",
      "Stack recommendations",
      "Security planning",
      "Integration strategies"
    ]
  }
];

export default function BookingPage(): JSX.Element {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 min-h-screen">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-blue-600/10 blur-3xl -z-10" />
            <span className="inline-flex items-center gap-2 text-blue-400 font-medium mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Clock className="w-4 h-4" />
              Book Your Session
            </span>
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
              Lets Build Something
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text block">
                Extraordinary
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Start your journey towards innovative solutions with a personalized consultation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {meetingTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
                    <type.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{type.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      {type.duration}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>

                {type.price && (
                  <div className="bg-blue-500/10 rounded-lg p-4 mb-6">
                    <p className="text-2xl font-bold text-blue-400">{type.price}</p>
                  </div>
                )}

                <ul className="space-y-4 mb-8">
                  {type.includes.map((item) => (
                    <li key={item} className="flex items-center text-gray-300 group-hover:text-blue-400 transition-colors">
                      <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Calendar className="w-4 h-4 group-hover:translate-x-1 transition-transform" />

                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg transition-all flex items-center justify-center gap-2 group">
                  Schedule Now
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Select Your Preferred Time</h2>
            <div className="h-[600px] bg-slate-900/50 rounded-lg flex items-center justify-center border border-slate-700/50">
              <BookingCalendar 
          onBookingConfirmed={({ date, time }: { date: Date; time: string }) => {
            console.log('Booking confirmed:', date, time);
          }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}