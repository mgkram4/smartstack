"use client"

import { Brain, Code, Smartphone } from 'lucide-react';
import React from 'react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Full-Stack Development",
    description: "Modern web applications built with Next.js and React",
    features: ["SEO Optimization", "Responsive Design", "API Integration"],
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI Integration",
    description: "Custom AI solutions and ML model deployment",
    features: ["Custom Models", "Data Analysis", "Process Automation"],
    color: "from-purple-400 to-purple-600",
    featured: true
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Development",
    description: "Cross-platform mobile applications",
    features: ["Native Performance", "Offline Support", "Push Notifications"],
    color: "from-cyan-400 to-cyan-600"
  }
];

export default function Services() {
  return (
    <section 
      id="services" 
      className="py-20 relative bg-slate-950"
      aria-label="Our Services"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Comprehensive Solutions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Leverage our expertise in modern development and AI integration to build 
            scalable, future-proof solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`
                relative group 
                ${service.featured ? 'border-2 border-blue-500' : 'border border-white/10'}
                rounded-xl bg-slate-900/50 backdrop-blur-sm p-8 
                hover:border-blue-500/50 transition-colors duration-300
              `}
            >
              <div 
                className={`
                  absolute inset-0 bg-gradient-to-br ${service.color} 
                  opacity-0 group-hover:opacity-5 transition-opacity duration-300 
                  rounded-xl
                `} 
              />
              <div className="relative">
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="mt-8 text-blue-400 flex items-center group/btn hover:text-blue-300 transition-colors duration-300"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}