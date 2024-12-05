// src/components/layout/Navigation/index.tsx
"use client"

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface NavItem {
  title: string;
  href: string;
  children?: {
    title: string;
    href: string;
    description?: string;
  }[];
}

const navItems: NavItem[] = [
  {
    title: 'Products',
    href: '/products',
    children: [
      {
        title: 'AI Development',
        href: '/services/ai',
        description: 'Custom AI solutions and integration'
      },
      {
        title: 'Mobile Apps',
        href: '/services/mobile',
        description: 'Cross-platform mobile development'
      },
      {
        title: 'Web Development',
        href: '/services/web',
        description: 'Full-stack web applications'
      }
    ]
  },
  {
    title: 'Case Studies',
    href: '/CaseStudies'
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Pricing',
    href: '/pricing'
  }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || isOpen ? 'bg-slate-900/90 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-white font-bold text-xl">SmartStack</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  {item.title}
                  {item.children && (
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.title && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-slate-700 overflow-hidden">
                    <div className="p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block p-3 hover:bg-slate-700 rounded-lg transition-colors"
                        >
                          <div className="text-white font-medium">{child.title}</div>
                          {child.description && (
                            <div className="text-sm text-gray-400">{child.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.title}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg"
                    >
                      {item.title}
                    </Link>
                    {item.children && (
                      <div className="pl-6 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-lg"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg mx-4 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;