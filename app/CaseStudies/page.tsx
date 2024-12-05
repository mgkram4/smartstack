// app/case-studies/page.tsx
"use client"

import { motion } from 'framer-motion';
import { ArrowRight, ChartBar, Clock, Users } from 'lucide-react';
import Image from 'next/image';

interface CaseStudy {
  title: string;
  slug: string;
  client: string;
  industry: string;
  duration: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
  }[];
  image: string;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "AI-Powered Analytics Platform",
    slug: "ai-analytics-platform",
    client: "TechCorp Inc.",
    industry: "Enterprise Software",
    duration: "4 months",
    challenge: "Processing millions of data points manually, causing significant delays",
    solution: "Custom ML model for automated data processing and insights generation",
    results: [
      { metric: "Processing Time", value: "-85%", icon: Clock },
      { metric: "User Adoption", value: "+200%", icon: Users },
      { metric: "Cost Savings", value: "$2M/year", icon: ChartBar }
    ],
    image: "/case-studies/analytics.jpg",
    tags: ["AI", "Machine Learning", "Enterprise"]
  },
  // Add more case studies
];

const CaseStudiesPage = () => {
  return (
    <main className="bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 min-h-screen">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real results from our innovative solutions
            </p>
          </motion.div>

          {/* Featured Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 rounded-xl overflow-hidden mb-20"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <Image
                  src="/case-studies/featured.jpg"
                  alt="Featured case study"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex flex-wrap gap-2 mb-6">
                  {["AI", "Enterprise", "Featured"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Enterprise AI Transformation
                </h2>
                <p className="text-gray-300 mb-6">
                  How we helped a Fortune 500 company automate their operations...
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { label: "ROI", value: "400%" },
                    { label: "Time Saved", value: "1000hrs/month" },
                    { label: "Cost Reduction", value: "60%" }
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                      <p className="text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <button className="flex items-center text-blue-400 group">
                  Read Case Study
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl overflow-hidden group"
              >
                <div className="relative h-64">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{study.challenge}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result) => (
                      <div key={result.metric} className="text-center">
                        <result.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                        <p className="text-xl font-bold text-white mb-1">
                          {result.value}
                        </p>
                        <p className="text-sm text-gray-400">{result.metric}</p>
                      </div>
                    ))}
                  </div>
                  <button className="flex items-center text-blue-400 group">
                    View Details
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
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