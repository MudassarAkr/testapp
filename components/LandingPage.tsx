'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Custom spring config for intentional, weighty motion
  const springConfig = { stiffness: 50, damping: 20, mass: 1.2 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Asymmetric transforms - nothing moves linearly
  const heroX = useTransform(smoothProgress, [0, 0.3], [0, -120]);
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, 40]);
  const statX = useTransform(smoothProgress, [0.1, 0.5], [200, 0]);
  const featureY = useTransform(smoothProgress, [0.3, 0.7], [100, -50]);
  const ctaRotate = useTransform(smoothProgress, [0.6, 1], [2, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Gradient follows cursor subtly
  const gradientX = (mousePosition.x / window.innerWidth) * 100;
  const gradientY = (mousePosition.y / window.innerHeight) * 100;

  return (
    <div
      ref={containerRef}
      className="relative min-h-[400vh] bg-[#f8f7f4] overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, #fff 0%, #f8f7f4 50%)`,
      }}
    >
      {/* Navigation - anchored top right, not center */}
      <nav className="fixed top-0 right-0 z-50 p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="flex gap-8 text-sm tracking-wide"
        >
          <HoverLink href="#features">Features</HoverLink>
          <HoverLink href="#pricing">Pricing</HoverLink>
          <HoverLink href="#login" accent>
            Log In
          </HoverLink>
        </motion.div>
      </nav>

      {/* Hero - intentionally off-center, breaking the grid */}
      <section className="sticky top-0 h-screen flex items-center px-8 md:px-16">
        <motion.div style={{ x: heroX, y: heroY }} className="max-w-2xl ml-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          >
            {/* Editorial typography - large, confident */}
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-light leading-[0.95] tracking-tight text-[#1a1a1a] mb-8">
              Watch
              <br />
              <span className="italic font-serif">real people</span>
              <br />
              use your product
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-[#4a4a4a] max-w-md leading-relaxed mb-12"
          >
            UserLens connects you with verified testers who provide honest,
            structured feedback on your website or app. No complexity, no
            bloat—just real insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <MagneticButton>Start Testing</MagneticButton>
          </motion.div>
        </motion.div>

        {/* Floating stat block - appears from right */}
        <motion.div
          style={{ x: statX }}
          className="hidden lg:block absolute right-[10vw] top-[30vh] bg-white p-8 shadow-sm"
        >
          <div className="text-5xl font-light mb-2">$4.99</div>
          <div className="text-sm text-[#6a6a6a] tracking-wide">per tester</div>
        </motion.div>
      </section>

      {/* Feature grid - asymmetric, unpredictable spacing */}
      <section className="relative min-h-screen px-8 md:px-16 py-32">
        <motion.div style={{ y: featureY }}>
          {/* Feature 1 - left aligned, top */}
          <FeatureBlock
            delay={0.2}
            position="left"
            title="Verified Testers"
            description="Every tester is email and phone verified. No bots, no spam, just real humans."
          />

          {/* Feature 2 - right aligned, middle */}
          <FeatureBlock
            delay={0.4}
            position="right"
            title="Escrow Payments"
            description="Pay upfront, funds held securely. Testers get paid only after you approve."
          />

          {/* Feature 3 - left aligned, offset */}
          <FeatureBlock
            delay={0.6}
            position="left-offset"
            title="Structured Feedback"
            description="Define tasks and questions. Get answers that actually matter."
          />
        </motion.div>
      </section>

      {/* CTA - rotated slightly, feels printed */}
      <section className="relative h-screen flex items-center justify-center px-8">
        <motion.div
          style={{ rotate: ctaRotate }}
          className="text-center max-w-xl"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-light mb-12 leading-tight"
          >
            Ready to see
            <br />
            <span className="italic font-serif">through their eyes?</span>
          </motion.h2>

          <MagneticButton large>Get Started</MagneticButton>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 text-sm text-[#6a6a6a]"
          >
            No credit card required
          </motion.p>
        </motion.div>
      </section>

      {/* Footer - minimal, left aligned */}
      <footer className="relative px-8 md:px-16 py-16 border-t border-[#e0e0e0]">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="text-sm text-[#6a6a6a]">
            <div className="font-light text-2xl mb-4">UserLens</div>
            <div>© 2026 All rights reserved</div>
          </div>
          <div className="flex gap-12 text-sm">
            <a href="#" className="hover:text-[#1a1a1a] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#1a1a1a] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[#1a1a1a] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Magnetic button - pulls toward cursor
function MagneticButton({
  children,
  large,
}: {
  children: React.ReactNode;
  large?: boolean;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Magnetic pull distance
    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    );

    if (distance < 100) {
      setOffset({
        x: (e.clientX - centerX) * 0.3,
        y: (e.clientY - centerY) * 0.3,
      });
    }
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={`
        relative overflow-hidden
        ${large ? 'px-12 py-5 text-lg' : 'px-8 py-4 text-base'}
        bg-[#1a1a1a] text-white
        transition-colors duration-300
        hover:bg-[#2a2a2a]
        group
      `}
    >
      <span className="relative z-10">{children}</span>
      {/* Subtle gradient on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
    </motion.button>
  );
}

// Text hover - subtle lift
function HoverLink({
  href,
  children,
  accent,
}: {
  href: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <motion.a
      href={href}
      className={`relative ${
        accent ? 'text-[#1a1a1a] font-medium' : 'text-[#6a6a6a]'
      }`}
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
      {accent && (
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-px bg-[#1a1a1a]"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.a>
  );
}

// Feature blocks - staggered reveals
function FeatureBlock({
  title,
  description,
  position,
  delay,
}: {
  title: string;
  description: string;
  position: 'left' | 'right' | 'left-offset';
  delay: number;
}) {
  const positionStyles = {
    left: 'ml-0 mb-32',
    right: 'ml-auto mr-[10vw] mb-32 max-w-md',
    'left-offset': 'ml-[15vw] mb-32',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: position === 'right' ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        delay,
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      }}
      className={`max-w-lg ${positionStyles[position]}`}
    >
      <div className="text-sm text-[#999] mb-3 tracking-widest">
        {String(Math.floor(delay * 10)).padStart(2, '0')}
      </div>
      <h3 className="text-4xl font-light mb-4 leading-tight">{title}</h3>
      <p className="text-[#4a4a4a] leading-relaxed">{description}</p>
    </motion.div>
  );
}
