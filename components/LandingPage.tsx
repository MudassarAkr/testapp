'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { LayoutGrid, HelpCircle, DollarSign, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: number; duration: number }>>([]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effect: background moves slower than content
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Custom easing for human-crafted feel
  const easeOut = [0.16, 1, 0.3, 1] as const;

  // Generate particle positions only on client side to avoid hydration errors
  useEffect(() => {
    const generatedParticles = [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, []);

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
          </div>

          {/* Right: Interactive Testing Visualization - 6 columns */}
          <div className="hidden md:flex md:col-span-6 justify-center items-center relative">
            <TestingVisualization />
          </div>
        </div>
      </section>

      {/* Features Section - Overlapping Cards Layout */}
      <section id="features" className="relative bg-gradient-to-br from-[#faf9f6] via-[#f4f5f7] to-[#faf9f6] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm text-[#999] tracking-widest uppercase mb-3"
            >
              Why UserLens
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl font-light leading-tight text-[#0a0a0a] mb-4"
            >
              Built for teams who value real feedback
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[#6a6a6a] text-lg max-w-2xl mx-auto"
            >
              Experience the power of authentic user testing with our comprehensive platform
            </motion.p>
          </div>

          {/* Overlapping Cards Container */}
          <motion.div
            className="flex flex-wrap justify-center items-end gap-4 md:gap-0 md:-space-x-12 lg:-space-x-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <FeatureCard
              index={0}
              number="01"
              title="Verified Testers"
              description="Every tester is verified. No bots, just real humans."
              bgColor="bg-[#F9D4D5]"
            />
            <FeatureCard
              index={1}
              number="02"
              title="Fast Turnaround"
              description="Get submissions within 24 hours. Review at your pace."
              bgColor="bg-[#D1E5E6]"
            />
            <FeatureCard
              index={2}
              number="03"
              title="Escrow Payments"
              description="Funds held securely. Pay only after approval."
              bgColor="bg-[#EAE1DA]"
            />
            <FeatureCard
              index={3}
              number="04"
              title="Target Demographics"
              description="Filter by country, device, and experience level."
              bgColor="bg-[#FDEACC]"
            />
            <FeatureCard
              index={4}
              number="05"
              title="Structured Feedback"
              description="Define custom tasks. Get actionable answers."
              bgColor="bg-[#E8D4F2]"
            />
            <FeatureCard
              index={5}
              number="06"
              title="Fair Pricing"
              description="Transparent pricing. No hidden fees or surprises."
              bgColor="bg-[#D4E8D4]"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section - dark contrast break */}
      <section className="relative bg-[#1a1a1a] py-24 text-white overflow-hidden">
        {/* Animated gradient mesh background - optimized */}
        <div className="absolute inset-0 opacity-30 will-change-transform">
          <motion.div
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#4B086D] to-[#6B28A0] rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ willChange: "transform" }}
          />
          <motion.div
            className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#ACC0FE] to-[#8CA0E0] rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ willChange: "transform" }}
          />
        </div>

        {/* Floating particles - reduced count */}
        {particles.length > 0 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.slice(0, 8).map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#ACC0FE] rounded-full"
                style={{
                  left: particle.left,
                  top: particle.top,
                  willChange: "transform, opacity",
                }}
                animate={{
                  y: [-20, -100],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        )}
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left side - Image with 3D tilt effect */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative w-full aspect-[4/5] max-w-md mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                style={{ willChange: "transform" }}
              >
                {/* Static gradient border - no animation for performance */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#4B086D] via-[#ACC0FE] to-[#4B086D] rounded-3xl opacity-75 blur-lg" />
                
                {/* Simplified shadows */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#4B086D]/30 to-[#ACC0FE]/30 rounded-3xl blur-xl" />
                
                {/* 3D Image container with hover tilt */}
                <motion.div
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{
                    rotateY: 5,
                    rotateX: -5,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  style={{ transformStyle: "preserve-3d", willChange: "transform" }}
                >
                  <Image
                    src="/person.png"
                    alt="Happy UserLens tester"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-[#4B086D]/10" />
                  
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>

                {/* Enhanced floating badge with glow */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="absolute -bottom-6 -right-6 bg-white text-gray-900 px-6 py-4 rounded-2xl shadow-2xl"
                  style={{ 
                    boxShadow: "0 20px 40px rgba(75, 8, 109, 0.3), 0 0 30px rgba(172, 192, 254, 0.2)",
                    willChange: "transform"
                  }}
                >
                  {/* Static glow instead of animated */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#4B086D] to-[#ACC0FE] rounded-2xl opacity-25 blur-lg" />
                  
                  <div className="flex items-center gap-3 relative">
                    <div className="text-3xl">⭐</div>
                    <div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-[#4B086D] to-[#6B28A0] bg-clip-text text-transparent">
                        4.9/5
                      </div>
                      <div className="text-xs text-gray-500">1,200+ reviews</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side - Testimonial with glassmorphic card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Glassmorphic card */}
              <motion.div
                className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  willChange: "transform"
                }}
              >
                <div className="space-y-6 relative">
                  {/* Enhanced quote icon */}
                  <div className="text-7xl bg-gradient-to-br from-[#ACC0FE] to-[#4B086D] bg-clip-text text-transparent opacity-70">
                    "
                  </div>
                  
                  <p className="text-3xl md:text-4xl font-light leading-snug">
                    UserLens helped us catch 12 critical UX issues before launch.
                    <span className="bg-gradient-to-r from-[#ACC0FE] to-[#8CA0E0] bg-clip-text text-transparent font-medium">
                      {" "}Best money we've ever spent.
                    </span>
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4B086D] to-[#ACC0FE] p-0.5"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      style={{ willChange: "transform" }}
                    >
                      <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center text-2xl">
                        👩‍💻
                      </div>
                    </motion.div>
                    <div>
                      <div className="font-semibold text-lg">Talia Mendez</div>
                      <div className="text-sm text-gray-400">Product Designer</div>
                    </div>
                  </div>

                  {/* Enhanced trust indicators */}
                  <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                    {[
                      { value: "2,847", label: "Active Testers" },
                      { value: "24h", label: "Avg Response" },
                      { value: "98%", label: "Satisfaction" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex-1"
                        style={{ willChange: "transform" }}
                      >
                        <div className="text-2xl font-bold bg-gradient-to-r from-[#ACC0FE] to-[#8CA0E0] bg-clip-text text-transparent">
                          {item.value}
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                          {item.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section - Inspired horizontal steps design */}
      <section id="how" className="relative bg-gradient-to-br from-[#faf9f6] via-[#f5f3ff] to-[#faf9f6] py-24 overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#4B086D] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ACC0FE] opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-br from-[#4B086D]/5 to-[#ACC0FE]/5 rounded-full blur-2xl" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-wider text-[#4B086D] font-semibold mb-4">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Three Simple Steps To Better UX
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Just follow these three quick & easy steps and you'll have actionable insights from real users
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 mt-16">
            <ProcessStep
              number="1"
              stepLabel="Step 01"
              title="Create Your Test"
              description="Just type in your website address and we'll give you a small snippet of code to add to any or all of your webpages"
              delay={0.1}
            />
            <ProcessStep
              number="2"
              stepLabel="Step 02"
              title="Pay & Publish"
              description="Use a shortcode where you want your element to appear and we'll auto-magically show different versions until there is a clear winner"
              delay={0.2}
            />
            <ProcessStep
              number="3"
              stepLabel="Step 03"
              title="Review & Approve"
              description="Use a shortcode where you want your element to appear and we'll auto-magically show different versions until there is a clear winner"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Black and white with curved wave layers */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gray-50">
        {/* Curved black wave layers */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute top-0 right-0 w-full h-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <path
              d="M0 0C240 200 480 300 720 250C960 200 1200 100 1440 200V800H0V0Z"
              fill="rgba(0, 0, 0, 0.08)"
            />
            <path
              d="M0 100C240 250 480 350 720 300C960 250 1200 150 1440 250V800H0V100Z"
              fill="rgba(0, 0, 0, 0.05)"
            />
            <path
              d="M0 200C240 300 480 400 720 350C960 300 1200 200 1440 300V800H0V200Z"
              fill="rgba(0, 0, 0, 0.03)"
            />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="relative max-w-3xl mx-auto px-6 text-center z-10"
        >
          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-black">
            Ready to see through
            <br />
            <span className="italic font-serif">their eyes?</span>
          </h2>
          <p className="text-lg text-[#4a4a4a] mb-8">
            Start your first test today. No credit card required.
          </p>
          <button className="group relative overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#4B086D] text-white hover:bg-[#4B086D]/90 h-11 px-8">
            <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
              Get Started for Free
            </span>
            <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-white/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
              <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
            </i>
          </button>
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

// Feature card with overlapping layout inspired by team showcase
function FeatureCard({
  index,
  number,
  title,
  description,
  bgColor,
}: {
  index: number;
  number: string;
  title: string;
  description: string;
  bgColor: string;
}) {
  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[200px]"
      variants={cardVariants}
      whileHover={{ 
        y: -20, 
        scale: 1.05, 
        zIndex: 50,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
      }}
      style={{ zIndex: 6 - index }}
    >
      <div
        className={`relative pt-12 pb-8 px-6 rounded-t-[60%] h-[380px] md:h-[420px] lg:h-[400px] flex flex-col items-center text-center shadow-xl transition-shadow hover:shadow-2xl ${
          bgColor
        }`}
      >
        {/* Large number at top */}
        <motion.div
          className="text-7xl md:text-8xl font-bold mb-4"
          style={{
            WebkitTextStroke: '2px rgba(0,0,0,0.8)',
            WebkitTextFillColor: 'transparent',
            fontWeight: 900,
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {number}
        </motion.div>

        {/* Title and description at bottom */}
        <div className="mt-auto space-y-3">
          <h3 className="font-bold text-lg md:text-xl text-[#0a0a0a] tracking-tight">
            {title}
          </h3>
          <p className="text-sm md:text-base text-[#4a4a4a] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Decorative dot pattern */}
        <div className="absolute top-4 right-4 w-12 h-12 opacity-10">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-black rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Process step with horizontal card design inspired by the image
function ProcessStep({
  number,
  stepLabel,
  title,
  description,
  delay,
}: {
  number: string;
  stepLabel: string;
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
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center text-center group"
    >
      {/* Number with circular decoration */}
      <div className="relative mb-6">
        {/* White background circle */}
        <div className="absolute inset-0 w-40 h-40 bg-white rounded-full shadow-lg -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2" />
        
        {/* Partial colored circle (arc) */}
        <svg className="absolute w-44 h-44 -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 -rotate-90" viewBox="0 0 180 180">
          <motion.circle
            cx="90"
            cy="90"
            r="85"
            fill="none"
            stroke={number === "1" ? "#ef4444" : number === "2" ? "#ef4444" : "#ef4444"}
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 0.7 } : {}}
            transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
            style={{
              strokeDasharray: "534",
            }}
          />
        </svg>

        {/* Large number */}
        <div className="relative">
          <span className="text-[140px] font-bold leading-none" style={{
            WebkitTextStroke: '3px #1a1a1a',
            WebkitTextFillColor: 'transparent',
            fontWeight: 900,
          }}>
            {number}
          </span>
        </div>
      </div>

      {/* Title */}
      <motion.h3
        className="text-xl md:text-2xl font-bold text-[#ef4444] mb-3"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.8 }}
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-gray-600 leading-relaxed text-sm md:text-base max-w-xs mx-auto"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 1 }}
      >
        {description}
      </motion.p>

      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#4B086D]/5 to-[#ACC0FE]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
