"use client"

import { motion } from 'framer-motion';
import { Check, Mail } from 'lucide-react';

const basicFeatures = [
  "5-7 Pages",
  "Mobile Responsive",
  "Contact Forms",
  "Basic SEO",
  "Social Media Integration"
];

const midFeatures = [
  "Custom Design",
  "User Authentication",
  "Database Integration",
  "Analytics Dashboard",
  "Payment Processing",
  "Basic Chatbot"
];

const enterpriseFeatures = [
  "Custom AI/ML Models",
  "Advanced Analytics",
  "Custom API Development",
  "High-Performance Setup",
  "Advanced Security",
  "Multi-Environment"
];

const addOns = [
  { name: "Analytics Dashboard", price: "1,500" },
  { name: "Custom Chatbot", price: "2,500" },
  { name: "Email Marketing", price: "1,000" },
  { name: "CRM Integration", price: "2,000" },
  { name: "CMS Setup", price: "3,000" },
  { name: "E-commerce", price: "4,000" }
];

export default function PricingPage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 min-h-screen">
      <section className="py-20 mt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing for Every Need
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From simple websites to enterprise solutions, choose the package that fits your business
            </p>
          </motion.div>

          {/* Main Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Basic Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Basic Website</h2>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$3,000</span>
                <span className="text-gray-400"> - $5,000</span>
              </div>
              <ul className="space-y-3 mb-8">
                {basicFeatures.map(feature => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="bg-slate-700/30 p-4 rounded-lg mb-6">
                <h3 className="text-white font-semibold mb-2">Monthly Services</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between text-gray-300">
                    <span>Hosting</span>
                    <span>$50-100/mo</span>
                  </li>
                  <li className="flex justify-between text-gray-300">
                    <span>SSL Certificate</span>
                    <span>$100/year</span>
                  </li>
                  <li className="flex justify-between text-gray-300">
                    <span>Basic Maintenance</span>
                    <span>$200/mo</span>
                  </li>
                </ul>
              </div>
              <button className="w-full py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors">
                Get Started
              </button>
            </motion.div>

            {/* Mid Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 rounded-xl p-8 border-2 border-blue-500 transform scale-105"
            >
              
              <h2 className="text-2xl font-bold text-white mb-4">Business Solution</h2>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$5,000</span>
                <span className="text-gray-400"> - $12,000</span>
              </div>
              <ul className="space-y-3 mb-8">
                {midFeatures.map(feature => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="bg-slate-700/30 p-4 rounded-lg mb-6">
                <h3 className="text-white font-semibold mb-2">Monthly Services</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between text-gray-300">
                    <span>Advanced Hosting</span>
                    <span>$150-300/mo</span>
                  </li>
                  <li className="flex justify-between text-gray-300">
                    <span>Database Management</span>
                    <span>$200/mo</span>
                  </li>
                  <li className="flex justify-between text-gray-300">
                    <span>API Maintenance</span>
                    <span>$300/mo</span>
                  </li>
                </ul>
              </div>
              <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Get Started
              </button>
            </motion.div>

            {/* Enterprise Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-800/50 rounded-xl p-8 border border-slate-700"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Enterprise Custom</h2>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$15,000</span>
                <span className="text-gray-400">+</span>
              </div>
              <ul className="space-y-3 mb-8">
                {enterpriseFeatures.map(feature => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-blue-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="bg-slate-700/30 p-4 rounded-lg mb-6">
                <h3 className="text-white font-semibold mb-2">Monthly Services</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between text-gray-300">
                    <span>Enterprise Hosting</span>
                    <span>$500+/mo</span>
                  </li>
                  <li className="flex justify-between text-gray-300">
                    <span>24/7 Support</span>
                    <span>$1,000+/mo</span>
                  </li>
                  <li className="flex justify-between text-gray-300">
                    <span>AI Maintenance</span>
                    <span>$1,500+/mo</span>
                  </li>
                </ul>
              </div>
              <button className="w-full py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors">
                Contact Us
              </button>
            </motion.div>
          </div>

          {/* Popular Add-ons */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Popular Add-ons</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/30 p-6 rounded-lg border border-slate-700"
                >
                  <h3 className="text-white font-semibold mb-2">{addon.name}</h3>
                  <p className="text-blue-400 font-bold">${addon.price}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center bg-gradient-to-br from-blue-600 to-blue-800 p-12 rounded-xl"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss your project requirements and get a detailed quote.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}