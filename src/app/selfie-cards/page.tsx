'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Snowflake, PartyPopper, Sparkles } from 'lucide-react';

const cardTypes = [
    { title: 'V-Day Cards', icon: <Heart style={{ width: '1.25rem', height: '1.25rem' }} />, image: 'https://placehold.co/400x280/1a1a2e/ff6b8a?text=V-Day+Cards' },
    { title: 'Holiday Cards', icon: <Snowflake style={{ width: '1.25rem', height: '1.25rem' }} />, image: 'https://placehold.co/400x280/1a1a2e/87ceeb?text=Holiday+Cards' },
    { title: 'New Year Selfies', icon: <PartyPopper style={{ width: '1.25rem', height: '1.25rem' }} />, image: 'https://placehold.co/400x280/1a1a2e/ffd700?text=New+Year+Selfies' },
    { title: 'CNY Selfies', icon: <Sparkles style={{ width: '1.25rem', height: '1.25rem' }} />, image: 'https://placehold.co/400x280/1a1a2e/ff4444?text=CNY+Selfies' },
];

export default function SelfieCardsPage() {
    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-primary)' }}>

            {/* ─── Hero ─── */}
            <section style={{ paddingTop: '8rem', paddingBottom: '5rem', background: 'var(--bg-darker)', position: 'relative', overflow: 'hidden' }}>
                <div className="page-container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            display: 'inline-block',
                            padding: '0.375rem 1.25rem',
                            borderRadius: '9999px',
                            border: '1px solid var(--glass-border)',
                            background: 'var(--glass-bg)',
                            marginBottom: '1.5rem',
                        }}
                    >
                        <span style={{
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            background: 'linear-gradient(to right, var(--primary-teal), var(--accent-orange))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '0.05em',
                        }}>
                            SELFIE CARDS
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            maxWidth: '48rem',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        Elevate Your Brand with{' '}
                        <span style={{ color: 'var(--accent-orange)' }}>AI-Powered</span> Festive Magic
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        style={{
                            fontSize: '1rem',
                            color: 'var(--text-muted)',
                            fontWeight: 600,
                            marginBottom: '1.5rem',
                        }}
                    >
                        A Mid-Autumn Festival Case Study
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.8,
                            maxWidth: '42rem',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        At InstantStudio, we marked the 2025 Mid-Autumn Festival by unleashing a wave of creativity with our AI-driven greeting cards, styled in classic Chinese retro cartoon aesthetics.
                    </motion.p>
                </div>

                <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'min(700px, 120vw)', height: 'min(700px, 120vw)',
                    background: 'linear-gradient(to right, var(--primary-teal), var(--accent-orange))',
                    borderRadius: '50%', filter: 'blur(160px)', opacity: 0.06, pointerEvents: 'none',
                }} />
            </section>

            {/* ─── Branding Opportunity ─── */}
            <section style={{ padding: '5rem 0' }}>
                <div className="page-container">
                    <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}
                        >
                            Global teams and organizations are harnessing our tech to craft bespoke, shareable cards featuring cartoonized selfies&mdash;turning a traditional holiday into a viral, personalized branding opportunity that fosters deeper connections with clients and colleagues.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}
                        >
                            Imagine transforming your company&apos;s visuals into captivating, on-brand masterpieces across 2D, 3D, and animated formats.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ─── Unlock CTA ─── */}
            <section style={{ padding: '4rem 0', background: 'var(--bg-darker)' }}>
                <div className="page-container">
                    <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                                marginBottom: '1.25rem',
                            }}
                        >
                            Unlock the Future of Your Brand&apos;s Creativity
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}
                        >
                            Use AI to streamline your creative workflows, boost engagement, and stand out in competitive markets. Reach out today for a complimentary consultation tailored to your business needs.
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                Try the Mid-Autumn Festival AI Card now <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Creative AI Selfies ─── */}
            <section style={{ padding: '5rem 0' }}>
                <div className="page-container">
                    <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                                textAlign: 'center',
                                marginBottom: '1.25rem',
                            }}
                        >
                            Creative AI Selfies
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: '1.125rem',
                                fontWeight: 600,
                                color: 'var(--accent-orange)',
                                textAlign: 'center',
                                marginBottom: '2rem',
                            }}
                        >
                            Instantly create awareness with AI selfie cards.
                        </motion.p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'center' }}>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}
                            >
                                Run impactful and effective sustainability campaigns using our AI image generation technology. Whatever your advocacy is, your awareness campaigns communicate better with powerful AI-generated visuals.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 }}
                                viewport={{ once: true }}
                                style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}
                            >
                                Our custom endpoints allow companies to harness the power of generative AI even with minimal technical expertise.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}
                            >
                                Learn more about the #picturetheproblem campaign.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Card Types Grid ─── */}
            <section style={{ padding: '4rem 0', background: 'var(--bg-darker)' }}>
                <div className="page-container">
                    <div className="sc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', maxWidth: '56rem', marginLeft: 'auto', marginRight: 'auto' }}>
                        {cardTypes.map((card, i) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                viewport={{ once: true }}
                                style={{
                                    padding: '2rem',
                                    borderRadius: '1.5rem',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--glass-border)',
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1rem',
                                }}
                            >
                                <div style={{
                                    width: '3.5rem', height: '3.5rem', borderRadius: '1rem',
                                    background: 'linear-gradient(135deg, var(--primary-teal), var(--accent-orange))',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                                }}>
                                    {card.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.125rem',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                }}>
                                    {card.title}
                                </h3>
                                <div style={{
                                    width: '100%', height: '10rem', borderRadius: '1rem',
                                    overflow: 'hidden', position: 'relative',
                                }}>
                                    <Image src={card.image} alt={card.title} fill style={{ objectFit: 'cover' }} unoptimized />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Latest Selfie Generators ─── */}
            <section style={{ padding: '5rem 0' }}>
                <div className="page-container">
                    <div style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                                fontWeight: 700,
                                letterSpacing: '-0.02em',
                                marginBottom: '1.25rem',
                            }}
                        >
                            Our Latest Selfie Generators
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}
                        >
                            We&apos;re kickstarting the year 2025 with a bang! See our latest AI Selfie generators and discover the various ways we can help you engage with your audience.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.05 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}
                        >
                            Learn more about our Custom Endpoints
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                Get Started <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 1024px) {
                    .sc-grid { grid-template-columns: 1fr 1fr !important; }
                }
                @media (max-width: 640px) {
                    .sc-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </main>
    );
}
