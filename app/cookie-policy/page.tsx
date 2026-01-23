'use client';

import { motion } from 'framer-motion';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { LayoutGrid, HelpCircle, Mail } from 'lucide-react';

export default function CookiePolicyPage() {
  const navItems = [
    { name: 'Features', url: '/#features', icon: LayoutGrid },
    { name: 'How It Works', url: '/#how', icon: HelpCircle },
    { name: 'Contact Us', url: '/contact', icon: Mail }
  ];

  return (
    <div className="relative bg-[#faf9f6] min-h-screen">
      {/* Navigation */}
      <NavBar items={navItems} activeTab="" />

      {/* Cookie Policy Content */}
      <section className="relative pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Last updated: January 23, 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file 
                  is stored in your web browser and allows the Service or a third-party to recognize you and make 
                  your next visit easier and the Service more useful to you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. How UserLens Uses Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you use and access the Service, we may place a number of cookies files in your web browser. 
                  We use cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>To enable certain functions of the Service</li>
                  <li>To provide analytics</li>
                  <li>To store your preferences</li>
                  <li>To enable authentication and security features</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies are essential for you to browse the website and use its features. Without these cookies, 
                    services you have asked for cannot be provided.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies collect information about how visitors use a website. We use this information to improve 
                    our website and understand how users interact with our service.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Functionality Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies allow the website to remember choices you make and provide enhanced, more personal features.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Your Choices Regarding Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please 
                  visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse 
                  to accept them, you might not be able to use all of the features we offer.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Changes to This Cookie Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update our Cookie Policy from time to time. We will notify you of any changes by posting 
                  the new Cookie Policy on this page and updating the "Last updated" date.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#4B086D] to-[#ACC0FE] bg-clip-text text-transparent mb-4">
                UserLens
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Get honest feedback from verified testers. Watch them navigate, hear their thoughts, and fix issues before launch.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/#features" className="text-gray-400 hover:text-[#ACC0FE] transition-colors text-sm">Features</a></li>
                <li><a href="/#how" className="text-gray-400 hover:text-[#ACC0FE] transition-colors text-sm">How It Works</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-[#ACC0FE] transition-colors text-sm">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="/privacy" className="text-gray-400 hover:text-[#ACC0FE] transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-[#ACC0FE] transition-colors text-sm">Terms of Service</a></li>
                <li><a href="/cookie-policy" className="text-gray-400 hover:text-[#ACC0FE] transition-colors text-sm">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <div className="text-sm text-gray-400 text-center">
              © 2026 UserLens. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
