'use client';

import { motion } from 'framer-motion';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { LayoutGrid, HelpCircle, Mail, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const navItems = [
    { name: 'Features', url: '/#features', icon: LayoutGrid },
    { name: 'How It Works', url: '/#how', icon: HelpCircle },
    { name: 'Contact Us', url: '/contact', icon: Mail }
  ];

  return (
    <div className="relative bg-[#1a1a1a] min-h-screen">
      {/* Navigation - Tubelight Navbar */}
      <NavBar items={navItems} activeTab="Contact Us" />

      {/* Contact Section with Map Background */}
      <section className="relative pt-32 pb-24 min-h-screen overflow-hidden">
        {/* Map Background Effect */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <path d="M100 200 L300 150 L500 250 L700 200 L900 300" stroke="#4B086D" strokeWidth="1" opacity="0.3"/>
            <path d="M150 300 L350 250 L550 350 L750 300 L950 400" stroke="#4B086D" strokeWidth="1" opacity="0.3"/>
            <path d="M200 400 L400 350 L600 450 L800 400 L1000 500" stroke="#4B086D" strokeWidth="1" opacity="0.3"/>
            <circle cx="300" cy="200" r="3" fill="#4B086D" opacity="0.5"/>
            <circle cx="500" cy="300" r="3" fill="#4B086D" opacity="0.5"/>
            <circle cx="700" cy="250" r="3" fill="#4B086D" opacity="0.5"/>
            <circle cx="900" cy="350" r="3" fill="#4B086D" opacity="0.5"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Contact Us Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
              Contact Us<span className="text-[#22c55e]">.</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Green Accent Bar */}
              <div className="border-l-4 border-[#22c55e] pl-8 space-y-8">
                <div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Have a question or need assistance? Fill out the form and we'll get back to you as soon as possible.
                  </p>
                </div>
              </div>

              {/* Social Media Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-6 pt-8"
              >
                <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors">
                  <Instagram size={20} />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              {/* Green Border Accent - Top Left */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-l-4 border-t-4 border-[#22c55e]" />
              
              {/* Green Border Accent - Bottom Right */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-4 border-b-4 border-[#22c55e]" />

              <div className="bg-[#2a2a2a] p-8 md:p-12 relative">
                <h2 className="text-white text-2xl font-semibold mb-8">Contact form</h2>
                
                <form className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#1a1a1a] text-white px-4 py-4 outline-none focus:ring-2 focus:ring-[#22c55e] transition-all"
                      placeholder="John"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-[#1a1a1a] text-white px-4 py-4 outline-none focus:ring-2 focus:ring-[#22c55e] transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full bg-[#1a1a1a] text-white px-4 py-4 outline-none focus:ring-2 focus:ring-[#22c55e] transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#22c55e] text-white py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#16a34a] transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#0a0a0a] border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#22c55e] to-[#4B086D] bg-clip-text text-transparent mb-4">
                UserLens
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Get honest feedback from verified testers. Watch them navigate, hear their thoughts, and fix issues before launch.
              </p>
              {/* Social Media */}
              <div className="flex gap-4 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#22c55e] hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#22c55e] hover:text-white transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#22c55e] hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#how" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-400">
                © 2026 UserLens. All rights reserved.
              </div>
              <div className="text-sm text-gray-400">
                Made with <span className="text-[#22c55e]">♥</span> for better UX
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
