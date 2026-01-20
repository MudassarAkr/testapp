'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

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

  return (
    <div className="relative bg-[#faf9f6]">
      {/* Navigation - fixed, clean, with backdrop blur */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f6]/80 backdrop-blur-md border-b border-[#e8e7e3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="text-xl font-light tracking-tight"
          >
            UserLens
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: easeOut }}
            className="flex gap-8 items-center text-sm"
          >
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how">How it Works</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <button className="px-4 py-2 bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-colors">
              Log In
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section - warm off-white with parallax background */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Parallax background element */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 bg-gradient-to-br from-[#f5f4f1] to-[#faf9f6] -z-10"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Hero content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="text-[clamp(2.5rem,7vw,5rem)] font-light leading-[1.05] tracking-tight text-[#0a0a0a] mb-6"
            >
              Watch <span className="italic font-serif">real people</span> use
              your product
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: easeOut }}
              className="text-lg text-[#4a4a4a] leading-relaxed mb-8 max-w-lg"
            >
              Get honest, structured feedback from verified testers. No bloat,
              no complexity—just real insights to improve your UX.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: easeOut }}
              className="flex gap-4"
            >
              <CTAButton primary>Start Testing</CTAButton>
              <CTAButton>See How It Works</CTAButton>
            </motion.div>
          </div>

          {/* Right: Stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: easeOut }}
            className="hidden md:flex flex-col gap-8"
          >
            <StatCard number="$4.99" label="per tester" />
            <StatCard number="24h" label="avg. turnaround" />
            <StatCard number="98%" label="approval rate" />
          </motion.div>
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
