"use client"


import { motion } from 'framer-motion';
import { Users, Video } from 'lucide-react';

interface MeetingType {
  icon: any;
  title: string;
  duration: string;
  description: string;
  price?: string;
  includes: string[];
}

const meetingTypes: MeetingType[] = [
  {
    icon: Video,
    title: "Discovery Call",
    duration: "30 minutes",
    description: "Initial consultation to discuss your project needs",
    price: "Free",
    includes: [
      "Project scope discussion",
      "Technology recommendations",
      "Budget planning",
      "Timeline estimation"
    ]
  },
  {
    icon: Users,
    title: "Technical Consultation",
    duration: "1 hour",
    description: "Deep dive into technical requirements",
    price: "$150",
    includes: [
      "Architecture planning",
      "Technical specifications",
      "Integration planning",
      "Security considerations"
    ]
  }
];

export default function BookingPage() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 min-h-screen">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Schedule a Meeting
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the type of meeting that best suits your needs
            </p>
          </motion.div>

          {/* Meeting Types */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {meetingTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
                    <type.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{type.title}</h3>
                    <p className="text-gray-400">{type.duration}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{type.description}</p>

                {type.price && (
                  <p className="text-2xl font-bold text-blue-400 mb-6">{type.price}</p>
                )}

                <ul className="space-y-4 mb-8">
                  {type.includes.map((item) => (
                    <li key={item} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                  Schedule Now
                </button>
              </motion.div>
            ))}
          </div>

          {/* Calendar Integration */}
          <div className="bg-slate-800/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Select Your Preferred Time
            </h2>
            {/* Integrate with Calendly or similar service */}
            <div className="h-[600px] bg-slate-900/50 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Calendar integration placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};