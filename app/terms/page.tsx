'use client';

import { motion } from 'framer-motion';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { LayoutGrid, HelpCircle, Mail } from 'lucide-react';

export default function TermsOfServicePage() {
  const navItems = [
    { name: 'Features', url: '/#features', icon: LayoutGrid },
    { name: 'How It Works', url: '/#how', icon: HelpCircle },
    { name: 'Contact Us', url: '/contact', icon: Mail }
  ];

  return (
    <div className="relative bg-[#faf9f6] min-h-screen">
      {/* Navigation */}
      <NavBar items={navItems} activeTab="" />

      {/* Terms of Service Content */}
      <section className="relative pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Last updated: January 23, 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing or using UserLens, you agree to be bound by these Terms of Service and all 
                  applicable laws and regulations. If you do not agree with any of these terms, you are 
                  prohibited from using or accessing this site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Use License</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Permission is granted to temporarily access the materials on UserLens for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">Under this license you may not:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on UserLens</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, 
                  and current at all times. Failure to do so constitutes a breach of the Terms, which may result 
                  in immediate termination of your account on our Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For paid services, you agree to pay all fees or charges to your account based on the fees, 
                  charges and billing terms in effect at the time a fee or charge is due and payable.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>All payments are processed through secure payment processors</li>
                  <li>Funds are held in escrow until testing is approved</li>
                  <li>Refunds are subject to our refund policy</li>
                  <li>Prices are subject to change with notice</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Service and its original content, features and functionality are and will remain the 
                  exclusive property of UserLens. The Service is protected by copyright, trademark, and other 
                  laws of both the United States and foreign countries.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In no event shall UserLens, nor its directors, employees, partners, agents, suppliers, or 
                  affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, 
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may terminate or suspend your account immediately, without prior notice or liability, for 
                  any reason whatsoever, including without limitation if you breach the Terms.
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
