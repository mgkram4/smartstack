// app/pricing/page.tsx
"use client"

import { motion } from 'framer-motion';
import { ChartBar, Bot, Check, Cloud, Database, Info } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: Array<{
    name: string;
    included: boolean;
    tooltip?: string;
  }>;
  highlighted?: boolean;
}

interface AddOn {
  name: string;
  icon: any;
  description: string;
  pricing: string;
  details: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$5k+",
    description: "Basic web/mobile app with essential features",
    features: [
      { name: "Custom UI/UX Design", included: true },
      { name: "Responsive Development", included: true },
      { name: "Basic Authentication", included: true },
      { name: "Basic Database (up to 10k records)", included: true },
      { name: "Standard Hosting", included: true },
      { name: "Basic AI Chat Integration", included: false },
      { name: "Advanced Analytics", included: false },
      { name: "Custom API Development", included: false }
    ]
  },
  {
    name: "Growth",
    price: "$15k+",
    description: "Advanced features with AI integration",
    highlighted: true,
    features: [
      { name: "Everything in Starter", included: true },
      { name: "Custom AI Integration", included: true },
      { name: "Advanced Database (up to 100k records)", included: true },
      { name: "API Development", included: true },
      { name: "Premium Hosting", included: true },
      { name: "Advanced Security", included: true },
      { name: "Custom Analytics", included: true },
      { name: "Priority Support", included: true }
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale solutions with advanced AI",
    features: [
      { name: "Everything in Growth", included: true },
      { name: "Custom ML Models", included: true },
      { name: "Unlimited Database", included: true },
      { name: "Advanced Security", included: true },
      { name: "24/7 Support", included: true },
      { name: "Custom Integrations", included: true },
      { name: "Advanced AI Features", included: true },
      { name: "Dedicated Account Manager", included: true }
    ]
  }
];

const addOns: AddOn[] = [
  {
    icon: Database,
    name: "Database Scaling",
    description: "Expand your database capacity and performance",
    pricing: "From $200/month",
    details: [
      "Additional 100k records: $200/month",
      "Advanced querying capabilities",
      "Automated backups",
      "Database monitoring"
    ]
  },
  {
    icon: Bot,
    name: "AI Chatbot",
    description: "Intelligent chatbot with GPT integration",
    pricing: "From $500/month",
    details: [
      "GPT-4 Integration: $0.03/request",
      "Custom training: $2k setup",
      "Knowledge base integration",
      "Multi-language support"
    ]
  },
  {
    icon: ChartBar,
    name: "Advanced Analytics",
    description: "Comprehensive data analysis tools",
    pricing: "From $300/month",
    details: [
      "Custom dashboards",
      "Real-time monitoring",
      "Predictive analytics",
      "Export capabilities"
    ]
  },
  {
    icon: Cloud,
    name: "Cloud Infrastructure",
    description: "Scalable cloud hosting solutions",
    pricing: "From $400/month",
    details: [
      "AWS/GCP hosting",
      "Auto-scaling",
      "CDN integration",
      "DDoS protection"
    ]
  }
];

export default function PricingPage() {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 min-h-screen">
      {/* Main Pricing Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose your base package and customize with add-ons
            </p>
          </motion.div>

          {/* Core Packages */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-slate-800/50 rounded-xl p-8 ${
                  tier.highlighted ? 'border-2 border-blue-500' : 'border border-slate-700'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 text-center">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-blue-400 mb-4">{tier.price}</p>
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
                      {feature.tooltip && (
                        <Tooltip content={feature.tooltip}>
                          <Info className="w-4 h-4 ml-2 text-gray-400 cursor-help" />
                        </Tooltip>
                      )}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg ${
                  tier.highlighted
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'border border-blue-400 text-blue-400 hover:bg-blue-400/10'
                } transition-colors`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Available Add-ons
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOns.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6"
                >
                  <addon.icon className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                  <p className="text-gray-300 mb-4">{addon.description}</p>
                  <p className="text-blue-400 font-bold mb-4">{addon.pricing}</p>
                  <ul className="space-y-2">
                    {addon.details.map((detail) => (
                      <li key={detail} className="text-gray-400 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                        {detail}
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
};