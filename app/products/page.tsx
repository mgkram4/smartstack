"use client"

import { motion } from 'framer-motion';
import { ArrowRight, Check, Mail, Sparkles } from 'lucide-react';
import { type FC } from 'react';
import { AddOnSectionProps, AppTierProps, CTAButton, CTASectionProps } from '../types/pricing';

// Using your existing data constants
const basicApps = [
  {
    name: "Restaurant Ordering System",
    price: "4,000",
    stack: "Next.js, Tailwind, Supabase",
    features: [
      "Menu Management Dashboard",
      "Online Ordering System",
      "Basic Analytics",
      "Mobile Responsive",
      "Payment Integration"
    ],
    hosting: "$50/mo"
  },
  {
    name: "Task Management App",
    price: "3,500",
    stack: "React Native, Firebase",
    features: [
      "Task Creation & Management",
      "User Authentication",
      "Push Notifications",
      "Offline Support",
      "Team Sharing"
    ],
    hosting: "$75/mo"
  },
  {
    name: "Content Recommendation Engine",
    price: "5,000",
    stack: "Python, FastAPI, TensorFlow",
    features: [
      "Basic Content Analysis",
      "User Preference Learning",
      "API Integration",
      "Basic Dashboard",
      "Performance Metrics"
    ],
    hosting: "$100/mo"
  }
];

const businessApps = [
  {
    name: "Real Estate Platform",
    price: "8,000",
    stack: "Next.js, PostgreSQL, AWS",
    features: [
      "Property Listings & Search",
      "Virtual Tour Integration",
      "Agent Dashboard",
      "Lead Management",
      "Analytics Suite",
      "Price Prediction (AI)"
    ],
    hosting: "$200/mo"
  },
  {
    name: "Delivery Fleet App",
    price: "10,000",
    stack: "Flutter, Node.js, MongoDB",
    features: [
      "Real-time Tracking",
      "Route Optimization",
      "Driver Management",
      "Customer Notifications",
      "Performance Analytics",
      "Payment Processing"
    ],
    hosting: "$250/mo"
  },
  {
    name: "Smart Inventory System",
    price: "12,000",
    stack: "Python, TensorFlow, FastAPI",
    features: [
      "Stock Prediction",
      "Demand Forecasting",
      "Supplier Integration",
      "Automated Ordering",
      "Cost Optimization",
      "Performance Dashboard"
    ],
    hosting: "$300/mo"
  }
];

const enterpriseApps = [
  {
    name: "Healthcare Management Platform",
    price: "25,000+",
    stack: "Next.js, GraphQL, AWS, FHIR",
    features: [
      "Patient Records Management",
      "Appointment Scheduling",
      "Billing Integration",
      "Compliance Tools",
      "Analytics Dashboard",
      "Multi-tenant System"
    ],
    hosting: "$1,000+/mo"
  },
  {
    name: "Supply Chain Platform",
    price: "30,000+",
    stack: "React Native, Node.js, PostgreSQL",
    features: [
      "IoT Integration",
      "Real-time Tracking",
      "Predictive Analytics",
      "Vendor Management",
      "Custom Workflows",
      "Advanced Security"
    ],
    hosting: "$1,500+/mo"
  },
  {
    name: "Financial ML Platform",
    price: "35,000+",
    stack: "Python, PyTorch, Kubernetes",
    features: [
      "Risk Assessment",
      "Fraud Detection",
      "Market Analysis",
      "Custom ML Models",
      "Real-time Processing",
      "Compliance Tools"
    ],
    hosting: "$2,000+/mo"
  }
];

const addOns = [
  { 
    name: "Authentication System", 
    price: "2,000",
    includes: "SSO, 2FA, Role Management"
  },
  { 
    name: "Payment Processing", 
    price: "2,500",
    includes: "Multiple Gateways, Subscription Management"
  },
  { 
    name: "Analytics Suite", 
    price: "1,800",
    includes: "User Tracking, Custom Reports, Dashboards"
  },
  { 
    name: "AI/ML Integration", 
    price: "3,500",
    includes: "Custom Model Training, API Integration"
  },
  { 
    name: "Admin Dashboard", 
    price: "2,200",
    includes: "User Management, Content Management, Analytics"
  },
  { 
    name: "API Development", 
    price: "3,000",
    includes: "Custom Endpoints, Documentation, Testing"
  }
];

const AppTier: FC<AppTierProps> = ({ title, apps, highlighted = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-slate-800/50 rounded-xl p-8 ${
      highlighted ? 'border-2 border-blue-500 transform scale-105 relative' : 'border border-slate-700'
    }`}
  >
    {highlighted && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Most Popular
        </span>
      </div>
    )}
    <h2 className="text-2xl font-bold text-white mb-8">{title}</h2>
    <div className="space-y-8">
      {apps.map((app, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="pb-8 border-b border-slate-700 last:border-0 group hover:bg-slate-800/30 p-4 rounded-lg transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{app.name}</h3>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">${app.price}</div>
              <div className="text-sm text-gray-400">Hosting: {app.hosting}</div>
            </div>
          </div>
          <div className="text-sm text-blue-400 mb-4 p-2 bg-blue-500/10 rounded">{app.stack}</div>
          <ul className="space-y-3 mb-6">
            {app.features.map(feature => (
              <li key={feature} className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-blue-400 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            Schedule Consultation <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const AddOnSection: FC<AddOnSectionProps> = ({ addOns }) => (
  <div className="mb-20">
    <h2 className="text-2xl font-bold text-white mb-8 text-center">Enhance Your Application</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {addOns.map((addon, index) => (
        <motion.div
          key={addon.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-slate-800/30 p-6 rounded-lg border border-slate-700 hover:border-blue-500 hover:scale-105 transition-all group cursor-pointer"
        >
          <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400">{addon.name}</h3>
          <p className="text-blue-400 font-bold mb-2">${addon.price}</p>
          <p className="text-sm text-gray-400">{addon.includes}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const CTASection: FC<CTASectionProps> = ({ title, description, buttons }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center bg-gradient-to-br from-blue-600 to-blue-800 p-12 rounded-xl shadow-2xl"
  >
    <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">{description}</p>
    <div className="flex justify-center gap-4">
      {buttons.map((button, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-8 py-4 ${
            button.variant === 'primary'
              ? 'bg-white text-blue-600 hover:bg-blue-50'
              : 'border-2 border-white text-white hover:bg-white/10'
          } rounded-lg font-semibold transition-colors flex items-center`}
        >
          {button.icon && <span className="mr-2">{button.icon}</span>}
          {button.text}
        </motion.button>
      ))}
    </div>
  </motion.div>
);

const PricingPage: FC = () => {
  const ctaButtons: CTAButton[] = [
    {
      text: "Schedule Consultation",
      variant: "primary"
    },
    {
      text: "Contact Us",
      icon: <Mail className="h-5 w-5" />,
      variant: "secondary"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transform Your Ideas Into Reality
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From MVP to Enterprise Solutions - We Build Apps That Scale
            </p>
          </motion.div>

          <div className="grid gap-8 mb-20">
            <AppTier title="Basic Applications ($3k-5k)" apps={basicApps} />
            <AppTier title="Business Solutions ($8k-15k)" apps={businessApps} highlighted={true} />
            <AppTier title="Enterprise Platforms ($25k+)" apps={enterpriseApps} />
          </div>

          <AddOnSection addOns={addOns} />

          <CTASection
            title="Ready to Build Your App?"
            description="Book a free consultation to discuss your project requirements and get a detailed quote."
            buttons={ctaButtons}
          />
        </div>
      </section>
    </div>
  );
};

export default PricingPage;