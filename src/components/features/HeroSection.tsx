'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -80]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

    return (
        <section
            ref={containerRef}
            id="overview"
            className="hero-section"
            style={{
                minHeight: '100dvh',
                width: '100%',
                overflow: 'hidden',
                background: 'var(--bg-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '5rem',
                position: 'relative',
            }}
        >
            <motion.div
                style={{
                    opacity,
                    scale,
                    position: 'relative',
                    zIndex: 10,
                    width: '100%',
                    maxWidth: '1200px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingLeft: '1.5rem',
                    paddingRight: '1.5rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem',
                }}
            >
                {/* Partnership Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '9999px',
                        border: '1px solid var(--glass-border)',
                        background: 'var(--glass-bg)',
                        backdropFilter: 'blur(20px)',
                    }}>
                        <span style={{
                            fontSize: '0.8125rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--primary-teal)',
                        }}>
                            CASE STUDY
                        </span>
                        <span style={{ width: '1px', height: '1rem', background: 'var(--glass-border)' }} />
                        <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                            HAVAS Media Network × Instant Studio
                        </span>
                    </div>
                </motion.div>

                {/* Headline */}
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <motion.div style={{ y: y1, color: 'var(--text-primary)' }}>
                        Havas × Sun Life
                    </motion.div>
                    <motion.div style={{
                        background: 'linear-gradient(to right, var(--primary-teal), var(--primary-teal-light))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        New Year
                    </motion.div>
                    <motion.div style={{ y: y2, color: 'var(--accent-orange)' }}>
                        Campaign
                    </motion.div>
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.375rem)',
                        color: 'var(--text-secondary)',
                        maxWidth: '48rem',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        fontWeight: 300,
                        lineHeight: 1.7,
                    }}
                >
                    We built an AI-powered platform enabling{' '}
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>27,547 Sun Life agents</span>{' '}
                    across Southeast Asia to instantly create personalized New Year greeting videos
                    with their regional celebrity ambassadors.
                </motion.p>

                {/* Campaign Meta Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="hero-meta"
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}
                >
                    {[
                        { label: 'Live', value: 'Dec 2025 — Jan 2026' },
                        { label: 'Built in', value: '< 2 Months' },
                        { label: 'Markets', value: '4 Countries' },
                    ].map((item, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.75rem',
                            background: 'var(--bg-darker)',
                            border: '1px solid var(--glass-border)',
                        }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                                {item.label}
                            </span>
                            <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                {item.value}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Logos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '0.5rem' }}
                >
                    <div style={{
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.75rem',
                        border: '1px solid var(--glass-border)',
                        background: 'var(--glass-bg)',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: 'var(--text-secondary)',
                        letterSpacing: '0.05em',
                    }}>
                        HAVAS MEDIA NETWORK
                    </div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '1.5rem', fontWeight: 300 }}>×</span>
                    <Image src="/instantstudio_logo.svg" alt="InstantStudio" width={120} height={40} style={{ opacity: 0.8 }} />
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <div style={{ position: 'absolute', bottom: '2.5rem', left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ color: 'var(--text-muted)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 13L12 18L17 13M7 6L12 11L17 6" />
                    </svg>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 640px) {
                    .hero-section { min-height: 700px !important; padding-top: 4rem !important; padding-bottom: 2rem; }
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
