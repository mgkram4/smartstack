"use client"

import { motion } from 'framer-motion';
import { Clock, Sparkles, Users, Video } from 'lucide-react';
import { useState } from 'react';
import BookingCalendar from '../components/calender';

interface MeetingType {
  icon: React.ElementType;
  title: string;
  duration: string;
  description: string;
  price: string;
  includes: string[];
}

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
  const [selectedMeeting, setSelectedMeeting] = useState<MeetingType | null>(null);

  return (
    <main className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 min-h-screen">
      <section className="pt-20 pb-20">
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

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Meeting Types - Left Column */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Select Meeting Type</h2>
              {meetingTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedMeeting(type)}
                  className={`bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-xl p-6 border cursor-pointer transition-all
                    ${selectedMeeting?.title === type.title 
                      ? 'border-blue-500 ring-2 ring-blue-500/20' 
                      : 'border-slate-700/50 hover:border-blue-500/50'}`}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
                      <type.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{type.title}</h3>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        {type.duration}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4">{type.description}</p>

                  {type.price && (
                    <div className="bg-blue-500/10 rounded-lg p-3 mb-4">
                      <p className="text-xl font-bold text-blue-400">{type.price}</p>
                    </div>
                  )}

                  <ul className="space-y-2">
                    {type.includes.map((item) => (
                      <li key={item} className="flex items-center text-sm text-gray-300">
                        <Sparkles className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Calendar - Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
            >
              {selectedMeeting ? (
                <>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white">Schedule Your {selectedMeeting.title}</h2>
                    <p className="text-gray-400">Select your preferred date and time</p>
                  </div>
                  <BookingCalendar
                    selectedMeetingType={selectedMeeting.title}
                    onBookingConfirmed={({ date, time }) => {
                      console.log('Booking confirmed:', date, time);
                    }}
                  />
                </>
              ) : (
                <div className="h-full flex items-center justify-center text-center p-8">
                  <div className="max-w-md">
                    <h3 className="text-xl font-bold text-white mb-3">Choose a Meeting Type</h3>
                    <p className="text-gray-400">Select a meeting type from the left to continue with your booking</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}