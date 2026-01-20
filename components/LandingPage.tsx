'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { LayoutGrid, HelpCircle, DollarSign } from 'lucide-react';

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effect: background moves slower than content
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Custom easing for human-crafted feel
  const easeOut = [0.16, 1, 0.3, 1] as const;

  const navItems = [
    { name: 'Features', url: '#features', icon: LayoutGrid },
    { name: 'How it Works', url: '#how', icon: HelpCircle },
    { name: 'Pricing', url: '#pricing', icon: DollarSign }
  ];

  return (
    <div className="relative bg-[#faf9f6]">
      {/* Navigation - Tubelight Navbar */}
      <NavBar items={navItems} />

      {/* Hero Section - The Testing Arena */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        {/* Dynamic gradient background with depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" />
        
        {/* Animated morphing blobs */}
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left: Hero content - 6 columns */}
          <div className="md:col-span-6 space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-gray-900"
            >
              Watch{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#4B086D] to-[#ACC0FE] bg-clip-text text-transparent italic">
                  real people
                </span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  <motion.path
                    d="M0 6 Q50 0, 100 6 T200 6"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4B086D" />
                      <stop offset="100%" stopColor="#ACC0FE" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>{' '}
              test your product
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: easeOut }}
              className="text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              Get honest feedback from verified testers.{' '}
              <span className="text-gray-900 font-medium">Watch them navigate,</span>{' '}
              hear their thoughts, and{' '}
              <span className="text-gray-900 font-medium">fix issues before launch.</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: easeOut }}
              className="flex flex-wrap gap-4"
            >
              <CTAButton primary>Start Testing</CTAButton>
              <CTAButton>
                <span className="flex items-center gap-2">
                  <span>Watch Demo</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </CTAButton>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-[#4B086D] to-[#ACC0FE]" />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">2,847 testers</div>
                  <div className="text-xs text-gray-500">online now</div>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-300" />
              <div>
                <div className="text-sm font-semibold text-gray-900">4.9/5 rating</div>
                <div className="text-xs text-gray-500">from 1,200+ tests</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Interactive Testing Visualization - 6 columns */}
          <div className="hidden md:flex md:col-span-6 justify-center items-center relative">
            <TestingVisualization />
          </div>
        </div>
      </section>

      {/* Features Section - cool gray surface with clear separation */}
      <section id="features" className="relative bg-[#f4f5f7] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            subtitle="Why UserLens"
            title="Built for teams who value real feedback"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <FeatureCard
              delay={0.1}
              icon="✓"
              title="Verified Testers"
              description="Every tester is email and phone verified. No bots, no fake accounts—just real humans."
            />
            <FeatureCard
              delay={0.2}
              icon="⚡"
              title="Fast Turnaround"
              description="Get your first submissions within 24 hours. Review and approve at your own pace."
            />
            <FeatureCard
              delay={0.3}
              icon="🔒"
              title="Escrow Payments"
              description="Pay upfront, funds held securely. Testers only get paid after you approve their work."
            />
            <FeatureCard
              delay={0.4}
              icon="📝"
              title="Structured Feedback"
              description="Define custom tasks and questions. Get answers that are actionable and specific."
            />
            <FeatureCard
              delay={0.5}
              icon="💰"
              title="Fair Pricing"
              description="Transparent per-tester pricing. No hidden fees, no subscriptions, no surprises."
            />
            <FeatureCard
              delay={0.6}
              icon="🎯"
              title="Target Demographics"
              description="Filter testers by country, device type, and experience level for relevant feedback."
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section - dark contrast break */}
      <section className="relative bg-[#1a1a1a] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-4xl md:text-5xl font-light leading-snug max-w-3xl mx-auto">
              "UserLens helped us catch 12 critical UX issues before launch.
              Best $50 we've ever spent."
            </p>
            <div className="mt-8 text-sm text-[#999]">
              — Sarah Chen, Product Designer at Acme Inc.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section - stepped timeline with reveals */}
      <section id="how" className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            subtitle="How It Works"
            title="From setup to insights in three steps"
          />

          <div className="mt-16 space-y-12">
            <ProcessStep
              number="01"
              title="Create Your Test"
              description="Define your website URL, tasks for testers to complete, and feedback questions. Takes less than 5 minutes."
              delay={0.1}
            />
            <ProcessStep
              number="02"
              title="Pay & Publish"
              description="Choose how many testers you need, pay upfront via Stripe. Your test goes live immediately to verified testers."
              delay={0.2}
            />
            <ProcessStep
              number="03"
              title="Review & Approve"
              description="Testers complete your test and submit feedback. Review their responses, approve quality submissions, and get actionable insights."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section - elevated white surface */}
      <section className="relative py-32 bg-gradient-to-b from-[#f4f5f7] to-[#faf9f6]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-6">
            Ready to see through
            <br />
            <span className="italic font-serif">their eyes?</span>
          </h2>
          <p className="text-lg text-[#4a4a4a] mb-8">
            Start your first test today. No credit card required.
          </p>
          <CTAButton primary large>
            Get Started for Free
          </CTAButton>
        </motion.div>
      </section>

      {/* Footer - clean baseline alignment */}
      <footer className="relative bg-[#faf9f6] border-t border-[#e8e7e3] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <div className="text-xl font-light mb-2">UserLens</div>
              <div className="text-sm text-[#6a6a6a]">
                © 2026 All rights reserved
              </div>
            </div>
            <div className="flex gap-8 text-sm text-[#6a6a6a]">
              <a href="#" className="hover:text-[#1a1a1a] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#1a1a1a] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#1a1a1a] transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Interactive Testing Visualization Component
function TestingVisualization() {
  const [activeCursor, setActiveCursor] = useState(0);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCursor(prev => (prev + 1) % 3);
      setFeedbackVisible(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const cursors = [
    { id: 1, color: '#8b5cf6', x: 60, y: 40, name: 'Sarah' },
    { id: 2, color: '#ec4899', x: 45, y: 60, name: 'Mike' },
    { id: 3, color: '#3b82f6', x: 70, y: 75, name: 'Alex' },
  ];

  const feedbacks = [
    { text: "This button is confusing", emoji: "😕", x: 30, y: 35 },
    { text: "Love the colors!", emoji: "💜", x: 55, y: 25 },
    { text: "Easy to navigate", emoji: "👍", x: 40, y: 70 },
  ];

  return (
    <div className="relative w-full max-w-md aspect-square">
      {/* 3D Device Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Phone Frame */}
        <motion.div
          className="relative w-56 h-[450px] mx-auto bg-gray-900 rounded-[3rem] p-3 shadow-2xl"
          animate={{ rotateY: [-2, 2, -2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Screen */}
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
            {/* Mock UI Content */}
            <div className="absolute inset-0 p-6 space-y-4">
              <div className="h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg w-3/4" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
              </div>
              
              {/* Interactive Button */}
              <motion.div
                className="h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: ['0 4px 14px rgba(139, 92, 246, 0.4)', '0 4px 20px rgba(236, 72, 153, 0.6)', '0 4px 14px rgba(139, 92, 246, 0.4)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Get Started
              </motion.div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-24 bg-gray-100 rounded-lg" />
                ))}
              </div>
            </div>

            {/* Animated Cursors */}
            <AnimatePresence>
              {cursors.map((cursor, i) => (
                <motion.div
                  key={cursor.id}
                  className="absolute pointer-events-none z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: activeCursor === i ? 1 : 0.3,
                    scale: activeCursor === i ? 1 : 0.8,
                    x: `${cursor.x}%`,
                    y: `${cursor.y}%`,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Cursor SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill={cursor.color}>
                    <path d="M5.5 3L20.5 20L13 17.5L9 23L7 21.5L11 15.5L5.5 3Z" />
                  </svg>
                  
                  {/* Cursor Label */}
                  <motion.div
                    className="absolute top-6 left-6 px-2 py-1 rounded bg-white shadow-lg text-xs font-medium whitespace-nowrap"
                    style={{ borderLeft: `3px solid ${cursor.color}` }}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: activeCursor === i ? 1 : 0, y: 0 }}
                  >
                    {cursor.name}
                  </motion.div>

                  {/* Click Ripple */}
                  {activeCursor === i && (
                    <motion.div
                      className="absolute w-8 h-8 rounded-full border-2"
                      style={{ borderColor: cursor.color }}
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Feedback Bubbles */}
            <AnimatePresence>
              {feedbackVisible && feedbacks.map((feedback, i) => (
                <motion.div
                  key={i}
                  className="absolute z-30 pointer-events-none"
                  style={{ left: `${feedback.x}%`, top: `${feedback.y}%` }}
                  initial={{ opacity: 0, scale: 0, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ delay: i * 0.2, duration: 0.4 }}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-3 max-w-[140px] relative">
                    <div className="absolute -left-2 top-4 w-3 h-3 bg-white transform rotate-45" />
                    <div className="flex items-start gap-2">
                      <span className="text-xl flex-shrink-0">{feedback.emoji}</span>
                      <p className="text-xs text-gray-700 leading-tight">{feedback.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            <motion.div
              className="absolute bottom-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <span className="text-xs text-gray-600">Typing</span>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 bg-purple-500 rounded-full"
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 0.6, delay: i * 0.1, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Heatmap Dots */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-red-500/50"
                style={{
                  left: `${30 + (i % 3) * 20}%`,
                  top: `${40 + Math.floor(i / 3) * 15}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>

          {/* Phone notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl" />
        </motion.div>

        {/* Floating Reaction Emojis */}
        {['😍', '🎉', '✨', '👏'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + (i % 2) * 70}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [-5, 5, -5],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// Navigation link with underline expand
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="relative text-[#4a4a4a] hover:text-[#1a1a1a] transition-colors group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#1a1a1a] group-hover:w-full transition-all duration-300" />
    </a>
  );
}

// CTA Button with tactile hover (lift + shadow)
function CTAButton({
  children,
  primary,
  large,
}: {
  children: React.ReactNode;
  primary?: boolean;
  large?: boolean;
}) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`
        ${large ? 'px-10 py-4 text-lg' : 'px-8 py-3 text-base'}
        ${
          primary
            ? 'bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]'
            : 'bg-white text-[#1a1a1a] border border-[#e0e0e0] hover:border-[#1a1a1a]'
        }
        transition-all duration-200
        shadow-sm hover:shadow-md
      `}
    >
      {children}
    </motion.button>
  );
}

// Stat card with number animation
function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white p-6 shadow-sm border border-[#e8e7e3]">
      <div className="text-4xl font-light text-[#1a1a1a] mb-1">{number}</div>
      <div className="text-sm text-[#6a6a6a] tracking-wide">{label}</div>
    </div>
  );
}

// Section header with staggered reveal
function SectionHeader({ subtitle, title }: { subtitle: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-sm text-[#999] tracking-widest uppercase mb-3"
      >
        {subtitle}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-5xl font-light leading-tight text-[#0a0a0a]"
      >
        {title}
      </motion.h2>
    </div>
  );
}

// Feature card with mask wipe reveal
function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: string;
  title: string;
  description: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group p-6 bg-white border border-[#e8e7e3] hover:border-[#1a1a1a] transition-all duration-300"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-medium mb-3 text-[#0a0a0a]">{title}</h3>
      <p className="text-[#4a4a4a] leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
}

// Process step with directional slide-in
function ProcessStep({
  number,
  title,
  description,
  delay,
}: {
  number: string;
  title: string;
  description: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-8 items-start"
    >
      <div className="flex-shrink-0 w-20 h-20 bg-[#f4f5f7] flex items-center justify-center text-2xl font-light text-[#1a1a1a]">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-light mb-3 text-[#0a0a0a]">{title}</h3>
        <p className="text-[#4a4a4a] leading-relaxed max-w-2xl">{description}</p>
      </div>
    </motion.div>
  );
}
