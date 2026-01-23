'use client';

import { motion } from 'framer-motion';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { LayoutGrid, HelpCircle, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const navItems = [
    { name: 'Features', url: '/#features', icon: LayoutGrid },
    { name: 'How It Works', url: '/#how', icon: HelpCircle },
    { name: 'Contact Us', url: '/contact', icon: Mail }
  ];

  return (
    <div className="relative bg-[#faf9f6] min-h-screen">
      {/* Navigation */}
      <NavBar items={navItems} activeTab="" />

      {/* Privacy Policy Content */}
      <section className="relative pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Last updated: January 23, 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to UserLens. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit our 
                  website and tell you about your privacy rights and how the law protects you.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you which we have 
                  grouped together as follows:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                  <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                  <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, 
                  time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                  <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
                  <li><strong>Marketing Data:</strong> includes your preferences in receiving marketing from us and 
                  your communication preferences.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your 
                  personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our service</li>
                  <li>To monitor the usage of our service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We have put in place appropriate security measures to prevent your personal data from being 
                  accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, 
                  we limit access to your personal data to those employees, agents, contractors and other third 
                  parties who have a business need to know.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We will only retain your personal data for as long as necessary to fulfill the purposes we 
                  collected it for, including for the purposes of satisfying any legal, accounting, or reporting 
                  requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Your Legal Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation to your 
                  personal data, including the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Right to withdraw consent</li>
                </ul>
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
