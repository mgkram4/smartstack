"use client"

import { motion } from 'framer-motion';
import { Bot, ChartBar, Check, Cloud, Database, Sparkles, Zap } from 'lucide-react';

const pricingTiers = [
  {
    name: "Startup Accelerator",
    price: "$5k+",
    description: "Launch your MVP with essential features",
    badge: "Most Popular",
    features: [
      { name: "Custom Design System", included: true },
      { name: "Responsive Development", included: true },
      { name: "User Authentication", included: true },
      { name: "Database Setup", included: true },
      { name: "Cloud Hosting", included: true },
      { name: "Basic AI Features", included: false },
      { name: "Analytics Dashboard", included: false }
    ]
  },
  {
    name: "AI Innovation",
    price: "$15k+",
    description: "Transform your business with AI",
    highlighted: true,
    features: [
      { name: "Everything in Startup", included: true },
      { name: "Custom AI Integration", included: true },
      { name: "Advanced Database", included: true },
      { name: "API Development", included: true },
      { name: "Premium Infrastructure", included: true },
      { name: "Real-time Analytics", included: true },
      { name: "24/7 Support", included: true }
    ]
  },
  {
    name: "Enterprise Suite",
    price: "Custom",
    description: "Full-scale digital transformation",
    features: [
      { name: "Everything in Innovation", included: true },
      { name: "Custom ML Models", included: true },
      { name: "Unlimited Scale", included: true },
      { name: "Advanced Security", included: true },
      { name: "Dedicated Support", included: true },
      { name: "Custom Integration", included: true },
      { name: "White-label Solution", included: true }
    ]
  }
];

const features = [
  {
    icon: Bot,
    name: "AI Integration",
    description: "From chatbots to custom ML models",
    pricing: ["GPT-4 Integration", "Custom Training", "Knowledge Base"],
    highlight: true
  },
  {
    icon: Database,
    name: "Scalable Infrastructure",
    description: "Enterprise-grade backend solutions",
    pricing: ["High Performance", "Auto-scaling", "99.9% Uptime"]
  },
  {
    icon: ChartBar,
    name: "Analytics & Insights",
    description: "Data-driven decision making",
    pricing: ["Real-time Metrics", "Custom Dashboards", "Predictive Analytics"]
  },
  {
    icon: Cloud,
    name: "Cloud Solutions",
    description: "Secure and reliable hosting",
    pricing: ["AWS/GCP", "CDN Integration", "DDoS Protection"]
  }
];

export default function PricingPage() {
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
              <Sparkles className="w-4 h-4" />
              AI-Powered Solutions
            </span>
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
              Scale Your Business with
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text"> Smart Technology</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              From MVP to enterprise-scale solutions, we help you build and grow with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-xl p-8 border ${
                  tier.highlighted ? 'border-blue-500' : 'border-slate-700/50'
                } hover:border-blue-500/50 transition-all group`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 text-center">
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text mb-4">
                  {tier.price}
                </p>
                <p className="text-gray-300 mb-8">{tier.description}</p>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature.name} className="flex items-center text-gray-300">
                      <Check className={`w-5 h-5 mr-2 ${
                        feature.included ? 'text-blue-400' : 'text-gray-600'
                      }`} />
                      <span className={feature.included ? '' : 'text-gray-600'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg ${
                  tier.highlighted
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white'
                    : 'border border-blue-400 text-blue-400 hover:bg-blue-400/10'
                } transition-all flex items-center justify-center gap-2 group`}>
                  Get Started
                  <Zap className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Enterprise-Grade Features
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Built with scalability and performance in mind
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all group"
                >
                  <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{feature.name}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.pricing.map((item) => (
                      <li key={item} className="text-gray-400 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}