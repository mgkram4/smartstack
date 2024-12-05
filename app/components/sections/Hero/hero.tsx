// components/Hero.tsx
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  const benefits = [
    'Custom AI Solutions',
    'Modern Web Development',
    'Enterprise Security',
  ];

  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="text-blue-400 block mt-2">Intelligent Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Leverage cutting-edge AI technology and expert development to scale your business. 
              Built for enterprise, designed for growth.
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-400 mr-2" />
                  {benefit}
                </motion.li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center justify-center group transition-colors"
              >
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-lg transition-colors"
              >
                View Case Studies
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-12">
              <p className="text-gray-400 mb-4">Trusted by innovative companies</p>
              <div className="flex items-center space-x-8">
                {/* Add client logos here */}
                <div className="h-8 w-24 bg-gray-800 rounded animate-pulse" />
                <div className="h-8 w-24 bg-gray-800 rounded animate-pulse" />
                <div className="h-8 w-24 bg-gray-800 rounded animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl overflow-hidden backdrop-blur-xl">
              {/* Add hero visualization or demo */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};