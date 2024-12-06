"use client"

import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, Award, Brain, ChartBar, Clock, Globe, Phone, Shield, Signal, Sparkles, Users } from 'lucide-react';
import Image from 'next/image';

const caseStudies = [
  {
    title: "PenguinPal - AI Email Management",
    slug: "penguinpal",
    client: "Cerebral Beach Hacks",
    industry: "Productivity Software",
    duration: "24 hours",
    challenge: "Email overload causing productivity loss for businesses",
    solution: "AI-powered email management system using Kindo and WhiteRabbitNeo",
    results: [
      { metric: "Participants", value: "700+", icon: Users },
      { metric: "Development", value: "24hrs", icon: Clock },
      { metric: "Award", value: "1st Place", icon: Award }
    ],
    image: "/PP.png",
    tags: ["AI", "Email", "Hackathon Winner"],
    url: "https://devpost.com/software/penguinpal"
  },
  {
    title: "X Sentiment Analyzer",
    slug: "x-analyzer",
    client: "Social Media Analytics",
    industry: "AI & Social Media",
    duration: "6 weeks",
    challenge: "Need for real-time social media sentiment analysis",
    solution: "Integration of X API with GPT-4 for advanced sentiment analysis",
    results: [
      { metric: "Accuracy", value: "94%", icon: Brain },
      { metric: "Processing", value: "Real-time", icon: Clock },
      { metric: "Analysis/Day", value: "100K+", icon: ChartBar }
    ],
    image: "/logoX.png",
    tags: ["AI", "Social Media", "GPT-4"],
    url: "https://github.com/mgkram4/X-Profile-Analyze"
  },
  {
    title: "SafeScreen Guardian",
    slug: "safe-screen",
    client: "Digital Wellbeing",
    industry: "Mobile Safety",
    duration: "4 months",
    challenge: "Protecting minors from inappropriate content on mobile devices",
    solution: "Flutter-based content detection system with parental controls",
    results: [
      { metric: "Detection", value: "99.8%", icon: Shield },
      { metric: "Response", value: "<100ms", icon: Clock },
      { metric: "Alerts", value: "Real-time", icon: AlertTriangle }
    ],
    image: "/phoneWatcher.png",
    tags: ["Flutter", "AI", "Safety"],
    url: "https://github.com/mgkram4/NFSW-Blocker-Mobile"
  },
  {
    title: "Vista Pacific Capital Website",
    slug: "vista-pacific",
    client: "Vista Pacific Capital",
    industry: "Finance",
    duration: "4 months",
    challenge: "Poor website performance affecting user engagement",
    solution: "Complete performance optimization and redesign",
    results: [
      { metric: "Desktop Score", value: "98/100", icon: ChartBar },
      { metric: "Mobile Score", value: "97/100", icon: Globe },
      { metric: "Performance", value: "+142%", icon: Brain }
    ],
    image: "/logo3.png",
    tags: ["Web Performance", "Finance", "Optimization"],
    url: "https://www.vistapacificcapital.com/"
  },
  {
    title: "Perfect Pose",
    slug: "cv-mobile-app",
    client: "Cross-platform Development",
    industry: "Mobile Technology",
    duration: "3 months",
    challenge: "Need for accessible computer vision solutions on mobile",
    solution: "Cross-platform app with ML model integration",
    results: [
      { metric: "Platforms", value: "2", icon: Phone },
      { metric: "Users", value: "1000+", icon: Users },
      { metric: "Accuracy", value: "95%", icon: Signal }
    ],
    image: "/logo4.png",
    tags: ["Mobile", "Computer Vision", "Flutter"],
    url: "https://github.com/mgkram4/GsdcCpp-Perfect-Pose"
  }
];

const CaseStudiesPage = () => {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 min-h-screen">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-blue-600/10 blur-3xl -z-10" />
            <span className="inline-flex items-center gap-2 text-blue-400 font-medium mb-4 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Sparkles className="w-4 h-4" />
              Featured Projects
            </span>
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
              Transforming Ideas into
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text"> Digital Reality</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              From hackathon-winning AI solutions to enterprise-grade applications, 
              explore how we deliver measurable impact through innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl overflow-hidden mb-20 border border-gray-200 shadow-xl"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <Image
                  src="/PP.png"
                  alt="Featured case study"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex flex-wrap gap-2 mb-6">
                  {["AI", "Machine Learning", "Featured"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm border border-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  PenguinPal: AI-Powered Email Management
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Winner of LAs largest Gen AI Hackathon, PenguinPal revolutionizes email management 
                  through advanced AI integration.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { label: "Participants", value: "700+" },
                    { label: "Development Time", value: "24 hrs" },
                    { label: "Project Rank", value: "1st" }
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl bg-gray-50">
                      <p className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</p>
                      <p className="text-gray-500 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <a 
                  href="https://devpost.com/penguinpal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-500 transition-colors group font-medium"
                >
                  View
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{study.challenge}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result) => (
                      <div key={result.metric} className="text-center p-3 rounded-lg bg-gray-50">
                        <result.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <p className="text-xl font-bold text-gray-900 mb-1">
                          {result.value}
                        </p>
                        <p className="text-sm text-gray-500">{result.metric}</p>
                      </div>
                    ))}
                  </div>
                  <a 
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-500 transition-colors group font-medium"
                  >
                    View
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;