"use client"

import { motion } from 'framer-motion';
import { BookOpen, Code, Linkedin, PersonStandingIcon, Rocket, Trophy, Twitter } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  const achievements = [
    { number: "90+", label: "Tech Talks Delivered", icon: BookOpen },
    { number: "700+", label: "Projects Completed", icon: Code },
    { number: "1500+", label: "Students Mentored", icon: Rocket },
    { number: "5+", label: "Hackathon Wins", icon: Trophy }
  ];

  const expertise = [
    "Full Stack Development",
    "Machine Learning/AI Integration",
    "Mobile App Development",
    "Computer Vision Solutions",
    "Data Analytics"
  ];

  return (
    <main className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-blue-600/10 blur-3xl -z-10" />
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
              Building the Future with
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text block"> Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Pioneering AI solutions and technical excellence
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-slate-700/50"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 h-60 relative rounded-xl overflow-hidden">
                  <Image
                    src="/mark.png"
                    alt="Mark Garcia"
                    fill
                    className="rounded-xl object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-white mb-2">Mark Garcia</h2>
                  <p className="text-blue-400 mb-4 font-medium">Founder & Technical Director</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Masters in Data Analytics candidate with a background in E-Commerce. 
                    Currently serving as Chief Community Officer at GDG and Instructor at 
                    Coding Mind Academy. Specializes in AI integration and full-stack development.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {achievements.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
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

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Technical Expertise</h2>
              <div className="space-y-6">
                {expertise.map((item) => (
                  <div key={item} className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-blue-400 mb-3 font-medium">Frontend</h4>
                  <p className="text-gray-300">Next.js, React, Flutter</p>
                </div>
                <div>
                  <h4 className="text-blue-400 mb-3 font-medium">Backend</h4>
                  <p className="text-gray-300">Node.js, Python, Flask</p>
                </div>
                <div>
                  <h4 className="text-blue-400 mb-3 font-medium">ML/AI</h4>
                  <p className="text-gray-300">TensorFlow, OpenCV, MediaPipe</p>
                </div>
                <div>
                  <h4 className="text-blue-400 mb-3 font-medium">Cloud</h4>
                  <p className="text-gray-300">AWS, Firebase, Git</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Recent Achievement</h2>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Winner of the Kindo Challenge at LAs Largest Gen AI Hackathon with PenguinPal - 
              an AI-powered email management solution recognized among 700+ participants.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Connect With Me</h2>
            <div className="flex justify-center gap-6">
              {[
                { href: "https://x.com/SmartStackLLC", icon: Twitter },
                { href: "https://www.linkedin.com/in/mark-garcia-mg18/", icon: Linkedin },
                { href: "https://mark-garcia.vercel.app/", icon: PersonStandingIcon }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
                >
                  <social.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;