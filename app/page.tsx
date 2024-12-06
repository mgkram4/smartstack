"use client"

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Code, Database, Lock, Smartphone, Star, Users, BarChart, Globe } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

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
              Transform Your Vision Into
              <span className="block text-[#0066CC]">
                Digital Reality
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Award-winning web development agency crafting exceptional digital experiences
              that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="group bg-gradient-to-r from-[#0066CC] to-[#003366] text-white px-8 py-4 rounded-lg flex items-center justify-center">
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
            ].map((feature, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1
              });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="relative bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#0066CC]/50 transition-all duration-300">
                    <div className="text-[#0066CC] mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "12+", label: "Years Experience" },
              { number: "40+", label: "Team Members" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#0066CC] mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
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
                features: ["Custom Web Applications", "API Development", "Database Design", "Cloud Deployment"]
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI Integration",
                price: "From $8k",
                features: ["Custom ML Models", "AI-Powered Features", "Data Analysis", "Automation Solutions"],
                featured: true
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Enterprise Solutions",
                price: "Custom",
                features: ["Scalable Architecture", "Security Implementation", "Performance Optimization", "24/7 Support"]
              }
            ].map((service, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1
              });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative ${
                    service.featured ? 'border-2 border-[#0066CC]' : 'border border-white/10'
                  } rounded-xl bg-white/5 p-8`}
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
                      <motion.li 
                        key={i} 
                        className="flex items-center text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 bg-[#0066CC] rounded-full mr-2" />
                        {feature}
                      </motion.li>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-gray-300">How we bring your vision to life</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, title: "Discovery", description: "Understanding your needs" },
              { icon: <Brain className="w-8 h-8" />, title: "Strategy", description: "Planning the solution" },
              { icon: <Code className="w-8 h-8" />, title: "Development", description: "Building your product" },
              { icon: <BarChart className="w-8 h-8" />, title: "Launch", description: "Deploying & optimizing" }
            ].map((step, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1
              });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <div className="inline-block p-4 rounded-full bg-[#0066CC]/20 mb-4">
                    <div className="text-[#0066CC]">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-[#0066CC]/30" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-gray-300">What our clients say about us</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The team delivered beyond our expectations. Their technical expertise and attention to detail are unmatched.",
                author: "Sarah Johnson",
                role: "CTO, TechCorp"
              },
              {
                quote: "Working with them transformed our business. The AI solutions they implemented increased our efficiency by 300%.",
                author: "Michael Chen",
                role: "CEO, InnovateAI"
              },
              {
                quote: "Professional, responsive, and incredibly skilled. They're now our go-to development partner.",
                author: "Emma Williams",
                role: "Product Manager, StartupX"
              }
            ].map((testimonial, index) => {
              const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1
              });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/5 p-8 rounded-xl border border-white/10"
                >
                  <div className="flex gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#0066CC] text-[#0066CC]" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                  </div>
                </motion.div>
              );
            })}
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
            className="bg-gradient-to-r from-[#0066CC] to-[#003366] p-12 rounded-2xl relative overflow-hidden"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 mb-8">
              Let's discuss how we can help you achieve your goals with our scalable solutions.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0066CC] px-8 py-4 rounded-lg hover:bg-blue-50 transition"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ModernLanding;