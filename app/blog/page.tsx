"use client"


import { motion } from 'framer-motion';
import Image from 'next/image';

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: "How AI is Transforming Modern Web Development",
    slug: "ai-transforming-web-development",
    excerpt: "Discover how artificial intelligence is revolutionizing the way we build and maintain web applications...",
    category: "AI Development",
    date: "2024-03-15",
    readTime: "5 min read",
    image: "/blog/ai-web-dev.jpg",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "/team/sarah.jpg",
      role: "Chief AI Officer"
    },
    tags: ["AI", "Web Development", "Technology"]
  },
  // Add more blog posts
];

const BlogPage = () => {
  const categories = ["All", "AI Development", "Web Development", "Case Studies", "Tutorials"];
  
  return (
    <main className="bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Insights & Updates
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Latest thoughts on AI, development, and technology
            </p>
          </motion.div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-blue-400/50 text-blue-400 hover:bg-blue-400/10 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-slate-800/50 rounded-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-96 md:h-auto">
                <Image
                  src="/blog/featured-post.jpg"
                  alt="Featured post"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-blue-400">Featured</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">10 min read</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  The Future of AI in Enterprise Solutions
                </h2>
                <p className="text-gray-300 mb-6">
                  An in-depth look at how artificial intelligence is reshaping enterprise software...
                </p>
                <button className="text-blue-400 flex items-center group">
                  Read More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl overflow-hidden group hover:border-blue-500 border border-transparent transition-colors"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-blue-400">{post.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{post.excerpt}</p>
                  <div className="flex items-center">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="text-white font-medium">{post.author.name}</p>
                      <p className="text-gray-400 text-sm">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-lg ${
                    page === 1
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-400 hover:bg-blue-500/10'
                  }`}
                >
                  {page}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-300 mb-8">
            Get the latest insights delivered directly to your inbox
          </p>
          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;