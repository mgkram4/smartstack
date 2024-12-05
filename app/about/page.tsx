// app/about/page.tsx

"use client"

import { motion } from 'framer-motion';
import { Building, Target, Trophy, Users } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Trophy },
    { number: "50+", label: "Team Members", icon: Users },
    { number: "98%", label: "Client Satisfaction", icon: Target },
    { number: "10+", label: "Years Experience", icon: Building }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      image: "/team/sarah.jpg",
      bio: "PhD in Machine Learning from Stanford"
    },
    {
      name: "Mark Garcia",
      role: "CTO",
      image: "/team/mark.jpg",
      bio: "15 years in enterprise software"
    },
    // Add more team members
  ];

  return (
    <main className="bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Building the Future of
              <span className="text-blue-400 block">Intelligent Software</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge AI with enterprise-grade development to create 
              solutions that transform businesses.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-blue-500/10 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                We believe in democratizing AI technology and making it accessible to 
                businesses of all sizes. Our mission is to help companies leverage the 
                power of artificial intelligence to solve real-world problems and drive 
                meaningful growth.
              </p>
              <ul className="space-y-4">
                {[
                  "Innovation First",
                  "Client Success",
                  "Ethical AI",
                  "Continuous Learning"
                ].map((value) => (
                  <li key={value} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    {value}
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="relative h-[400px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl">
              {/* Add mission-related imagery */}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-gray-300">
              Industry experts committed to delivering excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-800/50 rounded-xl p-6"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;