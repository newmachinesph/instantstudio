'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from '@/components/features/HeroSection';
import CampaignResults from '@/components/features/CampaignResults';
import ProcessSection from '@/components/features/ProcessSection';
import VideoShowcase from '@/components/features/VideoShowcase';
import PhilosophySection from '@/components/features/PhilosophySection';
import Link from 'next/link';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-primary)' }}>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-teal)] to-[var(--accent-orange)] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Section 1: Campaign Hero */}
      <HeroSection />

      {/* 3D eCard Video Showcase */}
      <VideoShowcase />

      {/* Section 2: Campaign Results */}
      <CampaignResults />

      {/* Section 3: How AI Brings This to Life — 5-Step Process */}
      <ProcessSection />

      {/* Section 4: Responsible AI */}
      <PhilosophySection />

      {/* Section 5: Final CTA */}
      <section className="cta-section" style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-darker)' }}>
        <div style={{ maxWidth: 'var(--container-max)', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(1rem, 4vw, 2rem)', paddingRight: 'clamp(1rem, 4vw, 2rem)', position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '64rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Ready to Create Your Own{' '}
              <span style={{ color: 'var(--accent-orange)' }}>AI-Powered Campaign?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', color: 'var(--text-secondary)', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: '3rem', lineHeight: 1.6 }}
            >
              From celebrity collaborations to personalized agent experiences,
              Instant Studio brings AI innovation to life for global brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}
            >
              <Link href="/contact" className="btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
                Start Your Campaign
              </Link>
              <Link href="/contact" className="btn-secondary" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
                Contact Us
              </Link>
            </motion.div>

          </div>
        </div>

        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'min(800px, 100vw)', height: 'min(800px, 100vw)', background: 'linear-gradient(to right, var(--primary-teal), var(--accent-orange))', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.06, pointerEvents: 'none' }} />
      </section>

      <style>{`
        .cta-section { padding: 8rem 0; }
        @media (max-width: 1024px) {
          .cta-section { padding: 5rem 0; }
        }
        @media (max-width: 640px) {
          .cta-section { padding: 3rem 0; }
        }
      `}</style>
    </main>
  );
}
