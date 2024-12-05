"use client"

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Code, Database, Lock, Smartphone } from 'lucide-react';

const ModernLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#001F3F] to-gray-900">
    
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Build Smarter with
              <span className="block text-[#0066CC]">AI-Powered Development</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              From responsive web apps to advanced AI integration. 
              Scale your technology as your business grows.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-[#0066CC] to-[#003366] text-white px-8 py-4 rounded-lg flex items-center justify-center group">
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-[#0066CC] text-white px-8 py-4 rounded-lg hover:bg-[#0066CC]/10 transition">
                View Our Work
              </button>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: <Code className="w-6 h-6" />,
                title: "Modern Development",
                description: "Next.js, React, TypeScript"
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI Integration",
                description: "Custom ML Solutions"
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Mobile First",
                description: "Cross-platform Apps"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0066CC]/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#0066CC]/50 transition-colors">
                  <div className="text-[#0066CC] mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0066CC]/5" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-300">End-to-end solutions for your digital needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-8 h-8" />,
                title: "Full Stack Development",
                price: "From $5k",
                features: [
                  "Custom Web Applications",
                  "API Development",
                  "Database Design",
                  "Cloud Deployment"
                ]
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI Integration",
                price: "From $8k",
                features: [
                  "Custom ML Models",
                  "AI-Powered Features",
                  "Data Analysis",
                  "Automation Solutions"
                ],
                featured: true
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Enterprise Solutions",
                price: "Custom",
                features: [
                  "Scalable Architecture",
                  "Security Implementation",
                  "Performance Optimization",
                  "24/7 Support"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative ${
                  service.featured ? 'border-2 border-[#0066CC]' : 'border border-white/10'
                } rounded-xl bg-white/5 backdrop-blur-sm p-8`}
              >
                <div className={`inline-block p-3 rounded-lg ${
                  service.featured ? 'bg-[#0066CC]' : 'bg-white/10'
                } mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-[#0066CC] font-bold mb-6">{service.price}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 bg-[#0066CC] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full py-3 rounded-lg ${
                  service.featured
                    ? 'bg-gradient-to-r from-[#0066CC] to-[#003366] text-white'
                    : 'border border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC]/10'
                } transition`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8">
              Lets discuss how we can help you achieve your goals with our scalable solutions.
            </p>
            <button className="bg-gradient-to-r from-[#0066CC] to-[#003366] text-white px-8 py-4 rounded-lg hover:opacity-90 transition">
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ModernLanding;